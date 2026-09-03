(() => {
  'use strict';

  const PORTFOLIO_PATH = 'businesses/PORTFOLIO-V3.md';
  const NICHES_PATH = 'businesses/NICHES.md';
  const LEVELS = ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6'];

  installStorageResetFallback();
  document.addEventListener('DOMContentLoaded', rewriteSkillSourceLinks);
  document.addEventListener('DOMContentLoaded', initialiseIntegrityChecks);

  function rewriteSkillSourceLinks() {
    const replacements = [
      {
        from: '/workflows/drf-opportunity-factory.md',
        to: '/skills/drf-opportunity-factory/SKILL.md',
        sourceLabel: 'Opportunity Factory Skill',
        heroLabel: 'Factory Skill ↗'
      },
      {
        from: '/workflows/drf-recurring-intelligence-loops.md',
        to: '/skills/drf-recurring-intelligence/SKILL.md',
        sourceLabel: 'Recurring intelligence Skill'
      },
      {
        from: '/knowledge/guidelines/business-opportunity-scoring-framework.md',
        to: '/skills/drf-opportunity-factory/references/business-opportunity-scoring.md'
      },
      {
        from: '/knowledge/templates/business-opportunity-research.md',
        to: '/skills/drf-opportunity-factory/references/business-case-output-contract.md'
      },
      {
        from: '/knowledge/architecture/drf-v3-portfolio-data-contract.md',
        to: '/skills/drf-dashboard-operations/references/v3-portfolio-data-contract.md'
      },
      {
        from: '/knowledge/templates/drf-opportunity-factory-intake-prompt.md',
        to: '/skills/drf-opportunity-factory/SKILL.md',
        sourceLabel: 'Opportunity intake Skill'
      }
    ];

    document.querySelectorAll('a[href*="github.com/tbhrc/drf-main/blob/main/"]').forEach(anchor => {
      const replacement = replacements.find(item => anchor.href.endsWith(item.from));
      if (!replacement) return;
      anchor.href = anchor.href.slice(0, -replacement.from.length) + replacement.to;

      if (replacement.heroLabel && anchor.closest('.v3-hero-actions')) {
        anchor.textContent = replacement.heroLabel;
        return;
      }
      if (replacement.sourceLabel && anchor.closest('.v3-links')) {
        const description = anchor.querySelector('span');
        const descriptionHtml = description ? description.outerHTML : '';
        anchor.innerHTML = `${replacement.sourceLabel}${descriptionHtml}`;
      }
    });
  }

  async function initialiseIntegrityChecks() {
    try {
      const [portfolioResponse, nicheResponse] = await Promise.all([
        fetch(`${PORTFOLIO_PATH}?integrity=${Date.now()}`, { cache: 'no-store' }),
        fetch(`${NICHES_PATH}?integrity=${Date.now()}`, { cache: 'no-store' })
      ]);
      if (!portfolioResponse.ok) throw new Error(`${PORTFOLIO_PATH}: ${portfolioResponse.status} ${portfolioResponse.statusText}`);
      if (!nicheResponse.ok) throw new Error(`${NICHES_PATH}: ${nicheResponse.status} ${nicheResponse.statusText}`);

      const portfolio = readTable(await portfolioResponse.text(), '## V3 master portfolio');
      const niches = readTable(await nicheResponse.text(), '## Ranked niche summary');

      validateNicheParents(portfolio.rows, niches.rows);
      await waitForPolicyFunnel();
      updateProofCounts(portfolio.rows.map(row => row['DRF Proof']));
      installMasterCountReconciliation(portfolio.rows.length);
    } catch (error) {
      console.error('DRF V3 integrity checks could not initialise:', error);
      showLayer2ContractFailure(error.message);
    }
  }

  function readTable(markdown, exactHeading) {
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

    const headers = splitRow(lines[headerIndex]).map(cleanCell);
    const rows = [];
    for (let index = headerIndex + 2; index < lines.length; index += 1) {
      const line = lines[index].trim();
      if (!line.startsWith('|')) break;
      const cells = splitRow(line).map(cleanCell);
      if (cells.length !== headers.length) throw new Error(`${exactHeading} row ${index + 1} has an invalid cell count`);
      rows.push(Object.fromEntries(headers.map((header, cellIndex) => [header, cells[cellIndex]])));
    }
    if (!rows.length) throw new Error(`Table under “${exactHeading}” contains no rows`);
    return { headers, rows };
  }

  function splitRow(line) {
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

  function cleanCell(value) {
    return String(value ?? '')
      .trim()
      .replace(/<br\s*\/?\s*>/gi, ' ')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1')
      .replace(/\*\*|__|`/g, '')
      .replace(/\\\|/g, '|')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function normaliseName(value) {
    return cleanCell(value)
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, ' ')
      .replace(/\bthe\b/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function validateNicheParents(portfolioRows, nicheRows) {
    const portfolioNames = new Set(portfolioRows.map(row => normaliseName(row['Business Opportunity'])));
    const unmatched = [...new Set(
      nicheRows
        .map(row => row['Parent opportunity'])
        .filter(parent => !portfolioNames.has(normaliseName(parent)))
    )];

    if (unmatched.length) {
      throw new Error(`Niche-parent join contract failed for: ${unmatched.join(', ')}`);
    }
  }

  async function waitForPolicyFunnel() {
    const started = Date.now();
    while (Date.now() - started < 12000) {
      if (document.querySelector('#proof-funnel [data-policy-proof]')) return;
      await new Promise(resolve => setTimeout(resolve, 50));
    }
    throw new Error('Timed out waiting for the policy proof funnel');
  }

  function proofCode(value) {
    const match = String(value ?? '').trim().match(/^P[0-6]\b/i);
    return match ? match[0].toUpperCase() : '';
  }

  function updateProofCounts(proofs) {
    const counts = Object.fromEntries(LEVELS.map(level => [level, 0]));
    let missing = 0;

    proofs.forEach(value => {
      const code = proofCode(value);
      if (code) counts[code] += 1;
      else missing += 1;
    });

    const values = { ALL: proofs.length, MISSING: missing, ...counts };
    document.querySelectorAll('#proof-funnel [data-policy-proof]').forEach(button => {
      const value = values[button.dataset.policyProof];
      const count = button.querySelector('b');
      if (count && Number.isInteger(value)) count.textContent = String(value);
    });
  }

  function installMasterCountReconciliation(totalRows) {
    const grid = document.getElementById('master-grid');
    const counter = document.getElementById('master-count');
    const funnel = document.getElementById('proof-funnel');
    if (!grid || !counter || !funnel) return;

    let scheduled = false;
    const reconcile = () => {
      const missingActive = Boolean(funnel.querySelector('[data-policy-proof="MISSING"].active'));
      if (!missingActive) return;

      const primaryRows = [...grid.querySelectorAll('tbody > tr:not(.v3-detail-row)')];
      const visibleRows = primaryRows.filter(row => !row.hidden).length;
      counter.textContent = `${visibleRows} of ${totalRows} rows`;
    };
    const schedule = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        reconcile();
      });
    };

    new MutationObserver(schedule).observe(grid, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['hidden']
    });
    funnel.addEventListener('click', schedule);
    grid.addEventListener('input', schedule);
    schedule();
  }

  function showLayer2ContractFailure(message) {
    const host = document.getElementById('layer2-grid');
    if (host) host.innerHTML = `<div class="v3-error">Business × Niche source contract failed: ${escapeHtml(message)}</div>`;
    const count = document.getElementById('layer2-count');
    if (count) count.textContent = 'Contract failure';
  }

  function installStorageResetFallback() {
    document.addEventListener('click', event => {
      const button = event.target.closest('#master-reset,#layer2-reset,#layer3-reset');
      if (!button || storageAvailable()) return;

      event.preventDefault();
      event.stopImmediatePropagation();
      window.location.reload();
    }, true);
  }

  function storageAvailable() {
    try {
      const key = '__drf_v3_storage_test__';
      window.localStorage.setItem(key, key);
      window.localStorage.removeItem(key);
      return true;
    } catch (_) {
      return false;
    }
  }

  function escapeHtml(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
})();
