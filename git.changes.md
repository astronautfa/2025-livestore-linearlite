# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- src/app/contexts.ts
- src/app/provider.tsx
- src/components/common/editor.tsx
- src/components/common/menu-button.tsx
- src/components/common/modal.tsx
- src/components/common/priority-menu.tsx
- src/components/common/status-menu.tsx
- src/components/layout/board/column.tsx
- src/components/layout/filters/filter-menu.tsx
- src/components/layout/filters/priority-filter.tsx
- src/components/layout/filters/sort-menu.tsx
- src/components/layout/filters/status-filter.tsx
- src/components/layout/index.tsx
- src/components/layout/issue/back-button.tsx
- src/components/layout/issue/comment-input.tsx
- src/components/layout/issue/delete-button.tsx
- src/components/layout/issue/index.tsx
- src/components/layout/issue/new-issue-modal.tsx
- src/components/layout/issue/title-input.tsx
- src/components/layout/list/row.tsx
- src/components/layout/list/virtual-row.tsx
- src/components/layout/search/search-bar.tsx
- src/components/layout/sidebar/about-menu.tsx
- src/components/layout/sidebar/index.tsx
- src/components/layout/sidebar/mobile-menu.tsx
- src/components/layout/sidebar/new-issue-button.tsx
- src/components/layout/sidebar/search-button.tsx
- src/components/layout/sidebar/theme-button.tsx
- src/components/layout/toolbar/devtools-button.tsx
- src/components/layout/toolbar/reset-button.tsx
- src/components/layout/toolbar/seed-input.tsx
- src/components/layout/toolbar/share-button.tsx
- src/components/layout/toolbar/sync-toggle.tsx
- src/lib/livestore/queries.ts

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: src/app/contexts.ts

```diff
diff --git a/src/app/contexts.ts b/src/app/contexts.ts
index a14da6a..99368bd 100644
--- a/src/app/contexts.ts
+++ b/src/app/contexts.ts
@@ -1,11 +1,11 @@
 import React from 'react'
 import type { Status } from '@/types/status'
 
-interface MenuContextInterface {
+type MenuContextInterface = {
   showMenu: boolean
   setShowMenu: (show: boolean) => void
 }
-interface NewIssueModalContextInterface {
+type NewIssueModalContextInterface = {
   newIssueModalStatus: Status | boolean
   setNewIssueModalStatus: (status: Status | false) => void
 }
```

### Diff: src/app/provider.tsx

```diff
diff --git a/src/app/provider.tsx b/src/app/provider.tsx
index 7411c24..a29104d 100644
--- a/src/app/provider.tsx
+++ b/src/app/provider.tsx
@@ -34,7 +34,9 @@ export const Provider = ({ children }: { children: React.ReactNode }) => {
   React.useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
       const element = e.target as HTMLElement
-      if (element.classList.contains('input')) return
+      if (element.classList.contains('input')) {
+        return
+      }
       if (e.key === 'c' && !element.classList.contains('input')) {
         setNewIssueModalStatus(0)
         e.preventDefault()
```

### Diff: src/components/common/editor.tsx

```diff
diff --git a/src/components/common/editor.tsx b/src/components/common/editor.tsx
index 0bbdd1b..c4c107d 100644
--- a/src/components/common/editor.tsx
+++ b/src/components/common/editor.tsx
@@ -1,20 +1,25 @@
 import { EditorContent, type Extensions, useEditor } from '@tiptap/react'
 import StarterKit from '@tiptap/starter-kit'
-import React, { useEffect } from 'react'
+import { useEffect } from 'react'
 import { Markdown } from 'tiptap-markdown'
 
+// Type for editor with markdown extension
+type MarkdownStorage = {
+  markdown: {
+    getMarkdown: () => string
+  }
+}
+
 const Editor = ({
   value,
   onBlur,
   onChange,
   className = '',
-  placeholder,
 }: {
   value: string
   onBlur?: (value: string) => void
   onChange?: (value: string) => void
   className?: string
-  placeholder?: string
 }) => {
   const extensions: Extensions = [StarterKit, Markdown]
 
@@ -27,22 +32,22 @@ const Editor = ({
     },
     content: value || undefined,
     onBlur: onBlur
-      ? ({ editor }) => {
-          const markdown = editor.storage.markdown.getMarkdown()
+      ? ({ editor: blurEditor }) => {
+          const markdown = (blurEditor.storage as unknown as MarkdownStorage).markdown.getMarkdown()
           onBlur(markdown || '')
         }
       : undefined,
     onUpdate: onChange
-      ? ({ editor }) => {
-          const markdown = editor.storage.markdown.getMarkdown()
+      ? ({ editor: updateEditor }) => {
+          const markdown = (updateEditor.storage as unknown as MarkdownStorage).markdown.getMarkdown()
           onChange(markdown || '')
         }
       : undefined,
   })
 
   useEffect(() => {
-    if (editor && value !== editor.storage.markdown.getMarkdown()) {
-      editor.commands.setContent(value)
+    if (value !== (editor?.storage as unknown as MarkdownStorage).markdown.getMarkdown()) {
+      editor?.commands.setContent(value)
     }
   }, [value, editor])
```

