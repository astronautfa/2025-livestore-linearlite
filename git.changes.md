# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- .claude/CLAUDE.md
- .cursor/rules/ultracite.mdc
- .github/copilot-instructions.md
- .husky/pre-commit
- GEMINI.md
- biome.json
- git.changes.md
- scripts/generate-diff-docs.js
- .prettierignore
- .prettierrc.json
- package.json
- src/app/contexts.ts
- src/app/provider.tsx
- src/app/style.css
- src/components/common/avatar.tsx
- src/components/common/editor.tsx
- src/components/common/menu-button.tsx
- src/components/common/priority-menu.tsx
- src/components/common/status-menu.tsx
- src/components/icons/index.tsx
- src/components/layout/board/card.tsx
- src/components/layout/board/column.tsx
- src/components/layout/board/draggable.tsx
- src/components/layout/board/index.tsx
- src/components/layout/filters/filter-menu.tsx
- src/components/layout/filters/header.tsx
- src/components/layout/filters/index.tsx
- src/components/layout/filters/priority-filter.tsx
- src/components/layout/filters/sort-menu.tsx
- src/components/layout/filters/status-filter.tsx
- src/components/layout/index.tsx
- src/components/layout/issue/comment-input.tsx
- src/components/layout/issue/comments.tsx
- src/components/layout/issue/delete-button.tsx
- src/components/layout/issue/description-input.tsx
- src/components/layout/issue/index.tsx
- src/components/layout/issue/new-issue-modal.tsx
- src/components/layout/issue/title-input.tsx
- src/components/layout/list/filtered-list.tsx
- src/components/layout/list/index.tsx
- src/components/layout/list/row.tsx
- src/components/layout/list/virtual-row.tsx
- src/components/layout/search/index.tsx
- src/components/layout/search/search-bar.tsx
- src/components/layout/sidebar/about-menu.tsx
- src/components/layout/sidebar/about-modal.tsx
- src/components/layout/sidebar/index.tsx
- src/components/layout/sidebar/mobile-menu.tsx
- src/components/layout/sidebar/new-issue-button.tsx
- src/components/layout/sidebar/search-button.tsx
- src/components/layout/sidebar/theme-button.tsx
- src/components/layout/toolbar/index.tsx
- src/components/layout/toolbar/mobile-menu.tsx
- src/components/layout/toolbar/seed-input.tsx
- src/components/layout/toolbar/toolbar-button.tsx
- src/components/layout/toolbar/user-input.tsx
- src/data/priority-options.ts
- src/data/status-options.ts
- src/hooks/useClickOutside.ts
- src/lib/livestore/events.ts
- src/lib/livestore/queries.ts
- src/lib/livestore/schema/comment.ts
- src/lib/livestore/schema/description.ts
- src/lib/livestore/schema/filter-state.ts
- src/lib/livestore/schema/frontend-state.ts
- src/lib/livestore/schema/index.ts
- src/lib/livestore/schema/issue.ts
- src/lib/livestore/schema/scroll-state.ts
- src/lib/livestore/seed.ts
- src/lib/livestore/utils.tsx
- src/lib/livestore/worker.ts
- src/types/issue.ts
- tsconfig.json
- vite.config.ts

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: .prettierignore

```diff
diff --git a/.prettierignore b/.prettierignore
deleted file mode 100644
index 9d05392..0000000
--- a/.prettierignore
+++ /dev/null
@@ -1,12 +0,0 @@
-*.log
-.DS_Store
-dist/
-node_modules/
-test.db
-.tmp/
-build/
-.tool-versions
-.github/
-src/generated/
-db/data/
-wa-sqlite-async.mjs
```

### Diff: .prettierrc.json

```diff
diff --git a/.prettierrc.json b/.prettierrc.json
deleted file mode 100644
index 15bd3ed..0000000
--- a/.prettierrc.json
+++ /dev/null
@@ -1,6 +0,0 @@
-{
-  "printWidth": 120,
-  "semi": false,
-  "trailingComma": "all",
-  "singleQuote": true
-}
```

### Diff: package.json

```diff
diff --git a/package.json b/package.json
index 1b0c789..4a1c5b4 100644
--- a/package.json
+++ b/package.json
@@ -38,6 +38,7 @@
     "tiptap-markdown": "0.8.10"
   },
   "devDependencies": {
+    "@biomejs/biome": "2.2.2",
     "@svgr/plugin-jsx": "^8.1.0",
     "@svgr/plugin-svgo": "^8.1.0",
     "@tailwindcss/typography": "^0.5.16",
@@ -48,24 +49,24 @@
     "@types/react-dom": "^19.0.4",
     "@types/react-router-dom": "^5.3.3",
     "@types/react-window": "^1.8.8",
-    "@typescript-eslint/eslint-plugin": "^8.26.0",
-    "@typescript-eslint/parser": "^8.26.0",
     "@vitejs/plugin-react": "^4.3.4",
-    "eslint": "^8.57.1",
-    "eslint-plugin-react-hooks": "^5.2.0",
-    "eslint-plugin-react-refresh": "^0.4.19",
+    "husky": "^9.1.7",
     "prompt": "^1.3.0",
     "tailwindcss": "^4.0.12",
     "typescript": "^5.8.3",
+    "ultracite": "^5.3.1",
     "vite": "^6.2.1",
     "vite-plugin-svgr": "^4.3.0"
   },
   "scripts": {
     "build": "vite build",
     "dev": "vite --force",
-    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
+    "lint": "biome check .",
+    "lint:fix": "biome check --write .",
+    "format": "biome format --write .",
     "preview": "vite preview",
-    "vite": "vite"
+    "vite": "vite",
+    "generate-diff-docs": "node scripts/generate-diff-docs.js"
   },
-  "packageManager": "pnpm@10.4.0+sha512.6b849d0787d97f8f4e1f03a9b8ff8f038e79e153d6f11ae539ae7c435ff9e796df6a862c991502695c7f9e8fac8aeafc1ac5a8dab47e36148d183832d886dd52"
+  "packageManager": "pnpm@10.15.1+sha512.34e538c329b5553014ca8e8f4535997f96180a1d0f614339357449935350d924e22f8614682191264ec33d1462ac21561aff97f6bb18065351c162c7e8f6de67"
 }
```

### Diff: src/app/contexts.ts

```diff
diff --git a/src/app/contexts.ts b/src/app/contexts.ts
index d9f7f76..a14da6a 100644
--- a/src/app/contexts.ts
+++ b/src/app/contexts.ts
@@ -1,5 +1,5 @@
-import { Status } from '@/types/status'
 import React from 'react'
+import type { Status } from '@/types/status'
 
 interface MenuContextInterface {
   showMenu: boolean
```

### Diff: src/app/provider.tsx

```diff
diff --git a/src/app/provider.tsx b/src/app/provider.tsx
index b456264..40a5751 100644
--- a/src/app/provider.tsx
+++ b/src/app/provider.tsx
@@ -1,14 +1,14 @@
-import { MenuContext, NewIssueModalContext } from '@/app/contexts'
-import { schema } from '@/lib/livestore/schema'
-import { renderBootStatus } from '@/lib/livestore/utils'
-import LiveStoreWorker from '@/lib/livestore/worker?worker'
-import { Status } from '@/types/status'
-import { LiveStoreProvider } from '@livestore/react'
 import { makePersistedAdapter } from '@livestore/adapter-web'
 import LiveStoreSharedWorker from '@livestore/adapter-web/shared-worker?sharedworker'
+import { LiveStoreProvider } from '@livestore/react'
 import React from 'react'
 import { unstable_batchedUpdates as batchUpdates } from 'react-dom'
 import { useNavigate } from 'react-router-dom'
+import { MenuContext, NewIssueModalContext } from '@/app/contexts'
+import { schema } from '@/lib/livestore/schema'
+import { renderBootStatus } from '@/lib/livestore/utils'
+import LiveStoreWorker from '@/lib/livestore/worker?worker'
+import type { Status } from '@/types/status'
 
 const resetPersistence = import.meta.env.DEV && new URLSearchParams(window.location.search).get('reset') !== null
```

