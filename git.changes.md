# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- package.json
- src/app/app.tsx
- src/app/main.tsx
- src/app/provider.tsx
- src/components/layout/board/card.tsx
- src/components/layout/index.tsx
- src/components/layout/issue/index.tsx
- src/components/layout/list/row.tsx
- src/components/layout/sidebar/about-modal.tsx
- src/components/layout/sidebar/index.tsx
- src/components/layout/sidebar/search-button.tsx
- src/components/layout/toolbar/index.tsx
- src/components/layout/toolbar/reset-button.tsx
- vite.config.ts

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: package.json

```diff
diff --git a/package.json b/package.json
index eb3c72e..75536b4 100644
--- a/package.json
+++ b/package.json
@@ -10,6 +10,8 @@
     "@livestore/react": "0.3.1",
     "@overengineering/fps-meter": "0.2.1",
     "@tailwindcss/forms": "0.5.10",
+    "@tanstack/react-router": "^1.131.35",
+    "@tanstack/router-devtools": "^1.131.35",
     "@tiptap/core": "^3.4.1",
     "@tiptap/extension-placeholder": "^3.4.1",
     "@tiptap/pm": "^3.4.1",
@@ -22,7 +24,6 @@
     "react-aria-components": "1.12.1",
     "react-dom": "19.1.1",
     "react-markdown": "10.1.0",
-    "react-router-dom": "7.8.2",
     "react-virtualized-auto-sizer": "1.0.26",
     "tiptap-markdown": "0.8.10"
   },
@@ -31,14 +32,15 @@
     "@svgr/plugin-jsx": "^8.1.0",
     "@svgr/plugin-svgo": "^8.1.0",
     "@tailwindcss/typography": "^0.5.16",
-    "@tailwindcss/vite": "^4.1.12",
+    "@tailwindcss/vite": "^4.1.13",
+    "@tanstack/router-plugin": "^1.131.35",
     "@types/node": "^24.3.1",
     "@types/react": "^19.1.12",
     "@types/react-dom": "^19.1.9",
     "@vitejs/plugin-react": "^5.0.2",
     "husky": "^9.1.7",
     "knip": "^5.63.1",
-    "tailwindcss": "^4.1.12",
+    "tailwindcss": "^4.1.13",
     "typescript": "^5.9.2",
     "ultracite": "^5.3.3",
     "vite": "^7.1.4",
```

### Diff: src/app/app.tsx

```diff
diff --git a/src/app/app.tsx b/src/app/app.tsx
deleted file mode 100644
index b7cc1a6..0000000
--- a/src/app/app.tsx
+++ /dev/null
@@ -1,37 +0,0 @@
-import { Provider } from '@/app/provider'
-import { Layout } from '@/components/layout'
-import { Board } from '@/components/layout/board'
-import { Issue } from '@/components/layout/issue'
-import { NewIssueModal } from '@/components/layout/issue/new-issue-modal'
-import { List } from '@/components/layout/list'
-import { Search } from '@/components/layout/search'
-import { Sidebar } from '@/components/layout/sidebar'
-import 'animate.css/animate.min.css'
-import { BrowserRouter, Route, Routes } from 'react-router-dom'
-
-export const App = () => {
-  const router = (
-    <Routes>
-      <Route element={<List />} path="/" />
-      <Route element={<Search />} path="/search" />
-      <Route element={<Board />} path="/board" />
-      <Route element={<Issue />} path="/issue/:id" />
-    </Routes>
-  )
-
-  return (
-    <BrowserRouter>
-      <Provider>
-        <Layout>
-          <Sidebar className="hidden lg:flex" />
-          <div className="w-full p-2 lg:max-w-[calc(100%-16rem)] lg:pl-0">
-            <main className="flex h-full flex-col rounded-lg border border-neutral-200 dark:border-neutral-700">
-              {router}
-            </main>
-          </div>
-        </Layout>
-        <NewIssueModal />
-      </Provider>
-    </BrowserRouter>
-  )
-}
```

### Diff: src/app/main.tsx