### Diff: src/components/common/menu-button.tsx

```diff
diff --git a/src/components/common/menu-button.tsx b/src/components/common/menu-button.tsx
index 50c2e08..2d4f684 100644
--- a/src/components/common/menu-button.tsx
+++ b/src/components/common/menu-button.tsx
@@ -1,4 +1,4 @@
-import React, { useContext } from 'react'
+import { useContext } from 'react'
 import { Button } from 'react-aria-components'
 import { MenuContext } from '@/app/contexts'
 import { Icon } from '@/components/icons'
```

### Diff: src/components/common/modal.tsx

```diff
diff --git a/src/components/common/modal.tsx b/src/components/common/modal.tsx
index b7fd564..eac565c 100644
--- a/src/components/common/modal.tsx
+++ b/src/components/common/modal.tsx
@@ -1,4 +1,5 @@
 import { XMarkIcon } from '@heroicons/react/20/solid'
+import React from 'react'
 import { Button, Heading, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 
 export const Modal = ({
```

### Diff: src/components/common/priority-menu.tsx

```diff
diff --git a/src/components/common/priority-menu.tsx b/src/components/common/priority-menu.tsx
index ff88dfb..e3f2a1b 100644
--- a/src/components/common/priority-menu.tsx
+++ b/src/components/common/priority-menu.tsx
@@ -1,4 +1,5 @@
 import { CheckIcon } from '@heroicons/react/16/solid'
+import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
 import { Shortcut } from '@/components/common/shortcut'
```

### Diff: src/components/common/status-menu.tsx

```diff
diff --git a/src/components/common/status-menu.tsx b/src/components/common/status-menu.tsx
index 5c0f2ab..bcc38ac 100644
--- a/src/components/common/status-menu.tsx
+++ b/src/components/common/status-menu.tsx
@@ -1,4 +1,5 @@
 import { CheckIcon } from '@heroicons/react/16/solid'
+import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
 import { Shortcut } from '@/components/common/shortcut'
```

### Diff: src/components/layout/board/column.tsx

```diff
diff --git a/src/components/layout/board/column.tsx b/src/components/layout/board/column.tsx
index 45cf435..b149161 100644
--- a/src/components/layout/board/column.tsx
+++ b/src/components/layout/board/column.tsx
@@ -1,6 +1,7 @@
 import { queryDb } from '@livestore/livestore'
 import * as LiveStoreReact from '@livestore/react'
 import { generateKeyBetween } from 'fractional-indexing'
+import React from 'react'
 import {
   DropIndicator,
   type DropPosition,
```

### Diff: src/components/layout/filters/filter-menu.tsx

