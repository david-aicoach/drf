(() => {
  'use strict';

  const PORTFOLIO_PATH = 'businesses/PORTFOLIO-V3.md';
  const LEVELS = ['P0', 'P1', 'P2', 'P3', 'P4', 'P5', 'P6'];

  document.addEventListener('DOMContentLoaded', initialiseProofCounts);

  async function initialiseProofCounts() {
    try {
      const response = await fetch(`${PORTFOLIO_PATH}?proof-counts=${Date.now()}`, { cache: 'no-store' });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      const markdown = await response.text();
      const proofs = readProofColumn(markdown);
      await waitForPolicyFunnel();
      updateCounts(proofs);
    } catch (error) {
      console.error('DRF V3 proof counts could not initialise:', error);
    }
  }

  function readProofColumn(markdown) {
    const lines = markdown.replace(/\r/g, '').split('\n');
    const headingIndex = lines.findIndex(line => line.trim() === '## V3 master portfolio');
    if (headingIndex < 0) throw new Error('Missing V3 master portfolio heading');

    let headerIndex = -1;
    for (let index = headingIndex + 1; index < lines.length - 1; index += 1) {
      if (lines[index].trim().startsWith('|') && /^\s*\|?\s*:?-{3,}/.test(lines[index + 1])) {
        headerIndex = index;
        break;
      }
    }
    if (headerIndex < 0) throw new Error('Missing V3 portfolio table');

    const headers = splitRow(lines[headerIndex]).map(cleanCell);
    const proofIndex = headers.indexOf('DRF Proof');
    if (proofIndex < 0) throw new Error('Missing DRF Proof column');

    const proofs = [];
    for (let index = headerIndex + 2; index < lines.length; index += 1) {
      const line = lines[index].trim();
      if (!line.startsWith('|')) break;
      const cells = splitRow(line).map(cleanCell);
      if (cells.length !== headers.length) throw new Error(`Invalid V3 portfolio row ${index + 1}`);
      proofs.push(cells[proofIndex]);
    }
    return proofs;
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
      .replace(/\s+/g, ' ')
      .trim();
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

  function updateCounts(proofs) {
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
})();