```diff
diff --git a/src/app/main.tsx b/src/app/main.tsx
index c57b5c9..904ca0a 100644
--- a/src/app/main.tsx
+++ b/src/app/main.tsx
@@ -1,6 +1,9 @@
-import { App } from '@/app/app'
+import { RouterProvider, createRouter } from '@tanstack/react-router'
+import { routeTree } from '@/routeTree.gen'
 import '@/app/style.css'
 import { createRoot } from 'react-dom/client'
 
+const router = createRouter({ routeTree })
+
 const root = createRoot(document.getElementById('root')!)
-root.render(<App />)
+root.render(<RouterProvider router={router} />)
```

### Diff: src/app/provider.tsx

```diff
diff --git a/src/app/provider.tsx b/src/app/provider.tsx
index a29104d..4c42ec1 100644
--- a/src/app/provider.tsx
+++ b/src/app/provider.tsx
@@ -3,7 +3,7 @@ import LiveStoreSharedWorker from '@livestore/adapter-web/shared-worker?sharedwo
 import { LiveStoreProvider } from '@livestore/react'
 import React from 'react'
 import { unstable_batchedUpdates as batchUpdates } from 'react-dom'
-import { useNavigate } from 'react-router-dom'
+import { useNavigate } from '@tanstack/react-router'
 import { MenuContext, NewIssueModalContext } from '@/app/contexts'
 import { schema } from '@/lib/livestore/schema'
 import { renderBootStatus } from '@/lib/livestore/utils'
@@ -42,7 +42,7 @@ export const Provider = ({ children }: { children: React.ReactNode }) => {
         e.preventDefault()
       }
       if (e.key === '/' && e.shiftKey) {
-        navigate('/search')
+        navigate({ to: '/search' })
         e.preventDefault()
       }
     }
```

### Diff: src/components/layout/board/card.tsx

```diff
diff --git a/src/components/layout/board/card.tsx b/src/components/layout/board/card.tsx
index c8411fd..e45cf3d 100644
--- a/src/components/layout/board/card.tsx
+++ b/src/components/layout/board/card.tsx
@@ -1,6 +1,6 @@
 import { useStore } from '@livestore/react'
 import { Button } from 'react-aria-components'
-import { useNavigate } from 'react-router-dom'
+import { useNavigate } from '@tanstack/react-router'
 import { Avatar } from '@/components/common/avatar'
 import { PriorityMenu } from '@/components/common/priority-menu'
 import { StatusMenu } from '@/components/common/status-menu'
@@ -22,11 +22,11 @@ export const Card = ({ issue, className }: { issue: Issue; className?: string })
   return (
     <div
       className={`h-full cursor-pointer rounded-md border border-transparent bg-white p-2 text-sm shadow-sm dark:border-neutral-700/50 dark:bg-neutral-900 dark:shadow-none ${className ?? ''}`}
-      onClick={() => navigate(`/issue/${issue.id}`)}
+      onClick={() => navigate({ to: '/issue/$id', params: { id: issue.id.toString() } })}
       onKeyDown={(e) => {
         if (e.key === 'Enter' || e.key === ' ') {
           e.preventDefault()
-          navigate(`/issue/${issue.id}`)
+          navigate({ to: '/issue/$id', params: { id: issue.id.toString() } })
         }
       }}
       role="button"
```

### Diff: src/components/layout/index.tsx

```diff
diff --git a/src/components/layout/index.tsx b/src/components/layout/index.tsx
index 07ac09a..70d49f1 100644
--- a/src/components/layout/index.tsx
+++ b/src/components/layout/index.tsx
@@ -1,4 +1,5 @@
 import { MobileMenu } from '@/components/layout/sidebar/mobile-menu'
+import { Sidebar } from '@/components/layout/sidebar'
 import { Toolbar } from '@/components/layout/toolbar'
 import { useFrontendState } from '@/lib/livestore/queries'
 
@@ -8,6 +9,7 @@ export const Layout = ({ children }: { children: React.ReactNode }) => {
   return (
     <div className="flex h-full flex-col">
       <div className={`relative flex w-screen grow ${frontendState.showToolbar ? 'h-[calc(100%-3.5rem)]' : 'h-full'}`}>
+        <Sidebar />
         {children}
       </div>
       {frontendState.showToolbar && <Toolbar />}
```

### Diff: src/components/layout/issue/index.tsx

