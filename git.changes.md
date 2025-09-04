# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- README.md
- biome.json
- git.changes.md
- index.html
- src/components/common/editor.tsx
- src/components/common/priority-menu.tsx
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
- src/components/layout/filters/filter-menu.tsx
- src/components/layout/filters/index.tsx
- src/components/layout/filters/priority-filter.tsx
- src/components/layout/filters/status-filter.tsx
- src/components/layout/index.tsx
- src/components/layout/issue/delete-button.tsx
- src/components/layout/issue/new-issue-modal.tsx
- src/components/layout/issue/title-input.tsx
- src/components/layout/list/filtered-list.tsx
- src/components/layout/list/row.tsx
- src/components/layout/sidebar/about-menu.tsx
- src/components/layout/sidebar/about-modal.tsx
- src/components/layout/sidebar/index.tsx
- src/components/layout/sidebar/mobile-menu.tsx
- src/components/layout/sidebar/new-issue-button.tsx
- src/components/layout/sidebar/search-button.tsx
- src/components/layout/toolbar/reset-button.tsx
- src/components/layout/toolbar/share-button.tsx
- src/hooks/useDebounce.ts
- src/lib/livestore/queries.ts
- src/lib/livestore/seed.ts

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: README.md

```diff
diff --git a/README.md b/README.md
index d4547a5..07e27bc 100644
--- a/README.md
+++ b/README.md
@@ -1,4 +1,4 @@
-# 2025-livestore-linearlite
+# 2025-livestore-zensync
 
 A modern React application built with Vite, TypeScript, and Tailwind CSS, using Bun as the runtime and package manager.
```

### Diff: biome.json

```diff
diff --git a/biome.json b/biome.json
index 6fda973..55ad11c 100644
--- a/biome.json
+++ b/biome.json
@@ -50,7 +50,8 @@
         "noUnknownAtRules": "off"
       },
       "a11y": {
-        "noSvgWithoutTitle": "off"
+        "noSvgWithoutTitle": "off",
+        "useSemanticElements": "off"
       }
     }
   },
```

### Diff: git.changes.md