```diff
diff --git a/src/components/layout/filters/filter-menu.tsx b/src/components/layout/filters/filter-menu.tsx
index e9426b5..feba1aa 100644
--- a/src/components/layout/filters/filter-menu.tsx
+++ b/src/components/layout/filters/filter-menu.tsx
@@ -1,5 +1,5 @@
 import { CheckIcon } from '@heroicons/react/16/solid'
-import type React from 'react'
+import React from 'react'
 import { Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
 import { Icon, type IconName } from '@/components/icons'
 import { priorityOptions } from '@/data/priority-options'
@@ -13,9 +13,14 @@ export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; c
 
   const toggleFilter = ({ type, value }: { type: 'status'; value: Status } | { type: 'priority'; value: Priority }) => {
     let filters: (Status | Priority)[] | undefined = [...(filterState[type] ?? [])]
-    if (filters.includes(value)) filters.splice(filters.indexOf(value), 1)
-    else filters.push(value)
-    if (!filters.length) filters = undefined
+    if (filters.includes(value)) {
+      filters.splice(filters.indexOf(value), 1)
+    } else {
+      filters.push(value)
+    }
+    if (!filters.length) {
+      filters = undefined
+    }
     setFilterState({ [type]: filters })
   }
```

### Diff: src/components/layout/filters/priority-filter.tsx

```diff
diff --git a/src/components/layout/filters/priority-filter.tsx b/src/components/layout/filters/priority-filter.tsx
index 1909f21..375e751 100644
--- a/src/components/layout/filters/priority-filter.tsx
+++ b/src/components/layout/filters/priority-filter.tsx
@@ -8,7 +8,9 @@ import type { Priority } from '@/types/priority'
 
 export const PriorityFilter = () => {
   const [filterState, setFilterState] = useFilterState()
-  if (!filterState.priority) return null
+  if (!filterState.priority) {
+    return null
+  }
 
   return (
     <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
```

### Diff: src/components/layout/filters/sort-menu.tsx

```diff
diff --git a/src/components/layout/filters/sort-menu.tsx b/src/components/layout/filters/sort-menu.tsx
index a77a09a..f3e5f36 100644
--- a/src/components/layout/filters/sort-menu.tsx
+++ b/src/components/layout/filters/sort-menu.tsx
@@ -1,4 +1,5 @@
 import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'
+import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover } from 'react-aria-components'
 import { Shortcut } from '@/components/common/shortcut'
@@ -12,13 +13,14 @@ export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
   const toggleSorting = (sortingOption: SortingOption) => {
     const currentSorting = filterState.orderBy
     const currentDirection = filterState.orderDirection
-    if (currentSorting === sortingOption)
+    if (currentSorting === sortingOption) {
       setFilterState({ orderDirection: currentDirection === 'asc' ? 'desc' : 'asc' })
-    else
+    } else {
       setFilterState({
         orderBy: sortingOption,
         orderDirection: sortingOptions[sortingOption as SortingOption].defaultDirection as SortingDirection,
       })
+    }
   }
 
   const { keyboardProps } = useKeyboard({
@@ -27,12 +29,12 @@ export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
         setIsOpen(false)
         return
       }
-      Object.entries(sortingOptions).forEach(([sortingOption, { shortcut }]) => {
+      for (const [sortingOption, { shortcut }] of Object.entries(sortingOptions)) {
         if (e.key === shortcut) {
           toggleSorting(sortingOption as SortingOption)
-          return
+          break
         }
-      })
+      }
     },
   })
 
@@ -60,12 +62,10 @@ export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
                   >
                     <span>{name}</span>
                     {filterState.orderBy === sortingOption && (
-                      <>
-                        <div className="absolute right-10">
-                          {filterState.orderDirection === 'asc' && <BarsArrowDownIcon className="size-4" />}
-                          {filterState.orderDirection === 'desc' && <BarsArrowUpIcon className="size-4" />}
-                        </div>
-                      </>
+                      <div className="absolute right-10">
+                        {filterState.orderDirection === 'asc' && <BarsArrowDownIcon className="size-4" />}
+                        {filterState.orderDirection === 'desc' && <BarsArrowUpIcon className="size-4" />}
+                      </div>
                     )}
                     <Shortcut className="absolute right-3" keys={[shortcut]} />
                   </MenuItem>
```

### Diff: src/components/layout/filters/status-filter.tsx