```diff
diff --git a/src/components/layout/issue/index.tsx b/src/components/layout/issue/index.tsx
index 0ea8da9..1995415 100644
--- a/src/components/layout/issue/index.tsx
+++ b/src/components/layout/issue/index.tsx
@@ -2,7 +2,7 @@ import { ChevronRightIcon } from '@heroicons/react/16/solid'
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
 import { Button } from 'react-aria-components'
-import { useNavigate, useParams } from 'react-router-dom'
+import { useNavigate, useParams } from '@tanstack/react-router'
 import { Avatar } from '@/components/common/avatar'
 import { MenuButton } from '@/components/common/menu-button'
 import { PriorityMenu } from '@/components/common/priority-menu'
@@ -20,33 +20,34 @@ import { formatDate } from '@/utils/format-date'
 import { getIssueTag } from '@/utils/get-issue-tag'
 
 export const Issue = () => {
-  const id = Number(useParams().id ?? 0)
+  const { id } = useParams({ from: '/issue/$id' })
   const navigate = useNavigate()
   const { store } = useStore()
-  const issue = store.useQuery(queryDb(tables.issue.where({ id }).first(), { deps: [id] }))
+  const issueId = Number(id ?? 0)
+  const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId }).first(), { deps: [issueId] }))
 
   const close = () => {
     if (window.history.length > 2) {
-      navigate(-1)
+      window.history.back()
     } else {
-      navigate('/')
+      navigate({ to: '/' })
     }
   }
 
   const handleChangeStatus = (status: Status) => {
-    store.commit(events.updateIssueStatus({ id: issue.id, status, modified: new Date() }))
+    store.commit(events.updateIssueStatus({ id: issueId, status, modified: new Date() }))
   }
 
   const handleChangePriority = (priority: Priority) => {
-    store.commit(events.updateIssuePriority({ id: issue.id, priority, modified: new Date() }))
+    store.commit(events.updateIssuePriority({ id: issueId, priority, modified: new Date() }))
   }
 
   const handleChangeDescription = (body: string) => {
-    store.commit(events.updateDescription({ id: issue.id, body }))
+    store.commit(events.updateDescription({ id: issueId, body }))
   }
 
   const description = store.useQuery(
-    queryDb(tables.description.select('body').where({ id: issue.id }).first(), { deps: [issue.id] }),
+    queryDb(tables.description.select('body').where({ id: issueId }).first(), { deps: [issueId] }),
   )
 
   return (
@@ -62,10 +63,10 @@ export const Issue = () => {
             Issues
           </Button>
           <ChevronRightIcon className="size-3.5" />
-          <div className="text-neutral-500 dark:text-neutral-400">{getIssueTag(id)}</div>
+           <div className="text-neutral-500 dark:text-neutral-400">{getIssueTag(issueId)}</div>
         </div>
         <div className="flex items-center gap-px">
-          <DeleteButton className="hidden lg:block" close={close} issueId={id} />
+          <DeleteButton className="hidden lg:block" close={close} issueId={issueId} />
           <BackButton close={close} />
         </div>
       </div>
```

### Diff: src/components/layout/list/row.tsx

```diff
diff --git a/src/components/layout/list/row.tsx b/src/components/layout/list/row.tsx
index 239106a..a11beec 100644
--- a/src/components/layout/list/row.tsx
+++ b/src/components/layout/list/row.tsx
@@ -1,7 +1,7 @@
 import { useStore } from '@livestore/react'
 import type { CSSProperties } from 'react'
 import { memo } from 'react'
-import { useNavigate } from 'react-router-dom'
+import { useNavigate } from '@tanstack/react-router'
 import { Avatar } from '@/components/common/avatar'
 import { PriorityMenu } from '@/components/common/priority-menu'
 import { StatusMenu } from '@/components/common/status-menu'
@@ -27,7 +27,7 @@ export const Row = memo(({ issue, style }: { issue: Issue; style: CSSProperties
       className="flex w-full cursor-pointer items-center justify-between gap-4 border-neutral-200 border-b border-none bg-transparent p-0 pr-4 pl-2 text-left text-sm last:border-b-0 hover:bg-neutral-50 lg:pl-4 dark:border-neutral-700 dark:hover:bg-neutral-800/50"
       id={issue.id.toString()}
       key={issue.id}
-      onClick={() => navigate(`/issue/${issue.id}`)}
+      onClick={() => navigate({ to: '/issue/$id', params: { id: issue.id.toString() } })}
        style={style}
       type="button"
     >
```

