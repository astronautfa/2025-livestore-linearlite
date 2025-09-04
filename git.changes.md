# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- src/components/layout/board/column.tsx
- src/components/layout/board/index.tsx
- src/components/layout/filters/filter-menu.tsx
- src/components/layout/filters/index.tsx
- src/components/layout/filters/priority-filter.tsx
- src/components/layout/filters/sort-menu.tsx
- src/components/layout/filters/status-filter.tsx
- src/components/layout/list/index.tsx
- src/components/layout/search/index.tsx
- src/components/layout/search/search-bar.tsx
- src/components/layout/sidebar/index.tsx
- src/components/layout/sidebar/search-button.tsx
- src/routes/board.tsx
- src/routes/index.tsx
- src/routes/search.tsx

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: src/components/layout/board/column.tsx

```diff
diff --git a/src/components/layout/board/column.tsx b/src/components/layout/board/column.tsx
index 49511f1..de6afbc 100644
--- a/src/components/layout/board/column.tsx
+++ b/src/components/layout/board/column.tsx
@@ -1,5 +1,6 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
+import { useSearch } from '@tanstack/react-router'
 import { generateKeyBetween } from 'fractional-indexing'
 import React from 'react'
 import {
@@ -17,24 +18,33 @@ import AutoSizer from 'react-virtualized-auto-sizer'
 import { Icon } from '@/components/icons'
 import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
 import type { StatusDetails } from '@/data/status-options'
-import { filterState$, useDebouncedScrollState, useFilterState } from '@/lib/livestore/queries'
+import { useDebouncedScrollState } from '@/lib/livestore/queries'
 import { events, tables } from '@/lib/livestore/schema'
 import { filterStateToWhere } from '@/lib/livestore/utils'
 import type { Status } from '@/types/status'
+import type { ValidatedSearch } from '@/routes/board'
 import { Card } from './card'
 
 export const Column = ({ status, statusDetails }: { status: Status; statusDetails: StatusDetails }) => {
   const { store } = useStore()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
   // TODO restore initial scroll position once React Aria supports this scenario
   const [_scrollState, setScrollState] = useDebouncedScrollState(`column-${status}-${store.sessionId}`)
-  const [filterState] = useFilterState()
 
   const filteredIssues$ = queryDb(
-    (get) =>
-      tables.issue
+    (get) => {
+      const filterState = {
+        orderBy: searchParams.orderBy || 'created',
+        orderDirection: searchParams.orderDirection || 'desc',
+        status: searchParams.status || null,
+        priority: searchParams.priority || null,
+        query: searchParams.query || null,
+      }
+      return tables.issue
         .select()
-        .where({ priority: filterStateToWhere(get(filterState$))?.priority, status, deleted: null })
-        .orderBy('kanbanorder', 'desc'),
+        .where({ priority: filterStateToWhere(filterState)?.priority, status, deleted: null })
+        .orderBy('kanbanorder', 'desc')
+    },
     { label: 'List.visibleIssues', deps: [status] },
   )
   const filteredIssues = store.useQuery(filteredIssues$)
@@ -52,7 +62,7 @@ export const Column = ({ status, statusDetails }: { status: Status; statusDetail
         .select('kanbanorder')
         .where({
           status,
-          priority: filterState.priority ? { op: 'IN', value: filterState.priority } : undefined,
+          priority: searchParams.priority ? { op: 'IN', value: searchParams.priority } : undefined,
           kanbanorder: { op: before ? '>' : '<', value: targetKanbanOrder },
         })
         .orderBy('kanbanorder', before ? 'asc' : 'desc')
```

### Diff: src/components/layout/board/index.tsx

```diff
diff --git a/src/components/layout/board/index.tsx b/src/components/layout/board/index.tsx
index 1750f60..180b0e3 100644
--- a/src/components/layout/board/index.tsx
+++ b/src/components/layout/board/index.tsx
@@ -1,24 +1,39 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
+import { useSearch } from '@tanstack/react-router'
 import { Column } from '@/components/layout/board/column'
 import { Filters } from '@/components/layout/filters'
 import { statusOptions } from '@/data/status-options'
-import { filterState$ } from '@/lib/livestore/queries'
 import { tables } from '@/lib/livestore/schema'
 import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
 import type { Status } from '@/types/status'
+import type { ValidatedSearch } from '@/routes/board'
 
-const filteredIssueIds$ = queryDb(
-  (get) =>
-    tables.issue
-      .select('id')
-      .where({ ...filterStateToWhere(get(filterState$)), deleted: null })
-      .orderBy(filterStateToOrderBy(get(filterState$))),
-  { label: 'Board.visibleIssueIds' },
-)
+// Convert search params to filter state format for the utility functions
+const searchToFilterState = (search: ValidatedSearch) => ({
+  orderBy: search.orderBy || 'created',
+  orderDirection: search.orderDirection || 'desc',
+  status: search.status || null,
+  priority: search.priority || null,
+  query: search.query || null,
+})
 
 export const Board = () => {
   const { store } = useStore()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
+
+  // Create a reactive query that uses search params directly
+  const filteredIssueIds$ = queryDb(
+    () => {
+      const filterState = searchToFilterState(searchParams)
+      return tables.issue
+        .select('id')
+        .where({ ...filterStateToWhere(filterState), deleted: null })
+        .orderBy(filterStateToOrderBy(filterState))
+    },
+    { label: 'Board.visibleIssueIds' },
+  )
+
   const filteredIssueIds = store.useQuery(filteredIssueIds$)
 
   return (
```

### Diff: src/components/layout/filters/filter-menu.tsx

