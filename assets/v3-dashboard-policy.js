(() => {
  'use strict';

  const PORTFOLIO_PATH = 'businesses/PORTFOLIO-V3.md';
  const MISSING_VALUES = new Set([
    '', 'Pending', 'Unknown', 'Not applicable', 'Needs more research', 'Conflict'
  ]);
  const PROOF_LEVELS = ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
  const COLLATOR = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

  document.addEventListener('DOMContentLoaded', initialisePolicyLayer);

  async function initialisePolicyLayer() {
    try {
      const response = await fetch(`${PORTFOLIO_PATH}?policy=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const markdown = await response.text();
      const rows = findMarkdownTable(markdown, '## V3 master portfolio').rows.map(normaliseRow);

      await waitForDashboard();
      renderLayer1PolicyGrid(rows);
      correctGoldenMetric(rows);
      installProofFunnelPolicy(rows);
    } catch (error) {
      console.error('DRF V3 policy layer could not initialise:', error);
      const host = document.getElementById('layer1-grid');
      if (host && !host.querySelector('.v3-table')) {
        host.innerHTML = `<div class="v3-error">Layer 1 policy controls unavailable: ${escapeHtml(error.message)}</div>`;
      }
    }
  }

  async function waitForDashboard() {
    const started = Date.now();
    while (Date.now() - started < 12000) {
      if (
        document.querySelector('#layer1-grid .v3-table') &&
        document.querySelector('#master-grid .v3-table') &&
        document.querySelector('#proof-funnel button')
      ) return;
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    throw new Error('Timed out waiting for the core V3 dashboard');
  }

  function findMarkdownTable(markdown, exactHeading) {
    const lines = markdown.replace(/\r/g, '').split('\n');
    const headingIndex = lines.findIndex(line => line.trim() === exactHeading);
    if (headingIndex < 0) throw new Error(`Missing heading “${exactHeading}”`);

    let headerIndex = -1;
    for (let index = headingIndex + 1; index < lines.length - 1; index += 1) {
      if (lines[index].trim().startsWith('|') && /^\s*\|?\s*:?-{3,}/.test(lines[index + 1])) {
        headerIndex = index;
        break;
      }
      if (/^#{1,3}\s/.test(lines[index]) && index > headingIndex + 1) break;
    }
    if (headerIndex < 0) throw new Error(`No Markdown table follows “${exactHeading}”`);

    const headers = splitMarkdownRow(lines[headerIndex]).map(cleanMarkdown);
    const rows = [];
    for (let index = headerIndex + 2; index < lines.length; index += 1) {
      const line = lines[index].trim();
      if (!line.startsWith('|')) break;
      const cells = splitMarkdownRow(line).map(cleanMarkdown);
      if (cells.length !== headers.length) throw new Error(`Portfolio row ${index + 1} has an invalid cell count`);
      rows.push(Object.fromEntries(headers.map((header, cellIndex) => [header, cells[cellIndex]])));
    }
    return { headers, rows };
  }

  function splitMarkdownRow(line) {
    let text = line.trim();
    if (text.startsWith('|')) text = text.slice(1);
    if (text.endsWith('|')) text = text.slice(0, -1);

    const cells = [];
    let current = '';
    let escaped = false;
    let inCode = false;
    for (const character of text) {
      if (escaped) {
        current += character;
        escaped = false;
      } else if (character === '\\') {
        escaped = true;
      } else if (character === '`') {
        inCode = !inCode;
        current += character;
      } else if (character === '|' && !inCode) {
        cells.push(current.trim());
        current = '';
      } else {
        current += character;
      }
    }
    cells.push(current.trim());
    return cells;
  }

  function cleanMarkdown(value) {
    return String(value ?? '')
      .trim()
      .replace(/<br\s*\/?\s*>/gi, ' ')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .replace(/\*\*/g, '')
      .replace(/__/g, '')
      .replace(/`/g, '')
      .replace(/\\\|/g, '|')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function normaliseRow(raw) {
    const row = {
      rank: parseNumber(raw.Rank),
      id: raw['Opportunity ID'],
      businessOpportunity: raw['Business Opportunity'],
      painOutcome: raw['Pain / Outcome'],
      opportunityScore: parseNumberOrMissing(raw['Opportunity Score']),
      mrr: parseNumberOrMissing(raw.MRR),
      aiAutonomy: parseNumberOrMissing(raw['AI Autonomy']),
      evidenceConfidence: parseNumberOrMissing(raw['Evidence Confidence']),
      researchCompleteness: parseNumberOrMissing(raw['Research Completeness']),
      externalMarketProof: raw['External Market Proof'],
      empConfidence: parseNumberOrMissing(raw['EMP Confidence']),
      currentRead: raw['Current Read'],
      nextProof: raw['Next Proof']
    };
    row.empCode = proofCode(row.externalMarketProof, /^EMP[0-4]/i);
    row.layer1Decision = deriveLayer1Decision(row);
    return row;
  }

  function deriveLayer1Decision(row) {
    const score = numericValue(row.opportunityScore);
    const evidenceReady = numericValue(row.evidenceConfidence) >= 60 && numericValue(row.researchCompleteness) >= 70;
    const strongLeverage = numericValue(row.mrr) >= 9 || numericValue(row.aiAutonomy) >= 85;
    const externalProofReady = enumNumber(row.empCode, 'EMP') >= 2;

    if (score >= 85 && evidenceReady && strongLeverage && externalProofReady) return 'GOLDEN';
    if (score >= 75 && evidenceReady && externalProofReady) return 'ADVANCE';

    // The register does not yet carry a machine-readable innovation-rationale/fatal-gate field.
    // Candidate labels prevent the dashboard from inventing a final decision when EMP or leverage is incomplete.
    if (score >= 85 && evidenceReady && strongLeverage) return 'GOLDEN CANDIDATE';
    if (score >= 75 && evidenceReady) return 'ADVANCE CANDIDATE';
    if (score < 65 && evidenceReady) return 'REJECT';
    return 'HOLD';
  }

  function correctGoldenMetric(rows) {
    const value = document.getElementById('metric-golden');
    if (value) value.textContent = String(rows.filter(row => row.layer1Decision === 'GOLDEN').length);
    const description = value?.closest('.v3-metric')?.querySelector('span');
    if (description) description.textContent = 'All Layer 1 gates passed';
  }

  function renderLayer1PolicyGrid(rows) {
    const host = document.getElementById('layer1-grid');
    if (!host) return;

    const search = document.getElementById('layer1-search');
    const clear = document.getElementById('layer1-clear');
    const reset = document.getElementById('layer1-reset');
    const count = document.getElementById('layer1-count');
    const storageKey = 'drf-v3-widths-layer1-policy';
    const columns = [
      column('rank', 'Rank', 56, 'number', row => escapeHtml(row.rank)),
      column('businessOpportunity', 'Business Opportunity', 245, 'text', row => `<button type="button" data-policy-expand="${escapeAttr(row.id)}">${escapeHtml(row.businessOpportunity)}</button>`, 'opportunity'),
      column('painOutcome', 'Pain / Outcome', 300, 'text', row => leadHtml(row.painOutcome)),
      column('opportunityScore', 'Opportunity Score', 112, 'number', row => scoreHtml(row.opportunityScore, 100)),
      column('mrr', 'MRR', 72, 'number', row => scoreHtml(row.mrr, 10)),
      column('aiAutonomy', 'AI Autonomy', 100, 'number', row => scoreHtml(row.aiAutonomy, 100)),
      column('evidenceConfidence', 'Evidence', 92, 'number', row => percentHtml(row.evidenceConfidence)),
      column('researchCompleteness', 'Research', 92, 'number', row => percentHtml(row.researchCompleteness)),
      column('externalMarketProof', 'EMP', 150, 'enum', row => chipHtml(row.externalMarketProof, 'blue')),
      column('empConfidence', 'EMP Confidence', 105, 'number', row => percentHtml(row.empConfidence)),
      column('layer1Decision', 'Layer 1 Decision', 150, 'enum', row => decisionHtml(row.layer1Decision)),
      column('currentRead', 'Founder Read', 330, 'text', row => leadHtml(row.currentRead))
    ];

    const state = {
      search: '',
      filters: {},
      sortKey: 'opportunityScore',
      sortDirection: 'desc',
      expanded: new Set(),
      widths: loadWidths(storageKey, columns)
    };

    function filteredRows() {
      let visible = rows.filter(row => {
        if (state.search) {
          const haystack = columns.map(col => String(row[col.key] ?? '')).join(' ').toLowerCase();
          if (!haystack.includes(state.search.toLowerCase())) return false;
        }
        return columns.every(col => matchesFilter(row[col.key], state.filters[col.key], col.type));
      });
      const sortColumn = columns.find(col => col.key === state.sortKey) || columns[0];
      visible = [...visible].sort((a, b) => compareValues(a[sortColumn.key], b[sortColumn.key], sortColumn.type, state.sortDirection));
      return visible;
    }

    function render() {
      const visible = filteredRows();
      const totalWidth = columns.reduce((sum, col) => sum + state.widths[col.key], 0);
      const cols = columns.map(col => `<col data-policy-col="${escapeAttr(col.key)}" style="width:${state.widths[col.key]}px">`).join('');
      const headers = columns.map(col => {
        const mark = state.sortKey === col.key ? (state.sortDirection === 'asc' ? '▲' : '▼') : '↕';
        return `<th scope="col"><button type="button" class="v3-sort" data-policy-sort="${escapeAttr(col.key)}"><span>${escapeHtml(col.label)}</span><span class="v3-sort-mark">${mark}</span></button><span class="v3-resizer" data-policy-resize="${escapeAttr(col.key)}" aria-hidden="true"></span></th>`;
      }).join('');
      const filters = columns.map(col => `<th><input class="v3-filter" data-policy-filter="${escapeAttr(col.key)}" value="${escapeAttr(state.filters[col.key] || '')}" placeholder="${col.type === 'number' ? '>=80' : 'Filter'}" aria-label="Filter ${escapeAttr(col.label)}"></th>`).join('');
      const body = visible.length ? visible.map(row => {
        const cells = columns.map(col => `<td class="${col.type === 'number' ? 'num' : ''} ${col.className}">${col.renderer(row)}</td>`).join('');
        const detail = state.expanded.has(row.id) ? `<tr class="v3-detail-row"><td colspan="${columns.length}"><div class="v3-detail">${detailCard('Layer 1 decision', decisionExplanation(row))}${detailCard('External Market Proof', `${row.externalMarketProof} · ${valueText(row.empConfidence)}% confidence`)}${detailCard('Current read', row.currentRead)}${detailCard('Next evidence / proof', row.nextProof)}</div></td></tr>` : '';
        return `<tr>${cells}</tr>${detail}`;
      }).join('') : `<tr><td colspan="${columns.length}" class="v3-empty">No rows match the current search and filters.</td></tr>`;

      host.innerHTML = `<div class="v3-table-shell"><table class="v3-table" style="width:${totalWidth}px"><colgroup>${cols}</colgroup><thead><tr>${headers}</tr><tr class="v3-filter-row">${filters}</tr></thead><tbody>${body}</tbody></table></div>`;
      if (count) count.textContent = `${visible.length} of ${rows.length} rows`;
    }

    host.addEventListener('click', event => {
      const sortButton = event.target.closest('[data-policy-sort]');
      if (sortButton) {
        const key = sortButton.dataset.policySort;
        if (state.sortKey === key) state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
        else {
          state.sortKey = key;
          state.sortDirection = columns.find(col => col.key === key)?.type === 'number' ? 'desc' : 'asc';
        }
        render();
        return;
      }
      const expandButton = event.target.closest('[data-policy-expand]');
      if (expandButton) {
        const id = expandButton.dataset.policyExpand;
        if (state.expanded.has(id)) state.expanded.delete(id);
        else state.expanded.add(id);
        render();
      }
    });

    host.addEventListener('input', event => {
      const input = event.target.closest('[data-policy-filter]');
      if (!input) return;
      const key = input.dataset.policyFilter;
      const caret = input.selectionStart;
      state.filters[key] = input.value;
      render();
      requestAnimationFrame(() => {
        const replacement = host.querySelector(`[data-policy-filter="${key}"]`);
        if (replacement) {
          replacement.focus();
          try { replacement.setSelectionRange(caret, caret); } catch (_) { /* no-op */ }
        }
      });
    });

    host.addEventListener('pointerdown', event => {
      const handle = event.target.closest('[data-policy-resize]');
      if (!handle) return;
      event.preventDefault();
      const key = handle.dataset.policyResize;
      const startX = event.clientX;
      const startWidth = state.widths[key];
      const move = moveEvent => {
        state.widths[key] = Math.max(48, Math.round(startWidth + moveEvent.clientX - startX));
        const col = host.querySelector(`col[data-policy-col="${key}"]`);
        if (col) col.style.width = `${state.widths[key]}px`;
        const table = host.querySelector('.v3-table');
        if (table) table.style.width = `${columns.reduce((sum, item) => sum + state.widths[item.key], 0)}px`;
      };
      const up = () => {
        document.removeEventListener('pointermove', move);
        document.removeEventListener('pointerup', up);
        saveWidths(storageKey, state.widths);
      };
      document.addEventListener('pointermove', move);
      document.addEventListener('pointerup', up, { once: true });
    });

    search?.addEventListener('input', () => {
      state.search = search.value.trim();
      render();
    });
    clear?.addEventListener('click', () => {
      state.search = '';
      state.filters = {};
      if (search) search.value = '';
      render();
    });
    reset?.addEventListener('click', () => {
      state.widths = Object.fromEntries(columns.map(col => [col.key, col.width]));
      try { localStorage.removeItem(storageKey); } catch (_) { /* no-op */ }
      render();
    });

    render();
  }

  function installProofFunnelPolicy(rows) {
    const host = document.getElementById('proof-funnel');
    const master = document.getElementById('master-grid');
    if (!host || !master) return;

    let missingMode = false;
    let scheduled = false;

    const countFor = level => {
      if (level === 'ALL') return rows.length;
      if (level === 'MISSING') return rows.filter(row => !proofCode(row['DRF Proof'], /^P[0-6]/i)).length;
      return rows.filter(row => proofCode(row['DRF Proof'], /^P[0-6]/i) === level).length;
    };

    host.innerHTML = ['ALL', 'MISSING', ...PROOF_LEVELS].map(level => {
      const label = level === 'ALL' ? 'All' : level === 'MISSING' ? 'Pending / missing' : level;
      return `<button type="button" data-policy-proof="${level}" class="${level === 'ALL' ? 'active' : ''}"><b>${countFor(level)}</b><span>${label}</span></button>`;
    }).join('');

    host.addEventListener('click', event => {
      const button = event.target.closest('[data-policy-proof]');
      if (!button) return;
      const level = button.dataset.policyProof;
      host.querySelectorAll('[data-policy-proof]').forEach(item => item.classList.toggle('active', item === button));

      if (level === 'MISSING') {
        setMasterProofFilter('');
        missingMode = true;
        scheduleMissingFilter();
      } else {
        missingMode = false;
        revealAllMasterRows();
        setMasterProofFilter(level === 'ALL' ? '' : level);
      }
    });

    master.addEventListener('input', event => {
      if (event.isTrusted && event.target.matches('[data-filter="drfProof"]')) {
        missingMode = false;
        setFunnelActive('ALL');
        revealAllMasterRows();
      }
    });

    document.getElementById('master-clear')?.addEventListener('click', () => {
      missingMode = false;
      setFunnelActive('ALL');
      revealAllMasterRows();
    });

    new MutationObserver(() => {
      if (missingMode) scheduleMissingFilter();
    }).observe(master, { childList: true, subtree: true });

    function setMasterProofFilter(value) {
      const input = master.querySelector('[data-filter="drfProof"]');
      if (!input) return;
      input.value = value;
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    function scheduleMissingFilter() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        applyMissingFilter();
      });
    }

    function applyMissingFilter() {
      const table = master.querySelector('.v3-table');
      if (!table) return;
      const headers = [...table.querySelectorAll('thead tr:first-child th')];
      const proofIndex = headers.findIndex(header => header.textContent.trim().startsWith('DRF Proof'));
      if (proofIndex < 0) return;

      let sourceHidden = false;
      table.querySelectorAll('tbody > tr').forEach(row => {
        if (row.classList.contains('v3-detail-row')) {
          row.hidden = sourceHidden;
          return;
        }
        const text = row.children[proofIndex]?.textContent.trim() || '';
        const hasProof = /^P[0-6]\b/i.test(text);
        row.hidden = hasProof;
        sourceHidden = row.hidden;
      });
    }

    function revealAllMasterRows() {
      master.querySelectorAll('tbody > tr[hidden]').forEach(row => { row.hidden = false; });
    }

    function setFunnelActive(level) {
      host.querySelectorAll('[data-policy-proof]').forEach(item => item.classList.toggle('active', item.dataset.policyProof === level));
    }
  }

  function decisionExplanation(row) {
    const base = row.layer1Decision;
    if (base === 'GOLDEN') return 'GOLDEN: score, evidence/research, strong MRR or AI leverage, and EMP2+ gates pass.';
    if (base === 'GOLDEN CANDIDATE') return 'GOLDEN CANDIDATE: structural and leverage gates pass; EMP2+ or a documented innovation rationale is still required.';
    if (base === 'ADVANCE') return 'ADVANCE: structural, evidence/research and EMP2+ gates pass; it is not yet a Golden Opportunity.';
    if (base === 'ADVANCE CANDIDATE') return 'ADVANCE CANDIDATE: structural/evidence gates pass; external proof or a documented innovation rationale remains incomplete.';
    if (base === 'REJECT') return 'REJECT: score is below the default threshold after adequate research.';
    return 'HOLD: one or more evidence, research, score, proof or leverage gates remain incomplete.';
  }

  function column(key, label, width, type, renderer, className = '') {
    return { key, label, width, type, renderer, className };
  }

  function compareValues(a, b, type, direction) {
    const missingA = isMissing(a);
    const missingB = isMissing(b);
    if (missingA && missingB) return 0;
    if (missingA) return 1;
    if (missingB) return -1;
    let result;
    if (type === 'number') result = numericValue(a) - numericValue(b);
    else result = COLLATOR.compare(String(a), String(b));
    return direction === 'desc' ? -result : result;
  }

  function matchesFilter(value, query, type) {
    if (!query || !query.trim()) return true;
    const trimmed = query.trim();
    if (type === 'number') {
      const number = parseNumber(value);
      if (!Number.isFinite(number)) return false;
      const cleaned = trimmed.replace(/%|\/100|\/10/gi, '').trim();
      const range = cleaned.match(/^(-?\d+(?:\.\d+)?)\s*-\s*(-?\d+(?:\.\d+)?)$/);
      if (range) return number >= Number(range[1]) && number <= Number(range[2]);
      const comparison = cleaned.match(/^(>=|<=|>|<|=)?\s*(-?\d+(?:\.\d+)?)$/);
      if (!comparison) return String(number).includes(cleaned);
      const operator = comparison[1] || '=';
      const target = Number(comparison[2]);
      if (operator === '>=') return number >= target;
      if (operator === '<=') return number <= target;
      if (operator === '>') return number > target;
      if (operator === '<') return number < target;
      return number === target;
    }
    const haystack = String(value ?? '').toLowerCase();
    const needle = trimmed.toLowerCase();
    if (needle.startsWith('!')) return !haystack.includes(needle.slice(1));
    return haystack.includes(needle);
  }

  function parseNumberOrMissing(value) {
    if (isMissing(value)) return value || 'Pending';
    const number = parseNumber(value);
    return Number.isFinite(number) ? number : 'Needs more research';
  }

  function parseNumber(value) {
    if (typeof value === 'number') return value;
    const match = String(value ?? '').replace(/,/g, '').match(/-?\d+(?:\.\d+)?/);
    return match ? Number(match[0]) : NaN;
  }

  function numericValue(value) {
    const number = parseNumber(value);
    return Number.isFinite(number) ? number : -Infinity;
  }

  function isMissing(value) {
    if (value === null || value === undefined) return true;
    if (typeof value === 'number') return false;
    return MISSING_VALUES.has(String(value).trim());
  }

  function proofCode(value, pattern) {
    const match = String(value ?? '').trim().match(pattern);
    return match ? match[0].toUpperCase() : '';
  }

  function enumNumber(code, prefix) {
    return code.startsWith(prefix) ? Number(code.slice(prefix.length)) : -1;
  }

  function loadWidths(key, columns) {
    const defaults = Object.fromEntries(columns.map(col => [col.key, col.width]));
    try {
      const stored = JSON.parse(localStorage.getItem(key) || '{}');
      Object.entries(stored).forEach(([name, value]) => {
        if (Object.hasOwn(defaults, name) && Number.isFinite(value) && value >= 48) defaults[name] = value;
      });
    } catch (_) { /* use defaults */ }
    return defaults;
  }

  function saveWidths(key, widths) {
    try { localStorage.setItem(key, JSON.stringify(widths)); } catch (_) { /* storage unavailable */ }
  }

  function scoreHtml(value, maximum) {
    if (isMissing(value) || !Number.isFinite(parseNumber(value))) return pendingHtml(value);
    const number = parseNumber(value);
    const ratio = number / maximum;
    const className = ratio >= 0.85 ? 'good' : ratio >= 0.65 ? 'mid' : 'low';
    return `<span class="v3-score ${className}">${escapeHtml(number)}/${maximum}</span>`;
  }

  function percentHtml(value) {
    if (isMissing(value) || !Number.isFinite(parseNumber(value))) return pendingHtml(value);
    const number = parseNumber(value);
    return `<span class="v3-score ${number >= 80 ? 'good' : number >= 60 ? 'mid' : 'low'}">${escapeHtml(number)}%</span>`;
  }

  function decisionHtml(value) {
    const text = String(value);
    const className = text.includes('GOLDEN') ? 'gold' : text.includes('ADVANCE') ? 'green' : text === 'HOLD' ? 'amber' : 'red';
    return `<span class="v3-chip ${className}">${escapeHtml(text)}</span>`;
  }

  function chipHtml(value, className) {
    return isMissing(value) ? pendingHtml(value) : `<span class="v3-chip ${className}">${escapeHtml(value)}</span>`;
  }

  function leadHtml(value) {
    if (isMissing(value)) return pendingHtml(value);
    const words = String(value).trim().split(/\s+/);
    if (words.length <= 2) return `<span class="lead">${escapeHtml(value)}</span>`;
    return `<span class="lead">${escapeHtml(words.slice(0, 2).join(' '))}</span><span class="tail">${escapeHtml(words.slice(2).join(' '))}</span>`;
  }

  function detailCard(label, value) {
    return `<div class="v3-detail-card"><small>${escapeHtml(label)}</small><strong>${isMissing(value) ? pendingHtml(value) : escapeHtml(value)}</strong></div>`;
  }

  function pendingHtml(value) {
    const text = value && String(value).trim() ? String(value).trim() : 'Pending';
    return `<span class="v3-pending">${escapeHtml(text)}</span>`;
  }

  function valueText(value) {
    return isMissing(value) ? 'Pending' : String(value);
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function escapeAttr(value) {
    return escapeHtml(value);
  }
})();