### Diff: src/components/layout/sidebar/about-modal.tsx

```diff
diff --git a/src/components/layout/sidebar/about-modal.tsx b/src/components/layout/sidebar/about-modal.tsx
index 551c278..3be1991 100644
--- a/src/components/layout/sidebar/about-modal.tsx
+++ b/src/components/layout/sidebar/about-modal.tsx
@@ -1,4 +1,3 @@
-import { Link } from 'react-router-dom'
 import { Modal } from '@/components/common/modal'
 import { useFrontendState } from '@/lib/livestore/queries'
 
@@ -11,16 +10,16 @@ export const AboutModal = ({ show, setShow }: { show: boolean; setShow: (show: b
         <div className="flex flex-col gap-2 text-neutral-500 text-sm">
           <p>
             Zen Sync is an example of a collaboration application using a local-first approach, obviously inspired by{' '}
-            <Link className="text-orange-600 underline" target="_blank" to="https://linear.app">
+            <a className="text-orange-600 underline" target="_blank" href="https://linear.app" rel="noopener noreferrer">
               Linear
-            </Link>
+            </a>
             .
           </p>
           <p>
             It's built using{' '}
-            <Link className="text-orange-600 underline" target="_blank" to="https://www.livestore.dev">
+            <a className="text-orange-600 underline" target="_blank" href="https://www.livestore.dev" rel="noopener noreferrer">
               LiveStore
-            </Link>
+            </a>
             , a local-first sync layer for web and mobile apps.
           </p>
         </div>
```

### Diff: src/components/layout/sidebar/index.tsx

```diff
diff --git a/src/components/layout/sidebar/index.tsx b/src/components/layout/sidebar/index.tsx
index 263577a..d0a7cad 100644
--- a/src/components/layout/sidebar/index.tsx
+++ b/src/components/layout/sidebar/index.tsx
@@ -1,6 +1,6 @@
 import { Bars4Icon, ViewColumnsIcon } from '@heroicons/react/24/outline'
 import React from 'react'
-import { Link } from 'react-router-dom'
+import { useNavigate } from '@tanstack/react-router'
 import { MenuContext } from '@/app/contexts'
 import { AboutMenu } from '@/components/layout/sidebar/about-menu'
 import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
@@ -11,6 +11,7 @@ import { useFilterState } from '@/lib/livestore/queries'
 
 export const Sidebar = ({ className }: { className?: string }) => {
   const [, setFilterState] = useFilterState()
+  const navigate = useNavigate()
   const menuContext = React.useContext(MenuContext)
   const setShowMenu =
     menuContext?.setShowMenu ||
@@ -50,18 +51,18 @@ export const Sidebar = ({ className }: { className?: string }) => {
         </h2>
         <nav className="space-y-px text-sm leading-none">
           {navItems.map(({ title, icon: Icon, href, onClick }) => (
-            <Link
-              className="flex h-8 items-center gap-2 rounded-md px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+            <button
+              className="flex h-8 w-full items-center gap-2 rounded-md px-2 text-left hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
               key={href}
               onClick={() => {
                 onClick()
                 setShowMenu(false)
+                navigate({ to: href })
               }}
-              to={href}
             >
               <Icon className="size-4" />
               <span>{title}</span>
-            </Link>
+            </button>
           ))}
         </nav>
       </div>
```

### Diff: src/components/layout/sidebar/search-button.tsx