```diff
diff --git a/src/components/layout/filters/status-filter.tsx b/src/components/layout/filters/status-filter.tsx
index 1025830..e3b05cc 100644
--- a/src/components/layout/filters/status-filter.tsx
+++ b/src/components/layout/filters/status-filter.tsx
@@ -8,7 +8,9 @@ import type { Status } from '@/types/status'
 
 export const StatusFilter = () => {
   const [filterState, setFilterState] = useFilterState()
-  if (!filterState.status) return null
+  if (!filterState.status) {
+    return null
+  }
 
   return (
     <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
```

### Diff: src/components/layout/index.tsx

```diff
diff --git a/src/components/layout/index.tsx b/src/components/layout/index.tsx
index 4304c5f..e48c44b 100644
--- a/src/components/layout/index.tsx
+++ b/src/components/layout/index.tsx
@@ -1,4 +1,4 @@
-import type React from 'react'
+import React from 'react'
 import { MobileMenu } from '@/components/layout/sidebar/mobile-menu'
 import { Toolbar } from '@/components/layout/toolbar'
 import { useFrontendState } from '@/lib/livestore/queries'
```

### Diff: src/components/layout/issue/back-button.tsx

```diff
diff --git a/src/components/layout/issue/back-button.tsx b/src/components/layout/issue/back-button.tsx
index 61142f6..d0153e6 100644
--- a/src/components/layout/issue/back-button.tsx
+++ b/src/components/layout/issue/back-button.tsx
@@ -1,10 +1,13 @@
 import { XMarkIcon } from '@heroicons/react/20/solid'
+import React from 'react'
 import { Button } from 'react-aria-components'
 
 export const BackButton = ({ close }: { close: () => void }) => {
   React.useEffect(() => {
     const handleKeyDown = (e: KeyboardEvent) => {
-      if (e.key === 'Escape') close()
+      if (e.key === 'Escape') {
+        close()
+      }
     }
     window.addEventListener('keydown', handleKeyDown)
     return () => window.removeEventListener('keydown', handleKeyDown)
```

### Diff: src/components/layout/issue/comment-input.tsx

```diff
diff --git a/src/components/layout/issue/comment-input.tsx b/src/components/layout/issue/comment-input.tsx
index 969ffce..635278d 100644
--- a/src/components/layout/issue/comment-input.tsx
+++ b/src/components/layout/issue/comment-input.tsx
@@ -1,5 +1,6 @@
 import { ArrowUpIcon } from '@heroicons/react/20/solid'
 import { useStore } from '@livestore/react'
+import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button } from 'react-aria-components'
 import Editor from '@/components/common/editor'
@@ -21,7 +22,9 @@ export const CommentInput = ({ issueId, className }: { issueId: number; classNam
   })
 
   const submitComment = () => {
-    if (!commentDraft) return
+    if (!commentDraft) {
+      return
+    }
     store.commit(
       events.createComment({
         id: crypto.randomUUID(),
```

### Diff: src/components/layout/issue/delete-button.tsx

```diff
diff --git a/src/components/layout/issue/delete-button.tsx b/src/components/layout/issue/delete-button.tsx
index 6575fb6..ca89d3a 100644
--- a/src/components/layout/issue/delete-button.tsx
+++ b/src/components/layout/issue/delete-button.tsx
@@ -1,5 +1,6 @@
 import { TrashIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
+import React from 'react'
 import { Button } from 'react-aria-components'
 import { events } from '@/lib/livestore/schema'
```

### Diff: src/components/layout/issue/index.tsx

```diff
diff --git a/src/components/layout/issue/index.tsx b/src/components/layout/issue/index.tsx
index fcf1bdb..0ea8da9 100644
--- a/src/components/layout/issue/index.tsx
+++ b/src/components/layout/issue/index.tsx
@@ -26,8 +26,11 @@ export const Issue = () => {
   const issue = store.useQuery(queryDb(tables.issue.where({ id }).first(), { deps: [id] }))
 
   const close = () => {
-    if (window.history.length > 2) navigate(-1)
-    else navigate('/')
+    if (window.history.length > 2) {
+      navigate(-1)
+    } else {
+      navigate('/')
+    }
   }
 
   const handleChangeStatus = (status: Status) => {
```

### Diff: src/components/layout/issue/new-issue-modal.tsx