```diff
diff --git a/src/components/layout/filters/filter-menu.tsx b/src/components/layout/filters/filter-menu.tsx
index 68f0b2a..c8cf8ed 100644
--- a/src/components/layout/filters/filter-menu.tsx
+++ b/src/components/layout/filters/filter-menu.tsx
@@ -1,85 +1,124 @@
+import React from 'react'
 import { CheckIcon } from '@heroicons/react/16/solid'
-import { Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
+import { Button } from 'react-aria-components'
+import { Link, useSearch } from '@tanstack/react-router'
 import { Icon, type IconName } from '@/components/icons'
+import { useClickOutside } from '@/hooks/useClickOutside'
 import { priorityOptions } from '@/data/priority-options'
 import { statusOptions } from '@/data/status-options'
-import { useFilterState } from '@/lib/livestore/queries'
 import type { Priority } from '@/types/priority'
 import type { Status } from '@/types/status'
+import type { ValidatedSearch } from '@/routes/index'
 
 export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; children?: React.ReactNode }) => {
-  const [filterState, setFilterState] = useFilterState()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
+  const [isOpen, setIsOpen] = React.useState(false)
+  const menuRef = React.useRef<HTMLDivElement>(null)
+
+  useClickOutside(menuRef as React.RefObject<Element>, () => setIsOpen(false))
 
   const toggleFilter = ({
     filterType,
     value,
   }: { filterType: 'status'; value: Status } | { filterType: 'priority'; value: Priority }) => {
-    let filters: (Status | Priority)[] | undefined = [...(filterState[filterType] ?? [])]
-    if (filters.includes(value)) {
-      filters.splice(filters.indexOf(value), 1)
+    const currentFilters = searchParams[filterType] ?? []
+    let newFilters: (Status | Priority)[]
+
+    if (currentFilters.includes(value)) {
+      newFilters = currentFilters.filter(f => f !== value)
     } else {
-      filters.push(value)
+      newFilters = [...currentFilters, value]
     }
-    if (!filters.length) {
-      filters = undefined
+
+    return {
+      [filterType]: newFilters.length > 0 ? newFilters : undefined,
     }
-    setFilterState({ [filterType]: filters })
   }
 
+  // Clone children and add click handler if it's a React element
+  const triggerElement = React.isValidElement(children) ? (
+    React.cloneElement(children as React.ReactElement<any>, {
+      onPress: () => setIsOpen(!isOpen),
+    })
+  ) : (
+    <Button
+      aria-label="Select filters"
+      className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+      onPress={() => setIsOpen(!isOpen)}
+    >
+      <Icon className="size-3.5" name="filter" />
+      <span>Filter</span>
+    </Button>
+  )
+
   return (
-    <MenuTrigger>
-      {children}
-      <Popover className="w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
-        <Menu className="focus:outline-none" selectionMode="multiple">
-          {type !== 'priority' && (
-            <MenuSection className="p-2" key="status">
-              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Status</Header>
-              {statusOptions.map(({ name, icon, style }, index) => {
-                const active = filterState.status?.includes(index as Status)
-                return (
-                  <MenuItem
-                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                    key={name}
-                    onAction={() => toggleFilter({ filterType: 'status', value: index as Status })}
-                  >
-                    <div
-                      className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
+    <div className="relative" ref={menuRef}>
+      {triggerElement}
+      {isOpen && (
+        <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
+          <div className="p-2">
+            {type !== 'priority' && (
+              <div className="mb-2">
+                <div className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Status</div>
+                {statusOptions.map(({ name, icon, style }, index) => {
+                  const active = searchParams.status?.includes(index as Status)
+                  const newSearch = toggleFilter({ filterType: 'status', value: index as Status })
+                  return (
+                    <Link
+                      key={name}
+                      to="."
+                      search={(prev: ValidatedSearch) => ({
+                        ...prev,
+                        ...newSearch,
+                      })}
+                      className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
+                      onClick={() => setIsOpen(false)}
                     >
-                      {active && <CheckIcon className="size-4 text-white" />}
-                    </div>
-                    <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
-                    <span>{name}</span>
-                  </MenuItem>
-                )
-              })}
-            </MenuSection>
-          )}
-          {!type && <Separator className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />}
-          {type !== 'status' && (
-            <MenuSection className="p-2" key="priority">
-              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Priority</Header>
-              {priorityOptions.map(({ name, icon, style }, index) => {
-                const active = filterState.priority?.includes(index as Priority)
-                return (
-                  <MenuItem
-                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                    key={name}
-                    onAction={() => toggleFilter({ filterType: 'priority', value: index as Priority })}
-                  >
-                    <div
-                      className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
+                      <div
+                        className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
+                      >
+                        {active && <CheckIcon className="size-4 text-white" />}
+                      </div>
+                      <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
+                      <span>{name}</span>
+                    </Link>
+                  )
+                })}
+              </div>
+            )}
+            {!type && <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700 my-2" />}
+            {type !== 'status' && (
+              <div>
+                <div className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Priority</div>
+                {priorityOptions.map(({ name, icon, style }, index) => {
+                  const active = searchParams.priority?.includes(index as Priority)
+                  const newSearch = toggleFilter({ filterType: 'priority', value: index as Priority })
+                  return (
+                    <Link
+                      key={name}
+                      to="."
+                      search={(prev: ValidatedSearch) => ({
+                        ...prev,
+                        ...newSearch,
+                      })}
+                      className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
+                      onClick={() => setIsOpen(false)}
                     >
-                      {active && <CheckIcon className="size-4 text-white" />}
-                    </div>
-                    <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
-                    <span>{name}</span>
-                  </MenuItem>
-                )
-              })}
-            </MenuSection>
-          )}
-        </Menu>
-      </Popover>
-    </MenuTrigger>
+                      <div
+                        className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
+                      >
+                        {active && <CheckIcon className="size-4 text-white" />}
+                      </div>
+                      <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
+                      <span>{name}</span>
+                    </Link>
+                  )
+                })}
+              </div>
+            )}
+          </div>
+        </div>
+      )}
+    </div>
   )
 }
```

