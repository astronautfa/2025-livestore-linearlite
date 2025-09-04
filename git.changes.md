# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- git.changes.md
- src/app/app.tsx
- src/app/main.tsx
- src/components/common/avatar.tsx
- src/components/common/editor-menu.tsx
- src/components/common/modal.tsx
- src/components/common/priority-menu.tsx
- src/components/common/shortcut.tsx
- src/components/common/status-menu.tsx
- src/components/icons/backlog.tsx
- src/components/icons/canceled.tsx
- src/components/icons/done.tsx
- src/components/icons/filter.tsx
- src/components/icons/in-progress.tsx
- src/components/icons/index.tsx
- src/components/icons/linear-lite.tsx
- src/components/icons/livestore.tsx
- src/components/icons/new-issue.tsx
- src/components/icons/priority-high.tsx
- src/components/icons/priority-low.tsx
- src/components/icons/priority-medium.tsx
- src/components/icons/priority-none.tsx
- src/components/icons/priority-urgent.tsx
- src/components/icons/sidebar.tsx
- src/components/icons/todo.tsx
- src/components/layout/board/card.tsx
- src/components/layout/board/column.tsx
- src/components/layout/board/index.tsx
- src/components/layout/filters/header.tsx
- src/components/layout/filters/index.tsx
- src/components/layout/filters/priority-filter.tsx
- src/components/layout/filters/sort-menu.tsx
- src/components/layout/filters/status-filter.tsx
- src/components/layout/issue/back-button.tsx
- src/components/layout/issue/comment-input.tsx
- src/components/layout/issue/comments.tsx
- src/components/layout/issue/delete-button.tsx
- src/components/layout/issue/description-input.tsx
- src/components/layout/issue/index.tsx
- src/components/layout/issue/new-issue-modal.tsx
- src/components/layout/issue/title-input.tsx
- src/components/layout/list/filtered-list.tsx
- src/components/layout/list/index.tsx
- src/components/layout/search/index.tsx
- src/components/layout/search/search-bar.tsx
- src/components/layout/sidebar/about-menu.tsx
- src/components/layout/sidebar/about-modal.tsx
- src/components/layout/sidebar/index.tsx
- src/components/layout/sidebar/mobile-menu.tsx
- src/components/layout/sidebar/new-issue-button.tsx
- src/components/layout/sidebar/search-button.tsx
- src/components/layout/sidebar/theme-button.tsx
- src/components/layout/toolbar/devtools-button.tsx
- src/components/layout/toolbar/download-button.tsx
- src/components/layout/toolbar/index.tsx
- src/components/layout/toolbar/mobile-menu.tsx
- src/components/layout/toolbar/reset-button.tsx
- src/components/layout/toolbar/seed-input.tsx
- src/components/layout/toolbar/share-button.tsx
- src/components/layout/toolbar/sync-toggle.tsx
- src/components/layout/toolbar/toolbar-button.tsx
- src/components/layout/toolbar/user-input.tsx
- src/lib/livestore/queries.ts
- src/lib/livestore/utils.tsx
- tsconfig.json

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: git.changes.md