```diff
diff --git a/src/components/layout/issue/new-issue-modal.tsx b/src/components/layout/issue/new-issue-modal.tsx
index e7d6447..73ad010 100644
--- a/src/components/layout/issue/new-issue-modal.tsx
+++ b/src/components/layout/issue/new-issue-modal.tsx
@@ -1,5 +1,6 @@
 import { useStore } from '@livestore/react'
 import { generateKeyBetween } from 'fractional-indexing'
+import React from 'react'
 import { Button } from 'react-aria-components'
 import { NewIssueModalContext } from '@/app/contexts'
 import { Modal } from '@/components/common/modal'
```

### Diff: src/components/layout/issue/title-input.tsx

```diff
diff --git a/src/components/layout/issue/title-input.tsx b/src/components/layout/issue/title-input.tsx
index f505fe7..158d90a 100644
--- a/src/components/layout/issue/title-input.tsx
+++ b/src/components/layout/issue/title-input.tsx
@@ -18,8 +18,12 @@ export const TitleInput = ({
   const { store } = useStore()
 
   const handleTitleChange = (title: string) => {
-    if (issue) store.commit(events.updateIssueTitle({ id: issue.id, title, modified: new Date() }))
-    if (setTitle) setTitle(title)
+    if (issue) {
+      store.commit(events.updateIssueTitle({ id: issue.id, title, modified: new Date() }))
+    }
+    if (setTitle) {
+      setTitle(title)
+    }
   }
 
   return (
```

### Diff: src/components/layout/list/row.tsx

```diff
diff --git a/src/components/layout/list/row.tsx b/src/components/layout/list/row.tsx
index 9ad18a1..6391808 100644
--- a/src/components/layout/list/row.tsx
+++ b/src/components/layout/list/row.tsx
@@ -1,6 +1,6 @@
 import { useStore } from '@livestore/react'
 import type { CSSProperties } from 'react'
-import React, { memo } from 'react'
+import { memo } from 'react'
 import { useNavigate } from 'react-router-dom'
 import { Avatar } from '@/components/common/avatar'
 import { PriorityMenu } from '@/components/common/priority-menu'
```

### Diff: src/components/layout/list/virtual-row.tsx

```diff
diff --git a/src/components/layout/list/virtual-row.tsx b/src/components/layout/list/virtual-row.tsx
index 41614da..6dde2c1 100644
--- a/src/components/layout/list/virtual-row.tsx
+++ b/src/components/layout/list/virtual-row.tsx
@@ -1,6 +1,6 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
-import React, { type CSSProperties, memo } from 'react'
+import { type CSSProperties, memo } from 'react'
 import { Row } from '@/components/layout/list/row'
 import { tables } from '@/lib/livestore/schema'
 
@@ -9,13 +9,11 @@ export const VirtualRow = memo(
     const { store } = useStore()
     const issueId = data[index]
 
-    if (!issueId) {
-      return null
-    }
-
-    const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId }).first(), { deps: [issueId] }))
+    // Always call the hook with a stable query structure
+    const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId || 0 }).first(), { deps: [issueId] }))
 
-    if (!issue) {
+    // Early return if no issueId or no issue data
+    if (!(issueId && issue)) {
       return null
     }
```

### Diff: src/components/layout/search/search-bar.tsx

```diff
diff --git a/src/components/layout/search/search-bar.tsx b/src/components/layout/search/search-bar.tsx
index 8f22a01..6705de2 100644
--- a/src/components/layout/search/search-bar.tsx
+++ b/src/components/layout/search/search-bar.tsx
@@ -10,7 +10,9 @@ export const SearchBar = () => {
 
   const { keyboardProps } = useKeyboard({
     onKeyDown: (e) => {
-      if (e.key === 'Escape') (e.target as HTMLInputElement)?.blur()
+      if (e.key === 'Escape') {
+        ;(e.target as HTMLInputElement)?.blur()
+      }
     },
   })
```

### Diff: src/components/layout/sidebar/about-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/about-menu.tsx b/src/components/layout/sidebar/about-menu.tsx
index d74fcad..953c7fb 100644
--- a/src/components/layout/sidebar/about-menu.tsx
+++ b/src/components/layout/sidebar/about-menu.tsx
@@ -1,4 +1,5 @@
 import { ChevronDownIcon } from '@heroicons/react/16/solid'