### Diff: src/components/layout/filters/index.tsx

```diff
diff --git a/src/components/layout/filters/index.tsx b/src/components/layout/filters/index.tsx
index 5fce569..d4e8f62 100644
--- a/src/components/layout/filters/index.tsx
+++ b/src/components/layout/filters/index.tsx
@@ -1,4 +1,5 @@
 import { useStore } from '@livestore/react'
+import { useSearch } from '@tanstack/react-router'
 import { Button } from 'react-aria-components'
 import { Icon } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
@@ -8,8 +9,9 @@ import { SortMenu } from '@/components/layout/filters/sort-menu'
 import { StatusFilter } from '@/components/layout/filters/status-filter'
 import { SearchBar } from '@/components/layout/search/search-bar'
 import { statusOptions } from '@/data/status-options'
-import { issueCount$, useFilterState } from '@/lib/livestore/queries'
+import { issueCount$ } from '@/lib/livestore/queries'
 import type { Status } from '@/types/status'
+import type { ValidatedSearch } from '@/routes/index'
 
 export const Filters = ({
   filteredCount,
@@ -24,7 +26,7 @@ export const Filters = ({
 }) => {
   const { store } = useStore()
   const totalCount = store.useQuery(issueCount$)
-  const [filterState] = useFilterState()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
 
   return (
     <>
@@ -34,8 +36,8 @@ export const Filters = ({
         <Header
           filteredCount={filteredCount}
           heading={
-            filterState?.status?.length === 1
-              ? statusOptions[filterState.status[0] as Status]?.name || 'Issues'
+            searchParams?.status?.length === 1
+              ? statusOptions[searchParams.status[0] as Status]?.name || 'Issues'
               : 'Issues'
           }
           totalCount={totalCount}
@@ -56,7 +58,7 @@ export const Filters = ({
               className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
             >
               <Icon className="size-3.5" name="filter" />
-              <span className={filterState.status?.length || filterState.priority?.length ? 'lg:hidden' : ''}>
+              <span className={searchParams.status?.length || searchParams.priority?.length ? 'lg:hidden' : ''}>
                 Filter
               </span>
             </Button>
@@ -69,7 +71,7 @@ export const Filters = ({
         {/* TODO add clear filters/sorting button */}
         {!hideSorting && <SortMenu />}
       </div>
-      {filterState.status?.length || filterState.priority?.length ? (
+      {searchParams.status?.length || searchParams.priority?.length ? (
         <div className="h-12 overflow-x-auto border-neutral-200 border-b lg:hidden dark:border-neutral-700">
           <div className="flex h-full items-center pl-2">
             {!hideStatusFilter && <StatusFilter />}
```

### Diff: src/components/layout/filters/priority-filter.tsx

```diff
diff --git a/src/components/layout/filters/priority-filter.tsx b/src/components/layout/filters/priority-filter.tsx
index 162b2de..47936e8 100644
--- a/src/components/layout/filters/priority-filter.tsx
+++ b/src/components/layout/filters/priority-filter.tsx
@@ -3,12 +3,13 @@ import { Button } from 'react-aria-components'
 import { Icon, type IconName } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
 import { priorityOptions } from '@/data/priority-options'
-import { useFilterState } from '@/lib/livestore/queries'
+import { Link, useSearch } from '@tanstack/react-router'
 import type { Priority } from '@/types/priority'
+import type { ValidatedSearch } from '@/routes/index'
 
 export const PriorityFilter = () => {
-  const [filterState, setFilterState] = useFilterState()
-  if (!filterState.priority) {
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
+  if (!searchParams.priority) {
     return null
   }
 
@@ -16,31 +17,35 @@ export const PriorityFilter = () => {
     <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
       <div className="flex h-full items-center gap-1 border-neutral-200 border-r px-2 dark:border-neutral-700">
         <span className="font-medium text-neutral-600 dark:text-neutral-200">Priority</span>
-        <span>{filterState.priority.length > 1 ? 'is any of' : 'is'}</span>
+        <span>{searchParams.priority.length > 1 ? 'is any of' : 'is'}</span>
       </div>
-      <FilterMenu type="priority">
-        <Button className="flex h-full items-center gap-1.5 px-2 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
-          {filterState.priority.length === 1 ? (
-            <>
-              <Icon
-                className={`h-3.5 ${priorityOptions[filterState.priority[0] as Priority]?.style || ''}`}
-                name={priorityOptions[filterState.priority[0] as Priority]?.icon as IconName}
-              />
-              <span className="font-medium text-neutral-600 dark:text-neutral-200">
-                {priorityOptions[filterState.priority[0] as Priority]?.name || 'Unknown'}
-              </span>
-            </>
-          ) : (
-            <span>{filterState.priority.length} priorities</span>
-          )}
-        </Button>
-      </FilterMenu>
-      <Button
+       <FilterMenu type="priority">
+         <Button className="flex h-full items-center gap-1.5 px-2 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
+           {searchParams.priority.length === 1 ? (
+             <>
+               <Icon
+                 className={`h-3.5 ${priorityOptions[searchParams.priority[0] as Priority]?.style || ''}`}
+                 name={priorityOptions[searchParams.priority[0] as Priority]?.icon as IconName}
+               />
+               <span className="font-medium text-neutral-600 dark:text-neutral-200">
+                 {priorityOptions[searchParams.priority[0] as Priority]?.name || 'Unknown'}
+               </span>
+             </>
+           ) : (
+             <span>{searchParams.priority.length} priorities</span>
+           )}
+         </Button>
+       </FilterMenu>
+      <Link
+        to="."
+        search={(prev: ValidatedSearch) => ({
+          ...prev,
+          priority: undefined,
+        })}
         className="group flex h-full items-center border-neutral-200 border-l px-1 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-        onPress={() => setFilterState({ priority: null })}
       >
         <XMarkIcon className="size-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
-      </Button>
+      </Link>
     </div>
   )
 }
```