### Diff: src/app/style.css

```diff
diff --git a/src/app/style.css b/src/app/style.css
index 15d4c3f..1336182 100644
--- a/src/app/style.css
+++ b/src/app/style.css
@@ -7,43 +7,43 @@ body {
 }
 
 @font-face {
-  font-family: 'Inter UI';
+  font-family: "Inter UI";
   font-style: normal;
   font-weight: 400;
   font-display: swap;
   src:
-    url('assets/fonts/inter-regular.woff2') format('woff2'),
-    url('assets/fonts/inter-regular.woff') format('woff');
+    url("assets/fonts/inter-regular.woff2") format("woff2"),
+    url("assets/fonts/inter-regular.woff") format("woff");
 }
 
 @font-face {
-  font-family: 'Inter UI';
+  font-family: "Inter UI";
   font-style: normal;
   font-weight: 500;
   font-display: swap;
   src:
-    url('assets/fonts/inter-medium.woff2') format('woff2'),
-    url('assets/fonts/inter-medium.woff') format('woff');
+    url("assets/fonts/inter-medium.woff2") format("woff2"),
+    url("assets/fonts/inter-medium.woff") format("woff");
 }
 
 @font-face {
-  font-family: 'Inter UI';
+  font-family: "Inter UI";
   font-style: normal;
   font-weight: 600;
   font-display: swap;
   src:
-    url('assets/fonts/inter-semibold.woff2') format('woff2'),
-    url('assets/fonts/inter-semibold.woff') format('woff');
+    url("assets/fonts/inter-semibold.woff2") format("woff2"),
+    url("assets/fonts/inter-semibold.woff") format("woff");
 }
 
 @font-face {
-  font-family: 'Inter UI';
+  font-family: "Inter UI";
   font-style: normal;
   font-weight: 800;
   font-display: swap;
   src:
-    url('assets/fonts/inter-extrabold.woff2') format('woff2'),
-    url('assets/fonts/inter-extrabold.woff') format('woff');
+    url("assets/fonts/inter-extrabold.woff2") format("woff2"),
+    url("assets/fonts/inter-extrabold.woff") format("woff");
 }
 
 .modal {
@@ -72,6 +72,6 @@ input::-webkit-inner-spin-button {
 }
 
 /* Firefox */
-input[type='number'] {
+input[type="number"] {
   -moz-appearance: textfield;
 }
```

### Diff: src/components/common/avatar.tsx

```diff
diff --git a/src/components/common/avatar.tsx b/src/components/common/avatar.tsx
index 5addb9a..81dcadd 100644
--- a/src/components/common/avatar.tsx
+++ b/src/components/common/avatar.tsx
@@ -1,5 +1,5 @@
-import { getAcronym } from '@/utils/get-acronym'
 import React from 'react'
+import { getAcronym } from '@/utils/get-acronym'
 
 export const Avatar = ({ name }: { name?: string }) => {
   if (!name) name = 'Me'
```

### Diff: src/components/common/editor.tsx

```diff
diff --git a/src/components/common/editor.tsx b/src/components/common/editor.tsx
index 3cfaffb..8aa31f5 100644
--- a/src/components/common/editor.tsx
+++ b/src/components/common/editor.tsx
@@ -1,13 +1,13 @@
-import EditorMenu from '@/components/common/editor-menu'
 import Placeholder from '@tiptap/extension-placeholder'
 import Table from '@tiptap/extension-table'
 import TableCell from '@tiptap/extension-table-cell'
 import TableHeader from '@tiptap/extension-table-header'
 import TableRow from '@tiptap/extension-table-row'
-import { BubbleMenu, EditorContent, useEditor, type Extensions } from '@tiptap/react'
+import { BubbleMenu, EditorContent, type Extensions, useEditor } from '@tiptap/react'
 import StarterKit from '@tiptap/starter-kit'
 import React, { useEffect, useRef } from 'react'
 import { Markdown } from 'tiptap-markdown'
+import EditorMenu from '@/components/common/editor-menu'
 
 const Editor = ({
   value,
```

### Diff: src/components/common/menu-button.tsx

```diff
diff --git a/src/components/common/menu-button.tsx b/src/components/common/menu-button.tsx
index 8e2bb2c..d6d1dfb 100644
--- a/src/components/common/menu-button.tsx
+++ b/src/components/common/menu-button.tsx
@@ -1,7 +1,7 @@
-import { MenuContext } from '@/app/contexts'
-import { Icon } from '@/components/icons'
 import React, { useContext } from 'react'
 import { Button } from 'react-aria-components'
+import { MenuContext } from '@/app/contexts'
+import { Icon } from '@/components/icons'
 
 export const MenuButton = ({ className }: { className?: string }) => {
   const { setShowMenu } = useContext(MenuContext)!
```

### Diff: src/components/common/priority-menu.tsx

```diff
diff --git a/src/components/common/priority-menu.tsx b/src/components/common/priority-menu.tsx
index 08d6f7c..09c5181 100644
--- a/src/components/common/priority-menu.tsx
+++ b/src/components/common/priority-menu.tsx
@@ -1,11 +1,11 @@
-import { Shortcut } from '@/components/common/shortcut'
-import { Icon, IconName } from '@/components/icons'
-import { priorityOptions } from '@/data/priority-options'
-import { Priority } from '@/types/priority'
 import { CheckIcon } from '@heroicons/react/16/solid'
 import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
+import { Shortcut } from '@/components/common/shortcut'
+import { Icon, type IconName } from '@/components/icons'
+import { priorityOptions } from '@/data/priority-options'
+import type { Priority } from '@/types/priority'
 
 export const PriorityMenu = ({
   priority,
```

### Diff: src/components/common/status-menu.tsx

```diff
diff --git a/src/components/common/status-menu.tsx b/src/components/common/status-menu.tsx
index 30791d1..ea6a10e 100644
--- a/src/components/common/status-menu.tsx
+++ b/src/components/common/status-menu.tsx
@@ -1,11 +1,11 @@
-import { Shortcut } from '@/components/common/shortcut'
-import { Icon, IconName } from '@/components/icons'
-import { statusOptions } from '@/data/status-options'
-import { Status } from '@/types/status'
 import { CheckIcon } from '@heroicons/react/16/solid'
 import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
+import { Shortcut } from '@/components/common/shortcut'
+import { Icon, type IconName } from '@/components/icons'
+import { statusOptions } from '@/data/status-options'
+import type { Status } from '@/types/status'
 
 export const StatusMenu = ({
   status,
```

### Diff: src/components/icons/index.tsx

```diff
diff --git a/src/components/icons/index.tsx b/src/components/icons/index.tsx
index 55b2a0e..9d12d51 100644
--- a/src/components/icons/index.tsx
+++ b/src/components/icons/index.tsx
@@ -1,3 +1,4 @@
+import React from 'react'
 import { BacklogIcon } from '@/components/icons/backlog'
 import { CanceledIcon } from '@/components/icons/canceled'
 import { DoneIcon } from '@/components/icons/done'
@@ -13,7 +14,6 @@ import { PriorityNoneIcon } from '@/components/icons/priority-none'
 import { PriorityUrgentIcon } from '@/components/icons/priority-urgent'
 import { SidebarIcon } from '@/components/icons/sidebar'
 import { TodoIcon } from '@/components/icons/todo'
-import React from 'react'
 
 const icons = {
   backlog: BacklogIcon,
```

### Diff: src/components/layout/board/card.tsx