+import React from 'react'
 import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
 import { Icon } from '@/components/icons'
 import { AboutModal } from '@/components/layout/sidebar/about-modal'
```

### Diff: src/components/layout/sidebar/index.tsx

```diff
diff --git a/src/components/layout/sidebar/index.tsx b/src/components/layout/sidebar/index.tsx
index 1a1e6d3..cb5badb 100644
--- a/src/components/layout/sidebar/index.tsx
+++ b/src/components/layout/sidebar/index.tsx
@@ -1,4 +1,5 @@
 import { Bars4Icon, ViewColumnsIcon } from '@heroicons/react/24/outline'
+import React from 'react'
 import { Link } from 'react-router-dom'
 import { MenuContext } from '@/app/contexts'
 import { AboutMenu } from '@/components/layout/sidebar/about-menu'
```

### Diff: src/components/layout/sidebar/mobile-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/mobile-menu.tsx b/src/components/layout/sidebar/mobile-menu.tsx
index 2337935..9dee79c 100644
--- a/src/components/layout/sidebar/mobile-menu.tsx
+++ b/src/components/layout/sidebar/mobile-menu.tsx
@@ -1,3 +1,4 @@
+import React from 'react'
 import { ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 import { MenuContext } from '@/app/contexts'
 import { Sidebar } from '@/components/layout/sidebar'
```

### Diff: src/components/layout/sidebar/new-issue-button.tsx

```diff
diff --git a/src/components/layout/sidebar/new-issue-button.tsx b/src/components/layout/sidebar/new-issue-button.tsx
index 01227ac..776a2dc 100644
--- a/src/components/layout/sidebar/new-issue-button.tsx
+++ b/src/components/layout/sidebar/new-issue-button.tsx
@@ -1,4 +1,5 @@
 import { PlusIcon } from '@heroicons/react/20/solid'
+import React from 'react'
 import { Button } from 'react-aria-components'
 import { MenuContext, NewIssueModalContext } from '@/app/contexts'
 import { Icon } from '@/components/icons'
```

### Diff: src/components/layout/sidebar/search-button.tsx

```diff
diff --git a/src/components/layout/sidebar/search-button.tsx b/src/components/layout/sidebar/search-button.tsx
index 891fd83..bd9a127 100644
--- a/src/components/layout/sidebar/search-button.tsx
+++ b/src/components/layout/sidebar/search-button.tsx
@@ -1,4 +1,5 @@
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
+import React from 'react'
 import { Link } from 'react-router-dom'
 import { MenuContext } from '@/app/contexts'
 import { useFilterState } from '@/lib/livestore/queries'
```

### Diff: src/components/layout/sidebar/theme-button.tsx

```diff
diff --git a/src/components/layout/sidebar/theme-button.tsx b/src/components/layout/sidebar/theme-button.tsx
index f5af1eb..2edaa65 100644
--- a/src/components/layout/sidebar/theme-button.tsx
+++ b/src/components/layout/sidebar/theme-button.tsx
@@ -1,5 +1,6 @@
 import { CheckIcon, MoonIcon, SunIcon } from '@heroicons/react/16/solid'
 import { ComputerDesktopIcon } from '@heroicons/react/20/solid'
+import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
 import { Shortcut } from '@/components/common/shortcut'
@@ -11,11 +12,14 @@ export const ThemeButton = () => {
   const [isOpen, setIsOpen] = React.useState(false)
   const [frontendState, setFrontendState] = useFrontendState()
 
-  const selectTheme = (theme: Theme) => {
-    setTheme(theme)
-    setFrontendState({ theme })
-    if (theme === 'system') localStorage.removeItem('theme')
-    else localStorage.theme = theme
+  const selectTheme = (selectedTheme: Theme) => {
+    setTheme(selectedTheme)
+    setFrontendState({ theme: selectedTheme })
+    if (selectedTheme === 'system') {
+      localStorage.removeItem('theme')
+    } else {
+      localStorage.theme = selectedTheme
+    }
     document.documentElement.classList.toggle(
       'dark',
       localStorage.theme === 'dark' ||
@@ -29,13 +33,13 @@ export const ThemeButton = () => {
         setIsOpen(false)
         return
       }
-      themeOptions.forEach(({ id, shortcut }) => {
+      for (const { id, shortcut } of themeOptions) {
         if (e.key === shortcut) {
           selectTheme(id)
           setIsOpen(false)
-          return
+          break
         }
-      })
+      }
     },
   })
```