### Diff: src/components/layout/filters/sort-menu.tsx

```diff
diff --git a/src/components/layout/filters/sort-menu.tsx b/src/components/layout/filters/sort-menu.tsx
index f3e5f36..a13f3bc 100644
--- a/src/components/layout/filters/sort-menu.tsx
+++ b/src/components/layout/filters/sort-menu.tsx
@@ -1,80 +1,80 @@
 import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'
 import React from 'react'
-import { useKeyboard } from 'react-aria'
-import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover } from 'react-aria-components'
+import { Button } from 'react-aria-components'
+import { Link, useSearch } from '@tanstack/react-router'
 import { Shortcut } from '@/components/common/shortcut'
+import { useClickOutside } from '@/hooks/useClickOutside'
 import { type SortingDirection, type SortingOption, sortingOptions } from '@/data/sorting-options'
-import { useFilterState } from '@/lib/livestore/queries'
+import type { ValidatedSearch } from '@/routes/index'
 
-export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
-  const [filterState, setFilterState] = useFilterState()
+export const SortMenu = () => {
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
   const [isOpen, setIsOpen] = React.useState(false)
+  const menuRef = React.useRef<HTMLDivElement>(null)
+
+  useClickOutside(menuRef as React.RefObject<Element>, () => setIsOpen(false))
 
   const toggleSorting = (sortingOption: SortingOption) => {
-    const currentSorting = filterState.orderBy
-    const currentDirection = filterState.orderDirection
+    const currentSorting = searchParams.orderBy
+    const currentDirection = searchParams.orderDirection
+
     if (currentSorting === sortingOption) {
-      setFilterState({ orderDirection: currentDirection === 'asc' ? 'desc' : 'asc' })
+      // Toggle direction
+      return {
+        orderBy: sortingOption,
+        orderDirection: currentDirection === 'asc' ? 'desc' : 'asc',
+      }
     } else {
-      setFilterState({
+      // Change sorting option with default direction
+      return {
         orderBy: sortingOption,
         orderDirection: sortingOptions[sortingOption as SortingOption].defaultDirection as SortingDirection,
-      })
+      }
     }
   }
 
-  const { keyboardProps } = useKeyboard({
-    onKeyDown: (e) => {
-      if (e.key === 'Escape') {
-        setIsOpen(false)
-        return
-      }
-      for (const [sortingOption, { shortcut }] of Object.entries(sortingOptions)) {
-        if (e.key === shortcut) {
-          toggleSorting(sortingOption as SortingOption)
-          break
-        }
-      }
-    },
-  })
-
   return (
-    <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
+    <div className="relative" ref={menuRef}>
       <Button
         aria-label="Select sorting"
         className="group relative flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+        onPress={() => setIsOpen(!isOpen)}
       >
         <ArrowsUpDownIcon className="size-3.5" />
         <span>Sort</span>
         <div className="-right-0.5 absolute top-0 size-1.5 rounded-full bg-orange-500" />
       </Button>
-      <Popover className="w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
-        <Menu className="focus:outline-none" selectionMode="multiple" {...keyboardProps}>
-          {type !== 'priority' && (
-            <MenuSection className="p-2" key="status">
-              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Sorting</Header>
-              {Object.entries(sortingOptions).map(([sortingOption, { name, shortcut }]) => {
-                return (
-                  <MenuItem
-                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                    key={sortingOption}
-                    onAction={() => toggleSorting(sortingOption as SortingOption)}
-                  >
-                    <span>{name}</span>
-                    {filterState.orderBy === sortingOption && (
-                      <div className="absolute right-10">
-                        {filterState.orderDirection === 'asc' && <BarsArrowDownIcon className="size-4" />}
-                        {filterState.orderDirection === 'desc' && <BarsArrowUpIcon className="size-4" />}
-                      </div>
-                    )}
-                    <Shortcut className="absolute right-3" keys={[shortcut]} />
-                  </MenuItem>
-                )
-              })}
-            </MenuSection>
-          )}
-        </Menu>
-      </Popover>
-    </MenuTrigger>
+      {isOpen && (
+        <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
+          <div className="p-2">
+            <div className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Sorting</div>
+            {Object.entries(sortingOptions).map(([sortingOption, { name, shortcut }]) => {
+              const newSearch = toggleSorting(sortingOption as SortingOption)
+              return (
+                <Link
+                  key={sortingOption}
+                  to="."
+                  search={(prev: ValidatedSearch) => ({
+                    ...prev,
+                    ...newSearch,
+                  })}
+                  className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
+                  onClick={() => setIsOpen(false)}
+                >
+                  <span>{name}</span>
+                  {searchParams.orderBy === sortingOption && (
+                    <div className="absolute right-10">
+                      {searchParams.orderDirection === 'asc' && <BarsArrowDownIcon className="size-4" />}
+                      {searchParams.orderDirection === 'desc' && <BarsArrowUpIcon className="size-4" />}
+                    </div>
+                  )}
+                  <Shortcut className="absolute right-3" keys={[shortcut]} />
+                </Link>
+              )
+            })}
+          </div>
+        </div>
+      )}
+    </div>
   )
 }
```

