# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- package.json
- scripts/generate-diff-docs.js
- src/components/layout/sidebar/about-menu.tsx
- src/components/layout/toolbar/user-input.tsx

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: package.json

```diff
diff --git a/package.json b/package.json
index daf9ef5..de67caa 100644
--- a/package.json
+++ b/package.json
@@ -62,12 +62,13 @@
   },
   "scripts": {
     "build": "bunx vite build",
-    "dev": "bunx vite --force",
+    "dev": "bun run clean-vit-cache && bunx vite --force",
     "lint": "bunx biome check .",
     "lint:fix": "bunx biome check --write .",
     "format": "bunx biome format --write .",
     "preview": "bunx vite preview",
     "vite": "bunx vite",
+    "clean-vit-cache": "bun scripts/clean-vit-cache.js",
     "generate-diff-docs": "bun scripts/generate-diff-docs.js"
   },
   "packageManager": "bun@1.2.21"
```

### Diff: scripts/generate-diff-docs.js

```diff
diff --git a/scripts/generate-diff-docs.js b/scripts/generate-diff-docs.js
index 732b2e2..10c0dbb 100644
--- a/scripts/generate-diff-docs.js
+++ b/scripts/generate-diff-docs.js
@@ -41,16 +41,21 @@ const safeExecSync = (command) => {
 // Function to get a list of all affected files (excluding .gitignore + pnpm-lock.yaml)
 const getAffectedFiles = () => {
   log.info('Getting list of affected files...')
-  // --modified (M) and --others (untracked), exclude .gitignore rules
-  const statusOutput = safeExecSync('git ls-files --exclude-standard --others --modified')
-  if (!statusOutput) {
-    return []
-  }
-
-  let files = statusOutput.split('\n').filter(Boolean)
-
-  // Exclude pnpm-lock.yaml explicitly
-  files = files.filter((f) => f !== 'pnpm-lock.yaml')
+  
+  // Get both staged and unstaged changes
+  const stagedFiles = safeExecSync('git diff --cached --name-only') || ''
+  const unstagedFiles = safeExecSync('git diff --name-only') || ''
+  
+  // Combine and deduplicate files
+  const allChangedFiles = new Set([
+    ...stagedFiles.split('\n').filter(Boolean),
+    ...unstagedFiles.split('\n').filter(Boolean)
+  ])
+  
+  let files = Array.from(allChangedFiles)
+
+  // Exclude files that shouldn't be included in the diff
+  files = files.filter((f) => f !== 'pnpm-lock.yaml' && f !== 'git.changes.md')
 
   log.success(`Found ${files.length} affected files.`)
   return files
@@ -72,16 +77,19 @@ async function main() {
   log.info('Fetching content for each changed file...')
 
   for (const file of affectedFiles) {
-    const filePath = join(rootDir, file)
-    let diff = null
-
     try {
-      // Get the diff for the file
-      diff = safeExecSync(`git diff HEAD -- "${filePath}"`)
-      if (diff) {
+      // Get staged changes for this file
+      const stagedDiff = safeExecSync(`git diff --cached -- "${file}"`) || ''
+      // Get unstaged changes for this file
+      const unstagedDiff = safeExecSync(`git diff -- "${file}"`) || ''
+      
+      // Combine both diffs if they exist
+      const combinedDiff = [stagedDiff, unstagedDiff].filter(d => d.length > 0).join('\n')
+      
+      if (combinedDiff.length > 0) {
         fileContents += `### Diff: ${file}\n\n`
         fileContents += '```diff\n'
-        fileContents += `${diff}\n`
+        fileContents += `${combinedDiff}\n`
         fileContents += '```\n\n'
       }
     } catch (diffError) {
```

### Diff: src/components/layout/sidebar/about-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/about-menu.tsx b/src/components/layout/sidebar/about-menu.tsx
index 298ec14..891bfe3 100644
--- a/src/components/layout/sidebar/about-menu.tsx
+++ b/src/components/layout/sidebar/about-menu.tsx
@@ -1,6 +1,6 @@
 import { ChevronDownIcon } from '@heroicons/react/16/solid'
 import React from 'react'
-import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
+import { Button, MenuTrigger } from 'react-aria-components'
 import { Icon } from '@/components/icons'
 import { AboutModal } from '@/components/layout/sidebar/about-modal'
 
@@ -18,32 +18,6 @@ export const AboutMenu = () => {
           <span>Zen Sync</span>
           <ChevronDownIcon className="ml-1 size-4" />
         </Button>
-        <Popover className="ml-1 w-56 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
-          <Menu className="focus:outline-none">
-            <MenuSection className="p-2" key="zensync">
-              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Zen Sync</Header>
-              <MenuItem
-                className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                onAction={() => setShowAboutModal(true)}
-              >
-                About
-              </MenuItem>
-            </MenuSection>
-            <Separator className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />
-            <MenuSection className="p-2" key="livestore">
-              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">LiveStore</Header>
-              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
-                About
-              </MenuItem>
-              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
-                Documentation
-              </MenuItem>
-              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
-                GitHub
-              </MenuItem>
-            </MenuSection>
-          </Menu>
-        </Popover>
       </MenuTrigger>
       <AboutModal setShow={setShowAboutModal} show={showAboutModal} />
     </>
```

### Diff: src/components/layout/toolbar/user-input.tsx

```diff
diff --git a/src/components/layout/toolbar/user-input.tsx b/src/components/layout/toolbar/user-input.tsx
index 9c11588..7760571 100644
--- a/src/components/layout/toolbar/user-input.tsx
+++ b/src/components/layout/toolbar/user-input.tsx
@@ -10,7 +10,7 @@ export const UserInput = ({ className }: { className?: string }) => {
       <Input
         aria-label="Test User"
         autoComplete="off"
-        className="h-6 grow rounded border-none bg-neutral-800 bg-transparent px-1.5 text-neutral-300 text-xs placeholder:text-neutral-500 hover:bg-neutral-700 focus:border-none focus:bg-neutral-700 focus:outline-none focus:ring-0 lg:w-28 lg:grow-0"
+        className="h-6 grow rounded border-none bg-neutral-800 px-1.5 text-neutral-300 text-xs placeholder:text-neutral-500 hover:bg-neutral-700 focus:border-none focus:bg-neutral-700 focus:outline-none focus:ring-0 lg:w-28 lg:grow-0"
         onBlur={() => setFrontendState({ ...frontendState, user: frontendState.user || 'John Doe' })}
         onChange={(e) => setFrontendState({ ...frontendState, user: e.target.value })}
         placeholder="Test User"
```



---

## 🤖 Prompt for Large Language Model

### Instructions:
Analyze the provided file paths and code diffs. Your task is to generate three separate, high-quality outputs:

1.  A concise, conventional commit message following the format `<type>(<scope>): <subject>`.
2.  A detailed commit description explaining what changed, why, and any relevant technical notes.

### Project Context:
This project uses **TypeScript**, **React**, **Tailwind CSS**, **ShadCN UI**, **Hono.js**, **Zustand**, **XState**, **Zod**, and **React Hook Form**. Preserve these terms and any other technical vocabulary as-is in your output.

### Desired Output Format:
Provide your response in a single block, with clear markdown headings for each section.

```markdown
## ✅ Generated Commit Message

<Your concise, conventional commit message here.>

## 📖 Generated Commit Description

<Your detailed, multi-paragraph commit description here. Use bullet points for key changes or breaking changes.>

```
