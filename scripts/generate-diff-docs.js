#!/usr/bin/env node

import { execSync } from 'node:child_process'
import { writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = dirname(__dirname)

// ANSI colors for better logging
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
}

const log = {
  info: (msg) => console.log(`${colors.blue}ℹ${colors.reset}  ${msg}`),
  success: (msg) => console.log(`${colors.green}✅${colors.reset} ${msg}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️${colors.reset}  ${msg}`),
  error: (msg) => console.log(`${colors.red}❌${colors.reset} ${msg}`),
  header: (msg) => console.log(`\n${colors.bright}${colors.cyan}${msg}${colors.reset}`),
}

// Function to safely execute shell commands and capture output
const safeExecSync = (command) => {
  try {
    return execSync(command, { encoding: 'utf8' }).trim()
  } catch {
    log.error(`Command failed: ${command}`)
    return null
  }
}

// Function to get a list of all affected files (excluding .gitignore + bun.lock)
const getAffectedFiles = () => {
  log.info('Getting list of affected files...')
  
  // Get both staged and unstaged changes
  const stagedFiles = safeExecSync('git diff --cached --name-only') || ''
  const unstagedFiles = safeExecSync('git diff --name-only') || ''
  
  // Combine and deduplicate files
  const allChangedFiles = new Set([
    ...stagedFiles.split('\n').filter(Boolean),
    ...unstagedFiles.split('\n').filter(Boolean)
  ])
  
  let files = Array.from(allChangedFiles)

  // Exclude files that shouldn't be included in the diff
  files = files.filter((f) => f !== 'bun.lock' && f !== 'git.changes.md')

  log.success(`Found ${files.length} affected files.`)
  return files
}

// Main function to generate the markdown file
// biome-ignore lint/suspicious/useAwait: main function is async for future-proofing
async function main() {
  log.header('🚀 Starting Git Change Documentation Generation...')

  const affectedFiles = getAffectedFiles()

  if (affectedFiles.length === 0) {
    log.warning('No changes to document. Exiting.')
    return
  }

  let fileContents = ''
  log.info('Fetching content for each changed file...')

  for (const file of affectedFiles) {
    try {
      // Get staged changes for this file
      const stagedDiff = safeExecSync(`git diff --cached -- "${file}"`) || ''
      // Get unstaged changes for this file
      const unstagedDiff = safeExecSync(`git diff -- "${file}"`) || ''
      
      // Combine both diffs if they exist
      const combinedDiff = [stagedDiff, unstagedDiff].filter(d => d.length > 0).join('\n')
      
      if (combinedDiff.length > 0) {
        fileContents += `### Diff: ${file}\n\n`
        fileContents += '```diff\n'
        fileContents += `${combinedDiff}\n`
        fileContents += '```\n\n'
      }
    } catch (diffError) {
      log.warning(`Could not get diff for ${file}: ${diffError.message}`)
    }
  }

  log.info('Compiling Markdown content...')
  const markdownContent = `
# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- ${affectedFiles.join('\n- ')}

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

${fileContents}

---

## 🤖 Prompt for Large Language Model

### Instructions:
Analyze the provided file paths and code diffs. Your task is to generate three separate, high-quality outputs:

1.  A concise, conventional commit message following the format \`<type>(<scope>): <subject>\`.
2.  A detailed commit description explaining what changed, why, and any relevant technical notes.

### Project Context:
This project uses **TypeScript**, **React**, **Tailwind CSS**, **ShadCN UI**, **Hono.js**, **Zustand**, **XState**, **Zod**, and **React Hook Form**. Preserve these terms and any other technical vocabulary as-is in your output.

### Desired Output Format:
Provide your response in a single block, with clear markdown headings for each section.

\`\`\`markdown
## ✅ Generated Commit Message

<Your concise, conventional commit message here.>

## 📖 Generated Commit Description

<Your detailed, multi-paragraph commit description here. Use bullet points for key changes or breaking changes.>

\`\`\`
`

  const outputFilePath = join(rootDir, 'git.changes.md')
  writeFileSync(outputFilePath, `${markdownContent.trim()}\n`)
  log.success(`Documentation saved to: ${outputFilePath}`)
}

// Handle CLI arguments
const args = process.argv.slice(2)
if (args.includes('--help') || args.includes('-h')) {
  console.log(`
${colors.bright}Git Change Documentation Script${colors.reset}

This script analyzes the current working directory's changes against the last commit
and generates a concise Markdown file for use with a Large Language Model.

${colors.bright}Usage:${colors.reset}
  node generate-diff-docs.js

${colors.bright}Features:${colors.reset}
  ✅ Documents only affected file paths
  ✅ Respects .gitignore rules
  ✅ Ignores bun.lock
  ✅ Provides a complete, unified diff of all code changes
  ✅ Includes a tailored prompt for an LLM
  ✅ Outputs a Markdown file ready for LLM processing
  `)
  process.exit(0)
}

main().catch(console.error)