### Diff: src/components/layout/filters/status-filter.tsx

```diff
diff --git a/src/components/layout/filters/status-filter.tsx b/src/components/layout/filters/status-filter.tsx
index 54e90f2..98fc057 100644
--- a/src/components/layout/filters/status-filter.tsx
+++ b/src/components/layout/filters/status-filter.tsx
@@ -3,12 +3,13 @@ import { Button } from 'react-aria-components'
 import { Icon, type IconName } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
 import { statusOptions } from '@/data/status-options'
-import { useFilterState } from '@/lib/livestore/queries'
+import { Link, useSearch } from '@tanstack/react-router'
 import type { Status } from '@/types/status'
+import type { ValidatedSearch } from '@/routes/index'
 
 export const StatusFilter = () => {
-  const [filterState, setFilterState] = useFilterState()
-  if (!filterState.status) {
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
+  if (!searchParams.status) {
     return null
   }
 
@@ -16,33 +17,37 @@ export const StatusFilter = () => {
     <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
       <div className="flex h-full items-center gap-1 border-neutral-200 border-r px-2 dark:border-neutral-700">
         <span className="font-medium text-neutral-600 dark:text-neutral-200">Status</span>
-        <span>{filterState.status.length > 1 ? 'is any of' : 'is'}</span>
+        <span>{searchParams.status.length > 1 ? 'is any of' : 'is'}</span>
       </div>
-      <FilterMenu type="status">
-        <Button className="flex h-full items-center gap-1.5 pr-2 pl-5 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
-          {filterState.status.map((status) => (
-            <div className="-ml-3 h-4 rounded-full bg-white p-px dark:bg-neutral-900" key={status}>
-              <Icon
-                className={`h-full ${statusOptions[status as Status]?.style || ''}`}
-                name={statusOptions[status as Status]?.icon as IconName}
-              />
-            </div>
-          ))}
-          {filterState.status.length === 1 ? (
-            <span className="font-medium text-neutral-600 dark:text-neutral-200">
-              {statusOptions[filterState.status[0] as Status]?.name || 'Unknown'}
-            </span>
-          ) : (
-            <span>{filterState.status.length} statuses</span>
-          )}
-        </Button>
-      </FilterMenu>
-      <Button
+       <FilterMenu type="status">
+         <Button className="flex h-full items-center gap-1.5 pr-2 pl-5 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
+           {searchParams.status.map((status) => (
+             <div className="-ml-3 h-4 rounded-full bg-white p-px dark:bg-neutral-900" key={status}>
+               <Icon
+                 className={`h-full ${statusOptions[status as Status]?.style || ''}`}
+                 name={statusOptions[status as Status]?.icon as IconName}
+               />
+             </div>
+           ))}
+           {searchParams.status.length === 1 ? (
+             <span className="font-medium text-neutral-600 dark:text-neutral-200">
+               {statusOptions[searchParams.status[0] as Status]?.name || 'Unknown'}
+             </span>
+           ) : (
+             <span>{searchParams.status.length} statuses</span>
+           )}
+         </Button>
+       </FilterMenu>
+      <Link
+        to="."
+        search={(prev: ValidatedSearch) => ({
+          ...prev,
+          status: undefined,
+        })}
         className="group flex h-full items-center border-neutral-200 border-l px-1 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-        onPress={() => setFilterState({ status: null })}
       >
         <XMarkIcon className="size-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
-      </Button>
+      </Link>
     </div>
   )
 }
```

### Diff: src/components/layout/list/index.tsx

```diff
diff --git a/src/components/layout/list/index.tsx b/src/components/layout/list/index.tsx
index 5be53cd..d0ecd9d 100644
--- a/src/components/layout/list/index.tsx
+++ b/src/components/layout/list/index.tsx
@@ -1,22 +1,37 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
+import { useSearch } from '@tanstack/react-router'
 import { Filters } from '@/components/layout/filters'
 import { FilteredList } from '@/components/layout/list/filtered-list'
-import { filterState$ } from '@/lib/livestore/queries'
 import { tables } from '@/lib/livestore/schema'
 import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
+import type { ValidatedSearch } from '@/routes/index'
 
-const filteredIssueIds$ = queryDb(
-  (get) =>
-    tables.issue
-      .select('id')
-      .where({ ...filterStateToWhere(get(filterState$)), deleted: null })
-      .orderBy(filterStateToOrderBy(get(filterState$))),
-  { label: 'List.visibleIssueIds' },
-)
+// Convert search params to filter state format for the utility functions
+const searchToFilterState = (search: ValidatedSearch) => ({
+  orderBy: search.orderBy || 'created',
+  orderDirection: search.orderDirection || 'desc',
+  status: search.status || null,
+  priority: search.priority || null,
+  query: search.query || null,
+})
 
 export const List = () => {
   const { store } = useStore()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
+
+  // Create a reactive query that uses search params directly
+  const filteredIssueIds$ = queryDb(
+    () => {
+      const filterState = searchToFilterState(searchParams)
+      return tables.issue
+        .select('id')
+        .where({ ...filterStateToWhere(filterState), deleted: null })
+        .orderBy(filterStateToOrderBy(filterState))
+    },
+    { label: 'List.visibleIssueIds' },
+  )
+
   const filteredIssueIds = store.useQuery(filteredIssueIds$)
 
   return (
```

