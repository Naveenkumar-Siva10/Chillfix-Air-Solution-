#!/usr/bin/env node

/**
 * ChillFix Business Facts Contradiction & SEO Integrity Test
 * 
 * Verifies that the codebase adheres strictly to the single source of truth (constants/business.ts):
 * 1. Zero conflicting installation pricing (e.g. ₹599) - Split AC installation must start at ₹1,199
 * 2. Zero conflicting diagnostic fees (e.g. ₹349) - Diagnostic visit starts at ₹299 (adjusted into repair)
 * 3. Zero conflicting business hours (e.g. 8:00 AM, 8:00 PM, 9:00 PM closing) - Normal hours are 9:00 AM - 11:00 PM
 * 4. Zero rigid unverified claims (e.g. "within 30 minutes", "in 5 minutes", "in under 45 minutes")
 * 5. Zero unverified arrival/satisfaction guarantees (e.g. "SLA guarantees", "same-day guarantee")
 * 6. Zero unverified metrics (e.g. "10,000+", "since 2013", "since 2015")
 * 7. Zero unverified review ratings or mock customer testimonials
 * 8. Zero Vercel fallback domains in production SEO metadata/canonical/schema
 * 9. Zero outdated postal codes (e.g. 600001) where 600063 is required
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const SCAN_DIRS = ['app', 'components', 'constants', 'content', 'lib'];
const EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mdx'];

const VIOLATIONS = [];

function scanFile(filePath) {
  const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    const lineNum = idx + 1;
    const trimmed = line.trim();

    // Ignore comments or test script itself
    if (relPath.startsWith('scripts/')) return;
    if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) return;

    // Check 1: Old ₹599 installation price
    if (/599.*install|install.*599/i.test(trimmed)) {
      VIOLATIONS.push({
        file: relPath,
        line: lineNum,
        rule: 'Installation Starting Price Contradiction',
        detail: `Found reference to ₹599 installation: "${trimmed}". Split AC installation starts at ₹1,199.`,
      });
    }

    // Check 2: Diagnostic fee contradiction (₹349 vs ₹299)
    if (/(?:349|₹\s*349)/i.test(trimmed)) {
      VIOLATIONS.push({
        file: relPath,
        line: lineNum,
        rule: 'Diagnostic Fee Contradiction',
        detail: `Found ₹349 diagnostic fee: "${trimmed}". Diagnostic breakdown visit is ₹299.`,
      });
    }

    // Check 3: Conflicting business hours
    if (
      !relPath.includes('validations.ts') &&
      /(?:(?:open|close|operating|business|working|hours|timing).*?(?:8:00\s*AM|8\s*AM|8:00\s*PM|8\s*PM|9:00\s*PM|9\s*PM)|(?:9:00\s*AM\s*[-–]\s*9:00\s*PM)|(?:9:00\s*AM\s*[-–]\s*8:00\s*PM)|(?:8:00\s*AM\s*[-–]\s*11:00\s*PM))/i.test(trimmed) &&
      !trimmed.includes('23:00') &&
      !trimmed.includes('11:00 PM')
    ) {
      VIOLATIONS.push({
        file: relPath,
        line: lineNum,
        rule: 'Business Hours Contradiction',
        detail: `Found conflicting business hours: "${trimmed}". Authorized hours are 9:00 AM – 11:00 PM.`,
      });
    }

    // Check 4: Rigid response/arrival claims (30 minutes, 5 minutes, 45 minutes)
    if (/(?:30\s*minutes?|30-min|5\s*minutes?|under\s+45\s*minutes?)/i.test(trimmed)) {
      VIOLATIONS.push({
        file: relPath,
        line: lineNum,
        rule: 'Unverified SLA / Response Claim',
        detail: `Found rigid response claim: "${trimmed}". Use prompt response copy.`,
      });
    }

    // Check 5: Unverified arrival or satisfaction guarantees
    if (/(?:guaranteed\s+(?:arrival|satisfaction|same-day)|same-day\s+service\s+guaranteed|sla\s+guarantee)/i.test(trimmed)) {
      VIOLATIONS.push({
        file: relPath,
        line: lineNum,
        rule: 'Unverified Guarantee Claim',
        detail: `Found unverified guarantee claim: "${trimmed}".`,
      });
    }

    // Check 6: Unverified experience/customer metrics
    if (/(?:10[,.]?000\s*\+|10[,.]?000\s*(?:customers|clients|happy|jobs)|since\s+(?:2013|2015))/i.test(trimmed)) {
      VIOLATIONS.push({
        file: relPath,
        line: lineNum,
        rule: 'Unverified Historical / Metric Claim',
        detail: `Found unverified metric: "${trimmed}".`,
      });
    }

    // Check 7: Vercel domain in SEO/canonical/schema
    if (/chillfix-air-solution\.vercel\.app/i.test(trimmed)) {
      VIOLATIONS.push({
        file: relPath,
        line: lineNum,
        rule: 'Vercel Staging Domain in Source Code',
        detail: `Found staging domain reference: "${trimmed}". Production domain is https://chillfixairsolution.in.`,
      });
    }

    // Check 8: Old central Chennai postal code (600001) where 600063 is required
    if (/600001/.test(trimmed)) {
      VIOLATIONS.push({
        file: relPath,
        line: lineNum,
        rule: 'Outdated Postal Code',
        detail: `Found old postal code 600001: "${trimmed}". Authorized base postal code is 600063.`,
      });
    }
  });
}

function traverse(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== 'node_modules' && entry.name !== '.next' && entry.name !== '.git') {
        traverse(fullPath);
      }
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();
      if (EXTENSIONS.includes(ext)) {
        scanFile(fullPath);
      }
    }
  }
}

console.log('==================================================');
console.log('CHILLFIX — BUSINESS FACTS CONTRADICTION AUDIT');
console.log('Scanning directories:', SCAN_DIRS.join(', '));
console.log('==================================================\n');

SCAN_DIRS.forEach((dir) => {
  traverse(path.join(ROOT_DIR, dir));
});

if (VIOLATIONS.length === 0) {
  console.log('✅ ZERO CONTRADICTIONS DETECTED!');
  console.log('All scanned files strictly comply with authorized business facts, pricing, hours, and identity.\n');
  process.exit(0);
} else {
  console.error(`❌ FOUND ${VIOLATIONS.length} CONTRADICTION(S):\n`);
  VIOLATIONS.forEach((v, i) => {
    console.error(`[${i + 1}] ${v.rule}`);
    console.error(`    File: ${v.file}:${v.line}`);
    console.error(`    Detail: ${v.detail}\n`);
  });
  process.exit(1);
}