```diff
diff --git a/src/components/layout/board/card.tsx b/src/components/layout/board/card.tsx
index 0c070b6..7b6d13b 100644
--- a/src/components/layout/board/card.tsx
+++ b/src/components/layout/board/card.tsx
@@ -1,14 +1,14 @@
-import { Avatar } from '@/components/common/avatar'
-import { PriorityMenu } from '@/components/common/priority-menu'
-import { StatusMenu } from '@/components/common/status-menu'
-import { Issue, events } from '@/lib/livestore/schema'
-import { Priority } from '@/types/priority'
-import { Status } from '@/types/status'
-import { getIssueTag } from '@/utils/get-issue-tag'
 import { useStore } from '@livestore/react'
 import React from 'react'
 import { Button } from 'react-aria-components'
 import { useNavigate } from 'react-router-dom'
+import { Avatar } from '@/components/common/avatar'
+import { PriorityMenu } from '@/components/common/priority-menu'
+import { StatusMenu } from '@/components/common/status-menu'
+import { events, type Issue } from '@/lib/livestore/schema'
+import type { Priority } from '@/types/priority'
+import type { Status } from '@/types/status'
+import { getIssueTag } from '@/utils/get-issue-tag'
 
 export const Card = ({ issue, className }: { issue: Issue; className?: string }) => {
   const navigate = useNavigate()
```

### Diff: src/components/layout/board/column.tsx

```diff
diff --git a/src/components/layout/board/column.tsx b/src/components/layout/board/column.tsx
index 0f00913..cf0a01f 100644
--- a/src/components/layout/board/column.tsx
+++ b/src/components/layout/board/column.tsx
@@ -1,26 +1,26 @@
-import { Icon } from '@/components/icons'
-import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
-import { StatusDetails } from '@/data/status-options'
-import { filterState$, useFilterState, useDebouncedScrollState } from '@/lib/livestore/queries'
-import { events, tables } from '@/lib/livestore/schema'
-import { filterStateToWhere } from '@/lib/livestore/utils'
-import { Status } from '@/types/status'
 import { queryDb } from '@livestore/livestore'
 import * as LiveStoreReact from '@livestore/react'
 import { generateKeyBetween } from 'fractional-indexing'
 import React from 'react'
 import {
   DropIndicator,
-  DropPosition,
-  DroppableCollectionReorderEvent,
+  type DropPosition,
+  type DroppableCollectionReorderEvent,
   GridList,
   GridListItem,
-  ListLayout,
-  Virtualizer,
   isTextDropItem,
+  ListLayout,
   useDragAndDrop,
+  Virtualizer,
 } from 'react-aria-components'
 import AutoSizer from 'react-virtualized-auto-sizer'
+import { Icon } from '@/components/icons'
+import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
+import type { StatusDetails } from '@/data/status-options'
+import { filterState$, useDebouncedScrollState, useFilterState } from '@/lib/livestore/queries'
+import { events, tables } from '@/lib/livestore/schema'
+import { filterStateToWhere } from '@/lib/livestore/utils'
+import type { Status } from '@/types/status'
 import { Card } from './card'
 
 export const Column = ({ status, statusDetails }: { status: Status; statusDetails: StatusDetails }) => {
```

### Diff: src/components/layout/board/draggable.tsx

```diff
diff --git a/src/components/layout/board/draggable.tsx b/src/components/layout/board/draggable.tsx
index 0e96447..334874a 100644
--- a/src/components/layout/board/draggable.tsx
+++ b/src/components/layout/board/draggable.tsx
@@ -1,7 +1,7 @@
-import { Issue } from '@/lib/livestore/schema'
 import type { CSSProperties } from 'react'
 import React, { memo } from 'react'
 import { DragPreview, useDrag } from 'react-aria'
+import type { Issue } from '@/lib/livestore/schema'
 import { Card } from './card'
 
 export const Draggable = memo(({ issue, style }: { issue: Issue; style: CSSProperties }) => {
```

### Diff: src/components/layout/board/index.tsx

```diff
diff --git a/src/components/layout/board/index.tsx b/src/components/layout/board/index.tsx
index 9461afe..d717e82 100644
--- a/src/components/layout/board/index.tsx
+++ b/src/components/layout/board/index.tsx
@@ -1,13 +1,13 @@
+import { queryDb } from '@livestore/livestore'
+import { useStore } from '@livestore/react'
+import React from 'react'
 import { Column } from '@/components/layout/board/column'
 import { Filters } from '@/components/layout/filters'
 import { statusOptions } from '@/data/status-options'
 import { filterState$ } from '@/lib/livestore/queries'
 import { tables } from '@/lib/livestore/schema'
 import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
-import { Status } from '@/types/status'
-import { queryDb } from '@livestore/livestore'
-import { useStore } from '@livestore/react'
-import React from 'react'
+import type { Status } from '@/types/status'
 
 const filteredIssueIds$ = queryDb(
   (get) =>
```

### Diff: src/components/layout/filters/filter-menu.tsx

```diff
diff --git a/src/components/layout/filters/filter-menu.tsx b/src/components/layout/filters/filter-menu.tsx
index b262ad2..cdf027a 100644
--- a/src/components/layout/filters/filter-menu.tsx
+++ b/src/components/layout/filters/filter-menu.tsx
@@ -1,12 +1,12 @@
-import { Icon, IconName } from '@/components/icons'
+import { CheckIcon } from '@heroicons/react/16/solid'
+import type React from 'react'
+import { Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
+import { Icon, type IconName } from '@/components/icons'
 import { priorityOptions } from '@/data/priority-options'
 import { statusOptions } from '@/data/status-options'
 import { useFilterState } from '@/lib/livestore/queries'
-import { Priority } from '@/types/priority'
-import { Status } from '@/types/status'
-import { CheckIcon } from '@heroicons/react/16/solid'
-import React from 'react'
-import { Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
+import type { Priority } from '@/types/priority'
+import type { Status } from '@/types/status'
 
 export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; children?: React.ReactNode }) => {
   const [filterState, setFilterState] = useFilterState()
```

### Diff: src/components/layout/filters/header.tsx

```diff
diff --git a/src/components/layout/filters/header.tsx b/src/components/layout/filters/header.tsx
index 37ace44..fb2f66f 100644
--- a/src/components/layout/filters/header.tsx
+++ b/src/components/layout/filters/header.tsx
@@ -1,5 +1,5 @@
-import { MenuButton } from '@/components/common/menu-button'
 import React from 'react'
+import { MenuButton } from '@/components/common/menu-button'
 
 export const Header = ({
   totalCount,
```

### Diff: src/components/layout/filters/index.tsx

```diff
diff --git a/src/components/layout/filters/index.tsx b/src/components/layout/filters/index.tsx
index 92f3889..9447d69 100644
--- a/src/components/layout/filters/index.tsx
+++ b/src/components/layout/filters/index.tsx
@@ -1,3 +1,6 @@
+import { useStore } from '@livestore/react'
+import React from 'react'
+import { Button } from 'react-aria-components'
 import { Icon } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
 import { Header } from '@/components/layout/filters/header'
@@ -7,10 +10,7 @@ import { StatusFilter } from '@/components/layout/filters/status-filter'
 import { SearchBar } from '@/components/layout/search/search-bar'
 import { statusOptions } from '@/data/status-options'
 import { issueCount$, useFilterState } from '@/lib/livestore/queries'
-import { Status } from '@/types/status'
-import { useStore } from '@livestore/react'
-import React from 'react'
-import { Button } from 'react-aria-components'
+import type { Status } from '@/types/status'
 
 export const Filters = ({
   filteredCount,
```

### Diff: src/components/layout/filters/priority-filter.tsx

```diff
diff --git a/src/components/layout/filters/priority-filter.tsx b/src/components/layout/filters/priority-filter.tsx
index fd491fd..e2aa8d2 100644
--- a/src/components/layout/filters/priority-filter.tsx
+++ b/src/components/layout/filters/priority-filter.tsx
@@ -1,13 +1,11 @@
-import { IconName } from '@/components/icons'
-
-import { Icon } from '@/components/icons'
-import { FilterMenu } from '@/components/layout/filters/filter-menu'
-import { priorityOptions } from '@/data/priority-options'
-import { useFilterState } from '@/lib/livestore/queries'
-import { Priority } from '@/types/priority'
 import { XMarkIcon } from '@heroicons/react/16/solid'
 import React from 'react'
 import { Button } from 'react-aria-components'
+import { Icon, type IconName } from '@/components/icons'
+import { FilterMenu } from '@/components/layout/filters/filter-menu'
+import { priorityOptions } from '@/data/priority-options'
+import { useFilterState } from '@/lib/livestore/queries'
+import type { Priority } from '@/types/priority'
 
 export const PriorityFilter = () => {
   const [filterState, setFilterState] = useFilterState()
```