### Diff: src/components/layout/search/index.tsx

```diff
diff --git a/src/components/layout/search/index.tsx b/src/components/layout/search/index.tsx
index 0fa7ce9..75084a0 100644
--- a/src/components/layout/search/index.tsx
+++ b/src/components/layout/search/index.tsx
@@ -1,29 +1,43 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
+import { useSearch } from '@tanstack/react-router'
 import { Filters } from '@/components/layout/filters'
 import { FilteredList } from '@/components/layout/list/filtered-list'
-import { filterState$, useFilterState } from '@/lib/livestore/queries'
 import { tables } from '@/lib/livestore/schema'
 import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
+import type { ValidatedSearch } from '@/routes/search'
 
-const filteredIssueIds$ = queryDb(
-  (get) =>
-    tables.issue
-      .select('id')
-      .where({ ...filterStateToWhere(get(filterState$)), deleted: null })
-      .orderBy(filterStateToOrderBy(get(filterState$))),
-  { label: 'List.visibleIssueIds' },
-)
+// Convert search params to filter state format for the utility functions
+const searchToFilterState = (search: ValidatedSearch) => ({
+  orderBy: search.orderBy || 'created',
+  orderDirection: search.orderDirection || 'desc',
+  status: search.status || null,
+  priority: search.priority || null,
+  query: search.query || null,
+})
 
 export const Search = () => {
   const { store } = useStore()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
+
+  // Create a reactive query that uses search params directly
+  const filteredIssueIds$ = queryDb(
+    () => {
+      const filterState = searchToFilterState(searchParams)
+      return tables.issue
+        .select('id')
+        .where({ ...filterStateToWhere(filterState), deleted: null })
+        .orderBy(filterStateToOrderBy(filterState))
+    },
+    { label: 'Search.visibleIssueIds' },
+  )
+
   const filteredIssueIds = store.useQuery(filteredIssueIds$)
-  const [filterState] = useFilterState()
 
   return (
     <>
-      <Filters filteredCount={filterState.query ? filteredIssueIds.length : 0} search />
-      <FilteredList filteredIssueIds={filterState.query ? filteredIssueIds : []} />
+      <Filters filteredCount={searchParams.query ? filteredIssueIds.length : 0} search />
+      <FilteredList filteredIssueIds={searchParams.query ? filteredIssueIds : []} />
     </>
   )
 }
```

### Diff: src/components/layout/search/search-bar.tsx

```diff
diff --git a/src/components/layout/search/search-bar.tsx b/src/components/layout/search/search-bar.tsx
index 6705de2..a1ed4ce 100644
--- a/src/components/layout/search/search-bar.tsx
+++ b/src/components/layout/search/search-bar.tsx
@@ -1,12 +1,14 @@
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
 import { XMarkIcon } from '@heroicons/react/20/solid'
 import { useKeyboard } from 'react-aria'
-import { Button, Input } from 'react-aria-components'
+import { Input } from 'react-aria-components'
+import { Link, useSearch, useNavigate } from '@tanstack/react-router'
 import { MenuButton } from '@/components/common/menu-button'
-import { useFilterState } from '@/lib/livestore/queries'
+import type { ValidatedSearch } from '@/routes/index'
 
 export const SearchBar = () => {
-  const [filterState, setFilterState] = useFilterState()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
+  const navigate = useNavigate()
 
   const { keyboardProps } = useKeyboard({
     onKeyDown: (e) => {
@@ -16,6 +18,18 @@ export const SearchBar = () => {
     },
   })
 
+  const handleSearchChange = (value: string) => {
+    const newQuery = value || undefined
+    navigate({
+      to: '.',
+      search: (prev: ValidatedSearch) => ({
+        ...prev,
+        query: newQuery,
+      }),
+      replace: true,
+    })
+  }
+
   return (
     <div className="relative flex h-12 shrink-0 items-center border-neutral-200 border-b p-2 text-sm lg:pl-6 dark:border-neutral-700">
       <MenuButton className="lg:hidden" />
@@ -23,20 +37,24 @@ export const SearchBar = () => {
       <Input
         autoFocus
         className="input w-full border-none bg-transparent pl-2 placholder:text-neutral-400 text-neutral-800 text-sm focus:outline-none focus:ring-0 lg:pl-3 dark:text-neutral-200 dark:placeholder:text-neutral-500"
-        onChange={(e) => setFilterState({ query: e.target.value })}
+        onChange={(e) => handleSearchChange(e.target.value)}
         placeholder="Search issues..."
         type="text"
-        value={filterState.query ?? ''}
+        value={searchParams.query ?? ''}
         {...keyboardProps}
       />
-      {filterState.query && (
-        <Button
-          aria-label="Clear search query"
+      {searchParams.query && (
+        <Link
+          to="."
+          search={(prev: ValidatedSearch) => ({
+            ...prev,
+            query: undefined,
+          })}
           className="absolute right-2 flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100"
-          onPress={() => setFilterState({ query: null })}
+          aria-label="Clear search query"
         >
           <XMarkIcon className="size-5" />
-        </Button>
+        </Link>
       )}
     </div>
   )
```

### Diff: src/components/layout/sidebar/index.tsx

