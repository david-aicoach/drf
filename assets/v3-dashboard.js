(() => {
  'use strict';

  const REPO = 'tbhrc/drf';
  const BRANCH = 'main';
  const PATHS = Object.freeze({
    portfolio: 'businesses/PORTFOLIO-V3.md',
    niches: 'businesses/NICHES.md',
    version: 'VERSION',
    legacy: 'dashboard-v1-v2.html',
    discoveryRuns: 'research/recurring-intelligence/DISCOVERY-RUNS.md',
    refreshRuns: 'research/recurring-intelligence/REFRESH-RUNS.md'
  });

  const PORTFOLIO_HEADERS = Object.freeze([
    'Rank', 'Opportunity ID', 'Business Opportunity', 'Pain / Outcome',
    'Opportunity Score', 'MRR', 'AI Autonomy', 'Evidence Confidence',
    'Research Completeness', 'External Market Proof', 'EMP Confidence',
    'Best Niche', 'Niche Score', 'Niche Confidence', 'Recommended Offer',
    'Price / Commercial Model', 'GTM Summary', 'Delivery Architecture',
    'RBS', 'DRF Proof', 'Stage', 'Capital', 'Return Headline', 'Next Proof',
    'Current Read', 'Dossier Readiness', 'Blueprint Readiness',
    'Evidence Freshness', 'Canonical Dossier Path', 'Business Folder'
  ]);

  const NICHE_REQUIRED_HEADERS = Object.freeze([
    'Parent opportunity', 'Offer / product', 'Vertical', 'Sub-niche / ICP',
    'Geography', 'Core pain / trigger', 'Niche Score', 'Evidence Confidence',
    'Decision', 'Current read', 'Next evidence', 'Canonical detail'
  ]);

  const MISSING_VALUES = new Set([
    '', 'Pending', 'Unknown', 'Not applicable', 'Needs more research', 'Conflict'
  ]);

  const DEFINITIONS = Object.freeze([
    ['Opportunity Score', 'Layer 1 structural attractiveness of the business/service/outcome. It does not select the niche or authorise capital.'],
    ['MRR', 'Monthly Recurring Revenue quality: how naturally the business creates durable recurring or repeat revenue.'],
    ['AI Autonomy', 'How much build, marketing and delivery can operate reliably with low proportional human dependency.'],
    ['Evidence Confidence', 'How much to trust the current scoring inputs. It is separate from External Market Proof and DRF Proof.'],
    ['Research Completeness', 'Coverage of required investigation. Complete research can still conclude that a business is weak.'],
    ['EMP', 'External Market Proof: whether materially similar businesses already succeed in the real market. EMP0–EMP4.'],
    ['Niche Score', 'Layer 2 attractiveness of one specific outcome × vertical × sub-niche × geography × ICP × trigger.'],
    ['RBS', 'Revenue Blueprint Score: deeper underwriting of a selected Business × Niche after offer, price, GTM, delivery and economics are defined.'],
    ['DRF Proof', 'DRF-specific execution maturity from P0 Captured to P6 Scale Proven / Blueprint Certified.'],
    ['Stage', 'The founder-facing action gate: Reject, Research, Test, Pilot, Fund, Scale or Blueprint.'],
    ['GTM', 'Go-to-market: the specific route to identify, reach, convert, onboard and retain the target customer.'],
    ['Capital', 'The maximum currently authorised evidence-buying tranche, not a target that must be spent.'],
    ['Return', 'The current downside/base/upside cash view. Estimates and DRF actuals must remain visibly distinct.'],
    ['Business Blueprint', 'An optional evidence-backed operating package. It is not the definition of every DRF opportunity.']
  ]);

  const FIELD_MAP = Object.freeze({
    'Rank': 'rank',
    'Opportunity ID': 'opportunityId',
    'Business Opportunity': 'businessOpportunity',
    'Pain / Outcome': 'painOutcome',
    'Opportunity Score': 'opportunityScore',
    'MRR': 'mrr',
    'AI Autonomy': 'aiAutonomy',
    'Evidence Confidence': 'evidenceConfidence',
    'Research Completeness': 'researchCompleteness',
    'External Market Proof': 'externalMarketProof',
    'EMP Confidence': 'empConfidence',
    'Best Niche': 'bestNiche',
    'Niche Score': 'nicheScore',
    'Niche Confidence': 'nicheConfidence',
    'Recommended Offer': 'recommendedOffer',
    'Price / Commercial Model': 'priceModel',
    'GTM Summary': 'gtmSummary',
    'Delivery Architecture': 'deliveryArchitecture',
    'RBS': 'rbs',
    'DRF Proof': 'drfProof',
    'Stage': 'stage',
    'Capital': 'capital',
    'Return Headline': 'returnHeadline',
    'Next Proof': 'nextProof',
    'Current Read': 'currentRead',
    'Dossier Readiness': 'dossierReadiness',
    'Blueprint Readiness': 'blueprintReadiness',
    'Evidence Freshness': 'evidenceFreshness',
    'Canonical Dossier Path': 'dossierPath',
    'Business Folder': 'businessFolder'
  });

  const EMP_ORDER = ['EMP0', 'EMP1', 'EMP2', 'EMP3', 'EMP4'];
  const PROOF_ORDER = ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6'];
  const STAGE_ORDER = ['REJECT', 'RESEARCH', 'TEST', 'PILOT', 'FUND', 'SCALE', 'BLUEPRINT'];
  const COLLATOR = new Intl.Collator('en', { numeric: true, sensitivity: 'base' });

  const sourceHealth = new Map();
  let masterGridApi = null;

  document.addEventListener('DOMContentLoaded', initialise);

  async function initialise() {
    renderDefinitions();
    configureLegacyFrame(document.getElementById('legacy-v2-frame'), 'v2');
    configureLegacyFrame(document.getElementById('legacy-v1-frame'), 'v1');

    const results = await Promise.allSettled([
      fetchText(PATHS.portfolio),
      fetchText(PATHS.niches),
      fetchText(PATHS.version),
      fetchText(PATHS.legacy),
      fetchText(PATHS.discoveryRuns),
      fetchText(PATHS.refreshRuns)
    ]);

    const [portfolioResult, nichesResult, versionResult] = results;
    renderSourceHealth();

    if (portfolioResult.status !== 'fulfilled') {
      showFatal('master-grid', `V3 portfolio unavailable: ${portfolioResult.reason.message}`);
      showFatal('layer1-grid', 'Workflow Layer 1 cannot render without the V3 portfolio.');
      showFatal('layer3-grid', 'Workflow Layer 3 cannot render without the V3 portfolio.');
      return;
    }

    let portfolioRows;
    try {
      const table = findMarkdownTable(portfolioResult.value, '## V3 master portfolio');
      validateHeaders(table.headers, PORTFOLIO_HEADERS, 'V3 portfolio');
      portfolioRows = table.rows.map(normalisePortfolioRow);
      validatePortfolioRows(portfolioRows);
      sourceHealth.set(PATHS.portfolio, { ok: true, detail: `${portfolioRows.length} parent rows` });
    } catch (error) {
      sourceHealth.set(PATHS.portfolio, { ok: false, detail: error.message });
      renderSourceHealth();
      showFatal('master-grid', `V3 contract failure: ${error.message}`);
      showFatal('layer1-grid', 'Workflow Layer 1 cannot render because the portfolio contract is invalid.');
      showFatal('layer3-grid', 'Workflow Layer 3 cannot render because the portfolio contract is invalid.');
      return;
    }

    let nicheRows = [];
    if (nichesResult.status === 'fulfilled') {
      try {
        const nicheTable = findMarkdownTable(nichesResult.value, '## Ranked niche summary');
        validateRequiredHeaders(nicheTable.headers, NICHE_REQUIRED_HEADERS, 'Niche register');
        nicheRows = normaliseNicheRows(nicheTable.rows, portfolioRows);
        sourceHealth.set(PATHS.niches, { ok: true, detail: `${nicheRows.length} ranked niches` });
      } catch (error) {
        sourceHealth.set(PATHS.niches, { ok: false, detail: error.message });
        showFatal('layer2-grid', `Niche contract failure: ${error.message}`);
      }
    } else {
      sourceHealth.set(PATHS.niches, { ok: false, detail: nichesResult.reason.message });
      showFatal('layer2-grid', `Ranked niche register unavailable: ${nichesResult.reason.message}`);
    }

    if (versionResult.status === 'fulfilled') {
      sourceHealth.set(PATHS.version, { ok: true, detail: `Repository ${versionResult.value.trim()}` });
    }

    renderMetrics(portfolioRows);
    renderDecisionQueue(portfolioRows);
    renderQuality(portfolioRows);
    masterGridApi = renderMasterGrid(portfolioRows);
    renderProofFunnel(portfolioRows, masterGridApi);
    renderLayer1Grid(portfolioRows);
    if (nicheRows.length) renderLayer2Grid(nicheRows);
    renderLayer3Grid(portfolioRows);
    renderSourceHealth();
  }

  async function fetchText(path) {
    const separator = path.includes('?') ? '&' : '?';
    try {
      const response = await fetch(`${path}${separator}v=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const text = await response.text();
      sourceHealth.set(path, { ok: true, detail: `${Math.max(1, Math.round(text.length / 1024))} KB` });
      return text;
    } catch (error) {
      sourceHealth.set(path, { ok: false, detail: error.message });
      throw new Error(`${path}: ${error.message}`);
    }
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
      if (cells.length !== headers.length) {
        throw new Error(`Row ${index + 1} has ${cells.length} cells; expected ${headers.length}`);
      }
      rows.push(objectFromRow(headers, cells));
    }
    if (!rows.length) throw new Error(`The table under “${exactHeading}” has no data rows`);
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

  function objectFromRow(headers, cells) {
    const row = {};
    headers.forEach((header, index) => { row[header] = cells[index]; });
    return row;
  }

  function validateHeaders(actual, expected, name) {
    if (actual.length !== expected.length || actual.some((header, index) => header !== expected[index])) {
      throw new Error(`${name} header mismatch. Expected ${expected.join(' | ')}`);
    }
  }

  function validateRequiredHeaders(actual, required, name) {
    const missing = required.filter(header => !actual.includes(header));
    if (missing.length) throw new Error(`${name} is missing: ${missing.join(', ')}`);
  }

  function normalisePortfolioRow(raw) {
    const row = {};
    PORTFOLIO_HEADERS.forEach(header => {
      row[FIELD_MAP[header]] = raw[header];
    });
    row.rank = parseNumber(row.rank);
    row.opportunityScore = parseNumberOrMissing(row.opportunityScore);
    row.mrr = parseNumberOrMissing(row.mrr);
    row.aiAutonomy = parseNumberOrMissing(row.aiAutonomy);
    row.evidenceConfidence = parseNumberOrMissing(row.evidenceConfidence);
    row.researchCompleteness = parseNumberOrMissing(row.researchCompleteness);
    row.empConfidence = parseNumberOrMissing(row.empConfidence);
    row.nicheScore = parseNumberOrMissing(row.nicheScore);
    row.nicheConfidence = parseNumberOrMissing(row.nicheConfidence);
    row.rbs = parseNumberOrMissing(row.rbs);
    row.externalMarketProofCode = enumCode(row.externalMarketProof, /^EMP[0-4]/i);
    row.drfProofCode = enumCode(row.drfProof, /^P[0-6]/i);
    row.layer1Decision = deriveLayer1Decision(row);
    row.id = row.opportunityId || `rank-${row.rank}`;
    return row;
  }

  function validatePortfolioRows(rows) {
    const ids = new Set();
    rows.forEach((row, index) => {
      if (!Number.isInteger(row.rank) || row.rank < 1) throw new Error(`Invalid Rank at row ${index + 1}`);
      if (!row.opportunityId || isMissing(row.opportunityId)) throw new Error(`Missing Opportunity ID at row ${index + 1}`);
      if (ids.has(row.opportunityId)) throw new Error(`Duplicate Opportunity ID: ${row.opportunityId}`);
      ids.add(row.opportunityId);
      if (!row.businessOpportunity || isMissing(row.businessOpportunity)) throw new Error(`Missing business name for ${row.opportunityId}`);
    });
    const sortedRanks = rows.map(row => row.rank).sort((a, b) => a - b);
    sortedRanks.forEach((rank, index) => {
      if (rank !== index + 1) throw new Error(`Portfolio ranks are not continuous at ${index + 1}`);
    });
  }

  function normaliseNicheRows(rawRows, portfolioRows) {
    const portfolioMap = new Map(portfolioRows.map(row => [normaliseName(row.businessOpportunity), row]));
    const rows = rawRows.map((raw, index) => {
      const parent = portfolioMap.get(normaliseName(raw['Parent opportunity'])) || null;
      return {
        id: `niche-${index + 1}`,
        rank: index + 1,
        parentOpportunity: raw['Parent opportunity'],
        offerProduct: raw['Offer / product'],
        vertical: raw['Vertical'],
        subNiche: raw['Sub-niche / ICP'],
        geography: raw['Geography'],
        painTrigger: raw['Core pain / trigger'],
        nicheScore: parseNumberOrMissing(raw['Niche Score']),
        nicheConfidence: parseNumberOrMissing(raw['Evidence Confidence']),
        decision: raw['Decision'],
        currentRead: raw['Current read'],
        nextEvidence: raw['Next evidence'],
        detailPath: raw['Canonical detail'],
        parent
      };
    });

    const bestByParent = new Map();
    rows.forEach(row => {
      const key = normaliseName(row.parentOpportunity);
      const current = bestByParent.get(key);
      if (!current || numericValue(row.nicheScore) > numericValue(current.nicheScore)) bestByParent.set(key, row);
    });
    rows.forEach(row => { row.isBest = bestByParent.get(normaliseName(row.parentOpportunity)) === row; });
    return rows;
  }

  function normaliseName(value) {
    return cleanMarkdown(value)
      .toLowerCase()
      .replace(/&/g, ' and ')
      .replace(/[^a-z0-9]+/g, ' ')
      .replace(/\bthe\b/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
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

  function enumCode(value, pattern) {
    const match = String(value ?? '').trim().match(pattern);
    return match ? match[0].toUpperCase() : '';
  }

  function isMissing(value) {
    if (value === null || value === undefined) return true;
    if (typeof value === 'number') return false;
    return MISSING_VALUES.has(String(value).trim());
  }

  function deriveLayer1Decision(row) {
    const score = numericValue(row.opportunityScore);
    const evidence = numericValue(row.evidenceConfidence);
    const research = numericValue(row.researchCompleteness);
    if (score >= 85 && evidence >= 60 && research >= 70) return 'GOLDEN';
    if (score >= 75 && evidence >= 60 && research >= 70) return 'ADVANCE';
    if (score >= 65 || evidence < 60 || research < 70) return 'HOLD';
    return 'REJECT';
  }

  function renderMetrics(rows) {
    const count = predicate => rows.filter(predicate).length;
    const total = rows.length;
    const golden = count(row => numericValue(row.opportunityScore) >= 85 && numericValue(row.evidenceConfidence) >= 60);
    const highMrr = count(row => numericValue(row.mrr) >= 9);
    const highAi = count(row => numericValue(row.aiAutonomy) >= 85);
    const marketProven = count(row => ['EMP3', 'EMP4'].includes(row.externalMarketProofCode));
    const rbsComplete = count(row => Number.isFinite(row.rbs));
    const p4 = count(row => row.drfProofCode === 'P4');
    const p5 = count(row => row.drfProofCode === 'P5');
    const p6 = count(row => row.drfProofCode === 'P6');
    const pending = count(row => !Number.isFinite(row.rbs) || isMissing(row.dossierReadiness));

    setText('metric-total', total);
    setText('metric-golden', golden);
    setText('metric-mrr', highMrr);
    setText('metric-ai', highAi);
    setText('metric-emp', marketProven);
    setText('metric-rbs', `${rbsComplete}/${total}`);
    setText('metric-proof', `${p4} / ${p5} / ${p6}`);
    setText('metric-pending', pending);
  }

  function renderDecisionQueue(rows) {
    const host = document.getElementById('decision-queue');
    if (!host) return;
    const stagePriority = new Map([
      ['PILOT', 0], ['TEST', 1], ['FUND', 2], ['SCALE', 3], ['BLUEPRINT', 4],
      ['RESEARCH', 5], ['REJECT', 9]
    ]);
    const sorted = [...rows]
      .filter(row => row.stage !== 'REJECT')
      .sort((a, b) => {
        const stage = (stagePriority.get(String(a.stage).toUpperCase()) ?? 8) - (stagePriority.get(String(b.stage).toUpperCase()) ?? 8);
        if (stage) return stage;
        return numericValue(b.opportunityScore) - numericValue(a.opportunityScore) || a.rank - b.rank;
      })
      .slice(0, 8);

    host.innerHTML = sorted.map(row => {
      const next = isMissing(row.nextProof) ? row.currentRead : row.nextProof;
      return `<li>
        <span class="v3-list-rank">${escapeHtml(row.rank)}</span>
        <span class="v3-list-copy"><b>${escapeHtml(row.businessOpportunity)}</b><span>${escapeHtml(next)}</span></span>
        <span class="v3-list-meta">${stageHtml(row.stage)}<br>${scoreHtml(row.opportunityScore, 100, false)}</span>
      </li>`;
    }).join('');
  }

  function renderQuality(rows) {
    const host = document.getElementById('quality-grid');
    if (!host) return;
    const pendingEmp = rows.filter(row => !row.externalMarketProofCode).length;
    const pendingRbs = rows.filter(row => !Number.isFinite(row.rbs)).length;
    const pendingOffer = rows.filter(row => isMissing(row.recommendedOffer)).length;
    const incompleteDossier = rows.filter(row => !/ready|complete/i.test(String(row.dossierReadiness))).length;
    const stale = rows.filter(row => evidenceAgeDays(row.evidenceFreshness) > 90).length;
    const unknownFreshness = rows.filter(row => !Number.isFinite(evidenceAgeDays(row.evidenceFreshness))).length;

    host.innerHTML = [
      [pendingEmp, 'EMP still Pending', pendingEmp ? 'warn' : ''],
      [pendingRbs, 'RBS still Pending', pendingRbs ? 'warn' : ''],
      [pendingOffer, 'Offer still Pending', pendingOffer ? 'warn' : ''],
      [incompleteDossier, 'Layer 3 incomplete', incompleteDossier ? 'warn' : ''],
      [stale, 'Evidence >90 days', stale ? 'warn' : ''],
      [unknownFreshness, 'Unknown freshness', unknownFreshness ? 'warn' : '']
    ].map(([value, label, className]) => `<div class="v3-quality ${className}"><b>${value}</b><span>${label}</span></div>`).join('');
  }

  function evidenceAgeDays(value) {
    if (isMissing(value)) return NaN;
    const timestamp = Date.parse(String(value));
    if (!Number.isFinite(timestamp)) return NaN;
    return Math.floor((Date.now() - timestamp) / 86400000);
  }

  function renderMasterGrid(rows) {
    const columns = [
      column('rank', 'Rank', 56, 'number', null, row => `<span>${escapeHtml(row.rank)}</span>`, 'rank'),
      column('businessOpportunity', 'Business Opportunity', 238, 'text', null, row => `<button type="button" data-expand="${escapeAttr(row.id)}" aria-label="Open ${escapeAttr(row.businessOpportunity)} details">${escapeHtml(row.businessOpportunity)}</button>`, 'opportunity'),
      column('painOutcome', 'Pain / Outcome', 300, 'text', null, row => leadHtml(row.painOutcome, 2)),
      column('opportunityScore', 'Opportunity Score', 112, 'number', DEFINITIONS[0][1], row => scoreHtml(row.opportunityScore, 100)),
      column('mrr', 'MRR', 72, 'number', DEFINITIONS[1][1], row => scoreHtml(row.mrr, 10)),
      column('aiAutonomy', 'AI Autonomy', 100, 'number', DEFINITIONS[2][1], row => scoreHtml(row.aiAutonomy, 100)),
      column('evidenceConfidence', 'Evidence', 92, 'number', DEFINITIONS[3][1], row => percentHtml(row.evidenceConfidence)),
      column('researchCompleteness', 'Research', 92, 'number', DEFINITIONS[4][1], row => percentHtml(row.researchCompleteness)),
      column('externalMarketProof', 'EMP', 148, 'enum', DEFINITIONS[5][1], row => empHtml(row.externalMarketProof)),
      column('bestNiche', 'Best Niche', 250, 'text', null, row => leadHtml(row.bestNiche, 2)),
      column('nicheScore', 'Niche Score', 98, 'number', DEFINITIONS[6][1], row => scoreHtml(row.nicheScore, 100)),
      column('nicheConfidence', 'Niche Confidence', 108, 'number', 'Confidence in the current niche-specific evidence.', row => percentHtml(row.nicheConfidence)),
      column('recommendedOffer', 'Offer / Product', 245, 'text', null, row => leadHtml(row.recommendedOffer, 2)),
      column('priceModel', 'Price / Commercial Model', 220, 'text', null, row => leadHtml(row.priceModel, 2)),
      column('gtmSummary', 'GTM', 265, 'text', DEFINITIONS[10][1], row => leadHtml(row.gtmSummary, 2)),
      column('rbs', 'RBS', 82, 'number', DEFINITIONS[7][1], row => scoreHtml(row.rbs, 100)),
      column('drfProof', 'DRF Proof', 120, 'enum', DEFINITIONS[8][1], row => proofHtml(row.drfProof)),
      column('stage', 'Stage', 94, 'enum', DEFINITIONS[9][1], row => stageHtml(row.stage)),
      column('capital', 'Capital', 124, 'text', DEFINITIONS[11][1], row => valueHtml(row.capital)),
      column('returnHeadline', 'Return', 250, 'text', DEFINITIONS[12][1], row => leadHtml(row.returnHeadline, 2)),
      column('nextProof', 'Next Proof', 275, 'text', 'The exact next cash, behaviour or delivery evidence required.', row => leadHtml(row.nextProof, 2))
    ];

    return createDataGrid({
      id: 'master', hostId: 'master-grid', rows, columns,
      searchId: 'master-search', clearId: 'master-clear', resetId: 'master-reset', countId: 'master-count',
      defaultSort: { key: 'rank', direction: 'asc' },
      rowId: row => row.id,
      detailRenderer: masterDetailHtml,
      onClear: () => setProofFunnelActive('ALL')
    });
  }

  function renderLayer1Grid(rows) {
    const columns = [
      column('rank', 'Rank', 56, 'number', null, row => escapeHtml(row.rank), 'rank'),
      column('businessOpportunity', 'Business Opportunity', 245, 'text', null, row => `<button type="button" data-expand="${escapeAttr(row.id)}">${escapeHtml(row.businessOpportunity)}</button>`, 'opportunity'),
      column('painOutcome', 'Pain / Outcome', 300, 'text', null, row => leadHtml(row.painOutcome, 2)),
      column('opportunityScore', 'Opportunity Score', 112, 'number', DEFINITIONS[0][1], row => scoreHtml(row.opportunityScore, 100)),
      column('mrr', 'MRR', 72, 'number', DEFINITIONS[1][1], row => scoreHtml(row.mrr, 10)),
      column('aiAutonomy', 'AI Autonomy', 100, 'number', DEFINITIONS[2][1], row => scoreHtml(row.aiAutonomy, 100)),
      column('evidenceConfidence', 'Evidence', 92, 'number', DEFINITIONS[3][1], row => percentHtml(row.evidenceConfidence)),
      column('researchCompleteness', 'Research', 92, 'number', DEFINITIONS[4][1], row => percentHtml(row.researchCompleteness)),
      column('externalMarketProof', 'EMP', 150, 'enum', DEFINITIONS[5][1], row => empHtml(row.externalMarketProof)),
      column('empConfidence', 'EMP Confidence', 105, 'number', 'Confidence in the External Market Proof assignment.', row => percentHtml(row.empConfidence)),
      column('layer1Decision', 'Layer 1 Decision', 116, 'enum', 'Golden, Advance, Hold or Reject based on structural score and evidence; not a capital gate.', row => decisionHtml(row.layer1Decision)),
      column('currentRead', 'Founder Read', 330, 'text', null, row => leadHtml(row.currentRead, 2))
    ];

    createDataGrid({
      id: 'layer1', hostId: 'layer1-grid', rows, columns,
      searchId: 'layer1-search', clearId: 'layer1-clear', resetId: 'layer1-reset', countId: 'layer1-count',
      defaultSort: { key: 'opportunityScore', direction: 'desc' },
      rowId: row => row.id,
      detailRenderer: layer1DetailHtml
    });
  }

  function renderLayer2Grid(rows) {
    const columns = [
      column('rank', '#', 48, 'number', null, row => escapeHtml(row.rank), 'rank'),
      column('parentOpportunity', 'Business Opportunity', 230, 'text', null, row => leadHtml(row.parentOpportunity, 2)),
      column('vertical', 'Vertical', 155, 'text', null, row => leadHtml(row.vertical, 2)),
      column('subNiche', 'Sub-niche / ICP', 330, 'text', null, row => leadHtml(row.subNiche, 2)),
      column('geography', 'Geography', 120, 'text', null, row => valueHtml(row.geography)),
      column('painTrigger', 'Pain / Trigger', 310, 'text', null, row => leadHtml(row.painTrigger, 2)),
      column('nicheScore', 'Niche Score', 98, 'number', DEFINITIONS[6][1], row => scoreHtml(row.nicheScore, 100)),
      column('nicheConfidence', 'Niche Confidence', 108, 'number', 'Confidence in the niche-specific evidence.', row => percentHtml(row.nicheConfidence)),
      column('decision', 'Niche Decision', 150, 'text', null, row => `${row.isBest ? '<span class="v3-chip gold">Top parent niche</span> ' : ''}${valueHtml(row.decision)}`),
      column('offerProduct', 'Niche Offer / Product', 265, 'text', null, row => leadHtml(row.offerProduct, 2)),
      column('parentPrice', 'Parent Price / Model', 215, 'text', null, row => leadHtml(row.parent?.priceModel ?? 'Pending', 2), row => row.parent?.priceModel ?? 'Pending'),
      column('parentGtm', 'Parent GTM', 260, 'text', DEFINITIONS[10][1], row => leadHtml(row.parent?.gtmSummary ?? 'Pending', 2), row => row.parent?.gtmSummary ?? 'Pending'),
      column('parentRbs', 'RBS', 82, 'number', DEFINITIONS[7][1], row => scoreHtml(row.parent?.rbs ?? 'Pending', 100), row => row.parent?.rbs ?? 'Pending'),
      column('parentProof', 'DRF Proof', 120, 'enum', DEFINITIONS[8][1], row => proofHtml(row.parent?.drfProof ?? 'Pending'), row => row.parent?.drfProof ?? 'Pending'),
      column('parentStage', 'Stage', 94, 'enum', DEFINITIONS[9][1], row => stageHtml(row.parent?.stage ?? 'Pending'), row => row.parent?.stage ?? 'Pending'),
      column('nextEvidence', 'Next Evidence / Proof', 300, 'text', null, row => leadHtml(row.nextEvidence, 2))
    ];

    createDataGrid({
      id: 'layer2', hostId: 'layer2-grid', rows, columns,
      searchId: 'layer2-search', clearId: 'layer2-clear', resetId: 'layer2-reset', countId: 'layer2-count',
      defaultSort: { key: 'nicheScore', direction: 'desc' },
      rowId: row => row.id,
      detailRenderer: layer2DetailHtml
    });
  }

  function renderLayer3Grid(rows) {
    const columns = [
      column('rank', 'Rank', 56, 'number', null, row => escapeHtml(row.rank), 'rank'),
      column('businessOpportunity', 'Business Opportunity', 245, 'text', null, row => `<button type="button" data-expand="${escapeAttr(row.id)}">${escapeHtml(row.businessOpportunity)}</button>`, 'opportunity'),
      column('dossierReadiness', 'Dossier Readiness', 148, 'enum', 'Completeness of the structured business case for its current stage.', row => readinessHtml(row.dossierReadiness)),
      column('recommendedOffer', 'Offer', 240, 'text', null, row => leadHtml(row.recommendedOffer, 2)),
      column('priceModel', 'Price', 210, 'text', null, row => leadHtml(row.priceModel, 2)),
      column('gtmSummary', 'GTM', 260, 'text', DEFINITIONS[10][1], row => leadHtml(row.gtmSummary, 2)),
      column('deliveryArchitecture', 'Delivery', 260, 'text', null, row => leadHtml(row.deliveryArchitecture, 2)),
      column('returnHeadline', 'Return', 245, 'text', DEFINITIONS[12][1], row => leadHtml(row.returnHeadline, 2)),
      column('externalMarketProof', 'EMP', 145, 'enum', DEFINITIONS[5][1], row => empHtml(row.externalMarketProof)),
      column('rbs', 'RBS', 82, 'number', DEFINITIONS[7][1], row => scoreHtml(row.rbs, 100)),
      column('drfProof', 'DRF Proof', 120, 'enum', DEFINITIONS[8][1], row => proofHtml(row.drfProof)),
      column('stage', 'Stage', 94, 'enum', DEFINITIONS[9][1], row => stageHtml(row.stage)),
      column('capital', 'Capital', 125, 'text', DEFINITIONS[11][1], row => valueHtml(row.capital)),
      column('nextProof', 'Next Proof', 280, 'text', null, row => leadHtml(row.nextProof, 2)),
      column('blueprintReadiness', 'Blueprint Readiness', 150, 'enum', DEFINITIONS[13][1], row => readinessHtml(row.blueprintReadiness)),
      column('evidenceFreshness', 'Evidence Freshness', 118, 'date', 'Date of the current evidence snapshot; over 90 days is review due by default.', row => freshnessHtml(row.evidenceFreshness)),
      column('dossierPath', 'Dossier', 170, 'text', null, row => sourceLinkHtml(row.dossierPath, 'Open dossier'))
    ];

    createDataGrid({
      id: 'layer3', hostId: 'layer3-grid', rows, columns,
      searchId: 'layer3-search', clearId: 'layer3-clear', resetId: 'layer3-reset', countId: 'layer3-count',
      defaultSort: { key: 'rank', direction: 'asc' },
      rowId: row => row.id,
      detailRenderer: masterDetailHtml
    });
  }

  function column(key, label, width, type = 'text', tip = null, renderer = null, className = '', valueGetter = null) {
    return { key, label, width, type, tip, renderer, className, valueGetter };
  }

  function createDataGrid(options) {
    const host = document.getElementById(options.hostId);
    if (!host) return null;
    const search = document.getElementById(options.searchId);
    const clear = document.getElementById(options.clearId);
    const reset = document.getElementById(options.resetId);
    const count = document.getElementById(options.countId);
    const storageKey = `drf-v3-widths-${options.id}`;
    const state = {
      filters: {},
      search: '',
      sortKey: options.defaultSort?.key || options.columns[0].key,
      sortDirection: options.defaultSort?.direction || 'asc',
      widths: loadWidths(storageKey, options.columns),
      expanded: new Set()
    };

    function getValue(row, col) {
      return col.valueGetter ? col.valueGetter(row) : row[col.key];
    }

    function filteredRows() {
      let rows = options.rows.filter(row => {
        if (state.search) {
          const haystack = options.columns.map(col => String(getValue(row, col) ?? '')).join(' ').toLowerCase();
          if (!haystack.includes(state.search.toLowerCase())) return false;
        }
        return options.columns.every(col => matchesFilter(getValue(row, col), state.filters[col.key], col.type));
      });

      const sortCol = options.columns.find(col => col.key === state.sortKey) || options.columns[0];
      rows = [...rows].sort((a, b) => compareValues(getValue(a, sortCol), getValue(b, sortCol), sortCol, state.sortDirection));
      return rows;
    }

    function render() {
      const rows = filteredRows();
      const totalWidth = options.columns.reduce((sum, col) => sum + (state.widths[col.key] || col.width), 0);
      const header = options.columns.map(col => {
        const mark = state.sortKey === col.key ? (state.sortDirection === 'asc' ? '▲' : '▼') : '↕';
        const tipClass = col.tip ? ' v3-tip' : '';
        const tipAttr = col.tip ? ` data-tip="${escapeAttr(col.tip)}"` : '';
        return `<th scope="col"><button type="button" class="v3-sort${tipClass}" data-sort="${escapeAttr(col.key)}"${tipAttr}><span>${escapeHtml(col.label)}</span><span class="v3-sort-mark">${mark}</span></button><span class="v3-resizer" data-resize="${escapeAttr(col.key)}" aria-hidden="true"></span></th>`;
      }).join('');
      const filters = options.columns.map(col => `<th><input class="v3-filter" data-filter="${escapeAttr(col.key)}" value="${escapeAttr(state.filters[col.key] || '')}" placeholder="${col.type === 'number' ? '>=80' : 'Filter'}" aria-label="Filter ${escapeAttr(col.label)}"></th>`).join('');
      const body = rows.length ? rows.map(row => rowHtml(row, options.columns, state, options, getValue)).join('') : `<tr><td colspan="${options.columns.length}" class="v3-empty">No rows match the current search and filters.</td></tr>`;
      const cols = options.columns.map(col => `<col data-col="${escapeAttr(col.key)}" style="width:${state.widths[col.key] || col.width}px">`).join('');

      host.innerHTML = `<div class="v3-table-shell"><table class="v3-table" style="width:${totalWidth}px"><colgroup>${cols}</colgroup><thead><tr>${header}</tr><tr class="v3-filter-row">${filters}</tr></thead><tbody>${body}</tbody></table></div>`;
      if (count) count.textContent = `${rows.length} of ${options.rows.length} rows`;
    }

    host.addEventListener('click', event => {
      const sortButton = event.target.closest('[data-sort]');
      if (sortButton) {
        const key = sortButton.dataset.sort;
        if (state.sortKey === key) state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
        else {
          state.sortKey = key;
          const col = options.columns.find(item => item.key === key);
          state.sortDirection = col?.type === 'number' ? 'desc' : 'asc';
        }
        render();
        return;
      }

      const expandButton = event.target.closest('[data-expand]');
      if (expandButton && options.detailRenderer) {
        const id = expandButton.dataset.expand;
        if (state.expanded.has(id)) state.expanded.delete(id);
        else state.expanded.add(id);
        render();
      }
    });

    host.addEventListener('input', event => {
      const input = event.target.closest('[data-filter]');
      if (!input) return;
      const key = input.dataset.filter;
      const caret = input.selectionStart;
      state.filters[key] = input.value;
      render();
      requestAnimationFrame(() => {
        const replacement = host.querySelector(`[data-filter="${key}"]`);
        if (replacement) {
          replacement.focus();
          try { replacement.setSelectionRange(caret, caret); } catch (_) { /* non-text input */ }
        }
      });
    });

    host.addEventListener('pointerdown', event => {
      const handle = event.target.closest('[data-resize]');
      if (!handle) return;
      event.preventDefault();
      const key = handle.dataset.resize;
      const startX = event.clientX;
      const startWidth = state.widths[key] || options.columns.find(col => col.key === key)?.width || 100;
      handle.classList.add('active');

      const move = moveEvent => {
        state.widths[key] = Math.max(48, Math.round(startWidth + moveEvent.clientX - startX));
        const colElement = host.querySelector(`col[data-col="${key}"]`);
        if (colElement) colElement.style.width = `${state.widths[key]}px`;
        const table = host.querySelector('.v3-table');
        if (table) table.style.width = `${options.columns.reduce((sum, col) => sum + (state.widths[col.key] || col.width), 0)}px`;
      };
      const up = () => {
        handle.classList.remove('active');
        document.removeEventListener('pointermove', move);
        document.removeEventListener('pointerup', up);
        saveWidths(storageKey, state.widths);
      };
      document.addEventListener('pointermove', move);
      document.addEventListener('pointerup', up, { once: true });
    });

    if (search) {
      search.addEventListener('input', () => {
        state.search = search.value.trim();
        render();
      });
    }
    if (clear) {
      clear.addEventListener('click', () => {
        state.filters = {};
        state.search = '';
        if (search) search.value = '';
        if (typeof options.onClear === 'function') options.onClear();
        render();
      });
    }
    if (reset) {
      reset.addEventListener('click', () => {
        state.widths = Object.fromEntries(options.columns.map(col => [col.key, col.width]));
        localStorage.removeItem(storageKey);
        render();
      });
    }

    const api = {
      setFilter(key, value) {
        state.filters[key] = value || '';
        render();
      },
      clear() {
        state.filters = {};
        state.search = '';
        if (search) search.value = '';
        render();
      },
      render,
      getState: () => ({ ...state })
    };
    render();
    return api;
  }

  function rowHtml(row, columns, state, options, getValue) {
    const id = options.rowId ? options.rowId(row) : String(row.rank);
    const expanded = state.expanded.has(id);
    const cells = columns.map(col => {
      const value = getValue(row, col);
      const content = col.renderer ? col.renderer(row) : valueHtml(value);
      const classes = [col.className, col.type === 'number' ? 'num' : ''].filter(Boolean).join(' ');
      return `<td class="${classes}">${content}</td>`;
    }).join('');
    const sourceClass = expanded ? ' class="v3-expanded-source"' : '';
    const detail = expanded && options.detailRenderer ? `<tr class="v3-detail-row"><td colspan="${columns.length}">${options.detailRenderer(row)}</td></tr>` : '';
    return `<tr${sourceClass}>${cells}</tr>${detail}`;
  }

  function compareValues(a, b, col, direction) {
    const missingA = isMissing(a);
    const missingB = isMissing(b);
    if (missingA && missingB) return 0;
    if (missingA) return 1;
    if (missingB) return -1;

    let result = 0;
    if (col.type === 'number') {
      result = numericValue(a) - numericValue(b);
    } else if (col.type === 'date') {
      result = Date.parse(a) - Date.parse(b);
    } else if (col.type === 'enum') {
      result = enumRank(a) - enumRank(b);
      if (!result) result = COLLATOR.compare(String(a), String(b));
    } else {
      result = COLLATOR.compare(String(a), String(b));
    }
    return direction === 'desc' ? -result : result;
  }

  function enumRank(value) {
    const text = String(value ?? '').toUpperCase();
    const emp = EMP_ORDER.findIndex(code => text.startsWith(code));
    if (emp >= 0) return emp;
    const proof = PROOF_ORDER.findIndex(code => text.startsWith(code));
    if (proof >= 0) return proof;
    const stage = STAGE_ORDER.indexOf(text.trim());
    if (stage >= 0) return stage;
    const readiness = ['MISSING', 'LAYER 1 ONLY', 'PARTIAL', 'READY FOR CURRENT STAGE', 'COMPLETE'].indexOf(text.trim());
    return readiness >= 0 ? readiness : 999;
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

  function loadWidths(key, columns) {
    const defaults = Object.fromEntries(columns.map(col => [col.key, col.width]));
    try {
      const stored = JSON.parse(localStorage.getItem(key) || '{}');
      for (const [name, value] of Object.entries(stored)) {
        if (Object.hasOwn(defaults, name) && Number.isFinite(value) && value >= 48) defaults[name] = value;
      }
    } catch (_) { /* malformed local storage: use defaults */ }
    return defaults;
  }

  function saveWidths(key, widths) {
    try { localStorage.setItem(key, JSON.stringify(widths)); } catch (_) { /* storage unavailable */ }
  }

  function renderProofFunnel(rows, gridApi) {
    const host = document.getElementById('proof-funnel');
    if (!host || !gridApi) return;
    const levels = ['ALL', 'Pending', ...PROOF_ORDER];
    host.innerHTML = levels.map(level => {
      const count = level === 'ALL' ? rows.length : rows.filter(row => level === 'Pending' ? !row.drfProofCode : row.drfProofCode === level).length;
      const label = level === 'ALL' ? 'All' : level;
      return `<button type="button" data-proof-filter="${escapeAttr(level)}" class="${level === 'ALL' ? 'active' : ''}"><b>${count}</b><span>${escapeHtml(label)}</span></button>`;
    }).join('');
    host.addEventListener('click', event => {
      const button = event.target.closest('[data-proof-filter]');
      if (!button) return;
      const value = button.dataset.proofFilter;
      setProofFunnelActive(value);
      gridApi.setFilter('drfProof', value === 'ALL' ? '' : value);
    });
  }

  function setProofFunnelActive(value) {
    document.querySelectorAll('[data-proof-filter]').forEach(button => button.classList.toggle('active', button.dataset.proofFilter === value));
  }

  function masterDetailHtml(row) {
    return `<div class="v3-detail">
      ${detailCard('Founder read', row.currentRead)}
      ${detailCard('Delivery architecture', row.deliveryArchitecture)}
      ${detailCard('Dossier readiness', `${row.dossierReadiness} · Blueprint: ${row.blueprintReadiness}`)}
      ${detailCard('Evidence freshness', freshnessText(row.evidenceFreshness))}
      <div class="v3-detail-links">
        ${sourceLinkHtml(row.dossierPath, 'Open current dossier')}
        ${sourceLinkHtml(row.businessFolder, 'Open business folder')}
        <a class="v3-inline-link" href="https://github.com/${REPO}/blob/${BRANCH}/businesses/NICHES.md">Open all ranked niches</a>
      </div>
    </div>`;
  }

  function layer1DetailHtml(row) {
    const missing = [
      ['EMP', row.externalMarketProof], ['Best niche', row.bestNiche], ['Offer', row.recommendedOffer], ['RBS', row.rbs]
    ].filter(([, value]) => isMissing(value)).map(([label]) => label).join(', ') || 'No primary summary field missing';
    return `<div class="v3-detail">
      ${detailCard('Structural decision', `${row.layer1Decision}: ${row.currentRead}`)}
      ${detailCard('External proof boundary', `${row.externalMarketProof} · ${valueText(row.empConfidence)}% confidence`)}
      ${detailCard('Current missing deep work', missing)}
      ${detailCard('Next evidence', row.nextProof)}
      <div class="v3-detail-links">${sourceLinkHtml(row.dossierPath, 'Open dossier')}${sourceLinkHtml(row.businessFolder, 'Open business folder')}</div>
    </div>`;
  }

  function layer2DetailHtml(row) {
    return `<div class="v3-detail">
      ${detailCard('Niche current read', row.currentRead)}
      ${detailCard('Next niche evidence', row.nextEvidence)}
      ${detailCard('Parent commercial model', row.parent ? `${row.parent.recommendedOffer} · ${row.parent.priceModel}` : 'Parent row not matched')}
      ${detailCard('Parent execution control', row.parent ? `${row.parent.drfProof} · ${row.parent.stage} · ${row.parent.capital}` : 'Pending')}
      <div class="v3-detail-links">${sourceLinkHtml(row.detailPath, 'Open niche dossier')}${row.parent ? sourceLinkHtml(row.parent.dossierPath, 'Open parent dossier') : ''}</div>
    </div>`;
  }

  function detailCard(label, value) {
    return `<div class="v3-detail-card"><small>${escapeHtml(label)}</small><strong>${isMissing(value) ? '<span class="v3-pending">Pending</span>' : escapeHtml(value)}</strong></div>`;
  }

  function renderDefinitions() {
    const host = document.getElementById('definition-grid');
    if (!host) return;
    host.innerHTML = DEFINITIONS.map(([term, definition]) => `<div class="v3-definition"><b>${escapeHtml(term)}</b><span>${escapeHtml(definition)}</span></div>`).join('');
  }

  function renderSourceHealth() {
    const host = document.getElementById('source-grid');
    if (!host) return;
    const entries = [
      [PATHS.portfolio, 'V3 portfolio'],
      [PATHS.niches, 'Ranked niches'],
      [PATHS.version, 'Repository version'],
      [PATHS.legacy, 'Legacy V1/V2 snapshot'],
      [PATHS.discoveryRuns, 'Discovery run register'],
      [PATHS.refreshRuns, 'Refresh run register']
    ];
    host.innerHTML = entries.map(([path, label]) => {
      const status = sourceHealth.get(path);
      const ok = status?.ok;
      return `<div class="v3-source"><strong>${escapeHtml(label)}</strong><span class="${ok ? 'ok' : status ? 'error' : ''}">${status ? (ok ? '✓ ' : '✕ ') + escapeHtml(status.detail) : 'Checking…'}</span><span>${escapeHtml(path)}</span></div>`;
    }).join('');
  }

  function configureLegacyFrame(frame, view) {
    if (!frame) return;
    frame.addEventListener('load', () => {
      try {
        const doc = frame.contentDocument;
        if (!doc) throw new Error('Legacy frame document is unavailable');
        const style = doc.createElement('style');
        style.id = `drf-v3-embed-${view}`;
        style.textContent = view === 'v2' ? `
          html,body{margin:0!important;overflow:hidden!important;background:#fff!important}
          body>.top,body>.hero,body>footer{display:none!important}
          main.wrap{width:100%!important;max-width:none!important;margin:0!important;padding:0!important}
          main.wrap>*{display:none!important}
          main.wrap>.v2{display:block!important;width:100%!important;margin:0!important}
          .v2wrap{width:min(1480px,calc(100% - 28px))!important}
        ` : `
          html,body{margin:0!important;overflow:hidden!important;background:#fff!important}
          body>.top,body>footer{display:none!important}
          main.wrap>.version-divider,main.wrap>.v2{display:none!important}
          main.wrap{padding-top:14px!important}
        `;
        doc.head.appendChild(style);

        if (view === 'v1') {
          const removeDeltaColumns = () => hideColumnsByLabel(doc, '#opportunity-table', ['Score Δ', 'Rank Δ']);
          removeDeltaColumns();
          const target = doc.querySelector('#opportunity-table');
          if (target && frame.contentWindow.MutationObserver) {
            new frame.contentWindow.MutationObserver(removeDeltaColumns).observe(target, { childList: true, subtree: true });
          }
        }

        let scheduled = false;
        const resize = () => {
          if (scheduled) return;
          scheduled = true;
          requestAnimationFrame(() => {
            scheduled = false;
            const height = Math.ceil(Math.max(doc.body?.scrollHeight || 0, doc.documentElement?.scrollHeight || 0));
            if (height > 300 && Math.abs(frame.offsetHeight - height) > 2) frame.style.height = `${height}px`;
          });
        };
        resize();
        [120, 700, 1800, 4000].forEach(delay => setTimeout(resize, delay));
        if (frame.contentWindow.ResizeObserver && doc.body) new frame.contentWindow.ResizeObserver(resize).observe(doc.body);
      } catch (error) {
        frame.style.height = '1400px';
        frame.setAttribute('scrolling', 'yes');
        console.warn(`Legacy ${view} embedding fallback:`, error);
      }
    });
  }

  function hideColumnsByLabel(doc, selector, labels) {
    const table = doc.querySelector(selector);
    if (!table) return;
    const headers = [...table.querySelectorAll('thead tr:first-child th')];
    const indexes = headers.map((header, index) => labels.includes(header.textContent.trim()) ? index : -1).filter(index => index >= 0);
    indexes.forEach(index => {
      table.querySelectorAll('tr').forEach(row => {
        const cell = row.children[index];
        if (cell) cell.style.display = 'none';
      });
    });
  }

  function scoreHtml(value, maximum = 100, includeMaximum = true) {
    if (isMissing(value) || !Number.isFinite(parseNumber(value))) return pendingHtml(value);
    const number = parseNumber(value);
    const ratio = number / maximum;
    const className = ratio >= 0.85 ? 'good' : ratio >= 0.65 ? 'mid' : 'low';
    return `<span class="v3-score ${className}">${escapeHtml(number)}${includeMaximum ? `/${maximum}` : ''}</span>`;
  }

  function percentHtml(value) {
    if (isMissing(value) || !Number.isFinite(parseNumber(value))) return pendingHtml(value);
    return `<span class="v3-score ${parseNumber(value) >= 80 ? 'good' : parseNumber(value) >= 60 ? 'mid' : 'low'}">${escapeHtml(parseNumber(value))}%</span>`;
  }

  function empHtml(value) {
    if (isMissing(value)) return pendingHtml(value);
    const code = enumCode(value, /^EMP[0-4]/i);
    const number = code ? Number(code.slice(3)) : -1;
    const className = number >= 3 ? 'green' : number === 2 ? 'gold' : number >= 0 ? 'amber' : '';
    return `<span class="v3-chip ${className}">${escapeHtml(value)}</span>`;
  }

  function proofHtml(value) {
    if (isMissing(value)) return pendingHtml(value);
    const code = enumCode(value, /^P[0-6]/i);
    const number = code ? Number(code.slice(1)) : -1;
    const className = number >= 4 ? 'green' : number >= 2 ? 'gold' : number >= 0 ? 'blue' : '';
    return `<span class="v3-chip ${className}">${escapeHtml(value)}</span>`;
  }

  function stageHtml(value) {
    if (isMissing(value)) return pendingHtml(value);
    const stage = String(value).toUpperCase();
    const className = ['FUND', 'SCALE', 'BLUEPRINT'].includes(stage) ? 'green' : ['TEST', 'PILOT'].includes(stage) ? 'gold' : stage === 'REJECT' ? 'red' : 'blue';
    return `<span class="v3-chip ${className}">${escapeHtml(stage)}</span>`;
  }

  function decisionHtml(value) {
    const className = value === 'GOLDEN' ? 'gold' : value === 'ADVANCE' ? 'green' : value === 'HOLD' ? 'amber' : 'red';
    return `<span class="v3-chip ${className}">${escapeHtml(value)}</span>`;
  }

  function readinessHtml(value) {
    if (isMissing(value)) return pendingHtml(value);
    const text = String(value);
    const className = /complete|certified|ready for current stage/i.test(text) ? 'green' : /partial|pre-blueprint|layer 1/i.test(text) ? 'gold' : /missing|not ready/i.test(text) ? 'amber' : 'blue';
    return `<span class="v3-chip ${className}">${escapeHtml(text)}</span>`;
  }

  function freshnessHtml(value) {
    if (isMissing(value)) return pendingHtml(value);
    const age = evidenceAgeDays(value);
    const className = !Number.isFinite(age) ? 'amber' : age > 180 ? 'red' : age > 90 ? 'amber' : 'green';
    return `<span class="v3-chip ${className}">${escapeHtml(value)}</span>`;
  }

  function freshnessText(value) {
    if (isMissing(value)) return 'Unknown freshness';
    const age = evidenceAgeDays(value);
    if (!Number.isFinite(age)) return String(value);
    if (age <= 90) return `${value} · current (${age} days)`;
    if (age <= 180) return `${value} · review due (${age} days)`;
    return `${value} · stale (${age} days)`;
  }

  function leadHtml(value, words = 2) {
    if (isMissing(value)) return pendingHtml(value);
    const text = String(value).trim();
    const parts = text.split(/\s+/);
    if (parts.length <= words) return `<span class="lead">${escapeHtml(text)}</span>`;
    return `<span class="lead">${escapeHtml(parts.slice(0, words).join(' '))}</span><span class="tail">${escapeHtml(parts.slice(words).join(' '))}</span>`;
  }

  function valueHtml(value) {
    return isMissing(value) ? pendingHtml(value) : escapeHtml(value);
  }

  function valueText(value) {
    return isMissing(value) ? 'Pending' : String(value);
  }

  function pendingHtml(value) {
    const text = value && String(value).trim() ? String(value).trim() : 'Pending';
    return `<span class="v3-pending">${escapeHtml(text)}</span>`;
  }

  function sourceLinkHtml(path, label) {
    if (isMissing(path)) return pendingHtml(path);
    const cleanPath = String(path).trim().replace(/^\.\//, '');
    const isFolder = cleanPath.endsWith('/');
    const route = isFolder ? 'tree' : 'blob';
    return `<a class="v3-inline-link" href="https://github.com/${REPO}/${route}/${BRANCH}/${escapeAttr(cleanPath)}">${escapeHtml(label)} ↗</a>`;
  }

  function setText(id, value) {
    const element = document.getElementById(id);
    if (element) element.textContent = String(value);
  }

  function showFatal(id, message) {
    const host = document.getElementById(id);
    if (host) host.innerHTML = `<div class="v3-error">${escapeHtml(message)}</div>`;
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
