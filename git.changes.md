# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- package.json
- scripts/generate-diff-docs.js

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: package.json

```diff
diff --git a/package.json b/package.json
index 8000ec7..eb3c72e 100644
--- a/package.json
+++ b/package.json
@@ -3,57 +3,41 @@
   "version": "0.0.0",
   "type": "module",
   "dependencies": {
-    "@headlessui/react": "2.2.7",
     "@heroicons/react": "2.2.0",
     "@livestore/adapter-web": "0.3.1",
     "@livestore/devtools-vite": "^0.3.1",
     "@livestore/livestore": "0.3.1",
-    "@livestore/peer-deps": "0.3.1",
     "@livestore/react": "0.3.1",
-    "@livestore/wa-sqlite": "1.0.5",
     "@overengineering/fps-meter": "0.2.1",
     "@tailwindcss/forms": "0.5.10",
     "@tiptap/core": "^3.4.1",
-    "@tiptap/extension-bubble-menu": "^3.4.1",
     "@tiptap/extension-placeholder": "^3.4.1",
-    "@tiptap/extension-table": "^3.4.1",
-    "@tiptap/extension-table-cell": "^3.4.1",
-    "@tiptap/extension-table-header": "^3.4.1",
-    "@tiptap/extension-table-row": "^3.4.1",
     "@tiptap/pm": "^3.4.1",
     "@tiptap/react": "^3.4.1",
     "@tiptap/starter-kit": "^3.4.1",
     "animate.css": "4.1.1",
-    "classnames": "2.5.1",
     "fractional-indexing": "3.2.0",
     "react": "19.1.1",
     "react-aria": "3.43.1",
     "react-aria-components": "1.12.1",
-    "react-beautiful-dnd": "13.1.1",
     "react-dom": "19.1.1",
-    "react-icons": "5.5.0",
     "react-markdown": "10.1.0",
     "react-router-dom": "7.8.2",
     "react-virtualized-auto-sizer": "1.0.26",
-    "react-window": "2.0.2",
     "tiptap-markdown": "0.8.10"
   },
   "devDependencies": {
     "@biomejs/biome": "2.2.2",
     "@svgr/plugin-jsx": "^8.1.0",
     "@svgr/plugin-svgo": "^8.1.0",
-    "@tailwindcss/postcss": "latest",
     "@tailwindcss/typography": "^0.5.16",
     "@tailwindcss/vite": "^4.1.12",
     "@types/node": "^24.3.1",
     "@types/react": "^19.1.12",
-    "@types/react-beautiful-dnd": "^13.1.8",
     "@types/react-dom": "^19.1.9",
-    "@types/react-router-dom": "^5.3.3",
-    "@types/react-window": "^1.8.8",
     "@vitejs/plugin-react": "^5.0.2",
     "husky": "^9.1.7",
-    "prompt": "^1.3.0",
+    "knip": "^5.63.1",
     "tailwindcss": "^4.1.12",
     "typescript": "^5.9.2",
     "ultracite": "^5.3.3",
@@ -68,7 +52,7 @@
     "format": "bunx biome format --write .",
     "preview": "bunx vite preview",
     "vite": "bunx vite",
-    "clean-vit-cache": "bun scripts/clean-vit-cache.js",
+    "clean-vite-cache": "bun scripts/clean-vite-cache.js",
     "generate-diff-docs": "bun scripts/generate-diff-docs.js"
   },
   "packageManager": "bun@1.2.21"
```

### Diff: scripts/generate-diff-docs.js

```diff
diff --git a/scripts/generate-diff-docs.js b/scripts/generate-diff-docs.js
index 10c0dbb..b334294 100644
--- a/scripts/generate-diff-docs.js
+++ b/scripts/generate-diff-docs.js
@@ -38,7 +38,7 @@ const safeExecSync = (command) => {
   }
 }
 
-// Function to get a list of all affected files (excluding .gitignore + pnpm-lock.yaml)
+// Function to get a list of all affected files (excluding .gitignore + bun.lock)
 const getAffectedFiles = () => {
   log.info('Getting list of affected files...')
   
@@ -55,7 +55,7 @@ const getAffectedFiles = () => {
   let files = Array.from(allChangedFiles)
 
   // Exclude files that shouldn't be included in the diff
-  files = files.filter((f) => f !== 'pnpm-lock.yaml' && f !== 'git.changes.md')
+  files = files.filter((f) => f !== 'bun.lock' && f !== 'git.changes.md')
 
   log.success(`Found ${files.length} affected files.`)
   return files
@@ -167,7 +167,7 @@ ${colors.bright}Usage:${colors.reset}
 ${colors.bright}Features:${colors.reset}
   ✅ Documents only affected file paths
   ✅ Respects .gitignore rules
-  ✅ Ignores pnpm-lock.yaml
+  ✅ Ignores bun.lock
   ✅ Provides a complete, unified diff of all code changes
   ✅ Includes a tailored prompt for an LLM
   ✅ Outputs a Markdown file ready for LLM processing
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