### Diff: src/components/layout/filters/sort-menu.tsx

```diff
diff --git a/src/components/layout/filters/sort-menu.tsx b/src/components/layout/filters/sort-menu.tsx
index ea59270..e96ec21 100644
--- a/src/components/layout/filters/sort-menu.tsx
+++ b/src/components/layout/filters/sort-menu.tsx
@@ -1,10 +1,10 @@
-import { Shortcut } from '@/components/common/shortcut'
-import { SortingDirection, SortingOption, sortingOptions } from '@/data/sorting-options'
-import { useFilterState } from '@/lib/livestore/queries'
 import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'
 import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover } from 'react-aria-components'
+import { Shortcut } from '@/components/common/shortcut'
+import { type SortingDirection, type SortingOption, sortingOptions } from '@/data/sorting-options'
+import { useFilterState } from '@/lib/livestore/queries'
 
 export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
   const [filterState, setFilterState] = useFilterState()
```

### Diff: src/components/layout/filters/status-filter.tsx

```diff
diff --git a/src/components/layout/filters/status-filter.tsx b/src/components/layout/filters/status-filter.tsx
index db4e825..d205a8d 100644
--- a/src/components/layout/filters/status-filter.tsx
+++ b/src/components/layout/filters/status-filter.tsx
@@ -1,11 +1,11 @@
-import { Icon, IconName } from '@/components/icons'
-import { FilterMenu } from '@/components/layout/filters/filter-menu'
-import { statusOptions } from '@/data/status-options'
-import { useFilterState } from '@/lib/livestore/queries'
-import { Status } from '@/types/status'
 import { XMarkIcon } from '@heroicons/react/16/solid'
 import React from 'react'
 import { Button } from 'react-aria-components'
+import { Icon, type IconName } from '@/components/icons'
+import { FilterMenu } from '@/components/layout/filters/filter-menu'
+import { statusOptions } from '@/data/status-options'
+import { useFilterState } from '@/lib/livestore/queries'
+import type { Status } from '@/types/status'
 
 export const StatusFilter = () => {
   const [filterState, setFilterState] = useFilterState()
```

### Diff: src/components/layout/index.tsx

```diff
diff --git a/src/components/layout/index.tsx b/src/components/layout/index.tsx
index 2b80d48..97bd287 100644
--- a/src/components/layout/index.tsx
+++ b/src/components/layout/index.tsx
@@ -1,7 +1,7 @@
+import type React from 'react'
 import { MobileMenu } from '@/components/layout/sidebar/mobile-menu'
 import { Toolbar } from '@/components/layout/toolbar'
 import { useFrontendState } from '@/lib/livestore/queries'
-import React from 'react'
 
 export const Layout = ({ children }: { children: React.ReactNode }) => {
   const [frontendState] = useFrontendState()
```

### Diff: src/components/layout/issue/comment-input.tsx

```diff
diff --git a/src/components/layout/issue/comment-input.tsx b/src/components/layout/issue/comment-input.tsx
index 4f85dc0..f6c9841 100644
--- a/src/components/layout/issue/comment-input.tsx
+++ b/src/components/layout/issue/comment-input.tsx
@@ -1,11 +1,11 @@
-import Editor from '@/components/common/editor'
-import { useFrontendState } from '@/lib/livestore/queries'
-import { events } from '@/lib/livestore/schema'
 import { ArrowUpIcon } from '@heroicons/react/20/solid'
 import { useStore } from '@livestore/react'
 import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button } from 'react-aria-components'
+import Editor from '@/components/common/editor'
+import { useFrontendState } from '@/lib/livestore/queries'
+import { events } from '@/lib/livestore/schema'
 
 export const CommentInput = ({ issueId, className }: { issueId: number; className?: string }) => {
   // TODO move this into LiveStore
```

### Diff: src/components/layout/issue/comments.tsx

```diff
diff --git a/src/components/layout/issue/comments.tsx b/src/components/layout/issue/comments.tsx
index f0d4e03..b14fe1b 100644
--- a/src/components/layout/issue/comments.tsx
+++ b/src/components/layout/issue/comments.tsx
@@ -1,10 +1,10 @@
-import { Avatar } from '@/components/common/avatar'
-import { tables } from '@/lib/livestore/schema'
-import { formatDate } from '@/utils/format-date'
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
 import React from 'react'
 import ReactMarkdown from 'react-markdown'
+import { Avatar } from '@/components/common/avatar'
+import { tables } from '@/lib/livestore/schema'
+import { formatDate } from '@/utils/format-date'
 
 export const Comments = ({ issueId }: { issueId: number }) => {
   const { store } = useStore()
```

### Diff: src/components/layout/issue/delete-button.tsx

```diff
diff --git a/src/components/layout/issue/delete-button.tsx b/src/components/layout/issue/delete-button.tsx
index 7468c2b..d8e129c 100644
--- a/src/components/layout/issue/delete-button.tsx
+++ b/src/components/layout/issue/delete-button.tsx
@@ -1,8 +1,8 @@
-import { events } from '@/lib/livestore/schema'
 import { TrashIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
 import React from 'react'
 import { Button } from 'react-aria-components'
+import { events } from '@/lib/livestore/schema'
 
 export const DeleteButton = ({
   issueId,
```

### Diff: src/components/layout/issue/description-input.tsx

```diff
diff --git a/src/components/layout/issue/description-input.tsx b/src/components/layout/issue/description-input.tsx
index b7a30a3..4cefad7 100644
--- a/src/components/layout/issue/description-input.tsx
+++ b/src/components/layout/issue/description-input.tsx
@@ -1,5 +1,5 @@
-import Editor from '@/components/common/editor'
 import React from 'react'
+import Editor from '@/components/common/editor'
 
 export const DescriptionInput = ({
   description,
```

### Diff: src/components/layout/issue/index.tsx

```diff
diff --git a/src/components/layout/issue/index.tsx b/src/components/layout/issue/index.tsx
index f2875e2..e4ce2cf 100644
--- a/src/components/layout/issue/index.tsx
+++ b/src/components/layout/issue/index.tsx
@@ -1,3 +1,9 @@
+import { ChevronRightIcon } from '@heroicons/react/16/solid'
+import { queryDb } from '@livestore/livestore'
+import { useStore } from '@livestore/react'
+import React from 'react'
+import { Button } from 'react-aria-components'
+import { useNavigate, useParams } from 'react-router-dom'
 import { Avatar } from '@/components/common/avatar'
 import { MenuButton } from '@/components/common/menu-button'
 import { PriorityMenu } from '@/components/common/priority-menu'
@@ -9,16 +15,10 @@ import { DeleteButton } from '@/components/layout/issue/delete-button'
 import { DescriptionInput } from '@/components/layout/issue/description-input'
 import { TitleInput } from '@/components/layout/issue/title-input'
 import { events, tables } from '@/lib/livestore/schema'
-import { Priority } from '@/types/priority'
-import { Status } from '@/types/status'
+import type { Priority } from '@/types/priority'
+import type { Status } from '@/types/status'
 import { formatDate } from '@/utils/format-date'
 import { getIssueTag } from '@/utils/get-issue-tag'
-import { ChevronRightIcon } from '@heroicons/react/16/solid'
-import { useStore } from '@livestore/react'
-import { queryDb } from '@livestore/livestore'
-import React from 'react'
-import { Button } from 'react-aria-components'
-import { useNavigate, useParams } from 'react-router-dom'
 
 export const Issue = () => {
   const id = Number(useParams().id ?? 0)
```