```diff
diff --git a/git.changes.md b/git.changes.md
deleted file mode 100644
index 98b7784..0000000
--- a/git.changes.md
+++ /dev/null
@@ -1,2875 +0,0 @@
-# Changes for Commit
-
-This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.
-
----
-
-## 📂 Affected Files
-
-The following files have been modified, added, or deleted:
-
-- bun.lock
-- tailwind.config.js
-- .gitignore
-- README.md
-- biome.json
-- package.json
-- src/app/app.tsx
-- src/app/provider.tsx
-- src/app/style.css
-- src/components/common/avatar.tsx
-- src/components/common/editor-menu.tsx
-- src/components/common/editor.tsx
-- src/components/common/menu-button.tsx
-- src/components/common/modal.tsx
-- src/components/common/priority-menu.tsx
-- src/components/common/shortcut.tsx
-- src/components/common/status-menu.tsx
-- src/components/icons/backlog.tsx
-- src/components/icons/canceled.tsx
-- src/components/icons/done.tsx
-- src/components/icons/filter.tsx
-- src/components/icons/in-progress.tsx
-- src/components/icons/linear-lite.tsx
-- src/components/icons/livestore.tsx
-- src/components/icons/new-issue.tsx
-- src/components/icons/priority-high.tsx
-- src/components/icons/priority-low.tsx
-- src/components/icons/priority-medium.tsx
-- src/components/icons/priority-none.tsx
-- src/components/icons/priority-urgent.tsx
-- src/components/icons/sidebar.tsx
-- src/components/icons/todo.tsx
-- src/components/layout/board/card.tsx
-- src/components/layout/board/column.tsx
-- src/components/layout/board/draggable.tsx
-- src/components/layout/board/index.tsx
-- src/components/layout/filters/filter-menu.tsx
-- src/components/layout/filters/header.tsx
-- src/components/layout/filters/index.tsx
-- src/components/layout/filters/priority-filter.tsx
-- src/components/layout/filters/sort-menu.tsx
-- src/components/layout/filters/status-filter.tsx
-- src/components/layout/index.tsx
-- src/components/layout/issue/back-button.tsx
-- src/components/layout/issue/comment-input.tsx
-- src/components/layout/issue/comments.tsx
-- src/components/layout/issue/delete-button.tsx
-- src/components/layout/issue/description-input.tsx
-- src/components/layout/issue/index.tsx
-- src/components/layout/issue/new-issue-modal.tsx
-- src/components/layout/issue/title-input.tsx
-- src/components/layout/list/filtered-list.tsx
-- src/components/layout/list/row.tsx
-- src/components/layout/list/virtual-row.tsx
-- src/components/layout/search/search-bar.tsx
-- src/components/layout/sidebar/about-menu.tsx
-- src/components/layout/sidebar/about-modal.tsx
-- src/components/layout/sidebar/index.tsx
-- src/components/layout/sidebar/mobile-menu.tsx
-- src/components/layout/sidebar/new-issue-button.tsx
-- src/components/layout/sidebar/search-button.tsx
-- src/components/layout/sidebar/theme-button.tsx
-- src/components/layout/toolbar/devtools-button.tsx
-- src/components/layout/toolbar/download-button.tsx
-- src/components/layout/toolbar/index.tsx
-- src/components/layout/toolbar/mobile-menu.tsx
-- src/components/layout/toolbar/reset-button.tsx
-- src/components/layout/toolbar/seed-input.tsx
-- src/components/layout/toolbar/share-button.tsx
-- src/components/layout/toolbar/sync-toggle.tsx
-- src/components/layout/toolbar/toolbar-button.tsx
-- src/components/layout/toolbar/user-input.tsx
-- src/lib/livestore/utils.tsx
-- tailwind.config.cjs
-- tsconfig.json
-
----
-
-## 📝 Code Differences (Diff)
-
-Below are the detailed diffs for each affected file.
-
-### Diff: .gitignore
-
-```diff
-diff --git a/.gitignore b/.gitignore
-index aa4bc87..99a5d50 100644
---- a/.gitignore
-+++ b/.gitignore
-@@ -4,7 +4,7 @@ logs
- npm-debug.log*
- yarn-debug.log*
- yarn-error.log*
--pnpm-debug.log*
-+bun-debug.log*
- lerna-debug.log*
- 
- node_modules
-@@ -28,3 +28,5 @@ public/wa-sqlite-async.wasm
- 
- src/generated/
- db/data/
-+
-+git.changes.md
-\ No newline at end of file
-```
-
-### Diff: README.md
-
-```diff
-diff --git a/README.md b/README.md
-index 7d9ec63..d4547a5 100644
---- a/README.md
-+++ b/README.md
-@@ -1 +1,44 @@
--# 2025-livestore-linearlite
-\ No newline at end of file
-+# 2025-livestore-linearlite
-+
-+A modern React application built with Vite, TypeScript, and Tailwind CSS, using Bun as the runtime and package manager.
-+
-+## Prerequisites
-+
-+- [Bun](https://bun.sh/) - A fast JavaScript runtime and package manager
-+
-+## Installation
-+
-+```bash
-+# Install dependencies
-+bun install
-+
-+# Start development server
-+bun run dev
-+
-+# Build for production
-+bun run build
-+
-+# Preview production build
-+bun run preview
-+```
-+
-+## Available Scripts
-+
-+- `bun run dev` - Start development server
-+- `bun run build` - Build for production
-+- `bun run preview` - Preview production build
-+- `bun run lint` - Run linting
-+- `bun run lint:fix` - Fix linting issues
-+- `bun run format` - Format code
-+- `bun run generate-diff-docs` - Generate diff documentation
-+
-+## Development
-+
-+This project uses:
-+- **Bun** - Runtime and package manager
-+- **React 19** - UI framework
-+- **TypeScript** - Type safety
-+- **Vite** - Build tool
-+- **Tailwind CSS** - Styling
-+- **Biome** - Linting and formatting
-+- **LiveStore** - State management
-\ No newline at end of file
-```
-
-### Diff: biome.json
-
-```diff
-diff --git a/biome.json b/biome.json
-index 03bc32a..6fda973 100644
---- a/biome.json
-+++ b/biome.json
-@@ -15,7 +15,7 @@
-       "!**/src/generated/",
-       "!**/db/data/",
-       "!**/wa-sqlite-async.mjs",
--      "!**/tailwind.config.cjs"
-+      "!**/tailwind.config.js"
-     ]
-   },
-   "formatter": {
-@@ -32,12 +32,18 @@
-     "rules": {
-       "recommended": true,
-       "correctness": {
--        "noUnusedVariables": "error"
-+        "noUnusedVariables": "error",
-+        "noUnusedImports": {
-+          "level": "error",
-+          "options": {}
-+        }
-       },
-       "style": {
-         "noNonNullAssertion": "warn",
-+        "useBlockStatements": "error",
-         "useConst": "error",
--        "useImportType": "error"
-+        "useImportType": "error",
-+        "useTemplate": "error"
-       },
-       "suspicious": {
-         "noExplicitAny": "warn",
-@@ -54,10 +60,7 @@
-       "trailingCommas": "all",
-       "quoteStyle": "single"
-     },
--    "globals": [
--      "console",
--      "process"
--    ]
-+    "globals": ["console", "process"]
-   },
-   "json": {
-     "formatter": {
-@@ -69,7 +72,5 @@
-       "enabled": true
-     }
-   },
--  "extends": [
--    "ultracite"
--  ]
--}
-\ No newline at end of file
-+  "extends": ["ultracite"]
-+}
-```
-
-### Diff: package.json
-
-```diff
-diff --git a/package.json b/package.json
-index 4a1c5b4..daf9ef5 100644
---- a/package.json
-+++ b/package.json
-@@ -1,40 +1,41 @@
- {
--  "name": "livestore-example-standalone-web-linearlite",
-+  "name": "@app/zensync",
-   "version": "0.0.0",
-   "type": "module",
-   "dependencies": {
--    "@headlessui/react": "2.2.1",
-+    "@headlessui/react": "2.2.7",
-     "@heroicons/react": "2.2.0",
--    "@livestore/adapter-web": "0.3.0-dev.33",
--    "@livestore/devtools-vite": "0.3.0-dev.33",
--    "@livestore/livestore": "0.3.0-dev.33",
--    "@livestore/peer-deps": "0.3.0-dev.33",
--    "@livestore/react": "0.3.0-dev.33",
--    "@livestore/wa-sqlite": "1.0.5-dev.2",
--    "@overengineering/fps-meter": "0.1.2",
-+    "@livestore/adapter-web": "0.3.1",
-+    "@livestore/devtools-vite": "^0.3.1",
-+    "@livestore/livestore": "0.3.1",
-+    "@livestore/peer-deps": "0.3.1",
-+    "@livestore/react": "0.3.1",
-+    "@livestore/wa-sqlite": "1.0.5",
-+    "@overengineering/fps-meter": "0.2.1",
-     "@tailwindcss/forms": "0.5.10",
--    "@tiptap/core": "2.11.5",
--    "@tiptap/extension-placeholder": "2.11.5",
--    "@tiptap/extension-table": "2.11.5",
--    "@tiptap/extension-table-cell": "2.11.5",
--    "@tiptap/extension-table-header": "2.11.5",
--    "@tiptap/extension-table-row": "2.11.5",
--    "@tiptap/pm": "2.11.5",
--    "@tiptap/react": "2.11.7",
--    "@tiptap/starter-kit": "2.11.5",
-+    "@tiptap/core": "^3.4.1",
-+    "@tiptap/extension-bubble-menu": "^3.4.1",
-+    "@tiptap/extension-placeholder": "^3.4.1",
-+    "@tiptap/extension-table": "^3.4.1",
-+    "@tiptap/extension-table-cell": "^3.4.1",
-+    "@tiptap/extension-table-header": "^3.4.1",
-+    "@tiptap/extension-table-row": "^3.4.1",
-+    "@tiptap/pm": "^3.4.1",
-+    "@tiptap/react": "^3.4.1",
-+    "@tiptap/starter-kit": "^3.4.1",
-     "animate.css": "4.1.1",
-     "classnames": "2.5.1",
-     "fractional-indexing": "3.2.0",
--    "react": "19.0.0",
--    "react-aria": "3.39.0",
--    "react-aria-components": "1.8.0",
-+    "react": "19.1.1",
-+    "react-aria": "3.43.1",
-+    "react-aria-components": "1.12.1",
-     "react-beautiful-dnd": "13.1.1",
--    "react-dom": "19.0.0",
-+    "react-dom": "19.1.1",
-     "react-icons": "5.5.0",
-     "react-markdown": "10.1.0",
--    "react-router-dom": "7.5.0",
-+    "react-router-dom": "7.8.2",
-     "react-virtualized-auto-sizer": "1.0.26",
--    "react-window": "1.8.11",
-+    "react-window": "2.0.2",
-     "tiptap-markdown": "0.8.10"
-   },
-   "devDependencies": {
-@@ -42,31 +43,32 @@
-     "@svgr/plugin-jsx": "^8.1.0",
-     "@svgr/plugin-svgo": "^8.1.0",
-     "@tailwindcss/typography": "^0.5.16",
--    "@tailwindcss/vite": "^4.0.12",
--    "@types/node": "^22.13.10",
--    "@types/react": "^19.1.2",
-+    "@tailwindcss/postcss": "latest",
-+    "@tailwindcss/vite": "^4.1.12",
-+    "@types/node": "^24.3.1",
-+    "@types/react": "^19.1.12",
-     "@types/react-beautiful-dnd": "^13.1.8",
--    "@types/react-dom": "^19.0.4",
-+    "@types/react-dom": "^19.1.9",
-     "@types/react-router-dom": "^5.3.3",
-     "@types/react-window": "^1.8.8",
--    "@vitejs/plugin-react": "^4.3.4",
-+    "@vitejs/plugin-react": "^5.0.2",
-     "husky": "^9.1.7",
-     "prompt": "^1.3.0",
--    "tailwindcss": "^4.0.12",
--    "typescript": "^5.8.3",
--    "ultracite": "^5.3.1",
--    "vite": "^6.2.1",
--    "vite-plugin-svgr": "^4.3.0"
-+    "tailwindcss": "^4.1.12",
-+    "typescript": "^5.9.2",
-+    "ultracite": "^5.3.3",
-+    "vite": "^7.1.4",
-+    "vite-plugin-svgr": "^4.5.0"
-   },
-   "scripts": {
--    "build": "vite build",
--    "dev": "vite --force",
--    "lint": "biome check .",
--    "lint:fix": "biome check --write .",
--    "format": "biome format --write .",
--    "preview": "vite preview",
--    "vite": "vite",
--    "generate-diff-docs": "node scripts/generate-diff-docs.js"
-+    "build": "bunx vite build",
-+    "dev": "bunx vite --force",
-+    "lint": "bunx biome check .",
-+    "lint:fix": "bunx biome check --write .",
-+    "format": "bunx biome format --write .",
-+    "preview": "bunx vite preview",
-+    "vite": "bunx vite",
-+    "generate-diff-docs": "bun scripts/generate-diff-docs.js"
-   },
--  "packageManager": "pnpm@10.15.1+sha512.34e538c329b5553014ca8e8f4535997f96180a1d0f614339357449935350d924e22f8614682191264ec33d1462ac21561aff97f6bb18065351c162c7e8f6de67"
-+  "packageManager": "bun@1.2.21"
- }
-```
-
-### Diff: src/app/app.tsx
-
-```diff
-diff --git a/src/app/app.tsx b/src/app/app.tsx
-index 96a2281..2ab939b 100644
---- a/src/app/app.tsx
-+++ b/src/app/app.tsx
-@@ -13,10 +13,10 @@ import { BrowserRouter, Route, Routes } from 'react-router-dom'
- export const App = () => {
-   const router = (
-     <Routes>
--      <Route path="/" element={<List />} />
--      <Route path="/search" element={<Search />} />
--      <Route path="/board" element={<Board />} />
--      <Route path="/issue/:id" element={<Issue />} />
-+      <Route element={<List />} path="/" />
-+      <Route element={<Search />} path="/search" />
-+      <Route element={<Board />} path="/board" />
-+      <Route element={<Issue />} path="/issue/:id" />
-     </Routes>
-   )
- 
-@@ -25,8 +25,8 @@ export const App = () => {
-       <Provider>
-         <Layout>
-           <Sidebar className="hidden lg:flex" />
--          <div className="w-full lg:max-w-[calc(100%-16rem)] p-2 lg:pl-0">
--            <main className="flex flex-col h-full border border-neutral-200 dark:border-neutral-700 rounded-lg">
-+          <div className="w-full p-2 lg:max-w-[calc(100%-16rem)] lg:pl-0">
-+            <main className="flex h-full flex-col rounded-lg border border-neutral-200 dark:border-neutral-700">
-               {router}
-             </main>
-           </div>
-```
-
-### Diff: src/app/provider.tsx
-
-```diff
-diff --git a/src/app/provider.tsx b/src/app/provider.tsx
-index 40a5751..7411c24 100644
---- a/src/app/provider.tsx
-+++ b/src/app/provider.tsx
-@@ -35,11 +35,9 @@ export const Provider = ({ children }: { children: React.ReactNode }) => {
-     const handleKeyDown = (e: KeyboardEvent) => {
-       const element = e.target as HTMLElement
-       if (element.classList.contains('input')) return
--      if (e.key === 'c') {
--        if (!element.classList.contains('input')) {
--          setNewIssueModalStatus(0)
--          e.preventDefault()
--        }
-+      if (e.key === 'c' && !element.classList.contains('input')) {
-+        setNewIssueModalStatus(0)
-+        e.preventDefault()
-       }
-       if (e.key === '/' && e.shiftKey) {
-         navigate('/search')
-@@ -51,7 +49,7 @@ export const Provider = ({ children }: { children: React.ReactNode }) => {
-   }, [navigate])
- 
-   return (
--    <LiveStoreProvider schema={schema} adapter={adapter} renderLoading={renderBootStatus} batchUpdates={batchUpdates}>
-+    <LiveStoreProvider adapter={adapter} batchUpdates={batchUpdates} renderLoading={renderBootStatus} schema={schema}>
-       <MenuContext.Provider value={{ showMenu, setShowMenu }}>
-         <NewIssueModalContext.Provider value={{ newIssueModalStatus, setNewIssueModalStatus }}>
-           {children}
-```
-
-### Diff: src/app/style.css
-
-```diff
-diff --git a/src/app/style.css b/src/app/style.css
-index 1336182..0f9b7cd 100644
---- a/src/app/style.css
-+++ b/src/app/style.css
-@@ -1,6 +1,6 @@
- @import "tailwindcss";
- 
--@config "../../tailwind.config.cjs";
-+@config "../../tailwind.config.js";
- 
- body {
-   @apply bg-white text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-200 antialiased;
-```
-
-### Diff: src/components/common/avatar.tsx
-
-```diff
-diff --git a/src/components/common/avatar.tsx b/src/components/common/avatar.tsx
-index 81dcadd..102ae00 100644
---- a/src/components/common/avatar.tsx
-+++ b/src/components/common/avatar.tsx
-@@ -2,9 +2,11 @@ import React from 'react'
- import { getAcronym } from '@/utils/get-acronym'
- 
- export const Avatar = ({ name }: { name?: string }) => {
--  if (!name) name = 'Me'
-+  if (!name) {
-+    name = 'Me'
-+  }
-   return (
--    <div className="size-6 shrink-0 rounded-full flex items-center justify-center bg-neutral-200 dark:bg-neutral-600 text-xs font-medium text-neutral-500 dark:text-neutral-300">
-+    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 font-medium text-neutral-500 text-xs dark:bg-neutral-600 dark:text-neutral-300">
-       {getAcronym(name)}
-     </div>
-   )
-```
-
-### Diff: src/components/common/editor-menu.tsx
-
-```diff
-diff --git a/src/components/common/editor-menu.tsx b/src/components/common/editor-menu.tsx
-index 0a0d9ad..177e10c 100644
---- a/src/components/common/editor-menu.tsx
-+++ b/src/components/common/editor-menu.tsx
-@@ -6,62 +6,62 @@ import type { Editor as TipTapEditor } from '@tiptap/react'
- import React from 'react'
- import { Button } from 'react-aria-components'
- 
--export interface EditorMenuProps {
-+export type EditorMenuProps = {
-   editor: TipTapEditor
- }
- 
- const EditorMenu = ({ editor }: EditorMenuProps) => {
-   return (
--    <div className="bg-white flex items-center shadow-md rounded-lg border border-neutral-200 text-neutral-500">
--      <div className="flex items-center gap-px p-1 border-r border-neutral-200">
-+    <div className="flex items-center rounded-lg border border-neutral-200 bg-white text-neutral-500 shadow-md">
-+      <div className="flex items-center gap-px border-neutral-200 border-r p-1">
-         <Button
--          onPress={() => editor.chain().focus().toggleBold().run()}
-+          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('bold') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-           isDisabled={!editor.can().chain().focus().toggleBold().run()}
--          className={`rounded-md size-7 shrink-0 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none focus:bg-neutral-100 ${editor.isActive('bold') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-+          onPress={() => editor.chain().focus().toggleBold().run()}
-         >
-           <BoldIcon className="size-4" />
-         </Button>
-         <Button
--          onPress={() => editor.chain().focus().toggleItalic().run()}
-+          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('italic') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-           isDisabled={!editor.can().chain().focus().toggleItalic().run()}
--          className={`rounded-md size-7 shrink-0 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none focus:bg-neutral-100 ${editor.isActive('italic') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-+          onPress={() => editor.chain().focus().toggleItalic().run()}
-         >
-           <ItalicIcon className="size-4" />
-         </Button>
-         <Button
--          onPress={() => editor.chain().focus().toggleStrike().run()}
-+          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('strike') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-           isDisabled={!editor.can().chain().focus().toggleStrike().run()}
--          className={`rounded-md size-7 shrink-0 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none focus:bg-neutral-100 ${editor.isActive('strike') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-+          onPress={() => editor.chain().focus().toggleStrike().run()}
-         >
-           <StrikethroughIcon className="size-4" />
-         </Button>
-         <Button
--          onPress={() => editor.chain().focus().toggleCode().run()}
-+          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('code') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-           isDisabled={!editor.can().chain().focus().toggleCode().run()}
--          className={`rounded-md size-7 shrink-0 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none focus:bg-neutral-100 ${editor.isActive('code') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-+          onPress={() => editor.chain().focus().toggleCode().run()}
-         >
-           <CodeBracketIcon className="size-4" />
-         </Button>
-       </div>
-       <div className="flex items-center gap-px p-1">
-         <Button
--          onPress={() => editor.chain().focus().toggleBulletList().run()}
-+          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('bulletList') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-           isDisabled={!editor.can().chain().focus().toggleBulletList().run()}
--          className={`rounded-md size-7 shrink-0 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none focus:bg-neutral-100 ${editor.isActive('bulletList') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-+          onPress={() => editor.chain().focus().toggleBulletList().run()}
-         >
-           <ListBulletIcon className="size-4" />
-         </Button>
-         <Button
--          onPress={() => editor.chain().focus().toggleOrderedList().run()}
-+          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('orderedList') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-           isDisabled={!editor.can().chain().focus().toggleOrderedList().run()}
--          className={`rounded-md size-7 shrink-0 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none focus:bg-neutral-100 ${editor.isActive('orderedList') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-+          onPress={() => editor.chain().focus().toggleOrderedList().run()}
-         >
-           <NumberedListIcon className="size-4" />
-         </Button>
-         <Button
--          onPress={() => editor.chain().focus().toggleCodeBlock().run()}
-+          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('codeBlock') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-           isDisabled={!editor.can().chain().focus().toggleCodeBlock().run()}
--          className={`rounded-md size-7 shrink-0 flex items-center justify-center hover:bg-neutral-100 hover:text-neutral-800 focus:text-neutral-800 focus:outline-none focus:bg-neutral-100 ${editor.isActive('codeBlock') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-+          onPress={() => editor.chain().focus().toggleCodeBlock().run()}
-         >
-           <CodeBracketSquareIcon className="size-5" />
-         </Button>
-```
-
-### Diff: src/components/common/editor.tsx
-
-```diff
-diff --git a/src/components/common/editor.tsx b/src/components/common/editor.tsx
-index 8aa31f5..0bbdd1b 100644
---- a/src/components/common/editor.tsx
-+++ b/src/components/common/editor.tsx
-@@ -1,13 +1,7 @@
--import Placeholder from '@tiptap/extension-placeholder'
--import Table from '@tiptap/extension-table'
--import TableCell from '@tiptap/extension-table-cell'
--import TableHeader from '@tiptap/extension-table-header'
--import TableRow from '@tiptap/extension-table-row'
--import { BubbleMenu, EditorContent, type Extensions, useEditor } from '@tiptap/react'
-+import { EditorContent, type Extensions, useEditor } from '@tiptap/react'
- import StarterKit from '@tiptap/starter-kit'
--import React, { useEffect, useRef } from 'react'
-+import React, { useEffect } from 'react'
- import { Markdown } from 'tiptap-markdown'
--import EditorMenu from '@/components/common/editor-menu'
- 
- const Editor = ({
-   value,
-@@ -22,8 +16,8 @@ const Editor = ({
-   className?: string
-   placeholder?: string
- }) => {
--  const markdownValue = useRef<string | null>(null)
--  const extensions: Extensions = [StarterKit, Markdown, Table, TableRow, TableHeader, TableCell]
-+  const extensions: Extensions = [StarterKit, Markdown]
-+
-   const editor = useEditor({
-     extensions,
-     editorProps: {
-@@ -34,34 +28,25 @@ const Editor = ({
-     content: value || undefined,
-     onBlur: onBlur
-       ? ({ editor }) => {
--          markdownValue.current = editor.storage.markdown.getMarkdown()
--          onBlur(markdownValue.current || '')
-+          const markdown = editor.storage.markdown.getMarkdown()
-+          onBlur(markdown || '')
-         }
-       : undefined,
-     onUpdate: onChange
-       ? ({ editor }) => {
--          markdownValue.current = editor.storage.markdown.getMarkdown()
--          onChange(markdownValue.current || '')
-+          const markdown = editor.storage.markdown.getMarkdown()
-+          onChange(markdown || '')
-         }
-       : undefined,
-   })
- 
--  if (placeholder) extensions.push(Placeholder.configure({ placeholder }))
--
-   useEffect(() => {
--    if (editor && markdownValue.current !== value) editor.commands.setContent(value)
-+    if (editor && value !== editor.storage.markdown.getMarkdown()) {
-+      editor.commands.setContent(value)
-+    }
-   }, [value, editor])
- 
--  return (
--    <>
--      <EditorContent editor={editor} />
--      {editor && (
--        <BubbleMenu updateDelay={100} editor={editor}>
--          <EditorMenu editor={editor} />
--        </BubbleMenu>
--      )}
--    </>
--  )
-+  return <EditorContent editor={editor} />
- }
- 
- export default Editor
-```
-
-### Diff: src/components/common/menu-button.tsx
-
-```diff
-diff --git a/src/components/common/menu-button.tsx b/src/components/common/menu-button.tsx
-index d6d1dfb..50c2e08 100644
---- a/src/components/common/menu-button.tsx
-+++ b/src/components/common/menu-button.tsx
-@@ -9,10 +9,10 @@ export const MenuButton = ({ className }: { className?: string }) => {
-   return (
-     <Button
-       aria-label="Show menu"
-+      className={`flex size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800 ${className}`}
-       onPress={() => setShowMenu(true)}
--      className={`size-8 shrink-0 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow ${className}`}
-     >
--      <Icon name="sidebar" className="size-4" />
-+      <Icon className="size-4" name="sidebar" />
-     </Button>
-   )
- }
-```
-
-### Diff: src/components/common/modal.tsx
-
-```diff
-diff --git a/src/components/common/modal.tsx b/src/components/common/modal.tsx
-index cf6c2f9..eac565c 100644
---- a/src/components/common/modal.tsx
-+++ b/src/components/common/modal.tsx
-@@ -15,7 +15,9 @@ export const Modal = ({
- }) => {
-   React.useEffect(() => {
-     const handleKeyDown = (e: KeyboardEvent) => {
--      if (e.key === 'Escape') setShow(false)
-+      if (e.key === 'Escape') {
-+        setShow(false)
-+      }
-     }
-     window.addEventListener('keydown', handleKeyDown)
-     return () => window.removeEventListener('keydown', handleKeyDown)
-@@ -23,24 +25,24 @@ export const Modal = ({
- 
-   return (
-     <ModalOverlay
-+      className="fixed inset-0 flex items-start justify-center bg-black/10 p-4 pt-16 lg:pt-32 dark:bg-black/20"
-+      isDismissable
-       isOpen={show}
-       onOpenChange={setShow}
--      className="fixed inset-0 bg-black/10 dark:bg-black/20 flex items-start justify-center p-4 pt-16 lg:pt-32"
--      isDismissable
-     >
--      <ReactAriaModal className="relative bg-white dark:bg-neutral-800 rounded-xl shadow-lg border border-neutral-200 dark:border-neutral-700 w-full max-w-xl">
-+      <ReactAriaModal className="relative w-full max-w-xl rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
-         {title && (
--          <div className="flex justify-between items-center p-2 pl-4 border-b border-neutral-200 dark:border-neutral-700">
--            <Heading slot="title" className="text-lg font-bold">
-+          <div className="flex items-center justify-between border-neutral-200 border-b p-2 pl-4 dark:border-neutral-700">
-+            <Heading className="font-bold text-lg" slot="title">
-               {title}
-             </Heading>
-           </div>
-         )}
-         {children}
-         <Button
--          slot="close"
-+          className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-700 focus:outline-none dark:hover:bg-neutral-700"
-           onPress={() => setShow(false)}
--          className="absolute top-2 right-2 size-8 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700 flex items-center justify-center"
-+          slot="close"
-         >
-           <XMarkIcon className="size-5" />
-         </Button>
-```
-
-### Diff: src/components/common/priority-menu.tsx
-
-```diff
-diff --git a/src/components/common/priority-menu.tsx b/src/components/common/priority-menu.tsx
-index 09c5181..e3f2a1b 100644
---- a/src/components/common/priority-menu.tsx
-+++ b/src/components/common/priority-menu.tsx
-@@ -38,29 +38,29 @@ export const PriorityMenu = ({
-     <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
-       <Button
-         aria-label="Select priority"
--        className="group h-8 min-w-8 rounded-lg flex gap-1.5 px-2 items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
-+        className="group flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-lg px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-       >
-         <Icon
--          name={priorityOptions[priority]!.icon as IconName}
-           className={`size-3.5 ${priority === 4 ? 'text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300' : priorityOptions[priority]!.style}`}
-+          name={priorityOptions[priority]!.icon as IconName}
-         />
-         {showLabel && <span>{priorityOptions[priority]!.name}</span>}
-       </Button>
-       <Popover
-+        className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800"
-         offset={0}
--        className="w-48 ml-1 p-2 bg-white rounded-lg shadow-md border border-neutral-200 dark:bg-neutral-800 dark:border-neutral-700 text-sm leading-none"
-       >
-         <Menu className="focus:outline-none" {...keyboardProps}>
-           {priorityOptions.map(({ name, icon, style, shortcut }, priorityOption) => (
-             <MenuItem
-+              className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-               key={priorityOption}
-               onAction={() => onPriorityChange(priorityOption as Priority)}
--              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700 cursor-pointer flex items-center gap-2"
-             >
--              <Icon name={icon as IconName} className={`size-3.5 ${style}`} />
-+              <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
-               <span>{name}</span>
--              {priorityOption === priority && <CheckIcon className="size-4 absolute right-9" />}
--              <Shortcut keys={[shortcut]} className="absolute right-3" />
-+              {priorityOption === priority && <CheckIcon className="absolute right-9 size-4" />}
-+              <Shortcut className="absolute right-3" keys={[shortcut]} />
-             </MenuItem>
-           ))}
-         </Menu>
-```
-
-### Diff: src/components/common/shortcut.tsx
-
-```diff
-diff --git a/src/components/common/shortcut.tsx b/src/components/common/shortcut.tsx
-index 78b64b6..50ae11f 100644
---- a/src/components/common/shortcut.tsx
-+++ b/src/components/common/shortcut.tsx
-@@ -5,8 +5,8 @@ export const Shortcut = ({ keys, className }: { keys: string[]; className?: stri
-     <div className={`flex items-center gap-1 ${className}`}>
-       {keys.map((key) => (
-         <div
-+          className="flex h-4 min-w-4 items-center justify-center rounded border border-neutral-300 px-1 pt-px font-mono text-2xs uppercase leading-none dark:border-neutral-600"
-           key={key}
--          className="text-2xs pt-px h-4 min-w-4 flex items-center justify-center px-1 border border-neutral-300 dark:border-neutral-600 rounded uppercase font-mono leading-none"
-         >
-           {key}
-         </div>
-```
-
-### Diff: src/components/common/status-menu.tsx
-
-```diff
-diff --git a/src/components/common/status-menu.tsx b/src/components/common/status-menu.tsx
-index ea6a10e..bcc38ac 100644
---- a/src/components/common/status-menu.tsx
-+++ b/src/components/common/status-menu.tsx
-@@ -38,26 +38,26 @@ export const StatusMenu = ({
-     <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
-       <Button
-         aria-label="Select status"
--        className="group h-8 min-w-8 rounded-lg flex gap-1.5 px-2 items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
-+        className="group flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-lg px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-       >
--        <Icon name={statusOptions[status]!.icon as IconName} className={`size-3.5 ${statusOptions[status]!.style}`} />
-+        <Icon className={`size-3.5 ${statusOptions[status]!.style}`} name={statusOptions[status]!.icon as IconName} />
-         {showLabel && <span>{statusOptions[status]!.name}</span>}
-       </Button>
-       <Popover
-+        className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800"
-         offset={0}
--        className="w-48 ml-1 p-2 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 text-sm leading-none"
-       >
-         <Menu className="focus:outline-none" {...keyboardProps}>
-           {statusOptions.map(({ name, icon, style, shortcut }, statusOption) => (
-             <MenuItem
-+              className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-               key={statusOption}
-               onAction={() => onStatusChange(statusOption as Status)}
--              className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700 cursor-pointer flex items-center gap-2"
-             >
--              <Icon name={icon as IconName} className={`size-3.5 ${style}`} />
-+              <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
-               <span>{name}</span>
--              {statusOption === status && <CheckIcon className="size-4 absolute right-9" />}
--              <Shortcut keys={[shortcut]} className="absolute right-3" />
-+              {statusOption === status && <CheckIcon className="absolute right-9 size-4" />}
-+              <Shortcut className="absolute right-3" keys={[shortcut]} />
-             </MenuItem>
-           ))}
-         </Menu>
-```
-
-### Diff: src/components/icons/backlog.tsx
-
-```diff
-diff --git a/src/components/icons/backlog.tsx b/src/components/icons/backlog.tsx
-index 92ccaef..f32af36 100644
---- a/src/components/icons/backlog.tsx
-+++ b/src/components/icons/backlog.tsx
-@@ -2,26 +2,18 @@ import React from 'react'
- 
- export const BacklogIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={`stroke-current ${className}`}>
-+    <svg className={`stroke-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
-+      <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="1.4 1.74" strokeDashoffset="0.65" strokeWidth="2" />
-       <circle
-         cx="7"
-         cy="7"
--        r="6"
-         fill="none"
--        strokeWidth="2"
--        strokeDasharray="1.4 1.74"
--        strokeDashoffset="0.65"
--      ></circle>
--      <circle
--        cx="7"
--        cy="7"
-         r="2"
--        fill="none"
--        strokeWidth="4"
-         strokeDasharray="0 100"
-         strokeDashoffset="0"
-+        strokeWidth="4"
-         transform="rotate(-90 7 7)"
--      ></circle>
-+      />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/canceled.tsx
-
-```diff
-diff --git a/src/components/icons/canceled.tsx b/src/components/icons/canceled.tsx
-index 8b41321..f11fb61 100644
---- a/src/components/icons/canceled.tsx
-+++ b/src/components/icons/canceled.tsx
-@@ -2,11 +2,11 @@ import React from 'react'
- 
- export const CanceledIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
-       <path
--        fillRule="evenodd"
-         clipRule="evenodd"
-         d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM4.87881 3.73657C4.56339 3.42114 4.05199 3.42114 3.73657 3.73657C3.42114 4.05199 3.42114 4.56339 3.73657 4.87881L5.85775 7L4.79716 8.06059L3.73657 9.12118C3.42114 9.4366 3.42114 9.94801 3.73657 10.2634C4.05199 10.5789 4.56339 10.5789 4.87881 10.2634L7 8.14225L9.12117 10.2634C9.4366 10.5789 9.94801 10.5789 10.2634 10.2634C10.5789 9.94801 10.5789 9.4366 10.2634 9.12118L8.14225 7L10.2634 4.87881C10.5789 4.56339 10.5789 4.05199 10.2634 3.73657C9.94801 3.42114 9.4366 3.42114 9.12117 3.73657L7 5.85775L5.93941 4.79716L4.87881 3.73657Z"
-+        fillRule="evenodd"
-       />
-     </svg>
-   )
-```
-
-### Diff: src/components/icons/done.tsx
-
-```diff
-diff --git a/src/components/icons/done.tsx b/src/components/icons/done.tsx
-index 2231d73..7acbc7b 100644
---- a/src/components/icons/done.tsx
-+++ b/src/components/icons/done.tsx
-@@ -2,11 +2,11 @@ import React from 'react'
- 
- export const DoneIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
-       <path
--        fillRule="evenodd"
-         clipRule="evenodd"
-         d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM10.951 5.45104C11.283 5.11909 11.283 4.58091 10.951 4.24896C10.6191 3.91701 10.0809 3.91701 9.74896 4.24896L5.35 8.64792L3.95104 7.24896C3.61909 6.91701 3.0809 6.91701 2.74896 7.24896C2.41701 7.5809 2.41701 8.11909 2.74896 8.45104L4.74896 10.451C5.0809 10.783 5.61909 10.783 5.95104 10.451L10.951 5.45104Z"
-+        fillRule="evenodd"
-       />
-     </svg>
-   )
-```
-
-### Diff: src/components/icons/filter.tsx
-
-```diff
-diff --git a/src/components/icons/filter.tsx b/src/components/icons/filter.tsx
-index 869a1bb..b776158 100644
---- a/src/components/icons/filter.tsx
-+++ b/src/components/icons/filter.tsx
-@@ -2,12 +2,12 @@ import React from 'react'
- 
- export const FilterIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
-       <path
--        fillRule="evenodd"
-         clipRule="evenodd"
-         d="M14.25 3a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8Zm2.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
--      ></path>
-+        fillRule="evenodd"
-+      />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/in-progress.tsx
-
-```diff
-diff --git a/src/components/icons/in-progress.tsx b/src/components/icons/in-progress.tsx
-index d214c68..664dbd7 100644
---- a/src/components/icons/in-progress.tsx
-+++ b/src/components/icons/in-progress.tsx
-@@ -2,18 +2,18 @@ import React from 'react'
- 
- export const InProgressIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={`stroke-current ${className}`}>
--      <circle cx="7" cy="7" r="6" fill="none" strokeWidth="2" strokeDasharray="3.14 0" strokeDashoffset="-0.7"></circle>
-+    <svg className={`stroke-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
-+      <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="3.14 0" strokeDashoffset="-0.7" strokeWidth="2" />
-       <circle
-         cx="7"
-         cy="7"
--        r="2"
-         fill="none"
--        strokeWidth="4"
-+        r="2"
-         strokeDasharray="6.2517693806436885 100"
-         strokeDashoffset="0"
-+        strokeWidth="4"
-         transform="rotate(-90 7 7)"
--      ></circle>
-+      />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/linear-lite.tsx
-
-```diff
-diff --git a/src/components/icons/linear-lite.tsx b/src/components/icons/linear-lite.tsx
-index 227559e..a48e378 100644
---- a/src/components/icons/linear-lite.tsx
-+++ b/src/components/icons/linear-lite.tsx
-@@ -2,7 +2,7 @@ import React from 'react'
- 
- export const LinearLiteIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
-       <path d="M30.5652 40.0783C37.3256 36.8697 42 29.9807 42 22C42 10.9543 33.0457 2 22 2C14.0193 2 7.13035 6.67443 3.92172 13.4348L30.5652 40.0783Z" />
-       <path d="M25.7144 41.6557C24.5108 41.8818 23.2692 42 22 42C10.9543 42 2 33.0457 2 22C2 20.7308 2.11823 19.4892 2.34428 18.2856L25.7144 41.6557Z" />
-     </svg>
-```
-
-### Diff: src/components/icons/livestore.tsx
-
-```diff
-diff --git a/src/components/icons/livestore.tsx b/src/components/icons/livestore.tsx
-index 9acbc6a..9100f9a 100644
---- a/src/components/icons/livestore.tsx
-+++ b/src/components/icons/livestore.tsx
-@@ -2,21 +2,21 @@ import React from 'react'
- 
- export const LivestoreIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 26 29" xmlns="http://www.w3.org/2000/svg">
-       <path
--        fillRule="evenodd"
-         clipRule="evenodd"
-         d="M10.7354 19.5171C4.66418 19.1745 0 17.1375 0 14.6758V17.8662C0 20.3011 4.56311 22.3205 10.5375 22.6957L10.7354 19.5171ZM16.5738 22.5012C21.5303 21.8473 25.098 20.0192 25.098 17.8662L25.098 14.6758C25.098 16.5336 22.4415 18.1495 18.5285 18.9778C18.0789 19.8138 17.4274 20.9883 16.5738 22.5012Z"
-+        fillRule="evenodd"
-       />
-       <path
--        fillRule="evenodd"
-         clipRule="evenodd"
-         d="M5.8269 13.9156C2.32421 13.0478 0 11.5217 0 9.78394V12.9743C0 14.3811 1.52329 15.6493 3.96195 16.5417C4.00827 16.4282 4.07027 16.3169 4.14795 16.2078C4.79892 15.311 5.35857 14.5469 5.8269 13.9156ZM19.5212 17.0424C22.884 16.1648 25.098 14.6704 25.098 12.9743V9.78394C25.098 11.2508 23.442 12.5668 20.8191 13.4634C20.8515 13.6945 20.821 13.9393 20.7275 14.1978C20.3919 15.1185 19.9898 16.0667 19.5212 17.0424Z"
-+        fillRule="evenodd"
-       />
-       <path
--        fillRule="evenodd"
-         clipRule="evenodd"
-         d="M25.098 4.89202V4.89199C25.098 2.19022 19.4797 0 12.549 0C5.61839 0 0 2.19022 0 4.89199V4.89202V8.08245C0 9.99654 2.81994 11.6539 6.92862 12.4576C6.95238 12.427 6.97552 12.3974 6.99807 12.3687C7.32598 11.9438 8.12323 10.6028 9.38983 8.34563C5.05907 7.88817 1.91427 6.51496 1.91427 4.89202C1.91427 2.89506 5.53008 1.06351 12.549 1.06351C19.568 1.06351 23.1838 2.89506 23.1838 4.89202C23.1838 6.6754 19.3865 8.15722 14.391 8.4538L14.1105 12.9369C20.3042 12.6373 25.098 10.5781 25.098 8.08245V4.89202Z"
-+        fillRule="evenodd"
-       />
-       <path
-         d="M12.9055 4.56477C13.0693 4.26475 13.5271 4.39991 13.5059 4.74109L12.9085 14.3828C15.5722 14.2917 17.3546 14.0818 19.2905 13.4731C19.5401 13.3946 19.7743 13.6239 19.6847 13.8698C19.4002 14.6508 18.8071 16.1409 17.8293 17.9893C16.7022 20.1199 13.4433 25.8103 12.0222 28.2834C11.8543 28.5756 11.4095 28.4383 11.4303 28.1019L12.0332 18.3717C9.58312 18.3011 7.49924 18.1045 5.31484 17.4578C5.1069 17.3962 5.02459 17.1487 5.15188 16.9731C5.74675 16.1526 7.22447 14.1216 7.97445 13.1552C8.69865 12.222 11.5699 7.01081 12.9055 4.56477Z"
-```
-
-### Diff: src/components/icons/new-issue.tsx
-
-```diff
-diff --git a/src/components/icons/new-issue.tsx b/src/components/icons/new-issue.tsx
-index 5c13c56..f55775c 100644
---- a/src/components/icons/new-issue.tsx
-+++ b/src/components/icons/new-issue.tsx
-@@ -2,17 +2,17 @@ import React from 'react'
- 
- export const NewIssueIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
-       <path
--        fillRule="evenodd"
-         clipRule="evenodd"
-         d="M1 5.25C1 2.90279 2.90279 1 5.25 1H7.25C7.66421 1 8 1.33579 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H5.25C3.73122 2.5 2.5 3.73122 2.5 5.25V10.75C2.5 12.2688 3.73122 13.5 5.25 13.5H10.75C12.2688 13.5 13.5 12.2688 13.5 10.75V8.75287C13.5 8.33865 13.8358 8.00287 14.25 8.00287C14.6642 8.00287 15 8.33865 15 8.75287V10.75C15 13.0972 13.0972 15 10.75 15H5.25C2.90279 15 1 13.0972 1 10.75V5.25Z"
--      ></path>
--      <path
-         fillRule="evenodd"
-+      />
-+      <path
-         clipRule="evenodd"
-         d="M14.6974 1.30263C15.1009 1.70613 15.1009 2.36032 14.6974 2.76382L8.51745 8.94384C7.89159 9.56972 7.05852 9.94524 6.17507 9.99968C6.07614 10.0058 5.99421 9.92385 6.00032 9.82491C6.05485 8.94154 6.43036 8.10855 7.05618 7.48271L13.2362 1.30263C13.6397 0.899124 14.2939 0.899124 14.6974 1.30263Z"
--      ></path>
-+        fillRule="evenodd"
-+      />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/priority-high.tsx
-
-```diff
-diff --git a/src/components/icons/priority-high.tsx b/src/components/icons/priority-high.tsx
-index a080dff..e2c4db0 100644
---- a/src/components/icons/priority-high.tsx
-+++ b/src/components/icons/priority-high.tsx
-@@ -2,10 +2,10 @@ import React from 'react'
- 
- export const PriorityHighIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
--      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
--      <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
--      <rect x="11.5" y="2" width="3" height="12" rx="1"></rect>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
-+      <rect height="6" rx="1" width="3" x="1.5" y="8" />
-+      <rect height="9" rx="1" width="3" x="6.5" y="5" />
-+      <rect height="12" rx="1" width="3" x="11.5" y="2" />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/priority-low.tsx
-
-```diff
-diff --git a/src/components/icons/priority-low.tsx b/src/components/icons/priority-low.tsx
-index 6e93f17..fcbd4fa 100644
---- a/src/components/icons/priority-low.tsx
-+++ b/src/components/icons/priority-low.tsx
-@@ -2,10 +2,10 @@ import React from 'react'
- 
- export const PriorityLowIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
--      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
--      <rect x="6.5" y="5" width="3" height="9" rx="1" fillOpacity="0.4"></rect>
--      <rect x="11.5" y="2" width="3" height="12" rx="1" fillOpacity="0.4"></rect>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
-+      <rect height="6" rx="1" width="3" x="1.5" y="8" />
-+      <rect fillOpacity="0.4" height="9" rx="1" width="3" x="6.5" y="5" />
-+      <rect fillOpacity="0.4" height="12" rx="1" width="3" x="11.5" y="2" />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/priority-medium.tsx
-
-```diff
-diff --git a/src/components/icons/priority-medium.tsx b/src/components/icons/priority-medium.tsx
-index c2ea29f..abe0876 100644
---- a/src/components/icons/priority-medium.tsx
-+++ b/src/components/icons/priority-medium.tsx
-@@ -2,10 +2,10 @@ import React from 'react'
- 
- export const PriorityMediumIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
--      <rect x="1.5" y="8" width="3" height="6" rx="1"></rect>
--      <rect x="6.5" y="5" width="3" height="9" rx="1"></rect>
--      <rect x="11.5" y="2" width="3" height="12" rx="1" fillOpacity="0.4"></rect>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
-+      <rect height="6" rx="1" width="3" x="1.5" y="8" />
-+      <rect height="9" rx="1" width="3" x="6.5" y="5" />
-+      <rect fillOpacity="0.4" height="12" rx="1" width="3" x="11.5" y="2" />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/priority-none.tsx
-
-```diff
-diff --git a/src/components/icons/priority-none.tsx b/src/components/icons/priority-none.tsx
-index 2118736..1555c6c 100644
---- a/src/components/icons/priority-none.tsx
-+++ b/src/components/icons/priority-none.tsx
-@@ -2,10 +2,10 @@ import React from 'react'
- 
- export const PriorityNoneIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
--      <rect x="1.5" y="7.25" width="3" height="1.5" rx="0.5"></rect>
--      <rect x="6.5" y="7.25" width="3" height="1.5" rx="0.5"></rect>
--      <rect x="11.5" y="7.25" width="3" height="1.5" rx="0.5"></rect>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
-+      <rect height="1.5" rx="0.5" width="3" x="1.5" y="7.25" />
-+      <rect height="1.5" rx="0.5" width="3" x="6.5" y="7.25" />
-+      <rect height="1.5" rx="0.5" width="3" x="11.5" y="7.25" />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/priority-urgent.tsx
-
-```diff
-diff --git a/src/components/icons/priority-urgent.tsx b/src/components/icons/priority-urgent.tsx
-index dd6f7bc..73498fd 100644
---- a/src/components/icons/priority-urgent.tsx
-+++ b/src/components/icons/priority-urgent.tsx
-@@ -2,8 +2,8 @@ import React from 'react'
- 
- export const PriorityUrgentIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
--      <path d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4L9 4L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z"></path>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
-+      <path d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4L9 4L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/icons/sidebar.tsx
-
-```diff
-diff --git a/src/components/icons/sidebar.tsx b/src/components/icons/sidebar.tsx
-index 9dd0ef3..611cf93 100644
---- a/src/components/icons/sidebar.tsx
-+++ b/src/components/icons/sidebar.tsx
-@@ -2,11 +2,11 @@ import React from 'react'
- 
- export const SidebarIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className={`fill-current ${className}`}>
-+    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
-       <path
--        fillRule="evenodd"
-         clipRule="evenodd"
-         d="M225 54H94C71.9086 54 54 71.9086 54 94V225C54 247.091 71.9086 265 94 265H225C247.091 265 265 247.091 265 225V94C265 71.9086 247.091 54 225 54ZM94 30C58.6538 30 30 58.6538 30 94V225C30 260.346 58.6538 289 94 289H225C260.346 289 289 260.346 289 225V94C289 58.6538 260.346 30 225 30H94Z"
-+        fillRule="evenodd"
-       />
-       <path d="M111 49H135V270H111V49Z" />
-     </svg>
-```
-
-### Diff: src/components/icons/todo.tsx
-
-```diff
-diff --git a/src/components/icons/todo.tsx b/src/components/icons/todo.tsx
-index 33bc076..d45adfe 100644
---- a/src/components/icons/todo.tsx
-+++ b/src/components/icons/todo.tsx
-@@ -2,18 +2,18 @@ import React from 'react'
- 
- export const TodoIcon = ({ className }: { className?: string }) => {
-   return (
--    <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" className={`stroke-current ${className}`}>
--      <circle cx="7" cy="7" r="6" fill="none" strokeWidth="2" strokeDasharray="3.14 0" strokeDashoffset="-0.7"></circle>
-+    <svg className={`stroke-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
-+      <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="3.14 0" strokeDashoffset="-0.7" strokeWidth="2" />
-       <circle
-         cx="7"
-         cy="7"
--        r="2"
-         fill="none"
--        strokeWidth="4"
-+        r="2"
-         strokeDasharray="0 100"
-         strokeDashoffset="0"
-+        strokeWidth="4"
-         transform="rotate(-90 7 7)"
--      ></circle>
-+      />
-     </svg>
-   )
- }
-```
-
-### Diff: src/components/layout/board/card.tsx
-
-```diff
-diff --git a/src/components/layout/board/card.tsx b/src/components/layout/board/card.tsx
-index 7b6d13b..df309d7 100644
---- a/src/components/layout/board/card.tsx
-+++ b/src/components/layout/board/card.tsx
-@@ -22,19 +22,19 @@ export const Card = ({ issue, className }: { issue: Issue; className?: string })
- 
-   return (
-     <div
--      className={`p-2 text-sm bg-white dark:bg-neutral-900 rounded-md shadow-sm dark:shadow-none border border-transparent dark:border-neutral-700/50 cursor-pointer h-full ${className ?? ''}`}
-+      className={`h-full cursor-pointer rounded-md border border-transparent bg-white p-2 text-sm shadow-sm dark:border-neutral-700/50 dark:bg-neutral-900 dark:shadow-none ${className ?? ''}`}
-       onClick={() => navigate(`/issue/${issue.id}`)}
-     >
--      <Button slot="drag" className="size-0 absolute left-0 top-0" />
--      <div className="flex items-center justify-between pl-2 pt-1 pr-1 mb-0.5">
--        <div className="text-xs text-neutral-500 dark:text-neutral-400">{getIssueTag(issue.id)}</div>
-+      <Button className="absolute top-0 left-0 size-0" slot="drag" />
-+      <div className="mb-0.5 flex items-center justify-between pt-1 pr-1 pl-2">
-+        <div className="text-neutral-500 text-xs dark:text-neutral-400">{getIssueTag(issue.id)}</div>
-         <Avatar name={issue.creator} />
-       </div>
--      <div className="flex items-center gap-px my-px">
--        <StatusMenu status={issue.status} onStatusChange={handleChangeStatus} />
--        <div className="font-medium grow line-clamp-1">{issue.title}</div>
-+      <div className="my-px flex items-center gap-px">
-+        <StatusMenu onStatusChange={handleChangeStatus} status={issue.status} />
-+        <div className="line-clamp-1 grow font-medium">{issue.title}</div>
-       </div>
--      <PriorityMenu showLabel priority={issue.priority} onPriorityChange={handleChangePriority} />
-+      <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} showLabel />
-     </div>
-   )
- }
-```
-
-### Diff: src/components/layout/board/column.tsx
-
-```diff
-diff --git a/src/components/layout/board/column.tsx b/src/components/layout/board/column.tsx
-index cf0a01f..b149161 100644
---- a/src/components/layout/board/column.tsx
-+++ b/src/components/layout/board/column.tsx
-@@ -89,7 +89,7 @@ export const Column = ({ status, statusDetails }: { status: Status; statusDetail
-       store.commit(events.updateIssueKanbanOrder({ id: Number(items[0]), status, kanbanorder, modified: new Date() }))
-     },
-     renderDropIndicator: (target) => {
--      return <DropIndicator target={target} className="h-1 mx-3.5 rounded-full bg-orange-500" />
-+      return <DropIndicator className="mx-3.5 h-1 rounded-full bg-orange-500" target={target} />
-     },
-     getDropOperation: () => 'move',
-   })
-@@ -104,10 +104,10 @@ export const Column = ({ status, statusDetails }: { status: Status; statusDetail
-   )
- 
-   return (
--    <div className="bg-neutral-50 border border-neutral-100 dark:bg-neutral-800 dark:border-neutral-700/50 rounded-lg w-64 lg:w-80 shrink-0 h-full flex flex-col">
--      <div className="flex items-center justify-between p-2 pb-0 pl-4 gap-4">
-+    <div className="flex h-full w-64 shrink-0 flex-col rounded-lg border border-neutral-100 bg-neutral-50 lg:w-80 dark:border-neutral-700/50 dark:bg-neutral-800">
-+      <div className="flex items-center justify-between gap-4 p-2 pb-0 pl-4">
-         <div className="flex items-center gap-2">
--          <Icon name={statusDetails.icon} className={`size-3.5 ${statusDetails.style}`} />
-+          <Icon className={`size-3.5 ${statusDetails.style}`} name={statusDetails.icon} />
-           <h3 className="font-medium text-sm">{statusDetails.name}</h3>
-         </div>
-         <NewIssueButton status={status} />
-@@ -117,18 +117,18 @@ export const Column = ({ status, statusDetails }: { status: Status; statusDetail
-           {({ width, height }: { width: number; height: number }) => (
-             <Virtualizer layout={layout}>
-               <GridList
--                items={filteredIssues}
-                 aria-label={`Issues with status ${statusDetails.name}`}
-+                className="overflow-y-auto pt-2"
-                 dragAndDropHooks={dragAndDropHooks}
--                className="pt-2 overflow-y-auto"
--                style={{ width, height }}
-+                items={filteredIssues}
-                 onScroll={(e) => setScrollState({ list: (e.target as HTMLElement).scrollTop })}
-+                style={{ width, height }}
-               >
-                 {(issue) => (
-                   <GridListItem
--                    textValue={issue.id.toString()}
-                     aria-label={`Issue ${issue.id}: ${issue.title}`}
--                    className="group data-[dragging]:opacity-50 w-full px-2 focus:outline-none"
-+                    className="group w-full px-2 focus:outline-none data-[dragging]:opacity-50"
-+                    textValue={issue.id.toString()}
-                   >
-                     <Card issue={issue} />
-                   </GridListItem>
-```
-
-### Diff: src/components/layout/board/draggable.tsx
-
-```diff
-diff --git a/src/components/layout/board/draggable.tsx b/src/components/layout/board/draggable.tsx
-index 334874a..b4577fd 100644
---- a/src/components/layout/board/draggable.tsx
-+++ b/src/components/layout/board/draggable.tsx
-@@ -12,17 +12,17 @@ export const Draggable = memo(({ issue, style }: { issue: Issue; style: CSSPrope
-   })
- 
-   return (
--    <div key={issue.id} id={issue.id.toString()} className="relative px-2 pb-2" style={style}>
-+    <div className="relative px-2 pb-2" id={issue.id.toString()} key={issue.id} style={style}>
-       <div {...dragProps}>
-         <Card issue={issue} />
-         {isDragging && (
-           <div className="absolute inset-0 bg-neutral-50 p-3 pt-1">
--            <div className="w-full h-full border border-neutral-200/50 rounded-md" />
-+            <div className="h-full w-full rounded-md border border-neutral-200/50" />
-           </div>
-         )}
-         <DragPreview ref={preview}>
-           {() => (
--            <div className="px-2 w-[254px] lg:w-[318px]">
-+            <div className="w-[254px] px-2 lg:w-[318px]">
-               <Card issue={issue} />
-             </div>
-           )}
-```
-
-### Diff: src/components/layout/board/index.tsx
-
-```diff
-diff --git a/src/components/layout/board/index.tsx b/src/components/layout/board/index.tsx
-index d717e82..ff87563 100644
---- a/src/components/layout/board/index.tsx
-+++ b/src/components/layout/board/index.tsx
-@@ -24,13 +24,13 @@ export const Board = () => {
- 
-   return (
-     <>
--      <Filters filteredCount={filteredIssueIds.length} hideStatusFilter hideSorting />
-+      <Filters filteredCount={filteredIssueIds.length} hideSorting hideStatusFilter />
-       <div className="grow overflow-x-auto">
--        <div className="flex gap-4 p-4 h-full">
-+        <div className="flex h-full gap-4 p-4">
-           {statusOptions.map((statusDetails, statusOption) => (
-             <Column key={statusOption} status={statusOption as Status} statusDetails={statusDetails} />
-           ))}
--          <div className="w-4 -ml-4 shrink-0" />
-+          <div className="-ml-4 w-4 shrink-0" />
-         </div>
-       </div>
-     </>
-```
-
-### Diff: src/components/layout/filters/filter-menu.tsx
-
-```diff
-diff --git a/src/components/layout/filters/filter-menu.tsx b/src/components/layout/filters/filter-menu.tsx
-index cdf027a..e9426b5 100644
---- a/src/components/layout/filters/filter-menu.tsx
-+++ b/src/components/layout/filters/filter-menu.tsx
-@@ -22,49 +22,49 @@ export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; c
-   return (
-     <MenuTrigger>
-       {children}
--      <Popover className="w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 text-sm leading-none">
-+      <Popover className="w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
-         <Menu className="focus:outline-none" selectionMode="multiple">
-           {type !== 'priority' && (
--            <MenuSection key="status" className="p-2">
--              <Header className="p-2 text-2xs uppercase font-medium tracking-wide text-neutral-400">Status</Header>
-+            <MenuSection className="p-2" key="status">
-+              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Status</Header>
-               {statusOptions.map(({ name, icon, style }, statusOption) => {
-                 const active = filterState.status?.includes(statusOption as Status)
-                 return (
-                   <MenuItem
-+                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                     key={statusOption}
-                     onAction={() => toggleFilter({ type: 'status', value: statusOption as Status })}
--                    className="group/item p-2 pl-9 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700 cursor-pointer flex items-center gap-2"
-                   >
-                     <div
--                      className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden group-hover/item:block group-focus/item:block border border-neutral-300 dark:border-neutral-600'}`}
-+                      className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
-                     >
-                       {active && <CheckIcon className="size-4 text-white" />}
-                     </div>
--                    <Icon name={icon as IconName} className={`size-3.5 ${style}`} />
-+                    <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
-                     <span>{name}</span>
-                   </MenuItem>
-                 )
-               })}
-             </MenuSection>
-           )}
--          {!type && <Separator className="w-full h-px bg-neutral-200 dark:bg-neutral-700" />}
-+          {!type && <Separator className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />}
-           {type !== 'status' && (
--            <MenuSection key="priority" className="p-2">
--              <Header className="p-2 text-2xs uppercase font-medium tracking-wide text-neutral-400">Priority</Header>
-+            <MenuSection className="p-2" key="priority">
-+              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Priority</Header>
-               {priorityOptions.map(({ name, icon, style }, priorityOption) => {
-                 const active = filterState.priority?.includes(priorityOption as Priority)
-                 return (
-                   <MenuItem
-+                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                     key={priorityOption}
-                     onAction={() => toggleFilter({ type: 'priority', value: priorityOption as Priority })}
--                    className="group/item p-2 pl-9 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700 cursor-pointer flex items-center gap-2"
-                   >
-                     <div
--                      className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden group-hover/item:block group-focus/item:block border border-neutral-300 dark:border-neutral-600'}`}
-+                      className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
-                     >
-                       {active && <CheckIcon className="size-4 text-white" />}
-                     </div>
--                    <Icon name={icon as IconName} className={`size-3.5 ${style}`} />
-+                    <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
-                     <span>{name}</span>
-                   </MenuItem>
-                 )
-```
-
-### Diff: src/components/layout/filters/header.tsx
-
-```diff
-diff --git a/src/components/layout/filters/header.tsx b/src/components/layout/filters/header.tsx
-index fb2f66f..2e5cf82 100644
---- a/src/components/layout/filters/header.tsx
-+++ b/src/components/layout/filters/header.tsx
-@@ -11,9 +11,9 @@ export const Header = ({
-   heading: string
- }) => {
-   return (
--    <div className="h-12 border-b border-neutral-200 dark:border-neutral-700 flex items-center gap-2 text-sm pl-2 lg:pl-6">
-+    <div className="flex h-12 items-center gap-2 border-neutral-200 border-b pl-2 text-sm lg:pl-6 dark:border-neutral-700">
-       <MenuButton className="lg:hidden" />
--      <div className="font-medium ml-1 lg:ml-0">{heading}</div>
-+      <div className="ml-1 font-medium lg:ml-0">{heading}</div>
-       <div className="text-neutral-500 dark:text-neutral-400">
-         <span>{filteredCount}</span>
-         {filteredCount !== totalCount && <span> of {totalCount}</span>}
-```
-
-### Diff: src/components/layout/filters/index.tsx
-
-```diff
-diff --git a/src/components/layout/filters/index.tsx b/src/components/layout/filters/index.tsx
-index 9447d69..10e64b1 100644
---- a/src/components/layout/filters/index.tsx
-+++ b/src/components/layout/filters/index.tsx
-@@ -33,15 +33,15 @@ export const Filters = ({
-         <SearchBar />
-       ) : (
-         <Header
--          totalCount={totalCount}
-           filteredCount={filteredCount}
-           heading={filterState?.status?.length === 1 ? statusOptions[filterState.status[0] as Status]!.name : 'Issues'}
-+          totalCount={totalCount}
-         />
-       )}
--      <div className="h-12 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between text-sm px-4 gap-8">
-+      <div className="flex h-12 items-center justify-between gap-8 border-neutral-200 border-b px-4 text-sm dark:border-neutral-700">
-         <div className="flex items-center">
-           {search && (
--            <div className="text-neutral-500 dark:text-neutral-400 text-xs mr-2 lg:ml-2">
-+            <div className="mr-2 text-neutral-500 text-xs lg:ml-2 dark:text-neutral-400">
-               <span>{filteredCount}</span>
-               {filteredCount !== totalCount && <span> of {totalCount}</span>}
-               <span> Issues</span>
-@@ -50,15 +50,15 @@ export const Filters = ({
-           <FilterMenu type={hideStatusFilter ? 'priority' : undefined}>
-             <Button
-               aria-label="Select filters"
--              className="group h-6 min-w-6 rounded-lg flex gap-1.5 px-1.5 items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 text-xs font-medium"
-+              className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-             >
--              <Icon name="filter" className="size-3.5" />
-+              <Icon className="size-3.5" name="filter" />
-               <span className={filterState.status?.length || filterState.priority?.length ? 'lg:hidden' : ''}>
-                 Filter
-               </span>
-             </Button>
-           </FilterMenu>
--          <div className="hidden lg:flex items-center">
-+          <div className="hidden items-center lg:flex">
-             {!hideStatusFilter && <StatusFilter />}
-             <PriorityFilter />
-           </div>
-@@ -67,11 +67,11 @@ export const Filters = ({
-         {!hideSorting && <SortMenu />}
-       </div>
-       {filterState.status?.length || filterState.priority?.length ? (
--        <div className="lg:hidden h-12 border-b border-neutral-200 dark:border-neutral-700 overflow-x-auto">
--          <div className="flex items-center h-full pl-2">
-+        <div className="h-12 overflow-x-auto border-neutral-200 border-b lg:hidden dark:border-neutral-700">
-+          <div className="flex h-full items-center pl-2">
-             {!hideStatusFilter && <StatusFilter />}
-             <PriorityFilter />
--            <div className="w-4 h-full shrink-0" />
-+            <div className="h-full w-4 shrink-0" />
-           </div>
-         </div>
-       ) : null}
-```
-
-### Diff: src/components/layout/filters/priority-filter.tsx
-
-```diff
-diff --git a/src/components/layout/filters/priority-filter.tsx b/src/components/layout/filters/priority-filter.tsx
-index e2aa8d2..f7758cc 100644
---- a/src/components/layout/filters/priority-filter.tsx
-+++ b/src/components/layout/filters/priority-filter.tsx
-@@ -12,18 +12,18 @@ export const PriorityFilter = () => {
-   if (!filterState.priority) return null
- 
-   return (
--    <div className="text-xs text-neutral-500 ml-2 border border-neutral-300 dark:border-neutral-600 dark:text-neutral-400 rounded-md flex h-6 overflow-hidden shrink-0 whitespace-nowrap">
--      <div className="px-2 border-r border-neutral-200 dark:border-neutral-700 h-full flex items-center gap-1">
-+    <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
-+      <div className="flex h-full items-center gap-1 border-neutral-200 border-r px-2 dark:border-neutral-700">
-         <span className="font-medium text-neutral-600 dark:text-neutral-200">Priority</span>
-         <span>{filterState.priority.length > 1 ? 'is any of' : 'is'}</span>
-       </div>
-       <FilterMenu type="priority">
--        <Button className="px-2 flex items-center h-full hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 gap-1.5">
-+        <Button className="flex h-full items-center gap-1.5 px-2 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
-           {filterState.priority.length === 1 ? (
-             <>
-               <Icon
--                name={priorityOptions[filterState.priority[0] as Priority]!.icon as IconName}
-                 className={`h-3.5 ${priorityOptions[filterState.priority[0] as Priority]!.style}`}
-+                name={priorityOptions[filterState.priority[0] as Priority]!.icon as IconName}
-               />
-               <span className="font-medium text-neutral-600 dark:text-neutral-200">
-                 {priorityOptions[filterState.priority[0] as Priority]!.name}
-@@ -35,8 +35,8 @@ export const PriorityFilter = () => {
-         </Button>
-       </FilterMenu>
-       <Button
-+        className="group flex h-full items-center border-neutral-200 border-l px-1 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-         onPress={() => setFilterState({ priority: null })}
--        className="h-full flex items-center px-1 group hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 border-l border-neutral-200 dark:border-neutral-700"
-       >
-         <XMarkIcon className="size-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
-       </Button>
-```
-
-### Diff: src/components/layout/filters/sort-menu.tsx
-
-```diff
-diff --git a/src/components/layout/filters/sort-menu.tsx b/src/components/layout/filters/sort-menu.tsx
-index e96ec21..e9c4790 100644
---- a/src/components/layout/filters/sort-menu.tsx
-+++ b/src/components/layout/filters/sort-menu.tsx
-@@ -41,23 +41,23 @@ export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
-     <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
-       <Button
-         aria-label="Select sorting"
--        className="relative group h-6 min-w-6 rounded-lg flex gap-1.5 px-1.5 items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 text-xs font-medium"
-+        className="group relative flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-       >
-         <ArrowsUpDownIcon className="size-3.5" />
-         <span>Sort</span>
--        <div className="size-1.5 rounded-full bg-orange-500 absolute -right-0.5 top-0" />
-+        <div className="-right-0.5 absolute top-0 size-1.5 rounded-full bg-orange-500" />
-       </Button>
--      <Popover className="w-48 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 text-sm leading-none">
-+      <Popover className="w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
-         <Menu className="focus:outline-none" selectionMode="multiple" {...keyboardProps}>
-           {type !== 'priority' && (
--            <MenuSection key="status" className="p-2">
--              <Header className="p-2 text-2xs uppercase font-medium tracking-wide text-neutral-400">Sorting</Header>
-+            <MenuSection className="p-2" key="status">
-+              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Sorting</Header>
-               {Object.entries(sortingOptions).map(([sortingOption, { name, shortcut }]) => {
-                 return (
-                   <MenuItem
-+                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                     key={sortingOption}
-                     onAction={() => toggleSorting(sortingOption as SortingOption)}
--                    className="group/item p-2 rounded-md flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700 cursor-pointer"
-                   >
-                     <span>{name}</span>
-                     {filterState.orderBy === sortingOption && (
-@@ -68,7 +68,7 @@ export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
-                         </div>
-                       </>
-                     )}
--                    <Shortcut keys={[shortcut]} className="absolute right-3" />
-+                    <Shortcut className="absolute right-3" keys={[shortcut]} />
-                   </MenuItem>
-                 )
-               })}
-```
-
-### Diff: src/components/layout/filters/status-filter.tsx
-
-```diff
-diff --git a/src/components/layout/filters/status-filter.tsx b/src/components/layout/filters/status-filter.tsx
-index d205a8d..fc83aa9 100644
---- a/src/components/layout/filters/status-filter.tsx
-+++ b/src/components/layout/filters/status-filter.tsx
-@@ -12,18 +12,18 @@ export const StatusFilter = () => {
-   if (!filterState.status) return null
- 
-   return (
--    <div className="text-xs text-neutral-500 dark:text-neutral-400 ml-2 border border-neutral-300 dark:border-neutral-600 rounded-md flex h-6 overflow-hidden shrink-0 whitespace-nowrap">
--      <div className="px-2 border-r border-neutral-200 dark:border-neutral-700 h-full flex items-center gap-1">
-+    <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
-+      <div className="flex h-full items-center gap-1 border-neutral-200 border-r px-2 dark:border-neutral-700">
-         <span className="font-medium text-neutral-600 dark:text-neutral-200">Status</span>
-         <span>{filterState.status.length > 1 ? 'is any of' : 'is'}</span>
-       </div>
-       <FilterMenu type="status">
--        <Button className="pl-5 pr-2 flex items-center h-full hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 gap-1.5">
-+        <Button className="flex h-full items-center gap-1.5 pr-2 pl-5 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
-           {filterState.status.map((status, index) => (
--            <div key={index} className="h-4 -ml-3 p-px rounded-full bg-white dark:bg-neutral-900">
-+            <div className="-ml-3 h-4 rounded-full bg-white p-px dark:bg-neutral-900" key={index}>
-               <Icon
--                name={statusOptions[status as Status]!.icon as IconName}
-                 className={`h-full ${statusOptions[status as Status]!.style}`}
-+                name={statusOptions[status as Status]!.icon as IconName}
-               />
-             </div>
-           ))}
-@@ -37,8 +37,8 @@ export const StatusFilter = () => {
-         </Button>
-       </FilterMenu>
-       <Button
-+        className="group flex h-full items-center border-neutral-200 border-l px-1 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-         onPress={() => setFilterState({ status: null })}
--        className="h-full flex items-center px-1 group hover:bg-neutral-50 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 border-l border-neutral-200 dark:border-neutral-700"
-       >
-         <XMarkIcon className="size-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
-       </Button>
-```
-
-### Diff: src/components/layout/index.tsx
-
-```diff
-diff --git a/src/components/layout/index.tsx b/src/components/layout/index.tsx
-index 97bd287..4304c5f 100644
---- a/src/components/layout/index.tsx
-+++ b/src/components/layout/index.tsx
-@@ -7,7 +7,7 @@ export const Layout = ({ children }: { children: React.ReactNode }) => {
-   const [frontendState] = useFrontendState()
- 
-   return (
--    <div className="h-full flex flex-col">
-+    <div className="flex h-full flex-col">
-       <div className={`relative flex w-screen grow ${frontendState.showToolbar ? 'h-[calc(100%-3.5rem)]' : 'h-full'}`}>
-         {children}
-       </div>
-```
-
-### Diff: src/components/layout/issue/back-button.tsx
-
-```diff
-diff --git a/src/components/layout/issue/back-button.tsx b/src/components/layout/issue/back-button.tsx
-index 85ae656..0d1b4dd 100644
---- a/src/components/layout/issue/back-button.tsx
-+++ b/src/components/layout/issue/back-button.tsx
-@@ -14,8 +14,8 @@ export const BackButton = ({ close }: { close: () => void }) => {
-   return (
-     <Button
-       aria-label="Back to issues"
-+      className="flex size-8 shrink-0 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-       onPress={close}
--      className="rounded-lg size-8 shrink-0 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
-     >
-       <XMarkIcon className="size-5" />
-     </Button>
-```
-
-### Diff: src/components/layout/issue/comment-input.tsx
-
-```diff
-diff --git a/src/components/layout/issue/comment-input.tsx b/src/components/layout/issue/comment-input.tsx
-index f6c9841..1af98cf 100644
---- a/src/components/layout/issue/comment-input.tsx
-+++ b/src/components/layout/issue/comment-input.tsx
-@@ -27,7 +27,7 @@ export const CommentInput = ({ issueId, className }: { issueId: number; classNam
-       events.createComment({
-         id: crypto.randomUUID(),
-         body: commentDraft,
--        issueId: issueId,
-+        issueId,
-         created: new Date(),
-         creator: frontendState.user,
-       }),
-@@ -37,20 +37,20 @@ export const CommentInput = ({ issueId, className }: { issueId: number; classNam
- 
-   return (
-     <div
--      className={`bg-white dark:bg-neutral-800 pb-4 rounded-lg shadow dark:shadow-none border border-transparent dark:border-neutral-700/50 ${className}`}
-+      className={`rounded-lg border border-transparent bg-white pb-4 shadow dark:border-neutral-700/50 dark:bg-neutral-800 dark:shadow-none ${className}`}
-       {...keyboardProps}
-     >
-       <Editor
-         className="px-4 py-1"
--        value={commentDraft}
-         onChange={(value) => setCommentDraft(value)}
-         placeholder="Leave a comment..."
-+        value={commentDraft}
-       />
-       {/* TODO add tooltip for submit shortcut */}
-       <Button
-         aria-label="Submit comment"
-+        className="mr-4 ml-auto flex size-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-700 dark:focus:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
-         onPress={submitComment}
--        className="size-7 rounded-full text-neutral-600 dark:text-neutral-200 hover:text-neutral-800 focus:text-neutral-800 dark:hover:text-neutral-100 dark:focus:text-neutral-100 bg-white hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 shadow border border-neutral-200 dark:border-neutral-600 flex items-center justify-center ml-auto mr-4 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
-       >
-         <ArrowUpIcon className="size-4" />
-       </Button>
-```
-
-### Diff: src/components/layout/issue/comments.tsx
-
-```diff
-diff --git a/src/components/layout/issue/comments.tsx b/src/components/layout/issue/comments.tsx
-index b14fe1b..b2230a6 100644
---- a/src/components/layout/issue/comments.tsx
-+++ b/src/components/layout/issue/comments.tsx
-@@ -16,16 +16,16 @@ export const Comments = ({ issueId }: { issueId: number }) => {
-     <ul className="mt-4 flex flex-col gap-4">
-       {comments.map(({ id, body, creator, created }) => (
-         <li
-+          className="rounded-lg border border-transparent bg-white p-4 shadow dark:border-neutral-700/50 dark:bg-neutral-800"
-           key={id}
--          className="bg-white dark:bg-neutral-800 border border-transparent dark:border-neutral-700/50 rounded-lg shadow p-4"
-         >
--          <div className="flex items-center -ml-0.5 -mt-0.5 mb-2 text-sm">
-+          <div className="-ml-0.5 -mt-0.5 mb-2 flex items-center text-sm">
-             <Avatar name={creator} />
--            <div className="font-medium ml-2.5 mr-2">{creator}</div>
-+            <div className="mr-2 ml-2.5 font-medium">{creator}</div>
-             {/* TODO: make this a relative date */}
-             <div className="text-neutral-500 dark:text-neutral-400">{formatDate(new Date(created))}</div>
-           </div>
--          <div className="text-neutral-600 dark:text-neutral-200 dark:prose-strong:text-neutral-200 prose-sm prose-strong:text-neutral-600 prose-p:my-2 prose-ol:my-2 prose-ul:my-2 prose-pre:my-2 font-normal -mb-2">
-+          <div className="prose-sm -mb-2 prose-ol:my-2 prose-p:my-2 prose-pre:my-2 prose-ul:my-2 font-normal prose-strong:text-neutral-600 text-neutral-600 dark:prose-strong:text-neutral-200 dark:text-neutral-200">
-             <ReactMarkdown>{body}</ReactMarkdown>
-           </div>
-         </li>
-```
-
-### Diff: src/components/layout/issue/delete-button.tsx
-
-```diff
-diff --git a/src/components/layout/issue/delete-button.tsx b/src/components/layout/issue/delete-button.tsx
-index d8e129c..ca89d3a 100644
---- a/src/components/layout/issue/delete-button.tsx
-+++ b/src/components/layout/issue/delete-button.tsx
-@@ -36,12 +36,12 @@ export const DeleteButton = ({
-   return (
-     <Button
-       aria-label="Delete issue"
-+      className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 hover:bg-neutral-100 hover:text-red-600 focus:bg-neutral-100 focus:text-red-600 focus:outline-none dark:focus:bg-neutral-800 dark:focus:text-red-500 dark:hover:bg-neutral-800 dark:hover:text-red-500 ${className}`}
-       onPress={onClick}
--      className={`rounded-lg h-8 min-w-8 px-2 flex items-center justify-center hover:bg-neutral-100 hover:text-red-600 dark:hover:text-red-500 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 focus:text-red-600 dark:focus:bg-neutral-800 dark:focus:text-red-500 ${className}`}
-     >
-       <TrashIcon className="size-3.5" />
-       {confirm && (
--        <span className="ml-1.5 mr-1 font-medium">
-+        <span className="mr-1 ml-1.5 font-medium">
-           Confirm<span className="hidden lg:inline"> delete</span>
-         </span>
-       )}
-```
-
-### Diff: src/components/layout/issue/description-input.tsx
-
-```diff
-diff --git a/src/components/layout/issue/description-input.tsx b/src/components/layout/issue/description-input.tsx
-index 4cefad7..f75f883 100644
---- a/src/components/layout/issue/description-input.tsx
-+++ b/src/components/layout/issue/description-input.tsx
-@@ -11,9 +11,9 @@ export const DescriptionInput = ({
-   className?: string
- }) => (
-   <Editor
--    className={`px-2 py-px rounded-md focus:bg-neutral-50 dark:focus:bg-neutral-800 ${className}`}
--    value={description ?? ''}
-+    className={`rounded-md px-2 py-px focus:bg-neutral-50 dark:focus:bg-neutral-800 ${className}`}
-     onChange={(value) => setDescription(value)}
-     placeholder="Add description..."
-+    value={description ?? ''}
-   />
- )
-```
-
-### Diff: src/components/layout/issue/index.tsx
-
-```diff
-diff --git a/src/components/layout/issue/index.tsx b/src/components/layout/issue/index.tsx
-index e4ce2cf..0633b5b 100644
---- a/src/components/layout/issue/index.tsx
-+++ b/src/components/layout/issue/index.tsx
-@@ -48,13 +48,13 @@ export const Issue = () => {
-   )
- 
-   return (
--    <div className="flex flex-col h-full">
--      <div className="h-12 shrink-0 border-b border-neutral-200 dark:border-neutral-700 flex items-center justify-between gap-8 px-2 lg:pl-6">
--        <div className="flex items-center gap-1 lg:gap-2 text-sm">
-+    <div className="flex h-full flex-col">
-+      <div className="flex h-12 shrink-0 items-center justify-between gap-8 border-neutral-200 border-b px-2 lg:pl-6 dark:border-neutral-700">
-+        <div className="flex items-center gap-1 text-sm lg:gap-2">
-           <MenuButton className="lg:hidden" />
-           <Button
-             aria-label="Back to issues"
--            className="font-medium hover:text-neutral-800 dark:hover:text-neutral-100 focus:outline-none ml-2 lg:ml-0"
-+            className="ml-2 font-medium hover:text-neutral-800 focus:outline-none lg:ml-0 dark:hover:text-neutral-100"
-             onPress={close}
-           >
-             Issues
-@@ -63,54 +63,54 @@ export const Issue = () => {
-           <div className="text-neutral-500 dark:text-neutral-400">{getIssueTag(id)}</div>
-         </div>
-         <div className="flex items-center gap-px">
--          <DeleteButton issueId={id} close={close} className="hidden lg:block" />
-+          <DeleteButton className="hidden lg:block" close={close} issueId={id} />
-           <BackButton close={close} />
-         </div>
-       </div>
--      <div className="flex flex-col lg:flex-row h-[calc(100%-3rem)]">
--        <div className="flex lg:hidden flex-wrap justify-between gap-2 p-4 border-b border-neutral-200 dark:border-neutral-700">
-+      <div className="flex h-[calc(100%-3rem)] flex-col lg:flex-row">
-+        <div className="flex flex-wrap justify-between gap-2 border-neutral-200 border-b p-4 lg:hidden dark:border-neutral-700">
-           <div className="flex items-center gap-px">
--            <StatusMenu showLabel status={issue.status} onStatusChange={handleChangeStatus} />
--            <PriorityMenu showLabel priority={issue.priority} onPriorityChange={handleChangePriority} />
-+            <StatusMenu onStatusChange={handleChangeStatus} showLabel status={issue.status} />
-+            <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} showLabel />
-           </div>
-           <div className="flex items-center gap-2">
--            <div className="text-neutral-500 dark:text-neutral-400 text-xs">{formatDate(new Date(issue.created))}</div>
-+            <div className="text-neutral-500 text-xs dark:text-neutral-400">{formatDate(new Date(issue.created))}</div>
-             <Avatar name={issue.creator} />
-           </div>
-         </div>
-         <div className="grow overflow-y-auto">
--          <div className="p-4 lg:p-14 border-b border-neutral-200 dark:border-neutral-700">
--            <TitleInput issue={issue} className="lg:mb-4" />
-+          <div className="border-neutral-200 border-b p-4 lg:p-14 dark:border-neutral-700">
-+            <TitleInput className="lg:mb-4" issue={issue} />
-             <DescriptionInput description={description} setDescription={handleChangeDescription} />
-           </div>
-           <div className="p-4 lg:p-14">
--            <h2 className="leading-none text-2xs uppercase font-medium tracking-wide text-neutral-400 mb-4">
-+            <h2 className="mb-4 font-medium text-2xs text-neutral-400 uppercase leading-none tracking-wide">
-               Comments
-             </h2>
-             <CommentInput issueId={issue.id} />
-             <Comments issueId={issue.id} />
-           </div>
-         </div>
--        <div className="hidden lg:block w-64 py-16 px-8 border-l border-neutral-200 dark:border-neutral-700 space-y-px">
--          <h2 className="leading-none text-2xs uppercase font-medium tracking-wide text-neutral-400 mb-4">
-+        <div className="hidden w-64 space-y-px border-neutral-200 border-l px-8 py-16 lg:block dark:border-neutral-700">
-+          <h2 className="mb-4 font-medium text-2xs text-neutral-400 uppercase leading-none tracking-wide">
-             Properties
-           </h2>
--          <div className="flex items-center h-8">
--            <div className="w-16 -mr-0.5 shrink-0">Creator:</div>
-+          <div className="flex h-8 items-center">
-+            <div className="-mr-0.5 w-16 shrink-0">Creator:</div>
-             <Avatar name={issue.creator} />
--            <div className="font-medium ml-2.5 mr-2">{issue.creator}</div>
-+            <div className="mr-2 ml-2.5 font-medium">{issue.creator}</div>
-           </div>
--          <div className="flex items-center h-8">
-+          <div className="flex h-8 items-center">
-             <div className="w-16 shrink-0">Created:</div>
-             <div>{formatDate(new Date(issue.created))}</div>
-           </div>
--          <div className="flex items-center h-8">
-+          <div className="flex h-8 items-center">
-             <div className="w-14 shrink-0">Status:</div>
--            <StatusMenu showLabel status={issue.status} onStatusChange={handleChangeStatus} />
-+            <StatusMenu onStatusChange={handleChangeStatus} showLabel status={issue.status} />
-           </div>
--          <div className="flex items-center h-8">
-+          <div className="flex h-8 items-center">
-             <div className="w-14 shrink-0">Priority:</div>
--            <PriorityMenu showLabel priority={issue.priority} onPriorityChange={handleChangePriority} />
-+            <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} showLabel />
-           </div>
-         </div>
-       </div>
-```
-
-### Diff: src/components/layout/issue/new-issue-modal.tsx
-
-```diff
-diff --git a/src/components/layout/issue/new-issue-modal.tsx b/src/components/layout/issue/new-issue-modal.tsx
-index 72c44cf..e4ba4d4 100644
---- a/src/components/layout/issue/new-issue-modal.tsx
-+++ b/src/components/layout/issue/new-issue-modal.tsx
-@@ -58,28 +58,28 @@ export const NewIssueModal = () => {
-   }
- 
-   return (
--    <Modal show={newIssueModalStatus !== false} setShow={closeModal}>
-+    <Modal setShow={closeModal} show={newIssueModalStatus !== false}>
-       <div className="p-2">
--        <h2 className="px-2 py-3 leading-none text-2xs uppercase font-medium tracking-wide text-neutral-400">
-+        <h2 className="px-2 py-3 font-medium text-2xs text-neutral-400 uppercase leading-none tracking-wide">
-           New issue
-         </h2>
--        <TitleInput title={title} setTitle={setTitle} className="focus:!bg-transparent" autoFocus />
-+        <TitleInput autoFocus className="focus:!bg-transparent" setTitle={setTitle} title={title} />
-         <DescriptionInput
-+          className="focus:!bg-transparent -mt-2"
-           description={description}
-           setDescription={setDescription}
--          className="focus:!bg-transparent -mt-2"
-         />
--        <div className="mt-2 flex gap-px w-full">
-+        <div className="mt-2 flex w-full gap-px">
-           <StatusMenu
-+            onStatusChange={setNewIssueModalStatus}
-             showLabel
-             status={newIssueModalStatus === false ? 0 : (newIssueModalStatus as Status)}
--            onStatusChange={setNewIssueModalStatus}
-           />
--          <PriorityMenu showLabel priority={priority} onPriorityChange={setPriority} />
-+          <PriorityMenu onPriorityChange={setPriority} priority={priority} showLabel />
-           <Button
--            onPress={createIssue}
-             aria-label="Create issue"
--            className="ml-auto bg-orange-500 rounded-lg text-white text-sm px-4 hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
-+            className="ml-auto rounded-lg bg-orange-500 px-4 text-sm text-white hover:bg-orange-400 focus:bg-orange-400 focus:outline-none"
-+            onPress={createIssue}
-           >
-             Create issue
-           </Button>
-```
-
-### Diff: src/components/layout/issue/title-input.tsx
-
-```diff
-diff --git a/src/components/layout/issue/title-input.tsx b/src/components/layout/issue/title-input.tsx
-index e8bfb3d..37cd340 100644
---- a/src/components/layout/issue/title-input.tsx
-+++ b/src/components/layout/issue/title-input.tsx
-@@ -26,11 +26,11 @@ export const TitleInput = ({
-   return (
-     <input
-       autoFocus={autoFocus}
--      className={`input w-full text-xl bg-transparent max-w-xl font-semibold placeholder-neutral-400 border-none leading-none p-2 focus:outline-none focus:border-none focus:ring-0 focus:bg-neutral-50 dark:focus:bg-neutral-800 rounded-md ${className}`}
-+      className={`input w-full max-w-xl rounded-md border-none bg-transparent p-2 font-semibold text-xl leading-none placeholder-neutral-400 focus:border-none focus:bg-neutral-50 focus:outline-none focus:ring-0 dark:focus:bg-neutral-800 ${className}`}
-+      onBlur={(e) => handleTitleChange(e.target.value)}
-+      onChange={(e) => handleTitleChange(e.target.value)}
-       placeholder="Issue title"
-       value={issue?.title ?? title}
--      onChange={(e) => handleTitleChange(e.target.value)}
--      onBlur={(e) => handleTitleChange(e.target.value)}
-     />
-   )
- }
-```
-
-### Diff: src/components/layout/list/filtered-list.tsx
-
-```diff
-diff --git a/src/components/layout/list/filtered-list.tsx b/src/components/layout/list/filtered-list.tsx
-index fb18259..5d51dca 100644
---- a/src/components/layout/list/filtered-list.tsx
-+++ b/src/components/layout/list/filtered-list.tsx
-@@ -1,28 +1,23 @@
- import React from 'react'
- import AutoSizer from 'react-virtualized-auto-sizer'
--import { FixedSizeList } from 'react-window'
-+import { List } from 'react-window'
- import { VirtualRow } from '@/components/layout/list/virtual-row'
--import { useDebouncedScrollState } from '@/lib/livestore/queries'
- 
- export const FilteredList = ({ filteredIssueIds }: { filteredIssueIds: readonly number[] }) => {
--  const [scrollState, setScrollState] = useDebouncedScrollState('filtered-list')
--
-   return (
-     <div className="grow">
-       <AutoSizer>
-         {({ height, width }: { width: number; height: number }) => (
--          <FixedSizeList
--            height={height}
--            itemCount={filteredIssueIds.length}
--            itemSize={48}
--            itemData={filteredIssueIds}
-+          <List
-             overscanCount={10}
--            width={width}
--            onScroll={(e) => setScrollState({ list: e.scrollOffset })}
--            initialScrollOffset={scrollState.list ?? 0}
--          >
--            {VirtualRow}
--          </FixedSizeList>
-+            rowComponent={({ index, style, ...rowProps }: any) => (
-+              <VirtualRow data={rowProps} index={index} style={style} />
-+            )}
-+            rowCount={filteredIssueIds.length}
-+            rowHeight={48}
-+            rowProps={filteredIssueIds}
-+            style={{ height, width }}
-+          />
-         )}
-       </AutoSizer>
-     </div>
-```
-
-### Diff: src/components/layout/list/row.tsx
-
-```diff
-diff --git a/src/components/layout/list/row.tsx b/src/components/layout/list/row.tsx
-index b667153..9ad18a1 100644
---- a/src/components/layout/list/row.tsx
-+++ b/src/components/layout/list/row.tsx
-@@ -24,22 +24,22 @@ export const Row = memo(({ issue, style }: { issue: Issue; style: CSSProperties
- 
-   return (
-     <div
--      key={issue.id}
-+      className="flex w-full cursor-pointer items-center justify-between gap-4 border-neutral-200 border-b pr-4 pl-2 text-sm last:border-b-0 hover:bg-neutral-50 lg:pl-4 dark:border-neutral-700 dark:hover:bg-neutral-800/50"
-       id={issue.id.toString()}
--      className="flex items-center gap-4 justify-between pr-4 pl-2 lg:pl-4 w-full text-sm border-b last:border-b-0 border-neutral-200 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800/50 dark:border-neutral-700"
-+      key={issue.id}
-       onClick={() => navigate(`/issue/${issue.id}`)}
-       style={style}
-     >
-       <div className="flex items-center gap-px">
--        <PriorityMenu priority={issue.priority} onPriorityChange={handleChangePriority} />
--        <div className="text-neutral-500 dark:text-neutral-400 px-1 text-xs hidden lg:block min-w-14">
-+        <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} />
-+        <div className="hidden min-w-14 px-1 text-neutral-500 text-xs lg:block dark:text-neutral-400">
-           {getIssueTag(issue.id)}
-         </div>
--        <StatusMenu status={issue.status} onStatusChange={handleChangeStatus} />
--        <div className="font-medium ml-2 shrink line-clamp-1">{issue.title}</div>
-+        <StatusMenu onStatusChange={handleChangeStatus} status={issue.status} />
-+        <div className="ml-2 line-clamp-1 shrink font-medium">{issue.title}</div>
-       </div>
-       <div className="flex items-center gap-4">
--        <div className="hidden lg:block text-neutral-500 dark:text-neutral-400 text-xs">
-+        <div className="hidden text-neutral-500 text-xs lg:block dark:text-neutral-400">
-           {formatDate(new Date(issue.created))}
-         </div>
-         <Avatar name={issue.creator} />
-```
-
-### Diff: src/components/layout/list/virtual-row.tsx
-
-```diff
-diff --git a/src/components/layout/list/virtual-row.tsx b/src/components/layout/list/virtual-row.tsx
-index afd9441..41614da 100644
---- a/src/components/layout/list/virtual-row.tsx
-+++ b/src/components/layout/list/virtual-row.tsx
-@@ -1,15 +1,24 @@
- import { queryDb } from '@livestore/livestore'
- import { useStore } from '@livestore/react'
- import React, { type CSSProperties, memo } from 'react'
--import { areEqual } from 'react-window'
- import { Row } from '@/components/layout/list/row'
- import { tables } from '@/lib/livestore/schema'
- 
- export const VirtualRow = memo(
-   ({ data, index, style }: { data: readonly number[]; index: number; style: CSSProperties }) => {
-     const { store } = useStore()
--    const issue = store.useQuery(queryDb(tables.issue.where({ id: data[index]! }).first(), { deps: [data[index]] }))
--    return <Row key={`issue-${issue.id}`} issue={issue} style={style} />
-+    const issueId = data[index]
-+
-+    if (!issueId) {
-+      return null
-+    }
-+
-+    const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId }).first(), { deps: [issueId] }))
-+
-+    if (!issue) {
-+      return null
-+    }
-+
-+    return <Row issue={issue} key={`issue-${issue.id}`} style={style} />
-   },
--  areEqual,
- )
-```
-
-### Diff: src/components/layout/search/search-bar.tsx
-
-```diff
-diff --git a/src/components/layout/search/search-bar.tsx b/src/components/layout/search/search-bar.tsx
-index cbfe713..e028e4c 100644
---- a/src/components/layout/search/search-bar.tsx
-+++ b/src/components/layout/search/search-bar.tsx
-@@ -16,23 +16,23 @@ export const SearchBar = () => {
-   })
- 
-   return (
--    <div className="h-12 shrink-0 relative border-b border-neutral-200 dark:border-neutral-700 flex items-center text-sm p-2 lg:pl-6">
-+    <div className="relative flex h-12 shrink-0 items-center border-neutral-200 border-b p-2 text-sm lg:pl-6 dark:border-neutral-700">
-       <MenuButton className="lg:hidden" />
--      <MagnifyingGlassIcon className="size-4 shrink-0 ml-2.5 lg:ml-0" />
-+      <MagnifyingGlassIcon className="ml-2.5 size-4 shrink-0 lg:ml-0" />
-       <Input
--        type="text"
-         autoFocus
--        className="input w-full border-none pl-2 lg:pl-3 bg-transparent focus:outline-none focus:ring-0 placholder:text-neutral-400 dark:placeholder:text-neutral-500 dark:text-neutral-200 text-neutral-800 text-sm"
--        value={filterState.query ?? ''}
--        placeholder="Search issues..."
-+        className="input w-full border-none bg-transparent pl-2 placholder:text-neutral-400 text-neutral-800 text-sm focus:outline-none focus:ring-0 lg:pl-3 dark:text-neutral-200 dark:placeholder:text-neutral-500"
-         onChange={(e) => setFilterState({ query: e.target.value })}
-+        placeholder="Search issues..."
-+        type="text"
-+        value={filterState.query ?? ''}
-         {...keyboardProps}
-       />
-       {filterState.query && (
-         <Button
-           aria-label="Clear search query"
-+          className="absolute right-2 flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100"
-           onPress={() => setFilterState({ query: null })}
--          className="absolute right-2 size-8 rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 flex items-center justify-center"
-         >
-           <XMarkIcon className="size-5" />
-         </Button>
-```
-
-### Diff: src/components/layout/sidebar/about-menu.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/about-menu.tsx b/src/components/layout/sidebar/about-menu.tsx
-index a09f911..953c7fb 100644
---- a/src/components/layout/sidebar/about-menu.tsx
-+++ b/src/components/layout/sidebar/about-menu.tsx
-@@ -12,40 +12,40 @@ export const AboutMenu = () => {
-       <MenuTrigger>
-         <Button
-           aria-label="Menu"
--          className="flex items-center text-lg font-bold px-2 h-8 leading-none hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-lg focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
-+          className="flex h-8 items-center rounded-lg px-2 font-bold text-lg leading-none hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-         >
--          <Icon name="linearlite" className="size-5 text-orange-500 dark:text-orange-500 mr-2" />
-+          <Icon className="mr-2 size-5 text-orange-500 dark:text-orange-500" name="linearlite" />
-           <span>LinearLite</span>
--          <ChevronDownIcon className="size-4 ml-1" />
-+          <ChevronDownIcon className="ml-1 size-4" />
-         </Button>
--        <Popover className="w-56 ml-1 bg-white dark:bg-neutral-800 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 text-sm leading-none">
-+        <Popover className="ml-1 w-56 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
-           <Menu className="focus:outline-none">
--            <MenuSection key="linearlite" className="p-2">
--              <Header className="p-2 text-2xs uppercase font-medium tracking-wide text-neutral-400">LinearLite</Header>
-+            <MenuSection className="p-2" key="linearlite">
-+              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">LinearLite</Header>
-               <MenuItem
-+                className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                 onAction={() => setShowAboutModal(true)}
--                className="p-2 rounded-md hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer"
-               >
-                 About
-               </MenuItem>
-             </MenuSection>
--            <Separator className="w-full h-px bg-neutral-200 dark:bg-neutral-700" />
--            <MenuSection key="livestore" className="p-2">
--              <Header className="p-2 text-2xs uppercase font-medium tracking-wide text-neutral-400">LiveStore</Header>
--              <MenuItem className="p-2 rounded-md hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer">
-+            <Separator className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />
-+            <MenuSection className="p-2" key="livestore">
-+              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">LiveStore</Header>
-+              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
-                 About
-               </MenuItem>
--              <MenuItem className="p-2 rounded-md hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer">
-+              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
-                 Documentation
-               </MenuItem>
--              <MenuItem className="p-2 rounded-md hover:bg-neutral-100 focus:outline-none focus:bg-neutral-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 cursor-pointer">
-+              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
-                 GitHub
-               </MenuItem>
-             </MenuSection>
-           </Menu>
-         </Popover>
-       </MenuTrigger>
--      <AboutModal show={showAboutModal} setShow={setShowAboutModal} />
-+      <AboutModal setShow={setShowAboutModal} show={showAboutModal} />
-     </>
-   )
- }
-```
-
-### Diff: src/components/layout/sidebar/about-modal.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/about-modal.tsx b/src/components/layout/sidebar/about-modal.tsx
-index f1217f8..5d1d22f 100644
---- a/src/components/layout/sidebar/about-modal.tsx
-+++ b/src/components/layout/sidebar/about-modal.tsx
-@@ -4,18 +4,18 @@ import { Modal } from '@/components/common/modal'
- 
- export const AboutModal = ({ show, setShow }: { show: boolean; setShow: (show: boolean) => void }) => {
-   return (
--    <Modal show={show} setShow={setShow} title="About LinearLite">
--      <div className="p-4 text-sm flex flex-col gap-2 text-neutral-500">
-+    <Modal setShow={setShow} show={show} title="About LinearLite">
-+      <div className="flex flex-col gap-2 p-4 text-neutral-500 text-sm">
-         <p>
-           LinearLite is an example of a collaboration application using a local-first approach, obviously inspired by{' '}
--          <Link to="https://linear.app" target="_blank" className="underline text-orange-600">
-+          <Link className="text-orange-600 underline" target="_blank" to="https://linear.app">
-             Linear
-           </Link>
-           .
-         </p>
-         <p>
-           It's built using{' '}
--          <Link to="https://www.livestore.dev" target="_blank" className="underline text-orange-600">
-+          <Link className="text-orange-600 underline" target="_blank" to="https://www.livestore.dev">
-             LiveStore
-           </Link>
-           , a local-first sync layer for web and mobile apps.
-```
-
-### Diff: src/components/layout/sidebar/index.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/index.tsx b/src/components/layout/sidebar/index.tsx
-index 555285b..cb5badb 100644
---- a/src/components/layout/sidebar/index.tsx
-+++ b/src/components/layout/sidebar/index.tsx
-@@ -30,7 +30,7 @@ export const Sidebar = ({ className }: { className?: string }) => {
- 
-   return (
-     <aside
--      className={`bg-white dark:bg-neutral-900 w-64 shrink-0 overflow-y-auto flex flex-col justify-between p-2 pt-4 ${className}`}
-+      className={`flex w-64 shrink-0 flex-col justify-between overflow-y-auto bg-white p-2 pt-4 dark:bg-neutral-900 ${className}`}
-     >
-       <div>
-         <div className="flex items-center justify-between pr-2">
-@@ -40,19 +40,19 @@ export const Sidebar = ({ className }: { className?: string }) => {
-             <NewIssueButton />
-           </div>
-         </div>
--        <h2 className="p-2 pt-0 leading-none text-2xs uppercase font-medium tracking-wide text-neutral-400 mt-8">
-+        <h2 className="mt-8 p-2 pt-0 font-medium text-2xs text-neutral-400 uppercase leading-none tracking-wide">
-           Issues
-         </h2>
--        <nav className="text-sm leading-none space-y-px">
-+        <nav className="space-y-px text-sm leading-none">
-           {navItems.map(({ title, icon: Icon, href, onClick }, index) => (
-             <Link
-+              className="flex h-8 items-center gap-2 rounded-md px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-               key={index}
--              to={href}
-               onClick={() => {
-                 onClick()
-                 setShowMenu(false)
-               }}
--              className="flex items-center gap-2 px-2 h-8 rounded-md focus:outline-none dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 hover:bg-neutral-100 focus:bg-neutral-100"
-+              to={href}
-             >
-               <Icon className="size-4" />
-               <span>{title}</span>
-@@ -60,7 +60,7 @@ export const Sidebar = ({ className }: { className?: string }) => {
-           ))}
-         </nav>
-       </div>
--      <div className="p-2 flex items-center gap-2">
-+      <div className="flex items-center gap-2 p-2">
-         <ToolbarButton />
-         <ThemeButton />
-       </div>
-```
-
-### Diff: src/components/layout/sidebar/mobile-menu.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/mobile-menu.tsx b/src/components/layout/sidebar/mobile-menu.tsx
-index 09cb6eb..9dee79c 100644
---- a/src/components/layout/sidebar/mobile-menu.tsx
-+++ b/src/components/layout/sidebar/mobile-menu.tsx
-@@ -10,12 +10,12 @@ export const MobileMenu = () => {
- 
-   return (
-     <ModalOverlay
-+      className={`fixed inset-0 flex items-stretch bg-black/10 dark:bg-black/20 ${frontendState.showToolbar ? 'bottom-10' : ''}`}
-+      isDismissable
-       isOpen={showMenu}
-       onOpenChange={setShowMenu}
--      className={`fixed inset-0 bg-black/10 dark:bg-black/20 flex items-stretch ${frontendState.showToolbar ? 'bottom-10' : ''}`}
--      isDismissable
-     >
--      <ReactAriaModal className="border-r border-neutral-200 dark:border-neutral-700">
-+      <ReactAriaModal className="border-neutral-200 border-r dark:border-neutral-700">
-         <Sidebar className="h-full" />
-       </ReactAriaModal>
-     </ModalOverlay>
-```
-
-### Diff: src/components/layout/sidebar/new-issue-button.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/new-issue-button.tsx b/src/components/layout/sidebar/new-issue-button.tsx
-index 0fab286..776a2dc 100644
---- a/src/components/layout/sidebar/new-issue-button.tsx
-+++ b/src/components/layout/sidebar/new-issue-button.tsx
-@@ -12,13 +12,13 @@ export const NewIssueButton = ({ status }: { status?: Status }) => {
-   return (
-     <Button
-       aria-label="New Issue"
-+      className={`flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800 ${status === undefined ? 'border border-neutral-200 bg-white shadow dark:border-neutral-700 dark:bg-neutral-900' : ''}`}
-       onPress={() => {
-         setNewIssueModalStatus(status ?? 0)
-         setShowMenu(false)
-       }}
--      className={`size-8 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 rounded-lg ${status === undefined ? 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow' : ''}`}
-     >
--      {status === undefined ? <Icon name="new-issue" className="size-4" /> : <PlusIcon className="size-4" />}
-+      {status === undefined ? <Icon className="size-4" name="new-issue" /> : <PlusIcon className="size-4" />}
-     </Button>
-   )
- }
-```
-
-### Diff: src/components/layout/sidebar/search-button.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/search-button.tsx b/src/components/layout/sidebar/search-button.tsx
-index ceca817..bd9a127 100644
---- a/src/components/layout/sidebar/search-button.tsx
-+++ b/src/components/layout/sidebar/search-button.tsx
-@@ -10,13 +10,13 @@ export const SearchButton = () => {
- 
-   return (
-     <Link
--      to="/search"
-       aria-label="Open search page"
-+      className="flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-       onClick={() => {
-         setFilterState({ query: null })
-         setShowMenu(false)
-       }}
--      className="rounded-lg size-8 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
-+      to="/search"
-     >
-       <MagnifyingGlassIcon className="size-4" />
-     </Link>
-```
-
-### Diff: src/components/layout/sidebar/theme-button.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/theme-button.tsx b/src/components/layout/sidebar/theme-button.tsx
-index f309c16..008d7b1 100644
---- a/src/components/layout/sidebar/theme-button.tsx
-+++ b/src/components/layout/sidebar/theme-button.tsx
-@@ -50,26 +50,26 @@ export const ThemeButton = () => {
-     <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
-       <Button
-         aria-label="Change theme"
--        className="size-8 flex items-center justify-center hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800 rounded-lg bg-white border border-neutral-200 dark:border-neutral-700 shadow"
-+        className="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-       >
-         <SunIcon className="size-4 dark:hidden" />
--        <MoonIcon className="size-4 hidden dark:block" />
-+        <MoonIcon className="hidden size-4 dark:block" />
-       </Button>
--      <Popover className="bg-white dark:bg-neutral-800 w-40 rounded-lg shadow-md border border-neutral-200 dark:border-neutral-700 text-sm leading-none">
-+      <Popover className="w-40 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
-         <Menu className="p-2 focus:outline-none" {...keyboardProps}>
-           {themeOptions.map(({ id, label, shortcut }) => {
-             return (
-               <MenuItem
-+                className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                 key={id}
-                 onAction={() => selectTheme(id)}
--                className="group/item p-2 rounded-md flex items-center gap-2 hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-700 cursor-pointer"
-               >
-                 {id === 'light' && <SunIcon className="size-3.5" />}
-                 {id === 'dark' && <MoonIcon className="size-3.5" />}
-                 {id === 'system' && <ComputerDesktopIcon className="size-3.5" />}
-                 <span>{label}</span>
--                {id === theme && <CheckIcon className="size-4 absolute right-9" />}
--                <Shortcut keys={[shortcut]} className="absolute right-3" />
-+                {id === theme && <CheckIcon className="absolute right-9 size-4" />}
-+                <Shortcut className="absolute right-3" keys={[shortcut]} />
-               </MenuItem>
-             )
-           })}
-```
-
-### Diff: src/components/layout/toolbar/devtools-button.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/devtools-button.tsx b/src/components/layout/toolbar/devtools-button.tsx
-index b912106..a8a0f2a 100644
---- a/src/components/layout/toolbar/devtools-button.tsx
-+++ b/src/components/layout/toolbar/devtools-button.tsx
-@@ -13,12 +13,12 @@ export const DevtoolsButton = ({ className }: { className?: string }) => {
-   }, [store.storeId, store.sessionId, store.clientId])
- 
-   return (
--    <div className={`lg:h-full flex items-center ${className}`}>
-+    <div className={`flex items-center lg:h-full ${className}`}>
-       <a
-         aria-label="Download database"
-+        className="flex h-6 items-center gap-1 rounded bg-orange-500 px-1.5 text-white hover:bg-orange-400 focus:bg-orange-400 focus:outline-none"
-         href={devtoolsUrl}
-         target="_blank"
--        className="h-6 px-1.5 flex items-center gap-1 bg-orange-500 text-white rounded hover:bg-orange-400 focus:outline-none focus:bg-orange-400"
-       >
-         <CodeBracketIcon className="size-3.5 shrink-0" />
-         <span>Devtools</span>
-```
-
-### Diff: src/components/layout/toolbar/download-button.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/download-button.tsx b/src/components/layout/toolbar/download-button.tsx
-index ff2acd6..a04c7f2 100644
---- a/src/components/layout/toolbar/download-button.tsx
-+++ b/src/components/layout/toolbar/download-button.tsx
-@@ -10,11 +10,11 @@ export const DownloadButton = ({ className }: { className?: string }) => {
-   }
- 
-   return (
--    <div className={`lg:h-full flex items-center ${className}`}>
-+    <div className={`flex items-center lg:h-full ${className}`}>
-       <Button
-         aria-label="Download database"
-+        className="flex h-6 items-center gap-1 rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
-         onPress={onClick}
--        className="h-6 px-1.5 flex items-center gap-1 bg-neutral-800 rounded hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700"
-       >
-         <ArrowDownIcon className="size-3 shrink-0" />
-         <span>Download</span>
-```
-
-### Diff: src/components/layout/toolbar/index.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/index.tsx b/src/components/layout/toolbar/index.tsx
-index 6dfb4ca..37751ae 100644
---- a/src/components/layout/toolbar/index.tsx
-+++ b/src/components/layout/toolbar/index.tsx
-@@ -12,30 +12,30 @@ import { SyncToggle } from './sync-toggle'
- 
- export const Toolbar = () => {
-   return (
--    <div className="w-screen h-10 bg-neutral-950 border-t border-neutral-700 text-neutral-400 flex items-center justify-between pl-1 pr-2">
-+    <div className="flex h-10 w-screen items-center justify-between border-neutral-700 border-t bg-neutral-950 pr-2 pl-1 text-neutral-400">
-       <div className="flex items-center gap-1">
-         <Link
--          to="https://livestore.dev/"
-+          className="flex h-6 items-center gap-2 rounded bg-neutral-900 px-1.5 font-bold text-neutral-300 text-sm hover:bg-neutral-800 focus:bg-neutral-800"
-           target="_blank"
--          className="flex items-center gap-2 text-sm font-bold rounded text-neutral-300 bg-neutral-900 hover:bg-neutral-800 focus:bg-neutral-800 px-1.5 h-6"
-+          to="https://livestore.dev/"
-         >
--          <Icon name="livestore" className="size-5 mt-0.5" />
-+          <Icon className="mt-0.5 size-5" name="livestore" />
-           <span>LiveStore</span>
-         </Link>
-         <SyncToggle />
-       </div>
--      <div className="hidden lg:flex items-center gap-1">
-+      <div className="hidden items-center gap-1 lg:flex">
-         <UserInput />
-         <ShareButton />
-       </div>
--      <div className="hidden lg:flex items-center gap-1">
-+      <div className="hidden items-center gap-1 lg:flex">
-         <span>Database:</span>
-         <SeedInput />
-         <ResetButton />
-         <DownloadButton />
-         {import.meta.env.DEV && <DevtoolsButton />}
-       </div>
--      <FPSMeter height={28} className="hidden lg:block" />
-+      <FPSMeter className="hidden lg:block" height={28} />
-     </div>
-   )
- }
-```
-
-### Diff: src/components/layout/toolbar/mobile-menu.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/mobile-menu.tsx b/src/components/layout/toolbar/mobile-menu.tsx
-index 8b80450..bbd6cc6 100644
---- a/src/components/layout/toolbar/mobile-menu.tsx
-+++ b/src/components/layout/toolbar/mobile-menu.tsx
-@@ -9,22 +9,22 @@ import { SyncToggle } from './sync-toggle'
- 
- export const MobileMenu = () => {
-   return (
--    <div className="h-full lg:hidden items-center border-x border-neutral-700 shrink-0 flex">
-+    <div className="flex h-full shrink-0 items-center border-neutral-700 border-x lg:hidden">
-       <DialogTrigger>
-         <Button
-           aria-label="Open LiveStore tools"
--          className="h-8 border-y border-neutral-700 flex items-center gap-1 pr-2 pl-3 focus:outline-none hover:bg-neutral-800 text-sm text-neutral-400 focus:bg-neutral-800"
-+          className="flex h-8 items-center gap-1 border-neutral-700 border-y pr-2 pl-3 text-neutral-400 text-sm hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none"
-         >
-           <span>Tools</span>
-           <ChevronUpIcon className="size-4" />
-         </Button>
-         <ModalOverlay
--          className="fixed inset-0 bottom-10 bg-black/10 dark:bg-black/20 flex flex-col justify-end"
-+          className="fixed inset-0 bottom-10 flex flex-col justify-end bg-black/10 dark:bg-black/20"
-           isDismissable
-         >
--          <ReactAriaModal className="px-2 w-full border-t border-neutral-700 bg-neutral-950">
--            <div className="flex flex-col items-stretch border-x border-neutral-700">
--              <div className="text-sm text-neutral-400 border-b border-neutral-700 px-2 py-4">
-+          <ReactAriaModal className="w-full border-neutral-700 border-t bg-neutral-950 px-2">
-+            <div className="flex flex-col items-stretch border-neutral-700 border-x">
-+              <div className="border-neutral-700 border-b px-2 py-4 text-neutral-400 text-sm">
-                 Please use the desktop version to access all LiveStore tools!
-               </div>
-               <UserInput />
-```
-
-### Diff: src/components/layout/toolbar/reset-button.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/reset-button.tsx b/src/components/layout/toolbar/reset-button.tsx
-index d8a24f6..a46fc1c 100644
---- a/src/components/layout/toolbar/reset-button.tsx
-+++ b/src/components/layout/toolbar/reset-button.tsx
-@@ -19,11 +19,11 @@ export const ResetButton = ({ className }: { className?: string }) => {
-   }
- 
-   return (
--    <div className={`lg:h-full flex items-center ${className}`}>
-+    <div className={`flex items-center lg:h-full ${className}`}>
-       <Button
-         aria-label="Reset database"
-+        className={`flex h-6 items-center gap-1 rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none ${confirm ? 'text-red-500' : 'text-neutral-400'}`}
-         onPress={onClick}
--        className={`h-6 px-1.5 flex items-center gap-1 bg-neutral-800 rounded hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700 ${confirm ? 'text-red-500' : 'text-neutral-400'}`}
-       >
-         <TrashIcon className="size-3 shrink-0" />
-         <span>{confirm ? 'Confirm' : 'Reset'}</span>
-```
-
-### Diff: src/components/layout/toolbar/seed-input.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/seed-input.tsx b/src/components/layout/toolbar/seed-input.tsx
-index 98e3ff8..7895ef6 100644
---- a/src/components/layout/toolbar/seed-input.tsx
-+++ b/src/components/layout/toolbar/seed-input.tsx
-@@ -14,20 +14,20 @@ export const SeedInput = ({ className }: { className?: string }) => {
-   }
- 
-   return (
--    <div className={`lg:h-full flex items-center gap-px ${className}`}>
-+    <div className={`flex items-center gap-px lg:h-full ${className}`}>
-       <Input
-         aria-label="Seed count"
--        placeholder="123"
-         autoComplete="off"
-+        className="h-6 w-12 rounded-l border-none bg-neutral-800 px-1.5 text-neutral-300 text-xs placeholder:text-neutral-500 hover:bg-neutral-700 focus:border-none focus:bg-neutral-700 focus:outline-none focus:ring-0"
-+        onChange={(e) => setCount(Number(e.target.value))}
-+        placeholder="123"
-         type="number"
-         value={count}
--        onChange={(e) => setCount(Number(e.target.value))}
--        className="h-6 px-1.5 border-none rounded-l text-xs bg-neutral-800 placeholder:text-neutral-500 text-neutral-300 w-12 focus:outline-none focus:ring-0 focus:border-none hover:bg-neutral-700 focus:bg-neutral-700"
-       />
-       <Button
-         aria-label="Seed database"
-+        className="flex h-6 items-center gap-1 rounded-r bg-neutral-800 pr-1.5 pl-1 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
-         onPress={onClick}
--        className="h-6 flex items-center gap-1 pl-1 pr-1.5 bg-neutral-800 rounded-r hover:bg-neutral-700 focus:outline-none focus:bg-neutral-700"
-       >
-         <PlusIcon className="size-3" />
-         <span>Seed</span>
-```
-
-### Diff: src/components/layout/toolbar/share-button.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/share-button.tsx b/src/components/layout/toolbar/share-button.tsx
-index 304e6ba..ed83037 100644
---- a/src/components/layout/toolbar/share-button.tsx
-+++ b/src/components/layout/toolbar/share-button.tsx
-@@ -23,8 +23,8 @@ export const ShareButton = ({ className }: { className?: string }) => {
-         <span>Workspace:</span>
-         <Button
-           aria-label="Copy workspace URL"
-+          className="flex h-6 items-center gap-1 whitespace-nowrap rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
-           onPress={copyUrl}
--          className="h-6 px-1.5 flex items-center gap-1 bg-neutral-800 rounded hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none whitespace-nowrap"
-         >
-           {copied ? (
-             <>
-@@ -45,24 +45,24 @@ export const ShareButton = ({ className }: { className?: string }) => {
-         </Button>
-         <Button
-           aria-label="Copy workspace URL"
-+          className="flex size-6 items-center justify-center rounded bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-800 focus:outline-none"
-           onPress={() => setShowQR(true)}
--          className="size-6 flex items-center justify-center bg-neutral-800 rounded hover:bg-neutral-700 focus:outline-none focus:bg-neutral-800"
-         >
-           <QrCodeIcon className="size-3.5" />
-         </Button>
-       </div>
-       <ModalOverlay
-+        className="fixed inset-0 bottom-12 flex items-start justify-center bg-black/10 p-4 pt-16 lg:pt-32 dark:bg-black/20"
-+        isDismissable
-         isOpen={showQR}
-         onOpenChange={setShowQR}
--        className="fixed inset-0 bottom-12 bg-black/10 dark:bg-black/20 flex items-start justify-center p-4 pt-16 lg:pt-32"
--        isDismissable
-       >
--        <ReactAriaModal className="relative bg-white rounded-xl shadow-lg border overflow-hidden border-neutral-200 p-4">
-+        <ReactAriaModal className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-lg">
-           <img
--            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURI(window.location.href)}`}
-             crossOrigin="anonymous"
--            width="200"
-             height="200"
-+            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURI(window.location.href)}`}
-+            width="200"
-           />
-         </ReactAriaModal>
-       </ModalOverlay>
-```
-
-### Diff: src/components/layout/toolbar/sync-toggle.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/sync-toggle.tsx b/src/components/layout/toolbar/sync-toggle.tsx
-index a9b4960..e5f3720 100644
---- a/src/components/layout/toolbar/sync-toggle.tsx
-+++ b/src/components/layout/toolbar/sync-toggle.tsx
-@@ -10,13 +10,13 @@ export const SyncToggle = ({ className }: { className?: string }) => {
-       {/* TODO add disabled tooltip for now */}
-       <Switch
-         aria-label="Toggle sync/network"
--        isSelected={sync}
-+        className="group flex h-6 cursor-pointer items-center gap-2 rounded bg-neutral-800 pr-1.5 pl-1 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
-+        isDisabled={true}
-+        isSelected={sync} // TODO enable when sync is implemented
-         onChange={setSync}
--        isDisabled={true} // TODO enable when sync is implemented
--        className="group flex h-6 items-center gap-2 bg-neutral-800 hover:bg-neutral-700 rounded pl-1 pr-1.5 focus:outline-none focus:bg-neutral-700 cursor-pointer"
-       >
--        <div className="h-4 p-px w-6 bg-neutral-600 rounded-full group-data-[selected]:bg-orange-500 transition-colors">
--          <span className="block size-3.5 bg-white rounded-full group-data-[selected]:translate-x-2 transition-transform" />
-+        <div className="h-4 w-6 rounded-full bg-neutral-600 p-px transition-colors group-data-[selected]:bg-orange-500">
-+          <span className="block size-3.5 rounded-full bg-white transition-transform group-data-[selected]:translate-x-2" />
-         </div>
-         <span>
-           Sync<span className="hidden xl:inline">/Network</span>
-```
-
-### Diff: src/components/layout/toolbar/toolbar-button.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/toolbar-button.tsx b/src/components/layout/toolbar/toolbar-button.tsx
-index 6ec9087..d699b71 100644
---- a/src/components/layout/toolbar/toolbar-button.tsx
-+++ b/src/components/layout/toolbar/toolbar-button.tsx
-@@ -12,10 +12,10 @@ export const ToolbarButton = () => {
-   return (
-     <Button
-       aria-label={frontendState.showToolbar ? 'Hide LiveStore Toolbar' : 'Show LiveStore Toolbar'}
--      className="bg-white dark:bg-neutral-900 rounded-lg border border-neutral-200 dark:border-neutral-700 shadow size-8 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none focus:bg-neutral-100 dark:focus:bg-neutral-800"
-+      className="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-       onPress={onClick}
-     >
--      <Icon name="sidebar" className="size-5 -rotate-90" />
-+      <Icon className="-rotate-90 size-5" name="sidebar" />
-     </Button>
-   )
- }
-```
-
-### Diff: src/components/layout/toolbar/user-input.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/user-input.tsx b/src/components/layout/toolbar/user-input.tsx
-index 6ba84eb..c2ec883 100644
---- a/src/components/layout/toolbar/user-input.tsx
-+++ b/src/components/layout/toolbar/user-input.tsx
-@@ -6,17 +6,17 @@ export const UserInput = ({ className }: { className?: string }) => {
-   const [frontendState, setFrontendState] = useFrontendState()
- 
-   return (
--    <div className={`lg:h-full flex items-center gap-1 ${className}`}>
-+    <div className={`flex items-center gap-1 lg:h-full ${className}`}>
-       <span>User:</span>
-       <Input
-         aria-label="Test User"
--        placeholder="Test User"
-         autoComplete="off"
-+        className="h-6 grow rounded border-none bg-neutral-800 bg-transparent px-1.5 text-neutral-300 text-xs placeholder:text-neutral-500 hover:bg-neutral-700 focus:border-none focus:bg-neutral-700 focus:outline-none focus:ring-0 lg:w-28 lg:grow-0"
-+        onBlur={() => setFrontendState({ ...frontendState, user: frontendState.user || 'John Doe' })}
-+        onChange={(e) => setFrontendState({ ...frontendState, user: e.target.value })}
-+        placeholder="Test User"
-         type="text"
-         value={frontendState.user}
--        onChange={(e) => setFrontendState({ ...frontendState, user: e.target.value })}
--        onBlur={() => setFrontendState({ ...frontendState, user: frontendState.user || 'John Doe' })}
--        className="h-6 px-1.5 bg-transparent bg-neutral-800 hover:bg-neutral-700 border-none text-xs rounded placeholder:text-neutral-500 text-neutral-300 grow lg:grow-0 lg:w-28 focus:outline-none focus:ring-0 focus:border-none focus:bg-neutral-700"
-       />
-     </div>
-   )
-```
-
-### Diff: src/lib/livestore/utils.tsx
-
-```diff
-diff --git a/src/lib/livestore/utils.tsx b/src/lib/livestore/utils.tsx
-index 6838267..9fd1506 100644
---- a/src/lib/livestore/utils.tsx
-+++ b/src/lib/livestore/utils.tsx
-@@ -5,9 +5,9 @@ import type { FilterState, tables } from './schema'
- 
- export const renderBootStatus = (bootStatus: BootStatus) => {
-   return (
--    <div className="fixed inset-0 bg-white dark:bg-neutral-900 flex flex-col items-center justify-center gap-4 text-sm">
--      <div className="flex items-center gap-3 text-xl font-bold">
--        <Icon name="livestore" className="size-7 mt-1" />
-+    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white text-sm dark:bg-neutral-900">
-+      <div className="flex items-center gap-3 font-bold text-xl">
-+        <Icon className="mt-1 size-7" name="livestore" />
-         <span>LiveStore</span>
-       </div>
-       {bootStatus.stage === 'loading' && <div>Loading...</div>}
-```
-
-### Diff: tailwind.config.cjs
-
-```diff
-diff --git a/tailwind.config.cjs b/tailwind.config.cjs
-deleted file mode 100644
-index 49c7d79..0000000
---- a/tailwind.config.cjs
-+++ /dev/null
-@@ -1,36 +0,0 @@
--/** @type {import('tailwindcss').Config} */
--export default {
--  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
--  darkMode: 'selector',
--  theme: {
--    extend: {
--      fontFamily: {
--        sans: [
--          'Inter\\ UI',
--          'SF\\ Pro\\ Display',
--          '-apple-system',
--          'BlinkMacSystemFont',
--          'Segoe\\ UI',
--          'Roboto',
--          'Oxygen',
--          'Ubuntu',
--          'Cantarell',
--          'Open\\ Sans',
--          'Helvetica\\ Neue',
--          'sans-serif',
--        ],
--      },
--      fontSize: {
--        '2xs': '0.625rem',
--      },
--    },
--  },
--
--  variants: {
--    extend: {
--      backgroundColor: ['checked'],
--      borderColor: ['checked'],
--    },
--  },
--  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
--}
-```
-
-### Diff: tsconfig.json
-
-```diff
-diff --git a/tsconfig.json b/tsconfig.json
-index 2ce425a..aa18e66 100644
---- a/tsconfig.json
-+++ b/tsconfig.json
-@@ -2,20 +2,14 @@
-   "compilerOptions": {
-     "target": "ES2022",
-     "useDefineForClassFields": true,
--    "lib": [
--      "ES2020",
--      "DOM",
--      "DOM.Iterable"
--    ],
-+    "lib": ["ES2020", "DOM", "DOM.Iterable"],
-     "module": "ESNext",
-     "skipLibCheck": true,
-     "composite": false,
-     "declaration": false,
-     "declarationMap": false,
-     "paths": {
--      "@/*": [
--        "./src/*"
--      ]
-+      "@/*": ["./src/*"]
-     },
-     "moduleResolution": "bundler",
-     "allowImportingTsExtensions": true,
-@@ -28,7 +22,5 @@
-     "noUncheckedIndexedAccess": true,
-     "noFallthroughCasesInSwitch": true
-   },
--  "include": [
--    "src"
--  ]
--}
-\ No newline at end of file
-+  "include": ["src"]
-+}
-```
-
-
-
----
-
-## 🤖 Prompt for Large Language Model
-
-### Instructions:
-Analyze the provided file paths and code diffs. Your task is to generate three separate, high-quality outputs:
-
-1.  A concise, conventional commit message following the format `<type>(<scope>): <subject>`.
-2.  A detailed commit description explaining what changed, why, and any relevant technical notes.
-
-### Project Context:
-This project uses **TypeScript**, **React**, **Tailwind CSS**, **ShadCN UI**, **Hono.js**, **Zustand**, **XState**, **Zod**, and **React Hook Form**. Preserve these terms and any other technical vocabulary as-is in your output.
-
-### Desired Output Format:
-Provide your response in a single block, with clear markdown headings for each section.
-
-```markdown
-## ✅ Generated Commit Message
-
-<Your concise, conventional commit message here.>
-
-## 📖 Generated Commit Description
-
-<Your detailed, multi-paragraph commit description here. Use bullet points for key changes or breaking changes.>
-
-```
```

### Diff: src/app/app.tsx

```diff
diff --git a/src/app/app.tsx b/src/app/app.tsx
index 2ab939b..b7cc1a6 100644
--- a/src/app/app.tsx
+++ b/src/app/app.tsx
@@ -7,7 +7,6 @@ import { List } from '@/components/layout/list'
 import { Search } from '@/components/layout/search'
 import { Sidebar } from '@/components/layout/sidebar'
 import 'animate.css/animate.min.css'
-import React from 'react'
 import { BrowserRouter, Route, Routes } from 'react-router-dom'
 
 export const App = () => {
```

### Diff: src/app/main.tsx

```diff
diff --git a/src/app/main.tsx b/src/app/main.tsx
index 2cf502f..c57b5c9 100644
--- a/src/app/main.tsx
+++ b/src/app/main.tsx
@@ -1,6 +1,5 @@
 import { App } from '@/app/app'
 import '@/app/style.css'
-import React from 'react'
 import { createRoot } from 'react-dom/client'
 
 const root = createRoot(document.getElementById('root')!)
```

### Diff: src/components/common/avatar.tsx

```diff
diff --git a/src/components/common/avatar.tsx b/src/components/common/avatar.tsx
index 102ae00..c6900dd 100644
--- a/src/components/common/avatar.tsx
+++ b/src/components/common/avatar.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { getAcronym } from '@/utils/get-acronym'
 
 export const Avatar = ({ name }: { name?: string }) => {
```

### Diff: src/components/common/editor-menu.tsx

```diff
diff --git a/src/components/common/editor-menu.tsx b/src/components/common/editor-menu.tsx
index 177e10c..f8c50e3 100644
--- a/src/components/common/editor-menu.tsx
+++ b/src/components/common/editor-menu.tsx
@@ -3,7 +3,6 @@ import { CodeBracketIcon, ListBulletIcon, NumberedListIcon, StrikethroughIcon }
 import { CodeBracketSquareIcon } from '@heroicons/react/24/outline'
 import { BoldIcon } from '@heroicons/react/24/solid'
 import type { Editor as TipTapEditor } from '@tiptap/react'
-import React from 'react'
 import { Button } from 'react-aria-components'
 
 export type EditorMenuProps = {
```

### Diff: src/components/common/modal.tsx

```diff
diff --git a/src/components/common/modal.tsx b/src/components/common/modal.tsx
index eac565c..b7fd564 100644
--- a/src/components/common/modal.tsx
+++ b/src/components/common/modal.tsx
@@ -1,5 +1,4 @@
 import { XMarkIcon } from '@heroicons/react/20/solid'
-import React from 'react'
 import { Button, Heading, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 
 export const Modal = ({
```

### Diff: src/components/common/priority-menu.tsx

```diff
diff --git a/src/components/common/priority-menu.tsx b/src/components/common/priority-menu.tsx
index e3f2a1b..ff88dfb 100644
--- a/src/components/common/priority-menu.tsx
+++ b/src/components/common/priority-menu.tsx
@@ -1,5 +1,4 @@
 import { CheckIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
 import { Shortcut } from '@/components/common/shortcut'
```

### Diff: src/components/common/shortcut.tsx

```diff
diff --git a/src/components/common/shortcut.tsx b/src/components/common/shortcut.tsx
index 50ae11f..1d2e272 100644
--- a/src/components/common/shortcut.tsx
+++ b/src/components/common/shortcut.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const Shortcut = ({ keys, className }: { keys: string[]; className?: string }) => {
   return (
```

### Diff: src/components/common/status-menu.tsx

```diff
diff --git a/src/components/common/status-menu.tsx b/src/components/common/status-menu.tsx
index bcc38ac..5c0f2ab 100644
--- a/src/components/common/status-menu.tsx
+++ b/src/components/common/status-menu.tsx
@@ -1,5 +1,4 @@
 import { CheckIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
 import { Shortcut } from '@/components/common/shortcut'
```

### Diff: src/components/icons/backlog.tsx

```diff
diff --git a/src/components/icons/backlog.tsx b/src/components/icons/backlog.tsx
index f32af36..bc6dca2 100644
--- a/src/components/icons/backlog.tsx
+++ b/src/components/icons/backlog.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const BacklogIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/canceled.tsx

```diff
diff --git a/src/components/icons/canceled.tsx b/src/components/icons/canceled.tsx
index f11fb61..ac644c5 100644
--- a/src/components/icons/canceled.tsx
+++ b/src/components/icons/canceled.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const CanceledIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/done.tsx

```diff
diff --git a/src/components/icons/done.tsx b/src/components/icons/done.tsx
index 7acbc7b..e9ce47f 100644
--- a/src/components/icons/done.tsx
+++ b/src/components/icons/done.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const DoneIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/filter.tsx

```diff
diff --git a/src/components/icons/filter.tsx b/src/components/icons/filter.tsx
index b776158..d84ab3b 100644
--- a/src/components/icons/filter.tsx
+++ b/src/components/icons/filter.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const FilterIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/in-progress.tsx

```diff
diff --git a/src/components/icons/in-progress.tsx b/src/components/icons/in-progress.tsx
index 664dbd7..0e9551a 100644
--- a/src/components/icons/in-progress.tsx
+++ b/src/components/icons/in-progress.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const InProgressIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/index.tsx

```diff
diff --git a/src/components/icons/index.tsx b/src/components/icons/index.tsx
index 9d12d51..061f10b 100644
--- a/src/components/icons/index.tsx
+++ b/src/components/icons/index.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { BacklogIcon } from '@/components/icons/backlog'
 import { CanceledIcon } from '@/components/icons/canceled'
 import { DoneIcon } from '@/components/icons/done'
```

### Diff: src/components/icons/linear-lite.tsx

```diff
diff --git a/src/components/icons/linear-lite.tsx b/src/components/icons/linear-lite.tsx
index a48e378..e4ad734 100644
--- a/src/components/icons/linear-lite.tsx
+++ b/src/components/icons/linear-lite.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const LinearLiteIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/livestore.tsx

```diff
diff --git a/src/components/icons/livestore.tsx b/src/components/icons/livestore.tsx
index 9100f9a..9415c4b 100644
--- a/src/components/icons/livestore.tsx
+++ b/src/components/icons/livestore.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const LivestoreIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/new-issue.tsx

```diff
diff --git a/src/components/icons/new-issue.tsx b/src/components/icons/new-issue.tsx
index f55775c..6c850e6 100644
--- a/src/components/icons/new-issue.tsx
+++ b/src/components/icons/new-issue.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const NewIssueIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/priority-high.tsx

```diff
diff --git a/src/components/icons/priority-high.tsx b/src/components/icons/priority-high.tsx
index e2c4db0..f4f4b08 100644
--- a/src/components/icons/priority-high.tsx
+++ b/src/components/icons/priority-high.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const PriorityHighIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/priority-low.tsx

```diff
diff --git a/src/components/icons/priority-low.tsx b/src/components/icons/priority-low.tsx
index fcbd4fa..8615602 100644
--- a/src/components/icons/priority-low.tsx
+++ b/src/components/icons/priority-low.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const PriorityLowIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/priority-medium.tsx

```diff
diff --git a/src/components/icons/priority-medium.tsx b/src/components/icons/priority-medium.tsx
index abe0876..28be634 100644
--- a/src/components/icons/priority-medium.tsx
+++ b/src/components/icons/priority-medium.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const PriorityMediumIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/priority-none.tsx

```diff
diff --git a/src/components/icons/priority-none.tsx b/src/components/icons/priority-none.tsx
index 1555c6c..fc17714 100644
--- a/src/components/icons/priority-none.tsx
+++ b/src/components/icons/priority-none.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const PriorityNoneIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/priority-urgent.tsx

```diff
diff --git a/src/components/icons/priority-urgent.tsx b/src/components/icons/priority-urgent.tsx
index 73498fd..c142983 100644
--- a/src/components/icons/priority-urgent.tsx
+++ b/src/components/icons/priority-urgent.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const PriorityUrgentIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/sidebar.tsx

```diff
diff --git a/src/components/icons/sidebar.tsx b/src/components/icons/sidebar.tsx
index 611cf93..d10343d 100644
--- a/src/components/icons/sidebar.tsx
+++ b/src/components/icons/sidebar.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const SidebarIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/icons/todo.tsx

```diff
diff --git a/src/components/icons/todo.tsx b/src/components/icons/todo.tsx
index d45adfe..f4d18ba 100644
--- a/src/components/icons/todo.tsx
+++ b/src/components/icons/todo.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 
 export const TodoIcon = ({ className }: { className?: string }) => {
   return (
```

### Diff: src/components/layout/board/card.tsx

```diff
diff --git a/src/components/layout/board/card.tsx b/src/components/layout/board/card.tsx
index df309d7..da98793 100644
--- a/src/components/layout/board/card.tsx
+++ b/src/components/layout/board/card.tsx
@@ -1,5 +1,4 @@
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { useNavigate } from 'react-router-dom'
 import { Avatar } from '@/components/common/avatar'
```

### Diff: src/components/layout/board/column.tsx

```diff
diff --git a/src/components/layout/board/column.tsx b/src/components/layout/board/column.tsx
index b149161..45cf435 100644
--- a/src/components/layout/board/column.tsx
+++ b/src/components/layout/board/column.tsx
@@ -1,7 +1,6 @@
 import { queryDb } from '@livestore/livestore'
 import * as LiveStoreReact from '@livestore/react'
 import { generateKeyBetween } from 'fractional-indexing'
-import React from 'react'
 import {
   DropIndicator,
   type DropPosition,
```

### Diff: src/components/layout/board/index.tsx

```diff
diff --git a/src/components/layout/board/index.tsx b/src/components/layout/board/index.tsx
index ff87563..dce77f9 100644
--- a/src/components/layout/board/index.tsx
+++ b/src/components/layout/board/index.tsx
@@ -1,6 +1,5 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Column } from '@/components/layout/board/column'
 import { Filters } from '@/components/layout/filters'
 import { statusOptions } from '@/data/status-options'
```

### Diff: src/components/layout/filters/header.tsx

```diff
diff --git a/src/components/layout/filters/header.tsx b/src/components/layout/filters/header.tsx
index 2e5cf82..a36800f 100644
--- a/src/components/layout/filters/header.tsx
+++ b/src/components/layout/filters/header.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { MenuButton } from '@/components/common/menu-button'
 
 export const Header = ({
```

### Diff: src/components/layout/filters/index.tsx

```diff
diff --git a/src/components/layout/filters/index.tsx b/src/components/layout/filters/index.tsx
index 10e64b1..a82f459 100644
--- a/src/components/layout/filters/index.tsx
+++ b/src/components/layout/filters/index.tsx
@@ -1,5 +1,4 @@
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { Icon } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
```

### Diff: src/components/layout/filters/priority-filter.tsx

```diff
diff --git a/src/components/layout/filters/priority-filter.tsx b/src/components/layout/filters/priority-filter.tsx
index f7758cc..1909f21 100644
--- a/src/components/layout/filters/priority-filter.tsx
+++ b/src/components/layout/filters/priority-filter.tsx
@@ -1,5 +1,4 @@
 import { XMarkIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { Icon, type IconName } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
```

### Diff: src/components/layout/filters/sort-menu.tsx

```diff
diff --git a/src/components/layout/filters/sort-menu.tsx b/src/components/layout/filters/sort-menu.tsx
index e9c4790..a77a09a 100644
--- a/src/components/layout/filters/sort-menu.tsx
+++ b/src/components/layout/filters/sort-menu.tsx
@@ -1,5 +1,4 @@
 import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'
-import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover } from 'react-aria-components'
 import { Shortcut } from '@/components/common/shortcut'
```

### Diff: src/components/layout/filters/status-filter.tsx

```diff
diff --git a/src/components/layout/filters/status-filter.tsx b/src/components/layout/filters/status-filter.tsx
index fc83aa9..1025830 100644
--- a/src/components/layout/filters/status-filter.tsx
+++ b/src/components/layout/filters/status-filter.tsx
@@ -1,5 +1,4 @@
 import { XMarkIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { Icon, type IconName } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
```

### Diff: src/components/layout/issue/back-button.tsx

```diff
diff --git a/src/components/layout/issue/back-button.tsx b/src/components/layout/issue/back-button.tsx
index 0d1b4dd..61142f6 100644
--- a/src/components/layout/issue/back-button.tsx
+++ b/src/components/layout/issue/back-button.tsx
@@ -1,5 +1,4 @@
 import { XMarkIcon } from '@heroicons/react/20/solid'
-import React from 'react'
 import { Button } from 'react-aria-components'
 
 export const BackButton = ({ close }: { close: () => void }) => {
```

### Diff: src/components/layout/issue/comment-input.tsx

```diff
diff --git a/src/components/layout/issue/comment-input.tsx b/src/components/layout/issue/comment-input.tsx
index 1af98cf..969ffce 100644
--- a/src/components/layout/issue/comment-input.tsx
+++ b/src/components/layout/issue/comment-input.tsx
@@ -1,6 +1,5 @@
 import { ArrowUpIcon } from '@heroicons/react/20/solid'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button } from 'react-aria-components'
 import Editor from '@/components/common/editor'
```

### Diff: src/components/layout/issue/comments.tsx

```diff
diff --git a/src/components/layout/issue/comments.tsx b/src/components/layout/issue/comments.tsx
index b2230a6..46046a3 100644
--- a/src/components/layout/issue/comments.tsx
+++ b/src/components/layout/issue/comments.tsx
@@ -1,6 +1,5 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import ReactMarkdown from 'react-markdown'
 import { Avatar } from '@/components/common/avatar'
 import { tables } from '@/lib/livestore/schema'
```

### Diff: src/components/layout/issue/delete-button.tsx

```diff
diff --git a/src/components/layout/issue/delete-button.tsx b/src/components/layout/issue/delete-button.tsx
index ca89d3a..6575fb6 100644
--- a/src/components/layout/issue/delete-button.tsx
+++ b/src/components/layout/issue/delete-button.tsx
@@ -1,6 +1,5 @@
 import { TrashIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { events } from '@/lib/livestore/schema'
```

### Diff: src/components/layout/issue/description-input.tsx

```diff
diff --git a/src/components/layout/issue/description-input.tsx b/src/components/layout/issue/description-input.tsx
index f75f883..e716ffd 100644
--- a/src/components/layout/issue/description-input.tsx
+++ b/src/components/layout/issue/description-input.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import Editor from '@/components/common/editor'
 
 export const DescriptionInput = ({
```

### Diff: src/components/layout/issue/index.tsx

```diff
diff --git a/src/components/layout/issue/index.tsx b/src/components/layout/issue/index.tsx
index 0633b5b..fcf1bdb 100644
--- a/src/components/layout/issue/index.tsx
+++ b/src/components/layout/issue/index.tsx
@@ -1,7 +1,6 @@
 import { ChevronRightIcon } from '@heroicons/react/16/solid'
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { useNavigate, useParams } from 'react-router-dom'
 import { Avatar } from '@/components/common/avatar'
```

### Diff: src/components/layout/issue/new-issue-modal.tsx

```diff
diff --git a/src/components/layout/issue/new-issue-modal.tsx b/src/components/layout/issue/new-issue-modal.tsx
index e4ba4d4..e7d6447 100644
--- a/src/components/layout/issue/new-issue-modal.tsx
+++ b/src/components/layout/issue/new-issue-modal.tsx
@@ -1,6 +1,5 @@
 import { useStore } from '@livestore/react'
 import { generateKeyBetween } from 'fractional-indexing'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { NewIssueModalContext } from '@/app/contexts'
 import { Modal } from '@/components/common/modal'
@@ -29,7 +28,9 @@ export const NewIssueModal = () => {
   }
 
   const createIssue = () => {
-    if (!title) return
+    if (!title) {
+      return
+    }
     const date = new Date()
     // TODO make this "merge safe"
     const highestIssueId = store.query(highestIssueId$)
```

### Diff: src/components/layout/issue/title-input.tsx

```diff
diff --git a/src/components/layout/issue/title-input.tsx b/src/components/layout/issue/title-input.tsx
index 37cd340..f505fe7 100644
--- a/src/components/layout/issue/title-input.tsx
+++ b/src/components/layout/issue/title-input.tsx
@@ -1,5 +1,4 @@
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { events } from '@/lib/livestore/schema'
 import type { Issue } from '@/types/issue'
```

### Diff: src/components/layout/list/filtered-list.tsx

```diff
diff --git a/src/components/layout/list/filtered-list.tsx b/src/components/layout/list/filtered-list.tsx
index 5d51dca..6d200d5 100644
--- a/src/components/layout/list/filtered-list.tsx
+++ b/src/components/layout/list/filtered-list.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import AutoSizer from 'react-virtualized-auto-sizer'
 import { List } from 'react-window'
 import { VirtualRow } from '@/components/layout/list/virtual-row'
```

### Diff: src/components/layout/list/index.tsx

```diff
diff --git a/src/components/layout/list/index.tsx b/src/components/layout/list/index.tsx
index ce93d03..5be53cd 100644
--- a/src/components/layout/list/index.tsx
+++ b/src/components/layout/list/index.tsx
@@ -1,6 +1,5 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Filters } from '@/components/layout/filters'
 import { FilteredList } from '@/components/layout/list/filtered-list'
 import { filterState$ } from '@/lib/livestore/queries'
```

### Diff: src/components/layout/search/index.tsx

```diff
diff --git a/src/components/layout/search/index.tsx b/src/components/layout/search/index.tsx
index 3657002..0fa7ce9 100644
--- a/src/components/layout/search/index.tsx
+++ b/src/components/layout/search/index.tsx
@@ -1,6 +1,5 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Filters } from '@/components/layout/filters'
 import { FilteredList } from '@/components/layout/list/filtered-list'
 import { filterState$, useFilterState } from '@/lib/livestore/queries'
```

### Diff: src/components/layout/search/search-bar.tsx

```diff
diff --git a/src/components/layout/search/search-bar.tsx b/src/components/layout/search/search-bar.tsx
index e028e4c..8f22a01 100644
--- a/src/components/layout/search/search-bar.tsx
+++ b/src/components/layout/search/search-bar.tsx
@@ -1,6 +1,5 @@
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
 import { XMarkIcon } from '@heroicons/react/20/solid'
-import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Input } from 'react-aria-components'
 import { MenuButton } from '@/components/common/menu-button'
```

### Diff: src/components/layout/sidebar/about-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/about-menu.tsx b/src/components/layout/sidebar/about-menu.tsx
index 953c7fb..d74fcad 100644
--- a/src/components/layout/sidebar/about-menu.tsx
+++ b/src/components/layout/sidebar/about-menu.tsx
@@ -1,5 +1,4 @@
 import { ChevronDownIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
 import { Icon } from '@/components/icons'
 import { AboutModal } from '@/components/layout/sidebar/about-modal'
```

### Diff: src/components/layout/sidebar/about-modal.tsx

```diff
diff --git a/src/components/layout/sidebar/about-modal.tsx b/src/components/layout/sidebar/about-modal.tsx
index 5d1d22f..87344db 100644
--- a/src/components/layout/sidebar/about-modal.tsx
+++ b/src/components/layout/sidebar/about-modal.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { Link } from 'react-router-dom'
 import { Modal } from '@/components/common/modal'
```

### Diff: src/components/layout/sidebar/index.tsx

```diff
diff --git a/src/components/layout/sidebar/index.tsx b/src/components/layout/sidebar/index.tsx
index cb5badb..1a1e6d3 100644
--- a/src/components/layout/sidebar/index.tsx
+++ b/src/components/layout/sidebar/index.tsx
@@ -1,5 +1,4 @@
 import { Bars4Icon, ViewColumnsIcon } from '@heroicons/react/24/outline'
-import React from 'react'
 import { Link } from 'react-router-dom'
 import { MenuContext } from '@/app/contexts'
 import { AboutMenu } from '@/components/layout/sidebar/about-menu'
```

### Diff: src/components/layout/sidebar/mobile-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/mobile-menu.tsx b/src/components/layout/sidebar/mobile-menu.tsx
index 9dee79c..2337935 100644
--- a/src/components/layout/sidebar/mobile-menu.tsx
+++ b/src/components/layout/sidebar/mobile-menu.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 import { MenuContext } from '@/app/contexts'
 import { Sidebar } from '@/components/layout/sidebar'
```

### Diff: src/components/layout/sidebar/new-issue-button.tsx

```diff
diff --git a/src/components/layout/sidebar/new-issue-button.tsx b/src/components/layout/sidebar/new-issue-button.tsx
index 776a2dc..01227ac 100644
--- a/src/components/layout/sidebar/new-issue-button.tsx
+++ b/src/components/layout/sidebar/new-issue-button.tsx
@@ -1,5 +1,4 @@
 import { PlusIcon } from '@heroicons/react/20/solid'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { MenuContext, NewIssueModalContext } from '@/app/contexts'
 import { Icon } from '@/components/icons'
```

### Diff: src/components/layout/sidebar/search-button.tsx

```diff
diff --git a/src/components/layout/sidebar/search-button.tsx b/src/components/layout/sidebar/search-button.tsx
index bd9a127..891fd83 100644
--- a/src/components/layout/sidebar/search-button.tsx
+++ b/src/components/layout/sidebar/search-button.tsx
@@ -1,5 +1,4 @@
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { Link } from 'react-router-dom'
 import { MenuContext } from '@/app/contexts'
 import { useFilterState } from '@/lib/livestore/queries'
```

### Diff: src/components/layout/sidebar/theme-button.tsx

```diff
diff --git a/src/components/layout/sidebar/theme-button.tsx b/src/components/layout/sidebar/theme-button.tsx
index 008d7b1..f5af1eb 100644
--- a/src/components/layout/sidebar/theme-button.tsx
+++ b/src/components/layout/sidebar/theme-button.tsx
@@ -1,6 +1,5 @@
 import { CheckIcon, MoonIcon, SunIcon } from '@heroicons/react/16/solid'
 import { ComputerDesktopIcon } from '@heroicons/react/20/solid'
-import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
 import { Shortcut } from '@/components/common/shortcut'
```

### Diff: src/components/layout/toolbar/devtools-button.tsx

```diff
diff --git a/src/components/layout/toolbar/devtools-button.tsx b/src/components/layout/toolbar/devtools-button.tsx
index a8a0f2a..88f53d6 100644
--- a/src/components/layout/toolbar/devtools-button.tsx
+++ b/src/components/layout/toolbar/devtools-button.tsx
@@ -1,6 +1,5 @@
 import { CodeBracketIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
-import React from 'react'
 
 export const DevtoolsButton = ({ className }: { className?: string }) => {
   const { store } = useStore()
```

### Diff: src/components/layout/toolbar/download-button.tsx

```diff
diff --git a/src/components/layout/toolbar/download-button.tsx b/src/components/layout/toolbar/download-button.tsx
index a04c7f2..6c440b4 100644
--- a/src/components/layout/toolbar/download-button.tsx
+++ b/src/components/layout/toolbar/download-button.tsx
@@ -1,6 +1,5 @@
 import { ArrowDownIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Button } from 'react-aria-components'
 
 export const DownloadButton = ({ className }: { className?: string }) => {
```

### Diff: src/components/layout/toolbar/index.tsx

```diff
diff --git a/src/components/layout/toolbar/index.tsx b/src/components/layout/toolbar/index.tsx
index 37751ae..ac09a3d 100644
--- a/src/components/layout/toolbar/index.tsx
+++ b/src/components/layout/toolbar/index.tsx
@@ -1,5 +1,4 @@
 import { FPSMeter } from '@overengineering/fps-meter'
-import React from 'react'
 import { Link } from 'react-router-dom'
 import { Icon } from '@/components/icons'
 import { DownloadButton } from '@/components/layout/toolbar/download-button'
```

### Diff: src/components/layout/toolbar/mobile-menu.tsx

```diff
diff --git a/src/components/layout/toolbar/mobile-menu.tsx b/src/components/layout/toolbar/mobile-menu.tsx
index bbd6cc6..61390c5 100644
--- a/src/components/layout/toolbar/mobile-menu.tsx
+++ b/src/components/layout/toolbar/mobile-menu.tsx
@@ -1,5 +1,4 @@
 import { ChevronUpIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { Button, DialogTrigger, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 import { ResetButton } from '@/components/layout/toolbar/reset-button'
 import { SeedInput } from '@/components/layout/toolbar/seed-input'
```

### Diff: src/components/layout/toolbar/reset-button.tsx

```diff
diff --git a/src/components/layout/toolbar/reset-button.tsx b/src/components/layout/toolbar/reset-button.tsx
index a46fc1c..b53b724 100644
--- a/src/components/layout/toolbar/reset-button.tsx
+++ b/src/components/layout/toolbar/reset-button.tsx
@@ -1,5 +1,4 @@
 import { TrashIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { useNavigate } from 'react-router-dom'
```

### Diff: src/components/layout/toolbar/seed-input.tsx

```diff
diff --git a/src/components/layout/toolbar/seed-input.tsx b/src/components/layout/toolbar/seed-input.tsx
index 7895ef6..373291c 100644
--- a/src/components/layout/toolbar/seed-input.tsx
+++ b/src/components/layout/toolbar/seed-input.tsx
@@ -1,6 +1,5 @@
 import { PlusIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
-import React from 'react'
 import { Button, Input } from 'react-aria-components'
 import { seed } from '@/lib/livestore/seed'
```

### Diff: src/components/layout/toolbar/share-button.tsx

```diff
diff --git a/src/components/layout/toolbar/share-button.tsx b/src/components/layout/toolbar/share-button.tsx
index ed83037..9d9e732 100644
--- a/src/components/layout/toolbar/share-button.tsx
+++ b/src/components/layout/toolbar/share-button.tsx
@@ -1,5 +1,4 @@
 import { CheckIcon, LinkIcon, QrCodeIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { Button, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 
 // This uses a public QR code API: https://goqr.me/api/doc/create-qr-code/
```

### Diff: src/components/layout/toolbar/sync-toggle.tsx

```diff
diff --git a/src/components/layout/toolbar/sync-toggle.tsx b/src/components/layout/toolbar/sync-toggle.tsx
index e5f3720..826d454 100644
--- a/src/components/layout/toolbar/sync-toggle.tsx
+++ b/src/components/layout/toolbar/sync-toggle.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { Switch } from 'react-aria-components'
 
 export const SyncToggle = ({ className }: { className?: string }) => {
```

### Diff: src/components/layout/toolbar/toolbar-button.tsx

```diff
diff --git a/src/components/layout/toolbar/toolbar-button.tsx b/src/components/layout/toolbar/toolbar-button.tsx
index d699b71..5b167af 100644
--- a/src/components/layout/toolbar/toolbar-button.tsx
+++ b/src/components/layout/toolbar/toolbar-button.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { Button } from 'react-aria-components'
 import { Icon } from '@/components/icons'
 import { useFrontendState } from '@/lib/livestore/queries'
```

### Diff: src/components/layout/toolbar/user-input.tsx

```diff
diff --git a/src/components/layout/toolbar/user-input.tsx b/src/components/layout/toolbar/user-input.tsx
index c2ec883..9c11588 100644
--- a/src/components/layout/toolbar/user-input.tsx
+++ b/src/components/layout/toolbar/user-input.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { Input } from 'react-aria-components'
 import { useFrontendState } from '@/lib/livestore/queries'
```

### Diff: src/lib/livestore/queries.ts

```diff
diff --git a/src/lib/livestore/queries.ts b/src/lib/livestore/queries.ts
index 91a8e51..e6838eb 100644
--- a/src/lib/livestore/queries.ts
+++ b/src/lib/livestore/queries.ts
@@ -1,6 +1,5 @@
 import { queryDb } from '@livestore/livestore'
 import { useClientDocument } from '@livestore/react'
-import React from 'react'
 import { tables } from '@/lib/livestore/schema'
 
 export const useFilterState = () => useClientDocument(tables.filterState)
```

### Diff: src/lib/livestore/utils.tsx

```diff
diff --git a/src/lib/livestore/utils.tsx b/src/lib/livestore/utils.tsx
index 9fd1506..2276168 100644
--- a/src/lib/livestore/utils.tsx
+++ b/src/lib/livestore/utils.tsx
@@ -1,5 +1,4 @@
 import type { BootStatus, QueryBuilder } from '@livestore/livestore'
-import React from 'react'
 import { Icon } from '@/components/icons'
 import type { FilterState, tables } from './schema'
```

### Diff: tsconfig.json

```diff
diff --git a/tsconfig.json b/tsconfig.json
index aa18e66..a0f33f9 100644
--- a/tsconfig.json
+++ b/tsconfig.json
@@ -16,7 +16,7 @@
     "resolveJsonModule": true,
     "isolatedModules": true,
     "noEmit": true,
-    "jsx": "react",
+    "jsx": "react-jsx",
     "strict": true,
     "strictNullChecks": true,
     "noUncheckedIndexedAccess": true,
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