```diff
diff --git a/src/components/layout/sidebar/index.tsx b/src/components/layout/sidebar/index.tsx
index d0a7cad..8168195 100644
--- a/src/components/layout/sidebar/index.tsx
+++ b/src/components/layout/sidebar/index.tsx
@@ -1,17 +1,16 @@
 import { Bars4Icon, ViewColumnsIcon } from '@heroicons/react/24/outline'
 import React from 'react'
-import { useNavigate } from '@tanstack/react-router'
+import { Link, useSearch } from '@tanstack/react-router'
 import { MenuContext } from '@/app/contexts'
 import { AboutMenu } from '@/components/layout/sidebar/about-menu'
 import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
 import { SearchButton } from '@/components/layout/sidebar/search-button'
 import { ThemeButton } from '@/components/layout/sidebar/theme-button'
 import { ToolbarButton } from '@/components/layout/toolbar/toolbar-button'
-import { useFilterState } from '@/lib/livestore/queries'
+import type { ValidatedSearch } from '@/routes/index'
 
 export const Sidebar = ({ className }: { className?: string }) => {
-  const [, setFilterState] = useFilterState()
-  const navigate = useNavigate()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
   const menuContext = React.useContext(MenuContext)
   const setShowMenu =
     menuContext?.setShowMenu ||
@@ -24,13 +23,11 @@ export const Sidebar = ({ className }: { className?: string }) => {
       title: 'List view',
       icon: Bars4Icon,
       href: '/',
-      onClick: () => setFilterState({ status: null }),
     },
     {
       title: 'Board view',
       icon: ViewColumnsIcon,
       href: '/board',
-      onClick: () => setFilterState({ status: null }),
     },
   ]
 
@@ -50,19 +47,17 @@ export const Sidebar = ({ className }: { className?: string }) => {
           Issues
         </h2>
         <nav className="space-y-px text-sm leading-none">
-          {navItems.map(({ title, icon: Icon, href, onClick }) => (
-            <button
-              className="flex h-8 w-full items-center gap-2 rounded-md px-2 text-left hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+          {navItems.map(({ title, icon: Icon, href }) => (
+            <Link
               key={href}
-              onClick={() => {
-                onClick()
-                setShowMenu(false)
-                navigate({ to: href })
-              }}
+              to={href}
+              search={searchParams}
+              className="flex h-8 w-full items-center gap-2 rounded-md px-2 text-left hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+              onClick={() => setShowMenu(false)}
             >
               <Icon className="size-4" />
               <span>{title}</span>
-            </button>
+            </Link>
           ))}
         </nav>
       </div>
```

### Diff: src/components/layout/sidebar/search-button.tsx

```diff
diff --git a/src/components/layout/sidebar/search-button.tsx b/src/components/layout/sidebar/search-button.tsx
index 426b268..93cf117 100644
--- a/src/components/layout/sidebar/search-button.tsx
+++ b/src/components/layout/sidebar/search-button.tsx
@@ -1,12 +1,11 @@
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
 import React from 'react'
-import { useNavigate } from '@tanstack/react-router'
+import { Link, useSearch } from '@tanstack/react-router'
 import { MenuContext } from '@/app/contexts'
-import { useFilterState } from '@/lib/livestore/queries'
+import type { ValidatedSearch } from '@/routes/index'
 
 export const SearchButton = () => {
-  const [, setFilterState] = useFilterState()
-  const navigate = useNavigate()
+  const searchParams = useSearch({ strict: false }) as ValidatedSearch
   const menuContext = React.useContext(MenuContext)
   const { setShowMenu } = menuContext || {
     setShowMenu: () => {
@@ -15,16 +14,14 @@ export const SearchButton = () => {
   }
 
   return (
-    <button
+    <Link
+      to="/search"
+      search={searchParams}
       aria-label="Open search page"
       className="flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-      onClick={() => {
-        setFilterState({ query: null })
-        setShowMenu(false)
-        navigate({ to: '/search' })
-      }}
+      onClick={() => setShowMenu(false)}
     >
       <MagnifyingGlassIcon className="size-4" />
-    </button>
+    </Link>
   )
 }
```

### Diff: src/routes/board.tsx

```diff
diff --git a/src/routes/board.tsx b/src/routes/board.tsx
index f0c3997..9eabba9 100644
--- a/src/routes/board.tsx
+++ b/src/routes/board.tsx
@@ -1,6 +1,61 @@
 import { createFileRoute } from '@tanstack/react-router'
 import { Board } from '@/components/layout/board'
+import type { FilterState } from '@/lib/livestore/schema/filter-state'
+
+// Define a type for validated search params that matches what we expect
+export type ValidatedSearch = {
+  orderBy?: FilterState['orderBy']
+  orderDirection?: FilterState['orderDirection']
+  status?: FilterState['status']
+  priority?: FilterState['priority']
+  query?: FilterState['query']
+}
 
 export const Route = createFileRoute('/board')({
+  validateSearch: (search: Record<string, unknown>): ValidatedSearch => {
+    const validated: ValidatedSearch = {}
+
+    // Handle sorting
+    if (typeof search.sort === 'string') {
+      const [orderBy, orderDirection] = search.sort.split('-')
+      if (orderBy === 'priority' || orderBy === 'status' || orderBy === 'created' || orderBy === 'modified') {
+        validated.orderBy = orderBy as FilterState['orderBy']
+      }
+      if (orderDirection === 'asc' || orderDirection === 'desc') {
+        validated.orderDirection = orderDirection as FilterState['orderDirection']
+      }
+    }
+
+    // Handle status filters
+    if (typeof search.status === 'string') {
+      const statusValues = search.status
+        .split(',')
+        .map(s => parseInt(s.trim()))
+        .filter(s => !isNaN(s) && s >= 0 && s <= 4)
+        .map(s => s as 0 | 1 | 2 | 3 | 4)
+      if (statusValues.length > 0) {
+        validated.status = statusValues as FilterState['status']
+      }
+    }
+
+    // Handle priority filters
+    if (typeof search.priority === 'string') {
+      const priorityValues = search.priority
+        .split(',')
+        .map(p => parseInt(p.trim()))
+        .filter(p => !isNaN(p) && p >= 0 && p <= 4)
+        .map(p => p as 0 | 1 | 2 | 3 | 4)
+      if (priorityValues.length > 0) {
+        validated.priority = priorityValues as FilterState['priority']
+      }
+    }
+
+    // Handle search query
+    if (typeof search.q === 'string') {
+      validated.query = search.q
+    }
+
+    return validated
+  },
   component: Board,
 })
\ No newline at end of file
```