### Diff: src/components/layout/issue/new-issue-modal.tsx

```diff
diff --git a/src/components/layout/issue/new-issue-modal.tsx b/src/components/layout/issue/new-issue-modal.tsx
index 2449977..72c44cf 100644
--- a/src/components/layout/issue/new-issue-modal.tsx
+++ b/src/components/layout/issue/new-issue-modal.tsx
@@ -1,3 +1,7 @@
+import { useStore } from '@livestore/react'
+import { generateKeyBetween } from 'fractional-indexing'
+import React from 'react'
+import { Button } from 'react-aria-components'
 import { NewIssueModalContext } from '@/app/contexts'
 import { Modal } from '@/components/common/modal'
 import { PriorityMenu } from '@/components/common/priority-menu'
@@ -6,12 +10,8 @@ import { DescriptionInput } from '@/components/layout/issue/description-input'
 import { TitleInput } from '@/components/layout/issue/title-input'
 import { highestIssueId$, useFrontendState } from '@/lib/livestore/queries'
 import { events, tables } from '@/lib/livestore/schema'
-import { Priority } from '@/types/priority'
-import { Status } from '@/types/status'
-import { useStore } from '@livestore/react'
-import { generateKeyBetween } from 'fractional-indexing'
-import React from 'react'
-import { Button } from 'react-aria-components'
+import type { Priority } from '@/types/priority'
+import type { Status } from '@/types/status'
 
 export const NewIssueModal = () => {
   const [frontendState] = useFrontendState()
```

### Diff: src/components/layout/issue/title-input.tsx

```diff
diff --git a/src/components/layout/issue/title-input.tsx b/src/components/layout/issue/title-input.tsx
index eb66a4e..e8bfb3d 100644
--- a/src/components/layout/issue/title-input.tsx
+++ b/src/components/layout/issue/title-input.tsx
@@ -1,7 +1,7 @@
-import { events } from '@/lib/livestore/schema'
-import { Issue } from '@/types/issue'
 import { useStore } from '@livestore/react'
 import React from 'react'
+import { events } from '@/lib/livestore/schema'
+import type { Issue } from '@/types/issue'
 
 export const TitleInput = ({
   issue,
```

### Diff: src/components/layout/list/filtered-list.tsx

```diff
diff --git a/src/components/layout/list/filtered-list.tsx b/src/components/layout/list/filtered-list.tsx
index 6c078c8..fb18259 100644
--- a/src/components/layout/list/filtered-list.tsx
+++ b/src/components/layout/list/filtered-list.tsx
@@ -1,8 +1,8 @@
-import { VirtualRow } from '@/components/layout/list/virtual-row'
-import { useDebouncedScrollState } from '@/lib/livestore/queries'
 import React from 'react'
 import AutoSizer from 'react-virtualized-auto-sizer'
 import { FixedSizeList } from 'react-window'
+import { VirtualRow } from '@/components/layout/list/virtual-row'
+import { useDebouncedScrollState } from '@/lib/livestore/queries'
 
 export const FilteredList = ({ filteredIssueIds }: { filteredIssueIds: readonly number[] }) => {
   const [scrollState, setScrollState] = useDebouncedScrollState('filtered-list')
```

### Diff: src/components/layout/list/index.tsx

```diff
diff --git a/src/components/layout/list/index.tsx b/src/components/layout/list/index.tsx
index 157dbed..ce93d03 100644
--- a/src/components/layout/list/index.tsx
+++ b/src/components/layout/list/index.tsx
@@ -1,11 +1,11 @@
+import { queryDb } from '@livestore/livestore'
+import { useStore } from '@livestore/react'
+import React from 'react'
 import { Filters } from '@/components/layout/filters'
 import { FilteredList } from '@/components/layout/list/filtered-list'
 import { filterState$ } from '@/lib/livestore/queries'
 import { tables } from '@/lib/livestore/schema'
 import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
-import { queryDb } from '@livestore/livestore'
-import { useStore } from '@livestore/react'
-import React from 'react'
 
 const filteredIssueIds$ = queryDb(
   (get) =>
```

### Diff: src/components/layout/list/row.tsx

```diff
diff --git a/src/components/layout/list/row.tsx b/src/components/layout/list/row.tsx
index ed0088e..b667153 100644
--- a/src/components/layout/list/row.tsx
+++ b/src/components/layout/list/row.tsx
@@ -1,16 +1,16 @@
+import { useStore } from '@livestore/react'
+import type { CSSProperties } from 'react'
+import React, { memo } from 'react'
+import { useNavigate } from 'react-router-dom'
 import { Avatar } from '@/components/common/avatar'
 import { PriorityMenu } from '@/components/common/priority-menu'
 import { StatusMenu } from '@/components/common/status-menu'
 import { events } from '@/lib/livestore/schema'
-import { Issue } from '@/types/issue'
-import { Priority } from '@/types/priority'
-import { Status } from '@/types/status'
+import type { Issue } from '@/types/issue'
+import type { Priority } from '@/types/priority'
+import type { Status } from '@/types/status'
 import { formatDate } from '@/utils/format-date'
 import { getIssueTag } from '@/utils/get-issue-tag'
-import { useStore } from '@livestore/react'
-import type { CSSProperties } from 'react'
-import React, { memo } from 'react'
-import { useNavigate } from 'react-router-dom'
 
 export const Row = memo(({ issue, style }: { issue: Issue; style: CSSProperties }) => {
   const navigate = useNavigate()
```

### Diff: src/components/layout/list/virtual-row.tsx

```diff
diff --git a/src/components/layout/list/virtual-row.tsx b/src/components/layout/list/virtual-row.tsx
index c0767b8..afd9441 100644
--- a/src/components/layout/list/virtual-row.tsx
+++ b/src/components/layout/list/virtual-row.tsx
@@ -1,9 +1,9 @@
-import { Row } from '@/components/layout/list/row'
-import { tables } from '@/lib/livestore/schema'
-import { useStore } from '@livestore/react'
 import { queryDb } from '@livestore/livestore'
-import React, { memo, type CSSProperties } from 'react'
+import { useStore } from '@livestore/react'
+import React, { type CSSProperties, memo } from 'react'
 import { areEqual } from 'react-window'
+import { Row } from '@/components/layout/list/row'
+import { tables } from '@/lib/livestore/schema'
 
 export const VirtualRow = memo(
   ({ data, index, style }: { data: readonly number[]; index: number; style: CSSProperties }) => {
```

### Diff: src/components/layout/search/index.tsx

```diff
diff --git a/src/components/layout/search/index.tsx b/src/components/layout/search/index.tsx
index a6a1de9..3657002 100644
--- a/src/components/layout/search/index.tsx
+++ b/src/components/layout/search/index.tsx
@@ -1,11 +1,11 @@
+import { queryDb } from '@livestore/livestore'
+import { useStore } from '@livestore/react'
+import React from 'react'
 import { Filters } from '@/components/layout/filters'
 import { FilteredList } from '@/components/layout/list/filtered-list'
 import { filterState$, useFilterState } from '@/lib/livestore/queries'
 import { tables } from '@/lib/livestore/schema'
 import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
-import { queryDb } from '@livestore/livestore'
-import { useStore } from '@livestore/react'
-import React from 'react'
 
 const filteredIssueIds$ = queryDb(
   (get) =>
```

### Diff: src/components/layout/search/search-bar.tsx

```diff
diff --git a/src/components/layout/search/search-bar.tsx b/src/components/layout/search/search-bar.tsx
index 511ac1d..cbfe713 100644
--- a/src/components/layout/search/search-bar.tsx
+++ b/src/components/layout/search/search-bar.tsx
@@ -1,10 +1,10 @@
-import { MenuButton } from '@/components/common/menu-button'
-import { useFilterState } from '@/lib/livestore/queries'
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
 import { XMarkIcon } from '@heroicons/react/20/solid'
 import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Input } from 'react-aria-components'
+import { MenuButton } from '@/components/common/menu-button'
+import { useFilterState } from '@/lib/livestore/queries'
 
 export const SearchBar = () => {
   const [filterState, setFilterState] = useFilterState()
```