```diff
diff --git a/git.changes.md b/git.changes.md
deleted file mode 100644
index e299288..0000000
--- a/git.changes.md
+++ /dev/null
@@ -1,842 +0,0 @@
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
-- src/app/contexts.ts
-- src/app/provider.tsx
-- src/components/common/editor.tsx
-- src/components/common/menu-button.tsx
-- src/components/common/modal.tsx
-- src/components/common/priority-menu.tsx
-- src/components/common/status-menu.tsx
-- src/components/layout/board/column.tsx
-- src/components/layout/filters/filter-menu.tsx
-- src/components/layout/filters/priority-filter.tsx
-- src/components/layout/filters/sort-menu.tsx
-- src/components/layout/filters/status-filter.tsx
-- src/components/layout/index.tsx
-- src/components/layout/issue/back-button.tsx
-- src/components/layout/issue/comment-input.tsx
-- src/components/layout/issue/delete-button.tsx
-- src/components/layout/issue/index.tsx
-- src/components/layout/issue/new-issue-modal.tsx
-- src/components/layout/issue/title-input.tsx
-- src/components/layout/list/row.tsx
-- src/components/layout/list/virtual-row.tsx
-- src/components/layout/search/search-bar.tsx
-- src/components/layout/sidebar/about-menu.tsx
-- src/components/layout/sidebar/index.tsx
-- src/components/layout/sidebar/mobile-menu.tsx
-- src/components/layout/sidebar/new-issue-button.tsx
-- src/components/layout/sidebar/search-button.tsx
-- src/components/layout/sidebar/theme-button.tsx
-- src/components/layout/toolbar/devtools-button.tsx
-- src/components/layout/toolbar/reset-button.tsx
-- src/components/layout/toolbar/seed-input.tsx
-- src/components/layout/toolbar/share-button.tsx
-- src/components/layout/toolbar/sync-toggle.tsx
-- src/lib/livestore/queries.ts
-
----
-
-## 📝 Code Differences (Diff)
-
-Below are the detailed diffs for each affected file.
-
-### Diff: src/app/contexts.ts
-
-```diff
-diff --git a/src/app/contexts.ts b/src/app/contexts.ts
-index a14da6a..99368bd 100644
---- a/src/app/contexts.ts
-+++ b/src/app/contexts.ts
-@@ -1,11 +1,11 @@
- import React from 'react'
- import type { Status } from '@/types/status'
- 
--interface MenuContextInterface {
-+type MenuContextInterface = {
-   showMenu: boolean
-   setShowMenu: (show: boolean) => void
- }
--interface NewIssueModalContextInterface {
-+type NewIssueModalContextInterface = {
-   newIssueModalStatus: Status | boolean
-   setNewIssueModalStatus: (status: Status | false) => void
- }
-```
-
-### Diff: src/app/provider.tsx
-
-```diff
-diff --git a/src/app/provider.tsx b/src/app/provider.tsx
-index 7411c24..a29104d 100644
---- a/src/app/provider.tsx
-+++ b/src/app/provider.tsx
-@@ -34,7 +34,9 @@ export const Provider = ({ children }: { children: React.ReactNode }) => {
-   React.useEffect(() => {
-     const handleKeyDown = (e: KeyboardEvent) => {
-       const element = e.target as HTMLElement
--      if (element.classList.contains('input')) return
-+      if (element.classList.contains('input')) {
-+        return
-+      }
-       if (e.key === 'c' && !element.classList.contains('input')) {
-         setNewIssueModalStatus(0)
-         e.preventDefault()
-```
-
-### Diff: src/components/common/editor.tsx
-
-```diff
-diff --git a/src/components/common/editor.tsx b/src/components/common/editor.tsx
-index 0bbdd1b..c4c107d 100644
---- a/src/components/common/editor.tsx
-+++ b/src/components/common/editor.tsx
-@@ -1,20 +1,25 @@
- import { EditorContent, type Extensions, useEditor } from '@tiptap/react'
- import StarterKit from '@tiptap/starter-kit'
--import React, { useEffect } from 'react'
-+import { useEffect } from 'react'
- import { Markdown } from 'tiptap-markdown'
- 
-+// Type for editor with markdown extension
-+type MarkdownStorage = {
-+  markdown: {
-+    getMarkdown: () => string
-+  }
-+}
-+
- const Editor = ({
-   value,
-   onBlur,
-   onChange,
-   className = '',
--  placeholder,
- }: {
-   value: string
-   onBlur?: (value: string) => void
-   onChange?: (value: string) => void
-   className?: string
--  placeholder?: string
- }) => {
-   const extensions: Extensions = [StarterKit, Markdown]
- 
-@@ -27,22 +32,22 @@ const Editor = ({
-     },
-     content: value || undefined,
-     onBlur: onBlur
--      ? ({ editor }) => {
--          const markdown = editor.storage.markdown.getMarkdown()
-+      ? ({ editor: blurEditor }) => {
-+          const markdown = (blurEditor.storage as unknown as MarkdownStorage).markdown.getMarkdown()
-           onBlur(markdown || '')
-         }
-       : undefined,
-     onUpdate: onChange
--      ? ({ editor }) => {
--          const markdown = editor.storage.markdown.getMarkdown()
-+      ? ({ editor: updateEditor }) => {
-+          const markdown = (updateEditor.storage as unknown as MarkdownStorage).markdown.getMarkdown()
-           onChange(markdown || '')
-         }
-       : undefined,
-   })
- 
-   useEffect(() => {
--    if (editor && value !== editor.storage.markdown.getMarkdown()) {
--      editor.commands.setContent(value)
-+    if (value !== (editor?.storage as unknown as MarkdownStorage).markdown.getMarkdown()) {
-+      editor?.commands.setContent(value)
-     }
-   }, [value, editor])
-```
-
-### Diff: src/components/common/menu-button.tsx
-
-```diff
-diff --git a/src/components/common/menu-button.tsx b/src/components/common/menu-button.tsx
-index 50c2e08..2d4f684 100644
---- a/src/components/common/menu-button.tsx
-+++ b/src/components/common/menu-button.tsx
-@@ -1,4 +1,4 @@
--import React, { useContext } from 'react'
-+import { useContext } from 'react'
- import { Button } from 'react-aria-components'
- import { MenuContext } from '@/app/contexts'
- import { Icon } from '@/components/icons'
-```
-
-### Diff: src/components/common/modal.tsx
-
-```diff
-diff --git a/src/components/common/modal.tsx b/src/components/common/modal.tsx
-index b7fd564..eac565c 100644
---- a/src/components/common/modal.tsx
-+++ b/src/components/common/modal.tsx
-@@ -1,4 +1,5 @@
- import { XMarkIcon } from '@heroicons/react/20/solid'
-+import React from 'react'
- import { Button, Heading, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
- 
- export const Modal = ({
-```
-
-### Diff: src/components/common/priority-menu.tsx
-
-```diff
-diff --git a/src/components/common/priority-menu.tsx b/src/components/common/priority-menu.tsx
-index ff88dfb..e3f2a1b 100644
---- a/src/components/common/priority-menu.tsx
-+++ b/src/components/common/priority-menu.tsx
-@@ -1,4 +1,5 @@
- import { CheckIcon } from '@heroicons/react/16/solid'
-+import React from 'react'
- import { useKeyboard } from 'react-aria'
- import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
- import { Shortcut } from '@/components/common/shortcut'
-```
-
-### Diff: src/components/common/status-menu.tsx
-
-```diff
-diff --git a/src/components/common/status-menu.tsx b/src/components/common/status-menu.tsx
-index 5c0f2ab..bcc38ac 100644
---- a/src/components/common/status-menu.tsx
-+++ b/src/components/common/status-menu.tsx
-@@ -1,4 +1,5 @@
- import { CheckIcon } from '@heroicons/react/16/solid'
-+import React from 'react'
- import { useKeyboard } from 'react-aria'
- import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
- import { Shortcut } from '@/components/common/shortcut'
-```
-
-### Diff: src/components/layout/board/column.tsx
-
-```diff
-diff --git a/src/components/layout/board/column.tsx b/src/components/layout/board/column.tsx
-index 45cf435..b149161 100644
---- a/src/components/layout/board/column.tsx
-+++ b/src/components/layout/board/column.tsx
-@@ -1,6 +1,7 @@
- import { queryDb } from '@livestore/livestore'
- import * as LiveStoreReact from '@livestore/react'
- import { generateKeyBetween } from 'fractional-indexing'
-+import React from 'react'
- import {
-   DropIndicator,
-   type DropPosition,
-```
-
-### Diff: src/components/layout/filters/filter-menu.tsx
-
-```diff
-diff --git a/src/components/layout/filters/filter-menu.tsx b/src/components/layout/filters/filter-menu.tsx
-index e9426b5..feba1aa 100644
---- a/src/components/layout/filters/filter-menu.tsx
-+++ b/src/components/layout/filters/filter-menu.tsx
-@@ -1,5 +1,5 @@
- import { CheckIcon } from '@heroicons/react/16/solid'
--import type React from 'react'
-+import React from 'react'
- import { Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
- import { Icon, type IconName } from '@/components/icons'
- import { priorityOptions } from '@/data/priority-options'
-@@ -13,9 +13,14 @@ export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; c
- 
-   const toggleFilter = ({ type, value }: { type: 'status'; value: Status } | { type: 'priority'; value: Priority }) => {
-     let filters: (Status | Priority)[] | undefined = [...(filterState[type] ?? [])]
--    if (filters.includes(value)) filters.splice(filters.indexOf(value), 1)
--    else filters.push(value)
--    if (!filters.length) filters = undefined
-+    if (filters.includes(value)) {
-+      filters.splice(filters.indexOf(value), 1)
-+    } else {
-+      filters.push(value)
-+    }
-+    if (!filters.length) {
-+      filters = undefined
-+    }
-     setFilterState({ [type]: filters })
-   }
-```
-
-### Diff: src/components/layout/filters/priority-filter.tsx
-
-```diff
-diff --git a/src/components/layout/filters/priority-filter.tsx b/src/components/layout/filters/priority-filter.tsx
-index 1909f21..375e751 100644
---- a/src/components/layout/filters/priority-filter.tsx
-+++ b/src/components/layout/filters/priority-filter.tsx
-@@ -8,7 +8,9 @@ import type { Priority } from '@/types/priority'
- 
- export const PriorityFilter = () => {
-   const [filterState, setFilterState] = useFilterState()
--  if (!filterState.priority) return null
-+  if (!filterState.priority) {
-+    return null
-+  }
- 
-   return (
-     <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
-```
-
-### Diff: src/components/layout/filters/sort-menu.tsx
-
-```diff
-diff --git a/src/components/layout/filters/sort-menu.tsx b/src/components/layout/filters/sort-menu.tsx
-index a77a09a..f3e5f36 100644
---- a/src/components/layout/filters/sort-menu.tsx
-+++ b/src/components/layout/filters/sort-menu.tsx
-@@ -1,4 +1,5 @@
- import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'
-+import React from 'react'
- import { useKeyboard } from 'react-aria'
- import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover } from 'react-aria-components'
- import { Shortcut } from '@/components/common/shortcut'
-@@ -12,13 +13,14 @@ export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
-   const toggleSorting = (sortingOption: SortingOption) => {
-     const currentSorting = filterState.orderBy
-     const currentDirection = filterState.orderDirection
--    if (currentSorting === sortingOption)
-+    if (currentSorting === sortingOption) {
-       setFilterState({ orderDirection: currentDirection === 'asc' ? 'desc' : 'asc' })
--    else
-+    } else {
-       setFilterState({
-         orderBy: sortingOption,
-         orderDirection: sortingOptions[sortingOption as SortingOption].defaultDirection as SortingDirection,
-       })
-+    }
-   }
- 
-   const { keyboardProps } = useKeyboard({
-@@ -27,12 +29,12 @@ export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
-         setIsOpen(false)
-         return
-       }
--      Object.entries(sortingOptions).forEach(([sortingOption, { shortcut }]) => {
-+      for (const [sortingOption, { shortcut }] of Object.entries(sortingOptions)) {
-         if (e.key === shortcut) {
-           toggleSorting(sortingOption as SortingOption)
--          return
-+          break
-         }
--      })
-+      }
-     },
-   })
- 
-@@ -60,12 +62,10 @@ export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
-                   >
-                     <span>{name}</span>
-                     {filterState.orderBy === sortingOption && (
--                      <>
--                        <div className="absolute right-10">
--                          {filterState.orderDirection === 'asc' && <BarsArrowDownIcon className="size-4" />}
--                          {filterState.orderDirection === 'desc' && <BarsArrowUpIcon className="size-4" />}
--                        </div>
--                      </>
-+                      <div className="absolute right-10">
-+                        {filterState.orderDirection === 'asc' && <BarsArrowDownIcon className="size-4" />}
-+                        {filterState.orderDirection === 'desc' && <BarsArrowUpIcon className="size-4" />}
-+                      </div>
-                     )}
-                     <Shortcut className="absolute right-3" keys={[shortcut]} />
-                   </MenuItem>
-```
-
-### Diff: src/components/layout/filters/status-filter.tsx
-
-```diff
-diff --git a/src/components/layout/filters/status-filter.tsx b/src/components/layout/filters/status-filter.tsx
-index 1025830..e3b05cc 100644
---- a/src/components/layout/filters/status-filter.tsx
-+++ b/src/components/layout/filters/status-filter.tsx
-@@ -8,7 +8,9 @@ import type { Status } from '@/types/status'
- 
- export const StatusFilter = () => {
-   const [filterState, setFilterState] = useFilterState()
--  if (!filterState.status) return null
-+  if (!filterState.status) {
-+    return null
-+  }
- 
-   return (
-     <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
-```
-
-### Diff: src/components/layout/index.tsx
-
-```diff
-diff --git a/src/components/layout/index.tsx b/src/components/layout/index.tsx
-index 4304c5f..e48c44b 100644
---- a/src/components/layout/index.tsx
-+++ b/src/components/layout/index.tsx
-@@ -1,4 +1,4 @@
--import type React from 'react'
-+import React from 'react'
- import { MobileMenu } from '@/components/layout/sidebar/mobile-menu'
- import { Toolbar } from '@/components/layout/toolbar'
- import { useFrontendState } from '@/lib/livestore/queries'
-```
-
-### Diff: src/components/layout/issue/back-button.tsx
-
-```diff
-diff --git a/src/components/layout/issue/back-button.tsx b/src/components/layout/issue/back-button.tsx
-index 61142f6..d0153e6 100644
---- a/src/components/layout/issue/back-button.tsx
-+++ b/src/components/layout/issue/back-button.tsx
-@@ -1,10 +1,13 @@
- import { XMarkIcon } from '@heroicons/react/20/solid'
-+import React from 'react'
- import { Button } from 'react-aria-components'
- 
- export const BackButton = ({ close }: { close: () => void }) => {
-   React.useEffect(() => {
-     const handleKeyDown = (e: KeyboardEvent) => {
--      if (e.key === 'Escape') close()
-+      if (e.key === 'Escape') {
-+        close()
-+      }
-     }
-     window.addEventListener('keydown', handleKeyDown)
-     return () => window.removeEventListener('keydown', handleKeyDown)
-```
-
-### Diff: src/components/layout/issue/comment-input.tsx
-
-```diff
-diff --git a/src/components/layout/issue/comment-input.tsx b/src/components/layout/issue/comment-input.tsx
-index 969ffce..635278d 100644
---- a/src/components/layout/issue/comment-input.tsx
-+++ b/src/components/layout/issue/comment-input.tsx
-@@ -1,5 +1,6 @@
- import { ArrowUpIcon } from '@heroicons/react/20/solid'
- import { useStore } from '@livestore/react'
-+import React from 'react'
- import { useKeyboard } from 'react-aria'
- import { Button } from 'react-aria-components'
- import Editor from '@/components/common/editor'
-@@ -21,7 +22,9 @@ export const CommentInput = ({ issueId, className }: { issueId: number; classNam
-   })
- 
-   const submitComment = () => {
--    if (!commentDraft) return
-+    if (!commentDraft) {
-+      return
-+    }
-     store.commit(
-       events.createComment({
-         id: crypto.randomUUID(),
-```
-
-### Diff: src/components/layout/issue/delete-button.tsx
-
-```diff
-diff --git a/src/components/layout/issue/delete-button.tsx b/src/components/layout/issue/delete-button.tsx
-index 6575fb6..ca89d3a 100644
---- a/src/components/layout/issue/delete-button.tsx
-+++ b/src/components/layout/issue/delete-button.tsx
-@@ -1,5 +1,6 @@
- import { TrashIcon } from '@heroicons/react/16/solid'
- import { useStore } from '@livestore/react'
-+import React from 'react'
- import { Button } from 'react-aria-components'
- import { events } from '@/lib/livestore/schema'
-```
-
-### Diff: src/components/layout/issue/index.tsx
-
-```diff
-diff --git a/src/components/layout/issue/index.tsx b/src/components/layout/issue/index.tsx
-index fcf1bdb..0ea8da9 100644
---- a/src/components/layout/issue/index.tsx
-+++ b/src/components/layout/issue/index.tsx
-@@ -26,8 +26,11 @@ export const Issue = () => {
-   const issue = store.useQuery(queryDb(tables.issue.where({ id }).first(), { deps: [id] }))
- 
-   const close = () => {
--    if (window.history.length > 2) navigate(-1)
--    else navigate('/')
-+    if (window.history.length > 2) {
-+      navigate(-1)
-+    } else {
-+      navigate('/')
-+    }
-   }
- 
-   const handleChangeStatus = (status: Status) => {
-```
-
-### Diff: src/components/layout/issue/new-issue-modal.tsx
-
-```diff
-diff --git a/src/components/layout/issue/new-issue-modal.tsx b/src/components/layout/issue/new-issue-modal.tsx
-index e7d6447..73ad010 100644
---- a/src/components/layout/issue/new-issue-modal.tsx
-+++ b/src/components/layout/issue/new-issue-modal.tsx
-@@ -1,5 +1,6 @@
- import { useStore } from '@livestore/react'
- import { generateKeyBetween } from 'fractional-indexing'
-+import React from 'react'
- import { Button } from 'react-aria-components'
- import { NewIssueModalContext } from '@/app/contexts'
- import { Modal } from '@/components/common/modal'
-```
-
-### Diff: src/components/layout/issue/title-input.tsx
-
-```diff
-diff --git a/src/components/layout/issue/title-input.tsx b/src/components/layout/issue/title-input.tsx
-index f505fe7..158d90a 100644
---- a/src/components/layout/issue/title-input.tsx
-+++ b/src/components/layout/issue/title-input.tsx
-@@ -18,8 +18,12 @@ export const TitleInput = ({
-   const { store } = useStore()
- 
-   const handleTitleChange = (title: string) => {
--    if (issue) store.commit(events.updateIssueTitle({ id: issue.id, title, modified: new Date() }))
--    if (setTitle) setTitle(title)
-+    if (issue) {
-+      store.commit(events.updateIssueTitle({ id: issue.id, title, modified: new Date() }))
-+    }
-+    if (setTitle) {
-+      setTitle(title)
-+    }
-   }
- 
-   return (
-```
-
-### Diff: src/components/layout/list/row.tsx
-
-```diff
-diff --git a/src/components/layout/list/row.tsx b/src/components/layout/list/row.tsx
-index 9ad18a1..6391808 100644
---- a/src/components/layout/list/row.tsx
-+++ b/src/components/layout/list/row.tsx
-@@ -1,6 +1,6 @@
- import { useStore } from '@livestore/react'
- import type { CSSProperties } from 'react'
--import React, { memo } from 'react'
-+import { memo } from 'react'
- import { useNavigate } from 'react-router-dom'
- import { Avatar } from '@/components/common/avatar'
- import { PriorityMenu } from '@/components/common/priority-menu'
-```
-
-### Diff: src/components/layout/list/virtual-row.tsx
-
-```diff
-diff --git a/src/components/layout/list/virtual-row.tsx b/src/components/layout/list/virtual-row.tsx
-index 41614da..6dde2c1 100644
---- a/src/components/layout/list/virtual-row.tsx
-+++ b/src/components/layout/list/virtual-row.tsx
-@@ -1,6 +1,6 @@
- import { queryDb } from '@livestore/livestore'
- import { useStore } from '@livestore/react'
--import React, { type CSSProperties, memo } from 'react'
-+import { type CSSProperties, memo } from 'react'
- import { Row } from '@/components/layout/list/row'
- import { tables } from '@/lib/livestore/schema'
- 
-@@ -9,13 +9,11 @@ export const VirtualRow = memo(
-     const { store } = useStore()
-     const issueId = data[index]
- 
--    if (!issueId) {
--      return null
--    }
--
--    const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId }).first(), { deps: [issueId] }))
-+    // Always call the hook with a stable query structure
-+    const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId || 0 }).first(), { deps: [issueId] }))
- 
--    if (!issue) {
-+    // Early return if no issueId or no issue data
-+    if (!(issueId && issue)) {
-       return null
-     }
-```
-
-### Diff: src/components/layout/search/search-bar.tsx
-
-```diff
-diff --git a/src/components/layout/search/search-bar.tsx b/src/components/layout/search/search-bar.tsx
-index 8f22a01..6705de2 100644
---- a/src/components/layout/search/search-bar.tsx
-+++ b/src/components/layout/search/search-bar.tsx
-@@ -10,7 +10,9 @@ export const SearchBar = () => {
- 
-   const { keyboardProps } = useKeyboard({
-     onKeyDown: (e) => {
--      if (e.key === 'Escape') (e.target as HTMLInputElement)?.blur()
-+      if (e.key === 'Escape') {
-+        ;(e.target as HTMLInputElement)?.blur()
-+      }
-     },
-   })
-```
-
-### Diff: src/components/layout/sidebar/about-menu.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/about-menu.tsx b/src/components/layout/sidebar/about-menu.tsx
-index d74fcad..953c7fb 100644
---- a/src/components/layout/sidebar/about-menu.tsx
-+++ b/src/components/layout/sidebar/about-menu.tsx
-@@ -1,4 +1,5 @@
- import { ChevronDownIcon } from '@heroicons/react/16/solid'
-+import React from 'react'
- import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
- import { Icon } from '@/components/icons'
- import { AboutModal } from '@/components/layout/sidebar/about-modal'
-```
-
-### Diff: src/components/layout/sidebar/index.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/index.tsx b/src/components/layout/sidebar/index.tsx
-index 1a1e6d3..cb5badb 100644
---- a/src/components/layout/sidebar/index.tsx
-+++ b/src/components/layout/sidebar/index.tsx
-@@ -1,4 +1,5 @@
- import { Bars4Icon, ViewColumnsIcon } from '@heroicons/react/24/outline'
-+import React from 'react'
- import { Link } from 'react-router-dom'
- import { MenuContext } from '@/app/contexts'
- import { AboutMenu } from '@/components/layout/sidebar/about-menu'
-```
-
-### Diff: src/components/layout/sidebar/mobile-menu.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/mobile-menu.tsx b/src/components/layout/sidebar/mobile-menu.tsx
-index 2337935..9dee79c 100644
---- a/src/components/layout/sidebar/mobile-menu.tsx
-+++ b/src/components/layout/sidebar/mobile-menu.tsx
-@@ -1,3 +1,4 @@
-+import React from 'react'
- import { ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
- import { MenuContext } from '@/app/contexts'
- import { Sidebar } from '@/components/layout/sidebar'
-```
-
-### Diff: src/components/layout/sidebar/new-issue-button.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/new-issue-button.tsx b/src/components/layout/sidebar/new-issue-button.tsx
-index 01227ac..776a2dc 100644
---- a/src/components/layout/sidebar/new-issue-button.tsx
-+++ b/src/components/layout/sidebar/new-issue-button.tsx
-@@ -1,4 +1,5 @@
- import { PlusIcon } from '@heroicons/react/20/solid'
-+import React from 'react'
- import { Button } from 'react-aria-components'
- import { MenuContext, NewIssueModalContext } from '@/app/contexts'
- import { Icon } from '@/components/icons'
-```
-
-### Diff: src/components/layout/sidebar/search-button.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/search-button.tsx b/src/components/layout/sidebar/search-button.tsx
-index 891fd83..bd9a127 100644
---- a/src/components/layout/sidebar/search-button.tsx
-+++ b/src/components/layout/sidebar/search-button.tsx
-@@ -1,4 +1,5 @@
- import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
-+import React from 'react'
- import { Link } from 'react-router-dom'
- import { MenuContext } from '@/app/contexts'
- import { useFilterState } from '@/lib/livestore/queries'
-```
-
-### Diff: src/components/layout/sidebar/theme-button.tsx
-
-```diff
-diff --git a/src/components/layout/sidebar/theme-button.tsx b/src/components/layout/sidebar/theme-button.tsx
-index f5af1eb..2edaa65 100644
---- a/src/components/layout/sidebar/theme-button.tsx
-+++ b/src/components/layout/sidebar/theme-button.tsx
-@@ -1,5 +1,6 @@
- import { CheckIcon, MoonIcon, SunIcon } from '@heroicons/react/16/solid'
- import { ComputerDesktopIcon } from '@heroicons/react/20/solid'
-+import React from 'react'
- import { useKeyboard } from 'react-aria'
- import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
- import { Shortcut } from '@/components/common/shortcut'
-@@ -11,11 +12,14 @@ export const ThemeButton = () => {
-   const [isOpen, setIsOpen] = React.useState(false)
-   const [frontendState, setFrontendState] = useFrontendState()
- 
--  const selectTheme = (theme: Theme) => {
--    setTheme(theme)
--    setFrontendState({ theme })
--    if (theme === 'system') localStorage.removeItem('theme')
--    else localStorage.theme = theme
-+  const selectTheme = (selectedTheme: Theme) => {
-+    setTheme(selectedTheme)
-+    setFrontendState({ theme: selectedTheme })
-+    if (selectedTheme === 'system') {
-+      localStorage.removeItem('theme')
-+    } else {
-+      localStorage.theme = selectedTheme
-+    }
-     document.documentElement.classList.toggle(
-       'dark',
-       localStorage.theme === 'dark' ||
-@@ -29,13 +33,13 @@ export const ThemeButton = () => {
-         setIsOpen(false)
-         return
-       }
--      themeOptions.forEach(({ id, shortcut }) => {
-+      for (const { id, shortcut } of themeOptions) {
-         if (e.key === shortcut) {
-           selectTheme(id)
-           setIsOpen(false)
--          return
-+          break
-         }
--      })
-+      }
-     },
-   })
-```
-
-### Diff: src/components/layout/toolbar/devtools-button.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/devtools-button.tsx b/src/components/layout/toolbar/devtools-button.tsx
-index 88f53d6..a8a0f2a 100644
---- a/src/components/layout/toolbar/devtools-button.tsx
-+++ b/src/components/layout/toolbar/devtools-button.tsx
-@@ -1,5 +1,6 @@
- import { CodeBracketIcon } from '@heroicons/react/16/solid'
- import { useStore } from '@livestore/react'
-+import React from 'react'
- 
- export const DevtoolsButton = ({ className }: { className?: string }) => {
-   const { store } = useStore()
-```
-
-### Diff: src/components/layout/toolbar/reset-button.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/reset-button.tsx b/src/components/layout/toolbar/reset-button.tsx
-index b53b724..a46fc1c 100644
---- a/src/components/layout/toolbar/reset-button.tsx
-+++ b/src/components/layout/toolbar/reset-button.tsx
-@@ -1,4 +1,5 @@
- import { TrashIcon } from '@heroicons/react/16/solid'
-+import React from 'react'
- import { Button } from 'react-aria-components'
- import { useNavigate } from 'react-router-dom'
-```
-
-### Diff: src/components/layout/toolbar/seed-input.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/seed-input.tsx b/src/components/layout/toolbar/seed-input.tsx
-index 373291c..9fdfeba 100644
---- a/src/components/layout/toolbar/seed-input.tsx
-+++ b/src/components/layout/toolbar/seed-input.tsx
-@@ -1,5 +1,6 @@
- import { PlusIcon } from '@heroicons/react/16/solid'
- import { useStore } from '@livestore/react'
-+import React from 'react'
- import { Button, Input } from 'react-aria-components'
- import { seed } from '@/lib/livestore/seed'
- 
-@@ -8,7 +9,9 @@ export const SeedInput = ({ className }: { className?: string }) => {
-   const { store } = useStore()
- 
-   const onClick = () => {
--    if (count === 0) return
-+    if (count === 0) {
-+      return
-+    }
-     seed(store, count)
-   }
-```
-
-### Diff: src/components/layout/toolbar/share-button.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/share-button.tsx b/src/components/layout/toolbar/share-button.tsx
-index 9d9e732..ed83037 100644
---- a/src/components/layout/toolbar/share-button.tsx
-+++ b/src/components/layout/toolbar/share-button.tsx
-@@ -1,4 +1,5 @@
- import { CheckIcon, LinkIcon, QrCodeIcon } from '@heroicons/react/16/solid'
-+import React from 'react'
- import { Button, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
- 
- // This uses a public QR code API: https://goqr.me/api/doc/create-qr-code/
-```
-
-### Diff: src/components/layout/toolbar/sync-toggle.tsx
-
-```diff
-diff --git a/src/components/layout/toolbar/sync-toggle.tsx b/src/components/layout/toolbar/sync-toggle.tsx
-index 826d454..e5f3720 100644
---- a/src/components/layout/toolbar/sync-toggle.tsx
-+++ b/src/components/layout/toolbar/sync-toggle.tsx
-@@ -1,3 +1,4 @@
-+import React from 'react'
- import { Switch } from 'react-aria-components'
- 
- export const SyncToggle = ({ className }: { className?: string }) => {
-```
-
-### Diff: src/lib/livestore/queries.ts
-
-```diff
-diff --git a/src/lib/livestore/queries.ts b/src/lib/livestore/queries.ts
-index e6838eb..2510edd 100644
---- a/src/lib/livestore/queries.ts
-+++ b/src/lib/livestore/queries.ts
-@@ -1,3 +1,4 @@
-+import React from 'react'
- import { queryDb } from '@livestore/livestore'
- import { useClientDocument } from '@livestore/react'
- import { tables } from '@/lib/livestore/schema'
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

### Diff: index.html

```diff
diff --git a/index.html b/index.html
index 0354882..9972ddf 100644
--- a/index.html
+++ b/index.html
@@ -4,10 +4,10 @@
     <meta charset="UTF-8" />
     <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
-    <title>LinearLite</title>
+    <title>Zen Sync</title>
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <meta name="theme-color" content="#000000" />
-    <meta name="description" content="LinearLite clone using React & TailwindJS" />
+    <meta name="description" content="Zen Sync - A modern collaboration application using React & TailwindJS" />
   </head>
   <body>
     <div id="root"></div>
```

### Diff: src/components/common/editor.tsx

```diff
diff --git a/src/components/common/editor.tsx b/src/components/common/editor.tsx
index c4c107d..dadd1c7 100644
--- a/src/components/common/editor.tsx
+++ b/src/components/common/editor.tsx
@@ -1,3 +1,4 @@
+import Placeholder from '@tiptap/extension-placeholder'
 import { EditorContent, type Extensions, useEditor } from '@tiptap/react'
 import StarterKit from '@tiptap/starter-kit'
 import { useEffect } from 'react'
@@ -15,13 +16,21 @@ const Editor = ({
   onBlur,
   onChange,
   className = '',
+  placeholder = '',
 }: {
   value: string
   onBlur?: (value: string) => void
   onChange?: (value: string) => void
   className?: string
+  placeholder?: string
 }) => {
-  const extensions: Extensions = [StarterKit, Markdown]
+  const extensions: Extensions = [
+    StarterKit,
+    Markdown,
+    Placeholder.configure({
+      placeholder,
+    }),
+  ]
 
   const editor = useEditor({
     extensions,
```

### Diff: src/components/common/priority-menu.tsx

```diff
diff --git a/src/components/common/priority-menu.tsx b/src/components/common/priority-menu.tsx
index e3f2a1b..823cb36 100644
--- a/src/components/common/priority-menu.tsx
+++ b/src/components/common/priority-menu.tsx
@@ -7,6 +7,8 @@ import { Icon, type IconName } from '@/components/icons'
 import { priorityOptions } from '@/data/priority-options'
 import type { Priority } from '@/types/priority'
 
+const URGENT_PRIORITY = 4
+
 export const PriorityMenu = ({
   priority,
   onPriorityChange,
@@ -41,10 +43,10 @@ export const PriorityMenu = ({
         className="group flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-lg px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
       >
         <Icon
-          className={`size-3.5 ${priority === 4 ? 'text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300' : priorityOptions[priority]!.style}`}
-          name={priorityOptions[priority]!.icon as IconName}
+          className={`size-3.5 ${priority === URGENT_PRIORITY ? 'text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300' : priorityOptions[priority]?.style || ''}`}
+          name={priorityOptions[priority]?.icon as IconName}
         />
-        {showLabel && <span>{priorityOptions[priority]!.name}</span>}
+        {showLabel && <span>{priorityOptions[priority]?.name}</span>}
       </Button>
       <Popover
         className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800"
@@ -54,7 +56,7 @@ export const PriorityMenu = ({
           {priorityOptions.map(({ name, icon, style, shortcut }, priorityOption) => (
             <MenuItem
               className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-              key={priorityOption}
+              key={name}
               onAction={() => onPriorityChange(priorityOption as Priority)}
             >
               <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
```

### Diff: src/components/common/status-menu.tsx

```diff
diff --git a/src/components/common/status-menu.tsx b/src/components/common/status-menu.tsx
index bcc38ac..0705b8e 100644
--- a/src/components/common/status-menu.tsx
+++ b/src/components/common/status-menu.tsx
@@ -40,18 +40,21 @@ export const StatusMenu = ({
         aria-label="Select status"
         className="group flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-lg px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
       >
-        <Icon className={`size-3.5 ${statusOptions[status]!.style}`} name={statusOptions[status]!.icon as IconName} />
-        {showLabel && <span>{statusOptions[status]!.name}</span>}
+        <Icon
+          className={`size-3.5 ${statusOptions[status]?.style || ''}`}
+          name={statusOptions[status]?.icon as IconName}
+        />
+        {showLabel && <span>{statusOptions[status]?.name}</span>}
       </Button>
       <Popover
         className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800"
         offset={0}
       >
         <Menu className="focus:outline-none" {...keyboardProps}>
-          {statusOptions.map(({ name, icon, style, shortcut }, statusOption) => (
+          {statusOptions.map(({ name, id, icon, style, shortcut }, statusOption) => (
             <MenuItem
               className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-              key={statusOption}
+              key={id}
               onAction={() => onStatusChange(statusOption as Status)}
             >
               <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
```

### Diff: src/components/icons/backlog.tsx

```diff
diff --git a/src/components/icons/backlog.tsx b/src/components/icons/backlog.tsx
index bc6dca2..6752952 100644
--- a/src/components/icons/backlog.tsx
+++ b/src/components/icons/backlog.tsx
@@ -1,7 +1,14 @@
-
 export const BacklogIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`stroke-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      aria-labelledby="backlog-icon-title"
+      className={`stroke-current ${className}`}
+      fill="none"
+      role="img"
+      viewBox="0 0 14 14"
+      xmlns="http://www.w3.org/2000/svg"
+    >
+      <title id="backlog-icon-title">Backlog status indicator</title>
       <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="1.4 1.74" strokeDashoffset="0.65" strokeWidth="2" />
       <circle
         cx="7"
```

### Diff: src/components/icons/canceled.tsx

```diff
diff --git a/src/components/icons/canceled.tsx b/src/components/icons/canceled.tsx
index ac644c5..292e704 100644
--- a/src/components/icons/canceled.tsx
+++ b/src/components/icons/canceled.tsx
@@ -1,7 +1,14 @@
-
 export const CanceledIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      aria-labelledby="canceled-icon-title"
+      className={`fill-current ${className}`}
+      fill="none"
+      role="img"
+      viewBox="0 0 14 14"
+      xmlns="http://www.w3.org/2000/svg"
+    >
+      <title id="canceled-icon-title">Canceled status indicator</title>
       <path
         clipRule="evenodd"
         d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM4.87881 3.73657C4.56339 3.42114 4.05199 3.42114 3.73657 3.73657C3.42114 4.05199 3.42114 4.56339 3.73657 4.87881L5.85775 7L4.79716 8.06059L3.73657 9.12118C3.42114 9.4366 3.42114 9.94801 3.73657 10.2634C4.05199 10.5789 4.56339 10.5789 4.87881 10.2634L7 8.14225L9.12117 10.2634C9.4366 10.5789 9.94801 10.5789 10.2634 10.2634C10.5789 9.94801 10.5789 9.4366 10.2634 9.12118L8.14225 7L10.2634 4.87881C10.5789 4.56339 10.5789 4.05199 10.2634 3.73657C9.94801 3.42114 9.4366 3.42114 9.12117 3.73657L7 5.85775L5.93941 4.79716L4.87881 3.73657Z"
```

### Diff: src/components/icons/done.tsx

```diff
diff --git a/src/components/icons/done.tsx b/src/components/icons/done.tsx
index e9ce47f..1002d54 100644
--- a/src/components/icons/done.tsx
+++ b/src/components/icons/done.tsx
@@ -1,7 +1,14 @@
-
 export const DoneIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      aria-labelledby="done-icon-title"
+      className={`fill-current ${className}`}
+      fill="none"
+      role="img"
+      viewBox="0 0 14 14"
+      xmlns="http://www.w3.org/2000/svg"
+    >
+      <title id="done-icon-title">Completed status indicator</title>
       <path
         clipRule="evenodd"
         d="M7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0ZM10.951 5.45104C11.283 5.11909 11.283 4.58091 10.951 4.24896C10.6191 3.91701 10.0809 3.91701 9.74896 4.24896L5.35 8.64792L3.95104 7.24896C3.61909 6.91701 3.0809 6.91701 2.74896 7.24896C2.41701 7.5809 2.41701 8.11909 2.74896 8.45104L4.74896 10.451C5.0809 10.783 5.61909 10.783 5.95104 10.451L10.951 5.45104Z"
```

### Diff: src/components/icons/filter.tsx

```diff
diff --git a/src/components/icons/filter.tsx b/src/components/icons/filter.tsx
index d84ab3b..e93eb41 100644
--- a/src/components/icons/filter.tsx
+++ b/src/components/icons/filter.tsx
@@ -1,7 +1,14 @@
-
 export const FilterIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      aria-labelledby="filter-icon-title"
+      className={`fill-current ${className}`}
+      fill="none"
+      role="img"
+      viewBox="0 0 16 16"
+      xmlns="http://www.w3.org/2000/svg"
+    >
+      <title id="filter-icon-title">Filter options</title>
       <path
         clipRule="evenodd"
         d="M14.25 3a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5h12.5ZM4 8a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 4 8Zm2.75 3.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
```

### Diff: src/components/icons/in-progress.tsx

```diff
diff --git a/src/components/icons/in-progress.tsx b/src/components/icons/in-progress.tsx
index 0e9551a..5f5290d 100644
--- a/src/components/icons/in-progress.tsx
+++ b/src/components/icons/in-progress.tsx
@@ -1,7 +1,14 @@
-
 export const InProgressIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`stroke-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      aria-labelledby="in-progress-icon-title"
+      className={`stroke-current ${className}`}
+      fill="none"
+      role="img"
+      viewBox="0 0 14 14"
+      xmlns="http://www.w3.org/2000/svg"
+    >
+      <title id="in-progress-icon-title">In progress status indicator</title>
       <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="3.14 0" strokeDashoffset="-0.7" strokeWidth="2" />
       <circle
         cx="7"
```

### Diff: src/components/icons/index.tsx

```diff
diff --git a/src/components/icons/index.tsx b/src/components/icons/index.tsx
index 061f10b..bb391b7 100644
--- a/src/components/icons/index.tsx
+++ b/src/components/icons/index.tsx
@@ -20,7 +20,7 @@ const icons = {
   done: DoneIcon,
   filter: FilterIcon,
   'in-progress': InProgressIcon,
-  linearlite: LinearLiteIcon,
+  zensync: LinearLiteIcon,
   livestore: LivestoreIcon,
   'new-issue': NewIssueIcon,
   'priority-none': PriorityNoneIcon,
```

### Diff: src/components/icons/linear-lite.tsx

```diff
diff --git a/src/components/icons/linear-lite.tsx b/src/components/icons/linear-lite.tsx
index e4ad734..2e783c7 100644
--- a/src/components/icons/linear-lite.tsx
+++ b/src/components/icons/linear-lite.tsx
@@ -1,7 +1,14 @@
-
 export const LinearLiteIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      aria-labelledby="linear-lite-icon-title"
+      className={`fill-current ${className}`}
+      fill="none"
+      role="img"
+      viewBox="0 0 44 44"
+      xmlns="http://www.w3.org/2000/svg"
+    >
+      <title id="linear-lite-icon-title">Linear Lite application logo</title>
       <path d="M30.5652 40.0783C37.3256 36.8697 42 29.9807 42 22C42 10.9543 33.0457 2 22 2C14.0193 2 7.13035 6.67443 3.92172 13.4348L30.5652 40.0783Z" />
       <path d="M25.7144 41.6557C24.5108 41.8818 23.2692 42 22 42C10.9543 42 2 33.0457 2 22C2 20.7308 2.11823 19.4892 2.34428 18.2856L25.7144 41.6557Z" />
     </svg>
```

### Diff: src/components/icons/livestore.tsx

```diff
diff --git a/src/components/icons/livestore.tsx b/src/components/icons/livestore.tsx
index 9415c4b..3ba671e 100644
--- a/src/components/icons/livestore.tsx
+++ b/src/components/icons/livestore.tsx
@@ -1,7 +1,14 @@
-
 export const LivestoreIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 26 29" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`fill-current ${className}`}
+      fill="none"
+      viewBox="0 0 26 29"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="livestore-icon-title"
+    >
+      <title id="livestore-icon-title">Livestore application logo</title>
       <path
         clipRule="evenodd"
         d="M10.7354 19.5171C4.66418 19.1745 0 17.1375 0 14.6758V17.8662C0 20.3011 4.56311 22.3205 10.5375 22.6957L10.7354 19.5171ZM16.5738 22.5012C21.5303 21.8473 25.098 20.0192 25.098 17.8662L25.098 14.6758C25.098 16.5336 22.4415 18.1495 18.5285 18.9778C18.0789 19.8138 17.4274 20.9883 16.5738 22.5012Z"
```

### Diff: src/components/icons/new-issue.tsx

```diff
diff --git a/src/components/icons/new-issue.tsx b/src/components/icons/new-issue.tsx
index 6c850e6..6c1755a 100644
--- a/src/components/icons/new-issue.tsx
+++ b/src/components/icons/new-issue.tsx
@@ -1,7 +1,14 @@
-
 export const NewIssueIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`fill-current ${className}`}
+      fill="none"
+      viewBox="0 0 16 16"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="new-issue-icon-title"
+    >
+      <title id="new-issue-icon-title">Create new issue</title>
       <path
         clipRule="evenodd"
         d="M1 5.25C1 2.90279 2.90279 1 5.25 1H7.25C7.66421 1 8 1.33579 8 1.75C8 2.16421 7.66421 2.5 7.25 2.5H5.25C3.73122 2.5 2.5 3.73122 2.5 5.25V10.75C2.5 12.2688 3.73122 13.5 5.25 13.5H10.75C12.2688 13.5 13.5 12.2688 13.5 10.75V8.75287C13.5 8.33865 13.8358 8.00287 14.25 8.00287C14.6642 8.00287 15 8.33865 15 8.75287V10.75C15 13.0972 13.0972 15 10.75 15H5.25C2.90279 15 1 13.0972 1 10.75V5.25Z"
```

### Diff: src/components/icons/priority-high.tsx

```diff
diff --git a/src/components/icons/priority-high.tsx b/src/components/icons/priority-high.tsx
index f4f4b08..eafb734 100644
--- a/src/components/icons/priority-high.tsx
+++ b/src/components/icons/priority-high.tsx
@@ -1,7 +1,14 @@
-
 export const PriorityHighIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`fill-current ${className}`}
+      fill="none"
+      viewBox="0 0 16 16"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="priority-high-icon-title"
+    >
+      <title id="priority-high-icon-title">High priority indicator</title>
       <rect height="6" rx="1" width="3" x="1.5" y="8" />
       <rect height="9" rx="1" width="3" x="6.5" y="5" />
       <rect height="12" rx="1" width="3" x="11.5" y="2" />
```

### Diff: src/components/icons/priority-low.tsx

```diff
diff --git a/src/components/icons/priority-low.tsx b/src/components/icons/priority-low.tsx
index 8615602..09a246a 100644
--- a/src/components/icons/priority-low.tsx
+++ b/src/components/icons/priority-low.tsx
@@ -1,7 +1,14 @@
-
 export const PriorityLowIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`fill-current ${className}`}
+      fill="none"
+      viewBox="0 0 16 16"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="priority-low-icon-title"
+    >
+      <title id="priority-low-icon-title">Low priority indicator</title>
       <rect height="6" rx="1" width="3" x="1.5" y="8" />
       <rect fillOpacity="0.4" height="9" rx="1" width="3" x="6.5" y="5" />
       <rect fillOpacity="0.4" height="12" rx="1" width="3" x="11.5" y="2" />
```

### Diff: src/components/icons/priority-medium.tsx

```diff
diff --git a/src/components/icons/priority-medium.tsx b/src/components/icons/priority-medium.tsx
index 28be634..7271464 100644
--- a/src/components/icons/priority-medium.tsx
+++ b/src/components/icons/priority-medium.tsx
@@ -1,7 +1,14 @@
-
 export const PriorityMediumIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`fill-current ${className}`}
+      fill="none"
+      viewBox="0 0 16 16"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="priority-medium-icon-title"
+    >
+      <title id="priority-medium-icon-title">Medium priority indicator</title>
       <rect height="6" rx="1" width="3" x="1.5" y="8" />
       <rect height="9" rx="1" width="3" x="6.5" y="5" />
       <rect fillOpacity="0.4" height="12" rx="1" width="3" x="11.5" y="2" />
```

### Diff: src/components/icons/priority-none.tsx

```diff
diff --git a/src/components/icons/priority-none.tsx b/src/components/icons/priority-none.tsx
index fc17714..cfdaba2 100644
--- a/src/components/icons/priority-none.tsx
+++ b/src/components/icons/priority-none.tsx
@@ -1,7 +1,14 @@
-
 export const PriorityNoneIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`fill-current ${className}`}
+      fill="none"
+      viewBox="0 0 16 16"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="priority-none-icon-title"
+    >
+      <title id="priority-none-icon-title">No priority indicator</title>
       <rect height="1.5" rx="0.5" width="3" x="1.5" y="7.25" />
       <rect height="1.5" rx="0.5" width="3" x="6.5" y="7.25" />
       <rect height="1.5" rx="0.5" width="3" x="11.5" y="7.25" />
```

### Diff: src/components/icons/priority-urgent.tsx

```diff
diff --git a/src/components/icons/priority-urgent.tsx b/src/components/icons/priority-urgent.tsx
index c142983..493af97 100644
--- a/src/components/icons/priority-urgent.tsx
+++ b/src/components/icons/priority-urgent.tsx
@@ -1,7 +1,14 @@
-
 export const PriorityUrgentIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`fill-current ${className}`}
+      fill="none"
+      viewBox="0 0 16 16"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="priority-urgent-icon-title"
+    >
+      <title id="priority-urgent-icon-title">Urgent priority indicator</title>
       <path d="M3 1C1.91067 1 1 1.91067 1 3V13C1 14.0893 1.91067 15 3 15H13C14.0893 15 15 14.0893 15 13V3C15 1.91067 14.0893 1 13 1H3ZM7 4L9 4L8.75391 8.99836H7.25L7 4ZM9 11C9 11.5523 8.55228 12 8 12C7.44772 12 7 11.5523 7 11C7 10.4477 7.44772 10 8 10C8.55228 10 9 10.4477 9 11Z" />
     </svg>
   )
```

### Diff: src/components/icons/sidebar.tsx

```diff
diff --git a/src/components/icons/sidebar.tsx b/src/components/icons/sidebar.tsx
index d10343d..0107b11 100644
--- a/src/components/icons/sidebar.tsx
+++ b/src/components/icons/sidebar.tsx
@@ -1,7 +1,14 @@
-
 export const SidebarIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`fill-current ${className}`} fill="none" viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`fill-current ${className}`}
+      fill="none"
+      viewBox="0 0 320 320"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="sidebar-icon-title"
+    >
+      <title id="sidebar-icon-title">Sidebar navigation</title>
       <path
         clipRule="evenodd"
         d="M225 54H94C71.9086 54 54 71.9086 54 94V225C54 247.091 71.9086 265 94 265H225C247.091 265 265 247.091 265 225V94C265 71.9086 247.091 54 225 54ZM94 30C58.6538 30 30 58.6538 30 94V225C30 260.346 58.6538 289 94 289H225C260.346 289 289 260.346 289 225V94C289 58.6538 260.346 30 225 30H94Z"
```

### Diff: src/components/icons/todo.tsx

```diff
diff --git a/src/components/icons/todo.tsx b/src/components/icons/todo.tsx
index f4d18ba..4cea923 100644
--- a/src/components/icons/todo.tsx
+++ b/src/components/icons/todo.tsx
@@ -1,7 +1,14 @@
-
 export const TodoIcon = ({ className }: { className?: string }) => {
   return (
-    <svg className={`stroke-current ${className}`} fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
+    <svg
+      className={`stroke-current ${className}`}
+      fill="none"
+      viewBox="0 0 14 14"
+      xmlns="http://www.w3.org/2000/svg"
+      role="img"
+      aria-labelledby="todo-icon-title"
+    >
+      <title id="todo-icon-title">Todo status indicator</title>
       <circle cx="7" cy="7" fill="none" r="6" strokeDasharray="3.14 0" strokeDashoffset="-0.7" strokeWidth="2" />
       <circle
         cx="7"
```

### Diff: src/components/layout/board/card.tsx

```diff
diff --git a/src/components/layout/board/card.tsx b/src/components/layout/board/card.tsx
index da98793..c8411fd 100644
--- a/src/components/layout/board/card.tsx
+++ b/src/components/layout/board/card.tsx
@@ -23,6 +23,14 @@ export const Card = ({ issue, className }: { issue: Issue; className?: string })
     <div
       className={`h-full cursor-pointer rounded-md border border-transparent bg-white p-2 text-sm shadow-sm dark:border-neutral-700/50 dark:bg-neutral-900 dark:shadow-none ${className ?? ''}`}
       onClick={() => navigate(`/issue/${issue.id}`)}
+      onKeyDown={(e) => {
+        if (e.key === 'Enter' || e.key === ' ') {
+          e.preventDefault()
+          navigate(`/issue/${issue.id}`)
+        }
+      }}
+      role="button"
+      tabIndex={0}
     >
       <Button className="absolute top-0 left-0 size-0" slot="drag" />
       <div className="mb-0.5 flex items-center justify-between pt-1 pr-1 pl-2">
```

### Diff: src/components/layout/board/column.tsx

```diff
diff --git a/src/components/layout/board/column.tsx b/src/components/layout/board/column.tsx
index b149161..49511f1 100644
--- a/src/components/layout/board/column.tsx
+++ b/src/components/layout/board/column.tsx
@@ -1,5 +1,5 @@
 import { queryDb } from '@livestore/livestore'
-import * as LiveStoreReact from '@livestore/react'
+import { useStore } from '@livestore/react'
 import { generateKeyBetween } from 'fractional-indexing'
 import React from 'react'
 import {
@@ -24,7 +24,7 @@ import type { Status } from '@/types/status'
 import { Card } from './card'
 
 export const Column = ({ status, statusDetails }: { status: Status; statusDetails: StatusDetails }) => {
-  const { store } = LiveStoreReact.useStore()
+  const { store } = useStore()
   // TODO restore initial scroll position once React Aria supports this scenario
   const [_scrollState, setScrollState] = useDebouncedScrollState(`column-${status}-${store.sessionId}`)
   const [filterState] = useFilterState()
@@ -39,7 +39,7 @@ export const Column = ({ status, statusDetails }: { status: Status; statusDetail
   )
   const filteredIssues = store.useQuery(filteredIssues$)
 
-  const getNewCanbanOrder = (targetId: string, dropPosition: DropPosition) => {
+  const getNewKanbanOrder = (targetId: string, dropPosition: DropPosition) => {
     const before = dropPosition !== 'after'
     const targetKanbanOrder = store.query(
       tables.issue
@@ -68,14 +68,14 @@ export const Column = ({ status, statusDetails }: { status: Status; statusDetail
     getItems: (keys) => [...keys].map((key) => ({ 'text/plain': key.toString() })),
     onReorder: (e: DroppableCollectionReorderEvent) => {
       const items = [...e.keys]
-      const kanbanorder = getNewCanbanOrder(e.target.key as string, e.target.dropPosition)
+      const kanbanorder = getNewKanbanOrder(e.target.key as string, e.target.dropPosition)
       store.commit(events.updateIssueKanbanOrder({ id: Number(items[0]), status, kanbanorder, modified: new Date() }))
     },
     onInsert: async (e) => {
       const items = await Promise.all(
         e.items.filter(isTextDropItem).map(async (item) => JSON.parse(await item.getText('text/plain')).toString()),
       )
-      const kanbanorder = getNewCanbanOrder(e.target.key as string, e.target.dropPosition)
+      const kanbanorder = getNewKanbanOrder(e.target.key as string, e.target.dropPosition)
       store.commit(events.updateIssueKanbanOrder({ id: Number(items[0]), status, kanbanorder, modified: new Date() }))
     },
     onRootDrop: async (e) => {
```

### Diff: src/components/layout/board/index.tsx

```diff
diff --git a/src/components/layout/board/index.tsx b/src/components/layout/board/index.tsx
index dce77f9..1750f60 100644
--- a/src/components/layout/board/index.tsx
+++ b/src/components/layout/board/index.tsx
@@ -26,8 +26,8 @@ export const Board = () => {
       <Filters filteredCount={filteredIssueIds.length} hideSorting hideStatusFilter />
       <div className="grow overflow-x-auto">
         <div className="flex h-full gap-4 p-4">
-          {statusOptions.map((statusDetails, statusOption) => (
-            <Column key={statusOption} status={statusOption as Status} statusDetails={statusDetails} />
+          {statusOptions.map((statusDetails, index) => (
+            <Column key={statusDetails.id} status={index as Status} statusDetails={statusDetails} />
           ))}
           <div className="-ml-4 w-4 shrink-0" />
         </div>
```

### Diff: src/components/layout/filters/filter-menu.tsx

```diff
diff --git a/src/components/layout/filters/filter-menu.tsx b/src/components/layout/filters/filter-menu.tsx
index feba1aa..68f0b2a 100644
--- a/src/components/layout/filters/filter-menu.tsx
+++ b/src/components/layout/filters/filter-menu.tsx
@@ -1,5 +1,4 @@
 import { CheckIcon } from '@heroicons/react/16/solid'
-import React from 'react'
 import { Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
 import { Icon, type IconName } from '@/components/icons'
 import { priorityOptions } from '@/data/priority-options'
@@ -11,8 +10,11 @@ import type { Status } from '@/types/status'
 export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; children?: React.ReactNode }) => {
   const [filterState, setFilterState] = useFilterState()
 
-  const toggleFilter = ({ type, value }: { type: 'status'; value: Status } | { type: 'priority'; value: Priority }) => {
-    let filters: (Status | Priority)[] | undefined = [...(filterState[type] ?? [])]
+  const toggleFilter = ({
+    filterType,
+    value,
+  }: { filterType: 'status'; value: Status } | { filterType: 'priority'; value: Priority }) => {
+    let filters: (Status | Priority)[] | undefined = [...(filterState[filterType] ?? [])]
     if (filters.includes(value)) {
       filters.splice(filters.indexOf(value), 1)
     } else {
@@ -21,7 +23,7 @@ export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; c
     if (!filters.length) {
       filters = undefined
     }
-    setFilterState({ [type]: filters })
+    setFilterState({ [filterType]: filters })
   }
 
   return (
@@ -32,13 +34,13 @@ export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; c
           {type !== 'priority' && (
             <MenuSection className="p-2" key="status">
               <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Status</Header>
-              {statusOptions.map(({ name, icon, style }, statusOption) => {
-                const active = filterState.status?.includes(statusOption as Status)
+              {statusOptions.map(({ name, icon, style }, index) => {
+                const active = filterState.status?.includes(index as Status)
                 return (
                   <MenuItem
                     className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                    key={statusOption}
-                    onAction={() => toggleFilter({ type: 'status', value: statusOption as Status })}
+                    key={name}
+                    onAction={() => toggleFilter({ filterType: 'status', value: index as Status })}
                   >
                     <div
                       className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
@@ -56,13 +58,13 @@ export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; c
           {type !== 'status' && (
             <MenuSection className="p-2" key="priority">
               <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Priority</Header>
-              {priorityOptions.map(({ name, icon, style }, priorityOption) => {
-                const active = filterState.priority?.includes(priorityOption as Priority)
+              {priorityOptions.map(({ name, icon, style }, index) => {
+                const active = filterState.priority?.includes(index as Priority)
                 return (
                   <MenuItem
                     className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                    key={priorityOption}
-                    onAction={() => toggleFilter({ type: 'priority', value: priorityOption as Priority })}
+                    key={name}
+                    onAction={() => toggleFilter({ filterType: 'priority', value: index as Priority })}
                   >
                     <div
                       className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
```

### Diff: src/components/layout/filters/index.tsx

```diff
diff --git a/src/components/layout/filters/index.tsx b/src/components/layout/filters/index.tsx
index a82f459..5fce569 100644
--- a/src/components/layout/filters/index.tsx
+++ b/src/components/layout/filters/index.tsx
@@ -33,7 +33,11 @@ export const Filters = ({
       ) : (
         <Header
           filteredCount={filteredCount}
-          heading={filterState?.status?.length === 1 ? statusOptions[filterState.status[0] as Status]!.name : 'Issues'}
+          heading={
+            filterState?.status?.length === 1
+              ? statusOptions[filterState.status[0] as Status]?.name || 'Issues'
+              : 'Issues'
+          }
           totalCount={totalCount}
         />
       )}
```

### Diff: src/components/layout/filters/priority-filter.tsx

```diff
diff --git a/src/components/layout/filters/priority-filter.tsx b/src/components/layout/filters/priority-filter.tsx
index 375e751..162b2de 100644
--- a/src/components/layout/filters/priority-filter.tsx
+++ b/src/components/layout/filters/priority-filter.tsx
@@ -23,11 +23,11 @@ export const PriorityFilter = () => {
           {filterState.priority.length === 1 ? (
             <>
               <Icon
-                className={`h-3.5 ${priorityOptions[filterState.priority[0] as Priority]!.style}`}
-                name={priorityOptions[filterState.priority[0] as Priority]!.icon as IconName}
+                className={`h-3.5 ${priorityOptions[filterState.priority[0] as Priority]?.style || ''}`}
+                name={priorityOptions[filterState.priority[0] as Priority]?.icon as IconName}
               />
               <span className="font-medium text-neutral-600 dark:text-neutral-200">
-                {priorityOptions[filterState.priority[0] as Priority]!.name}
+                {priorityOptions[filterState.priority[0] as Priority]?.name || 'Unknown'}
               </span>
             </>
           ) : (
```

### Diff: src/components/layout/filters/status-filter.tsx

```diff
diff --git a/src/components/layout/filters/status-filter.tsx b/src/components/layout/filters/status-filter.tsx
index e3b05cc..54e90f2 100644
--- a/src/components/layout/filters/status-filter.tsx
+++ b/src/components/layout/filters/status-filter.tsx
@@ -20,17 +20,17 @@ export const StatusFilter = () => {
       </div>
       <FilterMenu type="status">
         <Button className="flex h-full items-center gap-1.5 pr-2 pl-5 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
-          {filterState.status.map((status, index) => (
-            <div className="-ml-3 h-4 rounded-full bg-white p-px dark:bg-neutral-900" key={index}>
+          {filterState.status.map((status) => (
+            <div className="-ml-3 h-4 rounded-full bg-white p-px dark:bg-neutral-900" key={status}>
               <Icon
-                className={`h-full ${statusOptions[status as Status]!.style}`}
-                name={statusOptions[status as Status]!.icon as IconName}
+                className={`h-full ${statusOptions[status as Status]?.style || ''}`}
+                name={statusOptions[status as Status]?.icon as IconName}
               />
             </div>
           ))}
           {filterState.status.length === 1 ? (
             <span className="font-medium text-neutral-600 dark:text-neutral-200">
-              {statusOptions[filterState.status[0] as Status]!.name}
+              {statusOptions[filterState.status[0] as Status]?.name || 'Unknown'}
             </span>
           ) : (
             <span>{filterState.status.length} statuses</span>
```

### Diff: src/components/layout/index.tsx

```diff
diff --git a/src/components/layout/index.tsx b/src/components/layout/index.tsx
index e48c44b..07ac09a 100644
--- a/src/components/layout/index.tsx
+++ b/src/components/layout/index.tsx
@@ -1,4 +1,3 @@
-import React from 'react'
 import { MobileMenu } from '@/components/layout/sidebar/mobile-menu'
 import { Toolbar } from '@/components/layout/toolbar'
 import { useFrontendState } from '@/lib/livestore/queries'
```

### Diff: src/components/layout/issue/delete-button.tsx

```diff
diff --git a/src/components/layout/issue/delete-button.tsx b/src/components/layout/issue/delete-button.tsx
index ca89d3a..dd0eb0a 100644
--- a/src/components/layout/issue/delete-button.tsx
+++ b/src/components/layout/issue/delete-button.tsx
@@ -4,6 +4,8 @@ import React from 'react'
 import { Button } from 'react-aria-components'
 import { events } from '@/lib/livestore/schema'
 
+const DELETE_CONFIRMATION_TIMEOUT_MS = 2000
+
 export const DeleteButton = ({
   issueId,
   close,
@@ -30,7 +32,7 @@ export const DeleteButton = ({
     setConfirm(true)
     setTimeout(() => {
       setConfirm(false)
-    }, 2000)
+    }, DELETE_CONFIRMATION_TIMEOUT_MS)
   }
 
   return (
```

### Diff: src/components/layout/issue/new-issue-modal.tsx

```diff
diff --git a/src/components/layout/issue/new-issue-modal.tsx b/src/components/layout/issue/new-issue-modal.tsx
index 73ad010..d519ec6 100644
--- a/src/components/layout/issue/new-issue-modal.tsx
+++ b/src/components/layout/issue/new-issue-modal.tsx
@@ -15,7 +15,11 @@ import type { Status } from '@/types/status'
 
 export const NewIssueModal = () => {
   const [frontendState] = useFrontendState()
-  const { newIssueModalStatus, setNewIssueModalStatus } = React.useContext(NewIssueModalContext)!
+  const context = React.useContext(NewIssueModalContext)
+  if (!context) {
+    throw new Error('NewIssueModal must be used within a NewIssueModalProvider')
+  }
+  const { newIssueModalStatus, setNewIssueModalStatus } = context
   const [title, setTitle] = React.useState('')
   const [description, setDescription] = React.useState('')
   const [priority, setPriority] = React.useState<Priority>(0)
```

### Diff: src/components/layout/issue/title-input.tsx

```diff
diff --git a/src/components/layout/issue/title-input.tsx b/src/components/layout/issue/title-input.tsx
index 158d90a..9b5fac6 100644
--- a/src/components/layout/issue/title-input.tsx
+++ b/src/components/layout/issue/title-input.tsx
@@ -17,12 +17,12 @@ export const TitleInput = ({
 }) => {
   const { store } = useStore()
 
-  const handleTitleChange = (title: string) => {
+  const handleTitleChange = (newTitle: string) => {
     if (issue) {
-      store.commit(events.updateIssueTitle({ id: issue.id, title, modified: new Date() }))
+      store.commit(events.updateIssueTitle({ id: issue.id, title: newTitle, modified: new Date() }))
     }
     if (setTitle) {
-      setTitle(title)
+      setTitle(newTitle)
     }
   }
```

### Diff: src/components/layout/list/filtered-list.tsx

```diff
diff --git a/src/components/layout/list/filtered-list.tsx b/src/components/layout/list/filtered-list.tsx
index 6d200d5..15768db 100644
--- a/src/components/layout/list/filtered-list.tsx
+++ b/src/components/layout/list/filtered-list.tsx
@@ -9,7 +9,7 @@ export const FilteredList = ({ filteredIssueIds }: { filteredIssueIds: readonly
         {({ height, width }: { width: number; height: number }) => (
           <List
             overscanCount={10}
-            rowComponent={({ index, style, ...rowProps }: any) => (
+            rowComponent={({ index, style, ...rowProps }) => (
               <VirtualRow data={rowProps} index={index} style={style} />
             )}
             rowCount={filteredIssueIds.length}
```

### Diff: src/components/layout/list/row.tsx

```diff
diff --git a/src/components/layout/list/row.tsx b/src/components/layout/list/row.tsx
index 6391808..976375c 100644
--- a/src/components/layout/list/row.tsx
+++ b/src/components/layout/list/row.tsx
@@ -23,12 +23,13 @@ export const Row = memo(({ issue, style }: { issue: Issue; style: CSSProperties
     store.commit(events.updateIssuePriority({ id: issue.id, priority, modified: new Date() }))
 
   return (
-    <div
-      className="flex w-full cursor-pointer items-center justify-between gap-4 border-neutral-200 border-b pr-4 pl-2 text-sm last:border-b-0 hover:bg-neutral-50 lg:pl-4 dark:border-neutral-700 dark:hover:bg-neutral-800/50"
+    <button
+      className="flex w-full cursor-pointer items-center justify-between gap-4 border-neutral-200 border-b border-none bg-transparent p-0 pr-4 pl-2 text-left text-sm last:border-b-0 hover:bg-neutral-50 lg:pl-4 dark:border-neutral-700 dark:hover:bg-neutral-800/50"
       id={issue.id.toString()}
       key={issue.id}
       onClick={() => navigate(`/issue/${issue.id}`)}
       style={style}
+      type="button"
     >
       <div className="flex items-center gap-px">
         <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} />
@@ -44,6 +45,6 @@ export const Row = memo(({ issue, style }: { issue: Issue; style: CSSProperties
         </div>
         <Avatar name={issue.creator} />
       </div>
-    </div>
+    </button>
   )
 })
```

### Diff: src/components/layout/sidebar/about-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/about-menu.tsx b/src/components/layout/sidebar/about-menu.tsx
index 953c7fb..298ec14 100644
--- a/src/components/layout/sidebar/about-menu.tsx
+++ b/src/components/layout/sidebar/about-menu.tsx
@@ -14,14 +14,14 @@ export const AboutMenu = () => {
           aria-label="Menu"
           className="flex h-8 items-center rounded-lg px-2 font-bold text-lg leading-none hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
         >
-          <Icon className="mr-2 size-5 text-orange-500 dark:text-orange-500" name="linearlite" />
-          <span>LinearLite</span>
+          <Icon className="mr-2 size-5 text-orange-500 dark:text-orange-500" name="zensync" />
+          <span>Zen Sync</span>
           <ChevronDownIcon className="ml-1 size-4" />
         </Button>
         <Popover className="ml-1 w-56 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
           <Menu className="focus:outline-none">
-            <MenuSection className="p-2" key="linearlite">
-              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">LinearLite</Header>
+            <MenuSection className="p-2" key="zensync">
+              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Zen Sync</Header>
               <MenuItem
                 className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                 onAction={() => setShowAboutModal(true)}
```

### Diff: src/components/layout/sidebar/about-modal.tsx

```diff
diff --git a/src/components/layout/sidebar/about-modal.tsx b/src/components/layout/sidebar/about-modal.tsx
index 87344db..0ce50e5 100644
--- a/src/components/layout/sidebar/about-modal.tsx
+++ b/src/components/layout/sidebar/about-modal.tsx
@@ -3,10 +3,10 @@ import { Modal } from '@/components/common/modal'
 
 export const AboutModal = ({ show, setShow }: { show: boolean; setShow: (show: boolean) => void }) => {
   return (
-    <Modal setShow={setShow} show={show} title="About LinearLite">
+    <Modal setShow={setShow} show={show} title="About Zen Sync">
       <div className="flex flex-col gap-2 p-4 text-neutral-500 text-sm">
         <p>
-          LinearLite is an example of a collaboration application using a local-first approach, obviously inspired by{' '}
+          Zen Sync is an example of a collaboration application using a local-first approach, obviously inspired by{' '}
           <Link className="text-orange-600 underline" target="_blank" to="https://linear.app">
             Linear
           </Link>
```

### Diff: src/components/layout/sidebar/index.tsx

```diff
diff --git a/src/components/layout/sidebar/index.tsx b/src/components/layout/sidebar/index.tsx
index cb5badb..263577a 100644
--- a/src/components/layout/sidebar/index.tsx
+++ b/src/components/layout/sidebar/index.tsx
@@ -11,7 +11,12 @@ import { useFilterState } from '@/lib/livestore/queries'
 
 export const Sidebar = ({ className }: { className?: string }) => {
   const [, setFilterState] = useFilterState()
-  const { setShowMenu } = React.useContext(MenuContext)!
+  const menuContext = React.useContext(MenuContext)
+  const setShowMenu =
+    menuContext?.setShowMenu ||
+    (() => {
+      // Default no-op function when menu context is not available
+    })
 
   const navItems = [
     {
@@ -44,10 +49,10 @@ export const Sidebar = ({ className }: { className?: string }) => {
           Issues
         </h2>
         <nav className="space-y-px text-sm leading-none">
-          {navItems.map(({ title, icon: Icon, href, onClick }, index) => (
+          {navItems.map(({ title, icon: Icon, href, onClick }) => (
             <Link
               className="flex h-8 items-center gap-2 rounded-md px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-              key={index}
+              key={href}
               onClick={() => {
                 onClick()
                 setShowMenu(false)
```

### Diff: src/components/layout/sidebar/mobile-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/mobile-menu.tsx b/src/components/layout/sidebar/mobile-menu.tsx
index 9dee79c..012a23c 100644
--- a/src/components/layout/sidebar/mobile-menu.tsx
+++ b/src/components/layout/sidebar/mobile-menu.tsx
@@ -5,7 +5,13 @@ import { Sidebar } from '@/components/layout/sidebar'
 import { useFrontendState } from '@/lib/livestore/queries'
 
 export const MobileMenu = () => {
-  const { showMenu, setShowMenu } = React.useContext(MenuContext)!
+  const menuContext = React.useContext(MenuContext)
+  const { showMenu, setShowMenu } = menuContext || {
+    showMenu: false,
+    setShowMenu: () => {
+      // Default no-op function when menu context is not available
+    },
+  }
   const [frontendState] = useFrontendState()
 
   return (
```

### Diff: src/components/layout/sidebar/new-issue-button.tsx

```diff
diff --git a/src/components/layout/sidebar/new-issue-button.tsx b/src/components/layout/sidebar/new-issue-button.tsx
index 776a2dc..28daf6b 100644
--- a/src/components/layout/sidebar/new-issue-button.tsx
+++ b/src/components/layout/sidebar/new-issue-button.tsx
@@ -6,8 +6,18 @@ import { Icon } from '@/components/icons'
 import type { Status } from '@/types/status'
 
 export const NewIssueButton = ({ status }: { status?: Status }) => {
-  const { setNewIssueModalStatus } = React.useContext(NewIssueModalContext)!
-  const { setShowMenu } = React.useContext(MenuContext)!
+  const newIssueModalContext = React.useContext(NewIssueModalContext)
+  const { setNewIssueModalStatus } = newIssueModalContext || {
+    setNewIssueModalStatus: () => {
+      // Default no-op function when modal context is not available
+    },
+  }
+  const menuContext = React.useContext(MenuContext)
+  const { setShowMenu } = menuContext || {
+    setShowMenu: () => {
+      // Default no-op function when menu context is not available
+    },
+  }
 
   return (
     <Button
```

### Diff: src/components/layout/sidebar/search-button.tsx

```diff
diff --git a/src/components/layout/sidebar/search-button.tsx b/src/components/layout/sidebar/search-button.tsx
index bd9a127..887cc44 100644
--- a/src/components/layout/sidebar/search-button.tsx
+++ b/src/components/layout/sidebar/search-button.tsx
@@ -6,7 +6,12 @@ import { useFilterState } from '@/lib/livestore/queries'
 
 export const SearchButton = () => {
   const [, setFilterState] = useFilterState()
-  const { setShowMenu } = React.useContext(MenuContext)!
+  const menuContext = React.useContext(MenuContext)
+  const { setShowMenu } = menuContext || {
+    setShowMenu: () => {
+      // Default no-op function when menu context is not available
+    },
+  }
 
   return (
     <Link
```

### Diff: src/components/layout/toolbar/reset-button.tsx

```diff
diff --git a/src/components/layout/toolbar/reset-button.tsx b/src/components/layout/toolbar/reset-button.tsx
index a46fc1c..0f8b167 100644
--- a/src/components/layout/toolbar/reset-button.tsx
+++ b/src/components/layout/toolbar/reset-button.tsx
@@ -3,6 +3,8 @@ import React from 'react'
 import { Button } from 'react-aria-components'
 import { useNavigate } from 'react-router-dom'
 
+const CONFIRM_TIMEOUT_MS = 2000
+
 export const ResetButton = ({ className }: { className?: string }) => {
   const [confirm, setConfirm] = React.useState(false)
   const navigate = useNavigate()
@@ -15,7 +17,7 @@ export const ResetButton = ({ className }: { className?: string }) => {
     setConfirm(true)
     setTimeout(() => {
       setConfirm(false)
-    }, 2000)
+    }, CONFIRM_TIMEOUT_MS)
   }
 
   return (
```

### Diff: src/components/layout/toolbar/share-button.tsx

```diff
diff --git a/src/components/layout/toolbar/share-button.tsx b/src/components/layout/toolbar/share-button.tsx
index ed83037..fc39622 100644
--- a/src/components/layout/toolbar/share-button.tsx
+++ b/src/components/layout/toolbar/share-button.tsx
@@ -4,6 +4,8 @@ import { Button, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-compon
 
 // This uses a public QR code API: https://goqr.me/api/doc/create-qr-code/
 
+const COPIED_TIMEOUT_MS = 2000
+
 export const ShareButton = ({ className }: { className?: string }) => {
   const [copied, setCopied] = React.useState(false)
   const [showQR, setShowQR] = React.useState(false)
@@ -14,7 +16,7 @@ export const ShareButton = ({ className }: { className?: string }) => {
     setCopied(true)
     setTimeout(() => {
       setCopied(false)
-    }, 2000)
+    }, COPIED_TIMEOUT_MS)
   }
 
   return (
@@ -59,6 +61,7 @@ export const ShareButton = ({ className }: { className?: string }) => {
       >
         <ReactAriaModal className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-lg">
           <img
+            alt="QR code for sharing workspace URL"
             crossOrigin="anonymous"
             height="200"
             src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURI(window.location.href)}`}
```

### Diff: src/hooks/useDebounce.ts

```diff
diff --git a/src/hooks/useDebounce.ts b/src/hooks/useDebounce.ts
index 8bd3af8..7b7916b 100644
--- a/src/hooks/useDebounce.ts
+++ b/src/hooks/useDebounce.ts
@@ -7,7 +7,9 @@ export const useDebounce = (func: (...args: any[]) => void, delay = 1000) => {
 
   useEffect(() => {
     return () => {
-      if (!timer.current) return
+      if (!timer.current) {
+        return
+      }
       clearTimeout(timer.current)
     }
   }, [])
```

### Diff: src/lib/livestore/queries.ts

```diff
diff --git a/src/lib/livestore/queries.ts b/src/lib/livestore/queries.ts
index 2510edd..d58e8be 100644
--- a/src/lib/livestore/queries.ts
+++ b/src/lib/livestore/queries.ts
@@ -1,6 +1,6 @@
-import React from 'react'
 import { queryDb } from '@livestore/livestore'
 import { useClientDocument } from '@livestore/react'
+import React from 'react'
 import { tables } from '@/lib/livestore/schema'
 
 export const useFilterState = () => useClientDocument(tables.filterState)
@@ -12,14 +12,14 @@ export const useDebouncedScrollState = (id: string, { debounce = 100 }: { deboun
   const debounceTimeoutRef = React.useRef<NodeJS.Timeout | null>(null)
 
   const setState = React.useCallback(
-    (state: typeof initialState) => {
+    (newState: typeof initialState) => {
       if (debounceTimeoutRef.current) {
         clearTimeout(debounceTimeoutRef.current)
       }
 
       debounceTimeoutRef.current = setTimeout(() => {
-        setPersistedState(state)
-        setReactState(state)
+        setPersistedState(newState)
+        setReactState(newState)
       }, debounce)
     },
     [setPersistedState, debounce],
```

### Diff: src/lib/livestore/seed.ts

```diff
diff --git a/src/lib/livestore/seed.ts b/src/lib/livestore/seed.ts
index 9349ac5..c8c4593 100644
--- a/src/lib/livestore/seed.ts
+++ b/src/lib/livestore/seed.ts
@@ -12,10 +12,11 @@ export const seed = (store: Store, count: number) => {
     const existingCount = store.query(issueCount$)
     const highestId = store.query(highestIssueId$)
     const highestKanbanOrder = store.query(highestKanbanOrder$)
-    if (existingCount >= count) return
-    count -= existingCount
-    console.log('SEEDING WITH ', count, ' ADDITIONAL ROWS')
-    store.commit(...Array.from(createIssues(count, highestId, highestKanbanOrder)))
+    if (existingCount >= count) {
+      return
+    }
+    const additionalCount = count - existingCount
+    store.commit(...Array.from(createIssues(additionalCount, highestId, highestKanbanOrder)))
   } finally {
     const url = new URL(window.location.href)
     url.searchParams.delete('seed')
@@ -28,10 +29,21 @@ function* createIssues(
   highestId?: number,
   highestKanbanOrder?: string,
 ): Generator<typeof events.createIssueWithDescription.Event> {
-  if (!highestId) highestId = 0
+  const startingId = highestId ?? 0
+  let currentId = startingId
   let kanbanorder = highestKanbanOrder ?? 'a1'
 
-  const getRandomItem = <T>(items: T[]) => items[Math.floor(Math.random() * items.length)]!
+  const getRandomItem = <T>(items: T[]): T => {
+    if (items.length === 0) {
+      throw new Error('Cannot get random item from empty array')
+    }
+    const randomIndex = Math.floor(Math.random() * items.length)
+    const item = items[randomIndex]
+    if (item === undefined) {
+      throw new Error('Unexpected undefined item in array')
+    }
+    return item
+  }
   const generateText = () => {
     const action = getRandomItem(actionPhrases)
     const feature = getRandomItem(featurePhrases)
@@ -41,16 +53,23 @@ function* createIssues(
   }
 
   const now = Date.now()
-  const ONE_DAY = 24 * 60 * 60 * 1000
+  const HOURS_PER_DAY = 24
+  const MINUTES_PER_HOUR = 60
+  const SECONDS_PER_MINUTE = 60
+  const MILLISECONDS_PER_SECOND = 1000
+  const MILLISECONDS_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND
+  const DAYS_BETWEEN_ISSUES = 5
+
   for (let i = 0; i < numTasks; i++) {
     kanbanorder = generateKeyBetween(kanbanorder, undefined)
     const [title, description] = generateText()
+    currentId += 1
     const issue = events.createIssueWithDescription({
-      id: (highestId += 1),
+      id: currentId,
       creator: 'John Doe',
       title,
-      created: new Date(now - (numTasks - i) * 5 * ONE_DAY),
-      modified: new Date(now - (numTasks - i) * 2 * ONE_DAY),
+      created: new Date(now - (numTasks - i) * DAYS_BETWEEN_ISSUES * MILLISECONDS_PER_DAY),
+      modified: new Date(now - (numTasks - i) * 2 * MILLISECONDS_PER_DAY),
       status: getRandomItem(statuses),
       priority: getRandomItem(priorities),
       kanbanorder,
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