### Diff: src/components/layout/toolbar/devtools-button.tsx

```diff
diff --git a/src/components/layout/toolbar/devtools-button.tsx b/src/components/layout/toolbar/devtools-button.tsx
index 88f53d6..a8a0f2a 100644
--- a/src/components/layout/toolbar/devtools-button.tsx
+++ b/src/components/layout/toolbar/devtools-button.tsx
@@ -1,5 +1,6 @@
 import { CodeBracketIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
+import React from 'react'
 
 export const DevtoolsButton = ({ className }: { className?: string }) => {
   const { store } = useStore()
```

### Diff: src/components/layout/toolbar/reset-button.tsx

```diff
diff --git a/src/components/layout/toolbar/reset-button.tsx b/src/components/layout/toolbar/reset-button.tsx
index b53b724..a46fc1c 100644
--- a/src/components/layout/toolbar/reset-button.tsx
+++ b/src/components/layout/toolbar/reset-button.tsx
@@ -1,4 +1,5 @@
 import { TrashIcon } from '@heroicons/react/16/solid'
+import React from 'react'
 import { Button } from 'react-aria-components'
 import { useNavigate } from 'react-router-dom'
```

### Diff: src/components/layout/toolbar/seed-input.tsx

```diff
diff --git a/src/components/layout/toolbar/seed-input.tsx b/src/components/layout/toolbar/seed-input.tsx
index 373291c..9fdfeba 100644
--- a/src/components/layout/toolbar/seed-input.tsx
+++ b/src/components/layout/toolbar/seed-input.tsx
@@ -1,5 +1,6 @@
 import { PlusIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
+import React from 'react'
 import { Button, Input } from 'react-aria-components'
 import { seed } from '@/lib/livestore/seed'
 
@@ -8,7 +9,9 @@ export const SeedInput = ({ className }: { className?: string }) => {
   const { store } = useStore()
 
   const onClick = () => {
-    if (count === 0) return
+    if (count === 0) {
+      return
+    }
     seed(store, count)
   }
```

### Diff: src/components/layout/toolbar/share-button.tsx

```diff
diff --git a/src/components/layout/toolbar/share-button.tsx b/src/components/layout/toolbar/share-button.tsx
index 9d9e732..ed83037 100644
--- a/src/components/layout/toolbar/share-button.tsx
+++ b/src/components/layout/toolbar/share-button.tsx
@@ -1,4 +1,5 @@
 import { CheckIcon, LinkIcon, QrCodeIcon } from '@heroicons/react/16/solid'
+import React from 'react'
 import { Button, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 
 // This uses a public QR code API: https://goqr.me/api/doc/create-qr-code/
```

### Diff: src/components/layout/toolbar/sync-toggle.tsx

```diff
diff --git a/src/components/layout/toolbar/sync-toggle.tsx b/src/components/layout/toolbar/sync-toggle.tsx
index 826d454..e5f3720 100644
--- a/src/components/layout/toolbar/sync-toggle.tsx
+++ b/src/components/layout/toolbar/sync-toggle.tsx
@@ -1,3 +1,4 @@
+import React from 'react'
 import { Switch } from 'react-aria-components'
 
 export const SyncToggle = ({ className }: { className?: string }) => {
```

### Diff: src/lib/livestore/queries.ts

```diff
diff --git a/src/lib/livestore/queries.ts b/src/lib/livestore/queries.ts
index e6838eb..2510edd 100644
--- a/src/lib/livestore/queries.ts
+++ b/src/lib/livestore/queries.ts
@@ -1,3 +1,4 @@
+import React from 'react'
 import { queryDb } from '@livestore/livestore'
 import { useClientDocument } from '@livestore/react'
 import { tables } from '@/lib/livestore/schema'
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