```diff
diff --git a/src/components/layout/sidebar/search-button.tsx b/src/components/layout/sidebar/search-button.tsx
index 887cc44..426b268 100644
--- a/src/components/layout/sidebar/search-button.tsx
+++ b/src/components/layout/sidebar/search-button.tsx
@@ -1,11 +1,12 @@
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
 import React from 'react'
-import { Link } from 'react-router-dom'
+import { useNavigate } from '@tanstack/react-router'
 import { MenuContext } from '@/app/contexts'
 import { useFilterState } from '@/lib/livestore/queries'
 
 export const SearchButton = () => {
   const [, setFilterState] = useFilterState()
+  const navigate = useNavigate()
   const menuContext = React.useContext(MenuContext)
   const { setShowMenu } = menuContext || {
     setShowMenu: () => {
@@ -14,16 +15,16 @@ export const SearchButton = () => {
   }
 
   return (
-    <Link
+    <button
       aria-label="Open search page"
       className="flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
       onClick={() => {
         setFilterState({ query: null })
         setShowMenu(false)
+        navigate({ to: '/search' })
       }}
-      to="/search"
     >
       <MagnifyingGlassIcon className="size-4" />
-    </Link>
+    </button>
   )
 }
```

### Diff: src/components/layout/toolbar/index.tsx

```diff
diff --git a/src/components/layout/toolbar/index.tsx b/src/components/layout/toolbar/index.tsx
index ac09a3d..1d18ffb 100644
--- a/src/components/layout/toolbar/index.tsx
+++ b/src/components/layout/toolbar/index.tsx
@@ -1,5 +1,4 @@
 import { FPSMeter } from '@overengineering/fps-meter'
-import { Link } from 'react-router-dom'
 import { Icon } from '@/components/icons'
 import { DownloadButton } from '@/components/layout/toolbar/download-button'
 import { ResetButton } from '@/components/layout/toolbar/reset-button'
@@ -13,14 +12,15 @@ export const Toolbar = () => {
   return (
     <div className="flex h-10 w-screen items-center justify-between border-neutral-700 border-t bg-neutral-950 pr-2 pl-1 text-neutral-400">
       <div className="flex items-center gap-1">
-        <Link
+        <a
           className="flex h-6 items-center gap-2 rounded bg-neutral-900 px-1.5 font-bold text-neutral-300 text-sm hover:bg-neutral-800 focus:bg-neutral-800"
           target="_blank"
-          to="https://livestore.dev/"
+          href="https://livestore.dev/"
+          rel="noopener noreferrer"
         >
           <Icon className="mt-0.5 size-5" name="livestore" />
           <span>LiveStore</span>
-        </Link>
+        </a>
         <SyncToggle />
       </div>
       <div className="hidden items-center gap-1 lg:flex">
```

### Diff: src/components/layout/toolbar/reset-button.tsx

```diff
diff --git a/src/components/layout/toolbar/reset-button.tsx b/src/components/layout/toolbar/reset-button.tsx
index 0f8b167..c8738c8 100644
--- a/src/components/layout/toolbar/reset-button.tsx
+++ b/src/components/layout/toolbar/reset-button.tsx
@@ -1,7 +1,7 @@
 import { TrashIcon } from '@heroicons/react/16/solid'
 import React from 'react'
 import { Button } from 'react-aria-components'
-import { useNavigate } from 'react-router-dom'
+import { useNavigate } from '@tanstack/react-router'
 
 const CONFIRM_TIMEOUT_MS = 2000
 
@@ -11,7 +11,7 @@ export const ResetButton = ({ className }: { className?: string }) => {
 
   const onClick = () => {
     if (confirm) {
-      navigate('/?reset')
+      navigate({ to: '/', search: { reset: true } })
       window.location.reload()
     }
     setConfirm(true)
```

### Diff: vite.config.ts

```diff
diff --git a/vite.config.ts b/vite.config.ts
index 8e17ecf..deefadb 100644
--- a/vite.config.ts
+++ b/vite.config.ts
@@ -8,6 +8,7 @@ import tailwindcss from '@tailwindcss/vite'
 import react from '@vitejs/plugin-react'
 import { defineConfig } from 'vite'
 import svgr from 'vite-plugin-svgr'
+import { tanstackRouter } from '@tanstack/router-plugin/vite'
 
 const isProdBuild = process.env.NODE_ENV === 'production'
 
@@ -27,6 +28,7 @@ export default defineConfig({
     },
   },
   plugins: [
+    tanstackRouter({ target: 'react', autoCodeSplitting: true }),
     react(),
     tailwindcss(),
     livestoreDevtoolsPlugin({ schemaPath: './src/lib/livestore/schema/index.ts' }),
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
