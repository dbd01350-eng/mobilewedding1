#!/usr/bin/env node
/**
 * Common Element Extractor & Consistency Checker
 * - Parses HTML/CSS files in the workspace
 * - Extracts shared structural patterns (head tags, fonts, styles, scripts)
 * - Identifies structural differences or missing tags across files
 */

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const ROOT_DIR = process.cwd();

// Find all HTML files in workspace
function findHtmlFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    if (file === 'node_modules' || file === '.git' || file === '.gemini' || file === '.agents') continue;
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findHtmlFiles(fullPath));
    } else if (file.endsWith('.html')) {
      results.push(fullPath);
    }
  }
  return results;
}

// Extract key tags from HTML
function analyzeHtml(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  return {
    filePath: path.relative(ROOT_DIR, filePath),
    hasViewport: /<meta\s+name=["']viewport["']/i.test(content),
    hasStyleSheet: /<link\s+rel=["']stylesheet["']/i.test(content),
    hasFonts: /fonts\.googleapis\.com/i.test(content) || /fonts\.gstatic\.com/i.test(content),
    hasMainJs: /<script\s+src=["'][^"']*main\.js["']/i.test(content),
    hasNaverMapSdk: /oapi\.map\.naver\.com/i.test(content),
    hasCheckeredBg: /assets\/background_checkered_paper\.svg/i.test(content),
    hasContainer: /class=["'][^"']*invitation-container[^"']*["']/i.test(content),
  };
}

function main() {
  const htmlFiles = findHtmlFiles(ROOT_DIR);
  console.log(`\n🔍 [Extract-Common] Analyzing ${htmlFiles.length} HTML file(s) in workspace...\n`);

  if (htmlFiles.length === 0) {
    console.log('No HTML files found.');
    return;
  }

  const reports = htmlFiles.map(analyzeHtml);
  let totalIssues = 0;

  reports.forEach(r => {
    console.log(`📄 [File: ${r.filePath}]`);
    const missing = [];
    if (!r.hasViewport) missing.push('Viewport Meta Tag (<meta name="viewport">)');
    if (!r.hasStyleSheet) missing.push('StyleSheet Link (<link rel="stylesheet">)');
    if (!r.hasMainJs) missing.push('Main Script (<script src="js/main.js">)');
    if (!r.hasContainer) missing.push('Main Layout Container (.invitation-container)');

    if (missing.length > 0) {
      totalIssues += missing.length;
      console.log(`  ❌ 누락 요소: ${missing.join(', ')}`);
    } else {
      console.log(`  ✅ 공통 필수 구조 준수 (Viewport, CSS, Script, Container 확인 완료)`);
    }

    console.log(`  - 배경 체크 페이퍼: ${r.hasCheckeredBg ? '포함' : '미포함'}`);
    console.log(`  - 네이버 지도 SDK: ${r.hasNaverMapSdk ? '연결됨' : '미연결'}`);
    console.log('');
  });

  if (totalIssues === 0) {
    console.log('🎉 [Extract-Common] All analyzed files maintain consistent shared structures.\n');
    process.exit(0);
  } else {
    console.log(`⚠️ [Extract-Common] Found ${totalIssues} structural inconsistency issue(s).\n`);
    process.exit(1);
  }
}

main();