### Diff: src/routes/index.tsx

```diff
diff --git a/src/routes/index.tsx b/src/routes/index.tsx
index b5daeb5..3746f86 100644
--- a/src/routes/index.tsx
+++ b/src/routes/index.tsx
@@ -1,6 +1,61 @@
 import { createFileRoute } from '@tanstack/react-router'
 import { List } from '@/components/layout/list'
+import type { FilterState } from '@/lib/livestore/schema/filter-state'
+
+// Define a type for validated search params that matches what we expect
+export type ValidatedSearch = {
+  orderBy?: FilterState['orderBy']
+  orderDirection?: FilterState['orderDirection']
+  status?: FilterState['status']
+  priority?: FilterState['priority']
+  query?: FilterState['query']
+}
 
 export const Route = createFileRoute('/')({
+  validateSearch: (search: Record<string, unknown>): ValidatedSearch => {
+    const validated: ValidatedSearch = {}
+
+    // Handle sorting
+    if (typeof search.sort === 'string') {
+      const [orderBy, orderDirection] = search.sort.split('-')
+      if (orderBy === 'priority' || orderBy === 'status' || orderBy === 'created' || orderBy === 'modified') {
+        validated.orderBy = orderBy as FilterState['orderBy']
+      }
+      if (orderDirection === 'asc' || orderDirection === 'desc') {
+        validated.orderDirection = orderDirection as FilterState['orderDirection']
+      }
+    }
+
+    // Handle status filters
+    if (typeof search.status === 'string') {
+      const statusValues = search.status
+        .split(',')
+        .map(s => parseInt(s.trim()))
+        .filter(s => !isNaN(s) && s >= 0 && s <= 4)
+        .map(s => s as 0 | 1 | 2 | 3 | 4)
+      if (statusValues.length > 0) {
+        validated.status = statusValues as FilterState['status']
+      }
+    }
+
+    // Handle priority filters
+    if (typeof search.priority === 'string') {
+      const priorityValues = search.priority
+        .split(',')
+        .map(p => parseInt(p.trim()))
+        .filter(p => !isNaN(p) && p >= 0 && p <= 4)
+        .map(p => p as 0 | 1 | 2 | 3 | 4)
+      if (priorityValues.length > 0) {
+        validated.priority = priorityValues as FilterState['priority']
+      }
+    }
+
+    // Handle search query
+    if (typeof search.q === 'string') {
+      validated.query = search.q
+    }
+
+    return validated
+  },
   component: List,
 })
\ No newline at end of file
```

### Diff: src/routes/search.tsx

```diff
diff --git a/src/routes/search.tsx b/src/routes/search.tsx
index 85f55c2..31d883c 100644
--- a/src/routes/search.tsx
+++ b/src/routes/search.tsx
@@ -1,6 +1,61 @@
 import { createFileRoute } from '@tanstack/react-router'
 import { Search } from '@/components/layout/search'
+import type { FilterState } from '@/lib/livestore/schema/filter-state'
+
+// Define a type for validated search params that matches what we expect
+export type ValidatedSearch = {
+  orderBy?: FilterState['orderBy']
+  orderDirection?: FilterState['orderDirection']
+  status?: FilterState['status']
+  priority?: FilterState['priority']
+  query?: FilterState['query']
+}
 
 export const Route = createFileRoute('/search')({
+  validateSearch: (search: Record<string, unknown>): ValidatedSearch => {
+    const validated: ValidatedSearch = {}
+
+    // Handle sorting
+    if (typeof search.sort === 'string') {
+      const [orderBy, orderDirection] = search.sort.split('-')
+      if (orderBy === 'priority' || orderBy === 'status' || orderBy === 'created' || orderBy === 'modified') {
+        validated.orderBy = orderBy as FilterState['orderBy']
+      }
+      if (orderDirection === 'asc' || orderDirection === 'desc') {
+        validated.orderDirection = orderDirection as FilterState['orderDirection']
+      }
+    }
+
+    // Handle status filters
+    if (typeof search.status === 'string') {
+      const statusValues = search.status
+        .split(',')
+        .map(s => parseInt(s.trim()))
+        .filter(s => !isNaN(s) && s >= 0 && s <= 4)
+        .map(s => s as 0 | 1 | 2 | 3 | 4)
+      if (statusValues.length > 0) {
+        validated.status = statusValues as FilterState['status']
+      }
+    }
+
+    // Handle priority filters
+    if (typeof search.priority === 'string') {
+      const priorityValues = search.priority
+        .split(',')
+        .map(p => parseInt(p.trim()))
+        .filter(p => !isNaN(p) && p >= 0 && p <= 4)
+        .map(p => p as 0 | 1 | 2 | 3 | 4)
+      if (priorityValues.length > 0) {
+        validated.priority = priorityValues as FilterState['priority']
+      }
+    }
+
+    // Handle search query
+    if (typeof search.q === 'string') {
+      validated.query = search.q
+    }
+
+    return validated
+  },
   component: Search,
 })
\ No newline at end of file
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