### Diff: src/components/layout/sidebar/about-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/about-menu.tsx b/src/components/layout/sidebar/about-menu.tsx
index 1132d83..a09f911 100644
--- a/src/components/layout/sidebar/about-menu.tsx
+++ b/src/components/layout/sidebar/about-menu.tsx
@@ -1,8 +1,8 @@
-import { Icon } from '@/components/icons'
-import { AboutModal } from '@/components/layout/sidebar/about-modal'
 import { ChevronDownIcon } from '@heroicons/react/16/solid'
 import React from 'react'
 import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
+import { Icon } from '@/components/icons'
+import { AboutModal } from '@/components/layout/sidebar/about-modal'
 
 export const AboutMenu = () => {
   const [showAboutModal, setShowAboutModal] = React.useState(false)
```

### Diff: src/components/layout/sidebar/about-modal.tsx

```diff
diff --git a/src/components/layout/sidebar/about-modal.tsx b/src/components/layout/sidebar/about-modal.tsx
index 213d265..f1217f8 100644
--- a/src/components/layout/sidebar/about-modal.tsx
+++ b/src/components/layout/sidebar/about-modal.tsx
@@ -1,6 +1,6 @@
-import { Modal } from '@/components/common/modal'
 import React from 'react'
 import { Link } from 'react-router-dom'
+import { Modal } from '@/components/common/modal'
 
 export const AboutModal = ({ show, setShow }: { show: boolean; setShow: (show: boolean) => void }) => {
   return (
```

### Diff: src/components/layout/sidebar/index.tsx

```diff
diff --git a/src/components/layout/sidebar/index.tsx b/src/components/layout/sidebar/index.tsx
index d072a14..555285b 100644
--- a/src/components/layout/sidebar/index.tsx
+++ b/src/components/layout/sidebar/index.tsx
@@ -1,3 +1,6 @@
+import { Bars4Icon, ViewColumnsIcon } from '@heroicons/react/24/outline'
+import React from 'react'
+import { Link } from 'react-router-dom'
 import { MenuContext } from '@/app/contexts'
 import { AboutMenu } from '@/components/layout/sidebar/about-menu'
 import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
@@ -5,9 +8,6 @@ import { SearchButton } from '@/components/layout/sidebar/search-button'
 import { ThemeButton } from '@/components/layout/sidebar/theme-button'
 import { ToolbarButton } from '@/components/layout/toolbar/toolbar-button'
 import { useFilterState } from '@/lib/livestore/queries'
-import { Bars4Icon, ViewColumnsIcon } from '@heroicons/react/24/outline'
-import React from 'react'
-import { Link } from 'react-router-dom'
 
 export const Sidebar = ({ className }: { className?: string }) => {
   const [, setFilterState] = useFilterState()
```

### Diff: src/components/layout/sidebar/mobile-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/mobile-menu.tsx b/src/components/layout/sidebar/mobile-menu.tsx
index d976fbd..09cb6eb 100644
--- a/src/components/layout/sidebar/mobile-menu.tsx
+++ b/src/components/layout/sidebar/mobile-menu.tsx
@@ -1,8 +1,8 @@
+import React from 'react'
+import { ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 import { MenuContext } from '@/app/contexts'
 import { Sidebar } from '@/components/layout/sidebar'
 import { useFrontendState } from '@/lib/livestore/queries'
-import React from 'react'
-import { ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
 
 export const MobileMenu = () => {
   const { showMenu, setShowMenu } = React.useContext(MenuContext)!
```

### Diff: src/components/layout/sidebar/new-issue-button.tsx

```diff
diff --git a/src/components/layout/sidebar/new-issue-button.tsx b/src/components/layout/sidebar/new-issue-button.tsx
index ab12140..0fab286 100644
--- a/src/components/layout/sidebar/new-issue-button.tsx
+++ b/src/components/layout/sidebar/new-issue-button.tsx
@@ -1,9 +1,9 @@
-import { MenuContext, NewIssueModalContext } from '@/app/contexts'
-import { Icon } from '@/components/icons'
-import { Status } from '@/types/status'
 import { PlusIcon } from '@heroicons/react/20/solid'
 import React from 'react'
 import { Button } from 'react-aria-components'
+import { MenuContext, NewIssueModalContext } from '@/app/contexts'
+import { Icon } from '@/components/icons'
+import type { Status } from '@/types/status'
 
 export const NewIssueButton = ({ status }: { status?: Status }) => {
   const { setNewIssueModalStatus } = React.useContext(NewIssueModalContext)!
```

### Diff: src/components/layout/sidebar/search-button.tsx

```diff
diff --git a/src/components/layout/sidebar/search-button.tsx b/src/components/layout/sidebar/search-button.tsx
index ff91433..ceca817 100644
--- a/src/components/layout/sidebar/search-button.tsx
+++ b/src/components/layout/sidebar/search-button.tsx
@@ -1,8 +1,8 @@
-import { MenuContext } from '@/app/contexts'
-import { useFilterState } from '@/lib/livestore/queries'
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
 import React from 'react'
 import { Link } from 'react-router-dom'
+import { MenuContext } from '@/app/contexts'
+import { useFilterState } from '@/lib/livestore/queries'
 
 export const SearchButton = () => {
   const [, setFilterState] = useFilterState()
```

### Diff: src/components/layout/sidebar/theme-button.tsx

```diff
diff --git a/src/components/layout/sidebar/theme-button.tsx b/src/components/layout/sidebar/theme-button.tsx
index f17b577..f309c16 100644
--- a/src/components/layout/sidebar/theme-button.tsx
+++ b/src/components/layout/sidebar/theme-button.tsx
@@ -1,11 +1,11 @@
-import { Shortcut } from '@/components/common/shortcut'
-import { Theme, themeOptions } from '@/data/theme-options'
-import { useFrontendState } from '@/lib/livestore/queries'
 import { CheckIcon, MoonIcon, SunIcon } from '@heroicons/react/16/solid'
 import { ComputerDesktopIcon } from '@heroicons/react/20/solid'
 import React from 'react'
 import { useKeyboard } from 'react-aria'
 import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
+import { Shortcut } from '@/components/common/shortcut'
+import { type Theme, themeOptions } from '@/data/theme-options'
+import { useFrontendState } from '@/lib/livestore/queries'
 
 export const ThemeButton = () => {
   const [theme, setTheme] = React.useState<Theme | undefined>(undefined)
```

### Diff: src/components/layout/toolbar/index.tsx

```diff
diff --git a/src/components/layout/toolbar/index.tsx b/src/components/layout/toolbar/index.tsx
index a5a5c9e..6dfb4ca 100644
--- a/src/components/layout/toolbar/index.tsx
+++ b/src/components/layout/toolbar/index.tsx
@@ -1,12 +1,12 @@
+import { FPSMeter } from '@overengineering/fps-meter'
+import React from 'react'
+import { Link } from 'react-router-dom'
 import { Icon } from '@/components/icons'
 import { DownloadButton } from '@/components/layout/toolbar/download-button'
 import { ResetButton } from '@/components/layout/toolbar/reset-button'
 import { SeedInput } from '@/components/layout/toolbar/seed-input'
 import { ShareButton } from '@/components/layout/toolbar/share-button'
 import { UserInput } from '@/components/layout/toolbar/user-input'
-import { FPSMeter } from '@overengineering/fps-meter'
-import React from 'react'
-import { Link } from 'react-router-dom'
 import { DevtoolsButton } from './devtools-button'
 import { SyncToggle } from './sync-toggle'
```

### Diff: src/components/layout/toolbar/mobile-menu.tsx

```diff
diff --git a/src/components/layout/toolbar/mobile-menu.tsx b/src/components/layout/toolbar/mobile-menu.tsx
index d41cfe1..8b80450 100644
--- a/src/components/layout/toolbar/mobile-menu.tsx
+++ b/src/components/layout/toolbar/mobile-menu.tsx
@@ -1,9 +1,9 @@
-import { ResetButton } from '@/components/layout/toolbar/reset-button'
-import { SeedInput } from '@/components/layout/toolbar/seed-input'
-import { UserInput } from '@/components/layout/toolbar/user-input'
 import { ChevronUpIcon } from '@heroicons/react/16/solid'
 import React from 'react'
 import { Button, DialogTrigger, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
+import { ResetButton } from '@/components/layout/toolbar/reset-button'
+import { SeedInput } from '@/components/layout/toolbar/seed-input'
+import { UserInput } from '@/components/layout/toolbar/user-input'
 import { ShareButton } from './share-button'
 import { SyncToggle } from './sync-toggle'
```

### Diff: src/components/layout/toolbar/seed-input.tsx

```diff
diff --git a/src/components/layout/toolbar/seed-input.tsx b/src/components/layout/toolbar/seed-input.tsx
index b4c2dba..98e3ff8 100644
--- a/src/components/layout/toolbar/seed-input.tsx
+++ b/src/components/layout/toolbar/seed-input.tsx
@@ -1,8 +1,8 @@
-import { seed } from '@/lib/livestore/seed'
 import { PlusIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
 import React from 'react'
 import { Button, Input } from 'react-aria-components'
+import { seed } from '@/lib/livestore/seed'
 
 export const SeedInput = ({ className }: { className?: string }) => {
   const [count, setCount] = React.useState(50)
```

### Diff: src/components/layout/toolbar/toolbar-button.tsx

```diff
diff --git a/src/components/layout/toolbar/toolbar-button.tsx b/src/components/layout/toolbar/toolbar-button.tsx
index b7b8f76..6ec9087 100644
--- a/src/components/layout/toolbar/toolbar-button.tsx
+++ b/src/components/layout/toolbar/toolbar-button.tsx
@@ -1,7 +1,7 @@
-import { Icon } from '@/components/icons'
-import { useFrontendState } from '@/lib/livestore/queries'
 import React from 'react'
 import { Button } from 'react-aria-components'
+import { Icon } from '@/components/icons'
+import { useFrontendState } from '@/lib/livestore/queries'
 
 export const ToolbarButton = () => {
   const [frontendState, setFrontendState] = useFrontendState()
```

### Diff: src/components/layout/toolbar/user-input.tsx

```diff
diff --git a/src/components/layout/toolbar/user-input.tsx b/src/components/layout/toolbar/user-input.tsx
index f094489..6ba84eb 100644
--- a/src/components/layout/toolbar/user-input.tsx
+++ b/src/components/layout/toolbar/user-input.tsx
@@ -1,6 +1,6 @@
-import { useFrontendState } from '@/lib/livestore/queries'
 import React from 'react'
 import { Input } from 'react-aria-components'
+import { useFrontendState } from '@/lib/livestore/queries'
 
 export const UserInput = ({ className }: { className?: string }) => {
   const [frontendState, setFrontendState] = useFrontendState()
```

### Diff: src/data/priority-options.ts

```diff
diff --git a/src/data/priority-options.ts b/src/data/priority-options.ts
index 46db46a..7b24e6e 100644
--- a/src/data/priority-options.ts
+++ b/src/data/priority-options.ts
@@ -1,4 +1,4 @@
-import { IconName } from '@/components/icons'
+import type { IconName } from '@/components/icons'
 
 export const priorityOptions: { name: string; icon: IconName; style: string; shortcut: string }[] = [
   {
```

### Diff: src/data/status-options.ts

```diff
diff --git a/src/data/status-options.ts b/src/data/status-options.ts
index 5b47ea1..13ab496 100644
--- a/src/data/status-options.ts
+++ b/src/data/status-options.ts
@@ -1,4 +1,4 @@
-import { IconName } from '@/components/icons'
+import type { IconName } from '@/components/icons'
 
 export type StatusId = 'backlog' | 'todo' | 'in_progress' | 'done' | 'canceled'
```

### Diff: src/hooks/useClickOutside.ts

```diff
diff --git a/src/hooks/useClickOutside.ts b/src/hooks/useClickOutside.ts
index ca9d323..5c4526d 100644
--- a/src/hooks/useClickOutside.ts
+++ b/src/hooks/useClickOutside.ts
@@ -1,4 +1,4 @@
-import { RefObject, useCallback, useEffect } from 'react'
+import { type RefObject, useCallback, useEffect } from 'react'
 
 export const useClickOutside = (
   ref: RefObject<Element>,
```

### Diff: src/lib/livestore/events.ts

```diff
diff --git a/src/lib/livestore/events.ts b/src/lib/livestore/events.ts
index 45fa33d..81e5923 100644
--- a/src/lib/livestore/events.ts
+++ b/src/lib/livestore/events.ts
@@ -1,6 +1,6 @@
+import { Events, Schema } from '@livestore/livestore'
 import { Priority } from '@/types/priority'
 import { Status } from '@/types/status'
-import { Events, Schema } from '@livestore/livestore'
 
 export const createIssueWithDescription = Events.synced({
   name: 'v1.CreateIssueWithDescription',
```

### Diff: src/lib/livestore/queries.ts

```diff
diff --git a/src/lib/livestore/queries.ts b/src/lib/livestore/queries.ts
index 11c7961..91a8e51 100644
--- a/src/lib/livestore/queries.ts
+++ b/src/lib/livestore/queries.ts
@@ -1,7 +1,7 @@
-import { tables } from '@/lib/livestore/schema'
 import { queryDb } from '@livestore/livestore'
 import { useClientDocument } from '@livestore/react'
 import React from 'react'
+import { tables } from '@/lib/livestore/schema'
 
 export const useFilterState = () => useClientDocument(tables.filterState)
```

### Diff: src/lib/livestore/schema/comment.ts

```diff
diff --git a/src/lib/livestore/schema/comment.ts b/src/lib/livestore/schema/comment.ts
index 9dc7790..130a31f 100644
--- a/src/lib/livestore/schema/comment.ts
+++ b/src/lib/livestore/schema/comment.ts
@@ -1,4 +1,4 @@
-import { State, Schema } from '@livestore/livestore'
+import { Schema, State } from '@livestore/livestore'
 
 export const comment = State.SQLite.table({
   name: 'comment',
```

### Diff: src/lib/livestore/schema/description.ts

```diff
diff --git a/src/lib/livestore/schema/description.ts b/src/lib/livestore/schema/description.ts
index 676a662..743ffcf 100644
--- a/src/lib/livestore/schema/description.ts
+++ b/src/lib/livestore/schema/description.ts
@@ -1,4 +1,4 @@
-import { State, Schema } from '@livestore/livestore'
+import { Schema, State } from '@livestore/livestore'
 
 export const description = State.SQLite.table({
   name: 'description',
```

### Diff: src/lib/livestore/schema/filter-state.ts

```diff
diff --git a/src/lib/livestore/schema/filter-state.ts b/src/lib/livestore/schema/filter-state.ts
index 816ef82..e7e74d6 100644
--- a/src/lib/livestore/schema/filter-state.ts
+++ b/src/lib/livestore/schema/filter-state.ts
@@ -1,6 +1,6 @@
+import { Schema, SessionIdSymbol, State } from '@livestore/livestore'
 import { Priority } from '@/types/priority'
 import { Status } from '@/types/status'
-import { State, Schema, SessionIdSymbol } from '@livestore/livestore'
 
 const OrderDirection = Schema.Literal('asc', 'desc').annotations({ title: 'OrderDirection' })
 export type OrderDirection = typeof OrderDirection.Type
```

### Diff: src/lib/livestore/schema/frontend-state.ts

```diff
diff --git a/src/lib/livestore/schema/frontend-state.ts b/src/lib/livestore/schema/frontend-state.ts
index 2f35767..35d6e72 100644
--- a/src/lib/livestore/schema/frontend-state.ts
+++ b/src/lib/livestore/schema/frontend-state.ts
@@ -1,4 +1,4 @@
-import { State, Schema, SessionIdSymbol } from '@livestore/livestore'
+import { Schema, SessionIdSymbol, State } from '@livestore/livestore'
 
 const Theme = Schema.Literal('dark', 'light', 'system').annotations({ title: 'Theme' })
 export type Theme = typeof Theme.Type
```

### Diff: src/lib/livestore/schema/index.ts

```diff
diff --git a/src/lib/livestore/schema/index.ts b/src/lib/livestore/schema/index.ts
index 961465c..1a70816 100644
--- a/src/lib/livestore/schema/index.ts
+++ b/src/lib/livestore/schema/index.ts
@@ -1,11 +1,11 @@
-import * as eventsDefs from '@/lib/livestore/events'
-import { comment, type Comment } from '@/lib/livestore/schema/comment'
-import { description, type Description } from '@/lib/livestore/schema/description'
-import { filterState, type FilterState } from '@/lib/livestore/schema/filter-state'
-import { frontendState, type FrontendState } from '@/lib/livestore/schema/frontend-state'
-import { issue, type Issue } from '@/lib/livestore/schema/issue'
 import { makeSchema, State } from '@livestore/livestore'
-import { scrollState, type ScrollState } from './scroll-state'
+import * as eventsDefs from '@/lib/livestore/events'
+import { type Comment, comment } from '@/lib/livestore/schema/comment'
+import { type Description, description } from '@/lib/livestore/schema/description'
+import { type FilterState, filterState } from '@/lib/livestore/schema/filter-state'
+import { type FrontendState, frontendState } from '@/lib/livestore/schema/frontend-state'
+import { type Issue, issue } from '@/lib/livestore/schema/issue'
+import { type ScrollState, scrollState } from './scroll-state'
 
 export {
   comment,
```

### Diff: src/lib/livestore/schema/issue.ts

```diff
diff --git a/src/lib/livestore/schema/issue.ts b/src/lib/livestore/schema/issue.ts
index fb165a0..63649a5 100644
--- a/src/lib/livestore/schema/issue.ts
+++ b/src/lib/livestore/schema/issue.ts
@@ -1,6 +1,6 @@
+import { Schema, State } from '@livestore/livestore'
 import { Priority } from '@/types/priority'
 import { Status } from '@/types/status'
-import { State, Schema } from '@livestore/livestore'
 
 export const issue = State.SQLite.table({
   name: 'issue',
```

### Diff: src/lib/livestore/schema/scroll-state.ts

```diff
diff --git a/src/lib/livestore/schema/scroll-state.ts b/src/lib/livestore/schema/scroll-state.ts
index 3a57c9f..05cc3c4 100644
--- a/src/lib/livestore/schema/scroll-state.ts
+++ b/src/lib/livestore/schema/scroll-state.ts
@@ -1,4 +1,4 @@
-import { State, Schema } from '@livestore/livestore'
+import { Schema, State } from '@livestore/livestore'
 
 export const ScrollState = Schema.Struct({
   list: Schema.Number,
```

### Diff: src/lib/livestore/seed.ts

```diff
diff --git a/src/lib/livestore/seed.ts b/src/lib/livestore/seed.ts
index 3a56186..9349ac5 100644
--- a/src/lib/livestore/seed.ts
+++ b/src/lib/livestore/seed.ts
@@ -1,11 +1,10 @@
-import { type Store } from '@livestore/livestore'
-
+import type { Store } from '@livestore/livestore'
+import { generateKeyBetween } from 'fractional-indexing'
 import { priorityOptions } from '@/data/priority-options'
 import { statusOptions } from '@/data/status-options'
 import { events } from '@/lib/livestore/schema'
-import { Priority } from '@/types/priority'
-import { Status } from '@/types/status'
-import { generateKeyBetween } from 'fractional-indexing'
+import type { Priority } from '@/types/priority'
+import type { Status } from '@/types/status'
 import { highestIssueId$, highestKanbanOrder$, issueCount$ } from './queries'
 
 export const seed = (store: Store, count: number) => {
```

### Diff: src/lib/livestore/utils.tsx

```diff
diff --git a/src/lib/livestore/utils.tsx b/src/lib/livestore/utils.tsx
index 086b1fe..6838267 100644
--- a/src/lib/livestore/utils.tsx
+++ b/src/lib/livestore/utils.tsx
@@ -1,7 +1,7 @@
-import { Icon } from '@/components/icons'
-import { BootStatus, QueryBuilder } from '@livestore/livestore'
+import type { BootStatus, QueryBuilder } from '@livestore/livestore'
 import React from 'react'
-import { FilterState, tables } from './schema'
+import { Icon } from '@/components/icons'
+import type { FilterState, tables } from './schema'
 
 export const renderBootStatus = (bootStatus: BootStatus) => {
   return (
```

### Diff: src/lib/livestore/worker.ts

```diff
diff --git a/src/lib/livestore/worker.ts b/src/lib/livestore/worker.ts
index 2af87de..e3faf13 100644
--- a/src/lib/livestore/worker.ts
+++ b/src/lib/livestore/worker.ts
@@ -1,4 +1,4 @@
-import { schema } from '@/lib/livestore/schema'
 import { makeWorker } from '@livestore/adapter-web/worker'
+import { schema } from '@/lib/livestore/schema'
 
 makeWorker({ schema })
```

### Diff: src/types/issue.ts

```diff
diff --git a/src/types/issue.ts b/src/types/issue.ts
index 69fe5cb..4a36a76 100644
--- a/src/types/issue.ts
+++ b/src/types/issue.ts
@@ -1,5 +1,5 @@
-import { Priority } from '@/types/priority'
-import { Status } from '@/types/status'
+import type { Priority } from '@/types/priority'
+import type { Status } from '@/types/status'
 
 export type Issue = {
   id: number
```

### Diff: tsconfig.json

```diff
diff --git a/tsconfig.json b/tsconfig.json
index ce5d76e..2ce425a 100644
--- a/tsconfig.json
+++ b/tsconfig.json
@@ -2,31 +2,33 @@
   "compilerOptions": {
     "target": "ES2022",
     "useDefineForClassFields": true,
-    "lib": ["ES2020", "DOM", "DOM.Iterable"],
+    "lib": [
+      "ES2020",
+      "DOM",
+      "DOM.Iterable"
+    ],
     "module": "ESNext",
     "skipLibCheck": true,
     "composite": false,
     "declaration": false,
     "declarationMap": false,
     "paths": {
-      "@/*": ["./src/*"]
+      "@/*": [
+        "./src/*"
+      ]
     },
-
-    /* Bundler mode */
     "moduleResolution": "bundler",
     "allowImportingTsExtensions": true,
     "resolveJsonModule": true,
     "isolatedModules": true,
     "noEmit": true,
     "jsx": "react",
-
-    /* Linting */
     "strict": true,
     "strictNullChecks": true,
     "noUncheckedIndexedAccess": true,
-    // "noUnusedLocals": true,
-    // "noUnusedParameters": true,
     "noFallthroughCasesInSwitch": true
   },
-  "include": ["src"]
-}
+  "include": [
+    "src"
+  ]
+}
\ No newline at end of file
```

### Diff: vite.config.ts

```diff
diff --git a/vite.config.ts b/vite.config.ts
index 60ddf11..8e17ecf 100644
--- a/vite.config.ts
+++ b/vite.config.ts
@@ -4,10 +4,10 @@ import path from 'node:path'
 import process from 'node:process'
 
 import { livestoreDevtoolsPlugin } from '@livestore/devtools-vite'
+import tailwindcss from '@tailwindcss/vite'
 import react from '@vitejs/plugin-react'
 import { defineConfig } from 'vite'
 import svgr from 'vite-plugin-svgr'
-import tailwindcss from '@tailwindcss/vite'
 
 const isProdBuild = process.env.NODE_ENV === 'production'
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
