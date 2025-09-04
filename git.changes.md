# Changes for Commit

This document contains a summary of changes in the current working directory, intended for automated analysis to generate a high-quality commit message and description.

---

## 📂 Affected Files

The following files have been modified, added, or deleted:

- package.json
- src/app/provider.tsx
- src/app/style.css
- src/components/common/editor-menu.tsx
- src/components/common/menu-button.tsx
- src/components/common/modal.tsx
- src/components/common/priority-menu.tsx
- src/components/common/status-menu.tsx
- src/components/layout/board/card.tsx
- src/components/layout/board/column.tsx
- src/components/layout/board/draggable.tsx
- src/components/layout/board/index.tsx
- src/components/layout/filters/filter-menu.tsx
- src/components/layout/filters/index.tsx
- src/components/layout/filters/priority-filter.tsx
- src/components/layout/filters/sort-menu.tsx
- src/components/layout/filters/status-filter.tsx
- src/components/layout/issue/back-button.tsx
- src/components/layout/issue/comment-input.tsx
- src/components/layout/issue/delete-button.tsx
- src/components/layout/issue/index.tsx
- src/components/layout/issue/new-issue-modal.tsx
- src/components/layout/list/index.tsx
- src/components/layout/search/index.tsx
- src/components/layout/search/search-bar.tsx
- src/components/layout/sidebar/about-menu.tsx
- src/components/layout/sidebar/new-issue-button.tsx
- src/components/layout/sidebar/theme-button.tsx
- src/components/layout/toolbar/download-button.tsx
- src/components/layout/toolbar/mobile-menu.tsx
- src/components/layout/toolbar/reset-button.tsx
- src/components/layout/toolbar/seed-input.tsx
- src/components/layout/toolbar/share-button.tsx
- src/components/layout/toolbar/sync-toggle.tsx
- src/components/layout/toolbar/toolbar-button.tsx
- src/components/layout/toolbar/user-input.tsx
- src/lib/livestore/utils.tsx
- vite.config.ts

---

## 📝 Code Differences (Diff)

Below are the detailed diffs for each affected file.

### Diff: package.json

```diff
diff --git a/package.json b/package.json
index 75536b4..015e78d 100644
--- a/package.json
+++ b/package.json
@@ -9,6 +9,15 @@
     "@livestore/livestore": "0.3.1",
     "@livestore/react": "0.3.1",
     "@overengineering/fps-meter": "0.2.1",
+    "@radix-ui/react-checkbox": "^1.3.3",
+    "@radix-ui/react-dialog": "^1.1.15",
+    "@radix-ui/react-dropdown-menu": "^2.1.16",
+    "@radix-ui/react-popover": "^1.1.15",
+    "@radix-ui/react-select": "^2.2.6",
+    "@radix-ui/react-separator": "^1.1.7",
+    "@radix-ui/react-slot": "^1.2.3",
+    "@radix-ui/react-switch": "^1.2.6",
+    "@radix-ui/react-tooltip": "^1.2.8",
     "@tailwindcss/forms": "0.5.10",
     "@tanstack/react-router": "^1.131.35",
     "@tanstack/router-devtools": "^1.131.35",
@@ -18,13 +27,17 @@
     "@tiptap/react": "^3.4.1",
     "@tiptap/starter-kit": "^3.4.1",
     "animate.css": "4.1.1",
+    "class-variance-authority": "^0.7.1",
+    "clsx": "^2.1.1",
     "fractional-indexing": "3.2.0",
+    "lina": "^0.0.1",
+    "lucide-react": "^0.542.0",
     "react": "19.1.1",
-    "react-aria": "3.43.1",
-    "react-aria-components": "1.12.1",
+
     "react-dom": "19.1.1",
     "react-markdown": "10.1.0",
     "react-virtualized-auto-sizer": "1.0.26",
+    "tailwind-merge": "^3.3.1",
     "tiptap-markdown": "0.8.10"
   },
   "devDependencies": {
@@ -41,6 +54,7 @@
     "husky": "^9.1.7",
     "knip": "^5.63.1",
     "tailwindcss": "^4.1.13",
+    "tw-animate-css": "^1.3.8",
     "typescript": "^5.9.2",
     "ultracite": "^5.3.3",
     "vite": "^7.1.4",
```

### Diff: src/app/provider.tsx

```diff
diff --git a/src/app/provider.tsx b/src/app/provider.tsx
index 4c42ec1..b238844 100644
--- a/src/app/provider.tsx
+++ b/src/app/provider.tsx
@@ -6,7 +6,7 @@ import { unstable_batchedUpdates as batchUpdates } from 'react-dom'
 import { useNavigate } from '@tanstack/react-router'
 import { MenuContext, NewIssueModalContext } from '@/app/contexts'
 import { schema } from '@/lib/livestore/schema'
-import { renderBootStatus } from '@/lib/livestore/utils'
+import { renderBootStatus } from '@/utils'
 import LiveStoreWorker from '@/lib/livestore/worker?worker'
 import type { Status } from '@/types/status'
```

### Diff: src/app/style.css

```diff
diff --git a/src/app/style.css b/src/app/style.css
index f9be08f..bdb4502 100644
--- a/src/app/style.css
+++ b/src/app/style.css
@@ -1,4 +1,7 @@
 @import "tailwindcss";
+@import "tw-animate-css";
+
+@custom-variant dark (&:is(.dark *));
 
 @theme {
   --font-sans: 'Inter UI', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
@@ -79,3 +82,119 @@ input::-webkit-inner-spin-button {
 input[type="number"] {
   -moz-appearance: textfield;
 }
+
+@theme inline {
+  --radius-sm: calc(var(--radius) - 4px);
+  --radius-md: calc(var(--radius) - 2px);
+  --radius-lg: var(--radius);
+  --radius-xl: calc(var(--radius) + 4px);
+  --color-background: var(--background);
+  --color-foreground: var(--foreground);
+  --color-card: var(--card);
+  --color-card-foreground: var(--card-foreground);
+  --color-popover: var(--popover);
+  --color-popover-foreground: var(--popover-foreground);
+  --color-primary: var(--primary);
+  --color-primary-foreground: var(--primary-foreground);
+  --color-secondary: var(--secondary);
+  --color-secondary-foreground: var(--secondary-foreground);
+  --color-muted: var(--muted);
+  --color-muted-foreground: var(--muted-foreground);
+  --color-accent: var(--accent);
+  --color-accent-foreground: var(--accent-foreground);
+  --color-destructive: var(--destructive);
+  --color-border: var(--border);
+  --color-input: var(--input);
+  --color-ring: var(--ring);
+  --color-chart-1: var(--chart-1);
+  --color-chart-2: var(--chart-2);
+  --color-chart-3: var(--chart-3);
+  --color-chart-4: var(--chart-4);
+  --color-chart-5: var(--chart-5);
+  --color-sidebar: var(--sidebar);
+  --color-sidebar-foreground: var(--sidebar-foreground);
+  --color-sidebar-primary: var(--sidebar-primary);
+  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
+  --color-sidebar-accent: var(--sidebar-accent);
+  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
+  --color-sidebar-border: var(--sidebar-border);
+  --color-sidebar-ring: var(--sidebar-ring);
+}
+
+:root {
+  --radius: 0.625rem;
+  --background: oklch(1 0 0);
+  --foreground: oklch(0.129 0.042 264.695);
+  --card: oklch(1 0 0);
+  --card-foreground: oklch(0.129 0.042 264.695);
+  --popover: oklch(1 0 0);
+  --popover-foreground: oklch(0.129 0.042 264.695);
+  --primary: oklch(0.208 0.042 265.755);
+  --primary-foreground: oklch(0.984 0.003 247.858);
+  --secondary: oklch(0.968 0.007 247.896);
+  --secondary-foreground: oklch(0.208 0.042 265.755);
+  --muted: oklch(0.968 0.007 247.896);
+  --muted-foreground: oklch(0.554 0.046 257.417);
+  --accent: oklch(0.968 0.007 247.896);
+  --accent-foreground: oklch(0.208 0.042 265.755);
+  --destructive: oklch(0.577 0.245 27.325);
+  --border: oklch(0.929 0.013 255.508);
+  --input: oklch(0.929 0.013 255.508);
+  --ring: oklch(0.704 0.04 256.788);
+  --chart-1: oklch(0.646 0.222 41.116);
+  --chart-2: oklch(0.6 0.118 184.704);
+  --chart-3: oklch(0.398 0.07 227.392);
+  --chart-4: oklch(0.828 0.189 84.429);
+  --chart-5: oklch(0.769 0.188 70.08);
+  --sidebar: oklch(0.984 0.003 247.858);
+  --sidebar-foreground: oklch(0.129 0.042 264.695);
+  --sidebar-primary: oklch(0.208 0.042 265.755);
+  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
+  --sidebar-accent: oklch(0.968 0.007 247.896);
+  --sidebar-accent-foreground: oklch(0.208 0.042 265.755);
+  --sidebar-border: oklch(0.929 0.013 255.508);
+  --sidebar-ring: oklch(0.704 0.04 256.788);
+}
+
+.dark {
+  --background: oklch(0.129 0.042 264.695);
+  --foreground: oklch(0.984 0.003 247.858);
+  --card: oklch(0.208 0.042 265.755);
+  --card-foreground: oklch(0.984 0.003 247.858);
+  --popover: oklch(0.208 0.042 265.755);
+  --popover-foreground: oklch(0.984 0.003 247.858);
+  --primary: oklch(0.929 0.013 255.508);
+  --primary-foreground: oklch(0.208 0.042 265.755);
+  --secondary: oklch(0.279 0.041 260.031);
+  --secondary-foreground: oklch(0.984 0.003 247.858);
+  --muted: oklch(0.279 0.041 260.031);
+  --muted-foreground: oklch(0.704 0.04 256.788);
+  --accent: oklch(0.279 0.041 260.031);
+  --accent-foreground: oklch(0.984 0.003 247.858);
+  --destructive: oklch(0.704 0.191 22.216);
+  --border: oklch(1 0 0 / 10%);
+  --input: oklch(1 0 0 / 15%);
+  --ring: oklch(0.551 0.027 264.364);
+  --chart-1: oklch(0.488 0.243 264.376);
+  --chart-2: oklch(0.696 0.17 162.48);
+  --chart-3: oklch(0.769 0.188 70.08);
+  --chart-4: oklch(0.627 0.265 303.9);
+  --chart-5: oklch(0.645 0.246 16.439);
+  --sidebar: oklch(0.208 0.042 265.755);
+  --sidebar-foreground: oklch(0.984 0.003 247.858);
+  --sidebar-primary: oklch(0.488 0.243 264.376);
+  --sidebar-primary-foreground: oklch(0.984 0.003 247.858);
+  --sidebar-accent: oklch(0.279 0.041 260.031);
+  --sidebar-accent-foreground: oklch(0.984 0.003 247.858);
+  --sidebar-border: oklch(1 0 0 / 10%);
+  --sidebar-ring: oklch(0.551 0.027 264.364);
+}
+
+@layer base {
+  * {
+    @apply border-border outline-ring/50;
+  }
+  body {
+    @apply bg-background text-foreground;
+  }
+}
```

### Diff: src/components/common/editor-menu.tsx

```diff
diff --git a/src/components/common/editor-menu.tsx b/src/components/common/editor-menu.tsx
index f8c50e3..d46c25e 100644
--- a/src/components/common/editor-menu.tsx
+++ b/src/components/common/editor-menu.tsx
@@ -3,7 +3,7 @@ import { CodeBracketIcon, ListBulletIcon, NumberedListIcon, StrikethroughIcon }
 import { CodeBracketSquareIcon } from '@heroicons/react/24/outline'
 import { BoldIcon } from '@heroicons/react/24/solid'
 import type { Editor as TipTapEditor } from '@tiptap/react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 
 export type EditorMenuProps = {
   editor: TipTapEditor
@@ -15,29 +15,29 @@ const EditorMenu = ({ editor }: EditorMenuProps) => {
       <div className="flex items-center gap-px border-neutral-200 border-r p-1">
         <Button
           className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('bold') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-          isDisabled={!editor.can().chain().focus().toggleBold().run()}
-          onPress={() => editor.chain().focus().toggleBold().run()}
+          disabled={!editor.can().chain().focus().toggleBold().run()}
+          onClick={() => editor.chain().focus().toggleBold().run()}
         >
           <BoldIcon className="size-4" />
         </Button>
         <Button
           className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('italic') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-          isDisabled={!editor.can().chain().focus().toggleItalic().run()}
-          onPress={() => editor.chain().focus().toggleItalic().run()}
+          disabled={!editor.can().chain().focus().toggleItalic().run()}
+          onClick={() => editor.chain().focus().toggleItalic().run()}
         >
           <ItalicIcon className="size-4" />
         </Button>
         <Button
           className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('strike') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-          isDisabled={!editor.can().chain().focus().toggleStrike().run()}
-          onPress={() => editor.chain().focus().toggleStrike().run()}
+          disabled={!editor.can().chain().focus().toggleStrike().run()}
+          onClick={() => editor.chain().focus().toggleStrike().run()}
         >
           <StrikethroughIcon className="size-4" />
         </Button>
         <Button
           className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('code') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-          isDisabled={!editor.can().chain().focus().toggleCode().run()}
-          onPress={() => editor.chain().focus().toggleCode().run()}
+          disabled={!editor.can().chain().focus().toggleCode().run()}
+          onClick={() => editor.chain().focus().toggleCode().run()}
         >
           <CodeBracketIcon className="size-4" />
         </Button>
@@ -45,22 +45,22 @@ const EditorMenu = ({ editor }: EditorMenuProps) => {
       <div className="flex items-center gap-px p-1">
         <Button
           className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('bulletList') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-          isDisabled={!editor.can().chain().focus().toggleBulletList().run()}
-          onPress={() => editor.chain().focus().toggleBulletList().run()}
+          disabled={!editor.can().chain().focus().toggleBulletList().run()}
+          onClick={() => editor.chain().focus().toggleBulletList().run()}
         >
           <ListBulletIcon className="size-4" />
         </Button>
         <Button
           className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('orderedList') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-          isDisabled={!editor.can().chain().focus().toggleOrderedList().run()}
-          onPress={() => editor.chain().focus().toggleOrderedList().run()}
+          disabled={!editor.can().chain().focus().toggleOrderedList().run()}
+          onClick={() => editor.chain().focus().toggleOrderedList().run()}
         >
           <NumberedListIcon className="size-4" />
         </Button>
         <Button
           className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('codeBlock') ? 'bg-neutral-100 text-neutral-800' : ''}`}
-          isDisabled={!editor.can().chain().focus().toggleCodeBlock().run()}
-          onPress={() => editor.chain().focus().toggleCodeBlock().run()}
+          disabled={!editor.can().chain().focus().toggleCodeBlock().run()}
+          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
         >
           <CodeBracketSquareIcon className="size-5" />
         </Button>
```

### Diff: src/components/common/menu-button.tsx

```diff
diff --git a/src/components/common/menu-button.tsx b/src/components/common/menu-button.tsx
index 2d4f684..59e65d3 100644
--- a/src/components/common/menu-button.tsx
+++ b/src/components/common/menu-button.tsx
@@ -1,5 +1,5 @@
 import { useContext } from 'react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { MenuContext } from '@/app/contexts'
 import { Icon } from '@/components/icons'
 
@@ -10,7 +10,7 @@ export const MenuButton = ({ className }: { className?: string }) => {
     <Button
       aria-label="Show menu"
       className={`flex size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800 ${className}`}
-      onPress={() => setShowMenu(true)}
+      onClick={() => setShowMenu(true)}
     >
       <Icon className="size-4" name="sidebar" />
     </Button>
```

### Diff: src/components/common/modal.tsx

```diff
diff --git a/src/components/common/modal.tsx b/src/components/common/modal.tsx
index eac565c..31010da 100644
--- a/src/components/common/modal.tsx
+++ b/src/components/common/modal.tsx
@@ -1,6 +1,5 @@
-import { XMarkIcon } from '@heroicons/react/20/solid'
 import React from 'react'
-import { Button, Heading, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
+import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
 
 export const Modal = ({
   show,
@@ -24,29 +23,20 @@ export const Modal = ({
   }, [setShow])
 
   return (
-    <ModalOverlay
-      className="fixed inset-0 flex items-start justify-center bg-black/10 p-4 pt-16 lg:pt-32 dark:bg-black/20"
-      isDismissable
-      isOpen={show}
-      onOpenChange={setShow}
-    >
-      <ReactAriaModal className="relative w-full max-w-xl rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
+    <Dialog open={show} onOpenChange={setShow}>
+      <DialogContent
+        className="w-full max-w-xl rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
+        style={{ animation: 'none' }}
+      >
         {title && (
           <div className="flex items-center justify-between border-neutral-200 border-b p-2 pl-4 dark:border-neutral-700">
-            <Heading className="font-bold text-lg" slot="title">
+            <DialogTitle className="font-bold text-lg">
               {title}
-            </Heading>
+            </DialogTitle>
           </div>
         )}
         {children}
-        <Button
-          className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-700 focus:outline-none dark:hover:bg-neutral-700"
-          onPress={() => setShow(false)}
-          slot="close"
-        >
-          <XMarkIcon className="size-5" />
-        </Button>
-      </ReactAriaModal>
-    </ModalOverlay>
+      </DialogContent>
+    </Dialog>
   )
 }
```

### Diff: src/components/common/priority-menu.tsx

```diff
diff --git a/src/components/common/priority-menu.tsx b/src/components/common/priority-menu.tsx
index 823cb36..2c0e851 100644
--- a/src/components/common/priority-menu.tsx
+++ b/src/components/common/priority-menu.tsx
@@ -1,7 +1,7 @@
 import { CheckIcon } from '@heroicons/react/16/solid'
 import React from 'react'
-import { useKeyboard } from 'react-aria'
-import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
+import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
 import { Shortcut } from '@/components/common/shortcut'
 import { Icon, type IconName } from '@/components/icons'
 import { priorityOptions } from '@/data/priority-options'
@@ -20,53 +20,34 @@ export const PriorityMenu = ({
 }) => {
   const [isOpen, setIsOpen] = React.useState(false)
 
-  const { keyboardProps } = useKeyboard({
-    onKeyDown: (e) => {
-      if (e.key === 'Escape') {
-        setIsOpen(false)
-        return
-      }
-      priorityOptions.forEach(({ shortcut }, priorityOption) => {
-        if (e.key === shortcut) {
-          onPriorityChange(priorityOption as Priority)
-          setIsOpen(false)
-          return
-        }
-      })
-    },
-  })
-
   return (
-    <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
-      <Button
-        aria-label="Select priority"
-        className="group flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-lg px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-      >
-        <Icon
-          className={`size-3.5 ${priority === URGENT_PRIORITY ? 'text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300' : priorityOptions[priority]?.style || ''}`}
-          name={priorityOptions[priority]?.icon as IconName}
-        />
-        {showLabel && <span>{priorityOptions[priority]?.name}</span>}
-      </Button>
-      <Popover
-        className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800"
-        offset={0}
-      >
-        <Menu className="focus:outline-none" {...keyboardProps}>
-          {priorityOptions.map(({ name, icon, style, shortcut }, priorityOption) => (
-            <MenuItem
-              className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-              key={name}
-              onAction={() => onPriorityChange(priorityOption as Priority)}
-            >
-              <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
-              <span>{name}</span>
-              {priorityOption === priority && <CheckIcon className="absolute right-9 size-4" />}
-              <Shortcut className="absolute right-3" keys={[shortcut]} />
-            </MenuItem>
-          ))}
-        </Menu>
-      </Popover>
-    </MenuTrigger>
+    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
+      <DropdownMenuTrigger asChild>
+        <Button
+          aria-label="Select priority"
+          className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+        >
+          <Icon
+            className={`size-3.5 ${priority === URGENT_PRIORITY ? 'text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300' : priorityOptions[priority]?.style || ''}`}
+            name={priorityOptions[priority]?.icon as IconName}
+          />
+          {showLabel && <span>{priorityOptions[priority]?.name}</span>}
+        </Button>
+      </DropdownMenuTrigger>
+      <DropdownMenuContent className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
+        {priorityOptions.map(({ name, icon, style, shortcut }, priorityOption) => (
+          <DropdownMenuItem
+            className="flex cursor-pointer items-center gap-2 rounded-md py-1.5 px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
+            key={name}
+            onClick={() => onPriorityChange(priorityOption as Priority)}
+          >
+            <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
+            <span>{name}</span>
+            {priorityOption === priority && <CheckIcon className="absolute right-9 size-4" />}
+            <Shortcut className="absolute right-3" keys={[shortcut]} />
+          </DropdownMenuItem>
+        ))}
+      </DropdownMenuContent>
+    </DropdownMenu>
   )
 }
```

### Diff: src/components/common/status-menu.tsx

```diff
diff --git a/src/components/common/status-menu.tsx b/src/components/common/status-menu.tsx
index 0705b8e..889caf7 100644
--- a/src/components/common/status-menu.tsx
+++ b/src/components/common/status-menu.tsx
@@ -1,7 +1,7 @@
 import { CheckIcon } from '@heroicons/react/16/solid'
 import React from 'react'
-import { useKeyboard } from 'react-aria'
-import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
+import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
 import { Shortcut } from '@/components/common/shortcut'
 import { Icon, type IconName } from '@/components/icons'
 import { statusOptions } from '@/data/status-options'
@@ -18,53 +18,34 @@ export const StatusMenu = ({
 }) => {
   const [isOpen, setIsOpen] = React.useState(false)
 
-  const { keyboardProps } = useKeyboard({
-    onKeyDown: (e) => {
-      if (e.key === 'Escape') {
-        setIsOpen(false)
-        return
-      }
-      statusOptions.forEach(({ shortcut }, statusOption) => {
-        if (e.key === shortcut) {
-          onStatusChange(statusOption as Status)
-          setIsOpen(false)
-          return
-        }
-      })
-    },
-  })
-
   return (
-    <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
-      <Button
-        aria-label="Select status"
-        className="group flex h-8 min-w-8 items-center justify-center gap-1.5 rounded-lg px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-      >
-        <Icon
-          className={`size-3.5 ${statusOptions[status]?.style || ''}`}
-          name={statusOptions[status]?.icon as IconName}
-        />
-        {showLabel && <span>{statusOptions[status]?.name}</span>}
-      </Button>
-      <Popover
-        className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800"
-        offset={0}
-      >
-        <Menu className="focus:outline-none" {...keyboardProps}>
-          {statusOptions.map(({ name, id, icon, style, shortcut }, statusOption) => (
-            <MenuItem
-              className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-              key={id}
-              onAction={() => onStatusChange(statusOption as Status)}
-            >
-              <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
-              <span>{name}</span>
-              {statusOption === status && <CheckIcon className="absolute right-9 size-4" />}
-              <Shortcut className="absolute right-3" keys={[shortcut]} />
-            </MenuItem>
-          ))}
-        </Menu>
-      </Popover>
-    </MenuTrigger>
+    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
+      <DropdownMenuTrigger asChild>
+        <Button
+          aria-label="Select status"
+          className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+        >
+          <Icon
+            className={`size-3.5 ${statusOptions[status]?.style || ''}`}
+            name={statusOptions[status]?.icon as IconName}
+          />
+          {showLabel && <span>{statusOptions[status]?.name}</span>}
+        </Button>
+      </DropdownMenuTrigger>
+      <DropdownMenuContent className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
+        {statusOptions.map(({ name, id, icon, style, shortcut }, statusOption) => (
+          <DropdownMenuItem
+            className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
+            key={id}
+            onClick={() => onStatusChange(statusOption as Status)}
+          >
+            <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
+            <span>{name}</span>
+            {statusOption === status && <CheckIcon className="absolute right-9 size-4" />}
+            <Shortcut className="absolute right-3" keys={[shortcut]} />
+          </DropdownMenuItem>
+        ))}
+      </DropdownMenuContent>
+    </DropdownMenu>
   )
 }
```

### Diff: src/components/layout/board/card.tsx

```diff
diff --git a/src/components/layout/board/card.tsx b/src/components/layout/board/card.tsx
index e45cf3d..7790c43 100644
--- a/src/components/layout/board/card.tsx
+++ b/src/components/layout/board/card.tsx
@@ -1,5 +1,5 @@
 import { useStore } from '@livestore/react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { useNavigate } from '@tanstack/react-router'
 import { Avatar } from '@/components/common/avatar'
 import { PriorityMenu } from '@/components/common/priority-menu'
```

### Diff: src/components/layout/board/column.tsx

```diff
diff --git a/src/components/layout/board/column.tsx b/src/components/layout/board/column.tsx
index de6afbc..912d393 100644
--- a/src/components/layout/board/column.tsx
+++ b/src/components/layout/board/column.tsx
@@ -1,26 +1,11 @@
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
 import { useSearch } from '@tanstack/react-router'
-import { generateKeyBetween } from 'fractional-indexing'
-import React from 'react'
-import {
-  DropIndicator,
-  type DropPosition,
-  type DroppableCollectionReorderEvent,
-  GridList,
-  GridListItem,
-  isTextDropItem,
-  ListLayout,
-  useDragAndDrop,
-  Virtualizer,
-} from 'react-aria-components'
-import AutoSizer from 'react-virtualized-auto-sizer'
 import { Icon } from '@/components/icons'
 import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
 import type { StatusDetails } from '@/data/status-options'
-import { useDebouncedScrollState } from '@/lib/livestore/queries'
-import { events, tables } from '@/lib/livestore/schema'
-import { filterStateToWhere } from '@/lib/livestore/utils'
+import { tables } from '@/lib/livestore/schema'
+import { filterStateToWhere } from '@/utils'
 import type { Status } from '@/types/status'
 import type { ValidatedSearch } from '@/routes/board'
 import { Card } from './card'
@@ -28,11 +13,8 @@ import { Card } from './card'
 export const Column = ({ status, statusDetails }: { status: Status; statusDetails: StatusDetails }) => {
   const { store } = useStore()
   const searchParams = useSearch({ strict: false }) as ValidatedSearch
-  // TODO restore initial scroll position once React Aria supports this scenario
-  const [_scrollState, setScrollState] = useDebouncedScrollState(`column-${status}-${store.sessionId}`)
-
   const filteredIssues$ = queryDb(
-    (get) => {
+    () => {
       const filterState = {
         orderBy: searchParams.orderBy || 'created',
         orderDirection: searchParams.orderDirection || 'desc',
@@ -49,69 +31,7 @@ export const Column = ({ status, statusDetails }: { status: Status; statusDetail
   )
   const filteredIssues = store.useQuery(filteredIssues$)
 
-  const getNewKanbanOrder = (targetId: string, dropPosition: DropPosition) => {
-    const before = dropPosition !== 'after'
-    const targetKanbanOrder = store.query(
-      tables.issue
-        .select('kanbanorder')
-        .where({ id: Number(targetId) })
-        .first(),
-    )
-    const nearestKanbanOrder = store.query(
-      tables.issue
-        .select('kanbanorder')
-        .where({
-          status,
-          priority: searchParams.priority ? { op: 'IN', value: searchParams.priority } : undefined,
-          kanbanorder: { op: before ? '>' : '<', value: targetKanbanOrder },
-        })
-        .orderBy('kanbanorder', before ? 'asc' : 'desc')
-        .limit(1),
-    )[0]
-    return generateKeyBetween(
-      before ? targetKanbanOrder : nearestKanbanOrder,
-      before ? nearestKanbanOrder : targetKanbanOrder,
-    )
-  }
 
-  const { dragAndDropHooks } = useDragAndDrop({
-    getItems: (keys) => [...keys].map((key) => ({ 'text/plain': key.toString() })),
-    onReorder: (e: DroppableCollectionReorderEvent) => {
-      const items = [...e.keys]
-      const kanbanorder = getNewKanbanOrder(e.target.key as string, e.target.dropPosition)
-      store.commit(events.updateIssueKanbanOrder({ id: Number(items[0]), status, kanbanorder, modified: new Date() }))
-    },
-    onInsert: async (e) => {
-      const items = await Promise.all(
-        e.items.filter(isTextDropItem).map(async (item) => JSON.parse(await item.getText('text/plain')).toString()),
-      )
-      const kanbanorder = getNewKanbanOrder(e.target.key as string, e.target.dropPosition)
-      store.commit(events.updateIssueKanbanOrder({ id: Number(items[0]), status, kanbanorder, modified: new Date() }))
-    },
-    onRootDrop: async (e) => {
-      const items = await Promise.all(
-        e.items.filter(isTextDropItem).map(async (item) => JSON.parse(await item.getText('text/plain')).toString()),
-      )
-      const lowestKanbanOrder = store.query(
-        tables.issue.select('kanbanorder').where({ status }).orderBy('kanbanorder', 'asc').limit(1),
-      )[0]
-      const kanbanorder = lowestKanbanOrder ? generateKeyBetween(null, lowestKanbanOrder) : 'a1'
-      store.commit(events.updateIssueKanbanOrder({ id: Number(items[0]), status, kanbanorder, modified: new Date() }))
-    },
-    renderDropIndicator: (target) => {
-      return <DropIndicator className="mx-3.5 h-1 rounded-full bg-orange-500" target={target} />
-    },
-    getDropOperation: () => 'move',
-  })
-
-  const layout = React.useMemo(
-    () =>
-      new ListLayout({
-        rowHeight: 124,
-        dropIndicatorThickness: 15,
-      }),
-    [],
-  )
 
   return (
     <div className="flex h-full w-64 shrink-0 flex-col rounded-lg border border-neutral-100 bg-neutral-50 lg:w-80 dark:border-neutral-700/50 dark:bg-neutral-800">
@@ -122,31 +42,12 @@ export const Column = ({ status, statusDetails }: { status: Status; statusDetail
         </div>
         <NewIssueButton status={status} />
       </div>
-      <div className="grow">
-        <AutoSizer>
-          {({ width, height }: { width: number; height: number }) => (
-            <Virtualizer layout={layout}>
-              <GridList
-                aria-label={`Issues with status ${statusDetails.name}`}
-                className="overflow-y-auto pt-2"
-                dragAndDropHooks={dragAndDropHooks}
-                items={filteredIssues}
-                onScroll={(e) => setScrollState({ list: (e.target as HTMLElement).scrollTop })}
-                style={{ width, height }}
-              >
-                {(issue) => (
-                  <GridListItem
-                    aria-label={`Issue ${issue.id}: ${issue.title}`}
-                    className="group w-full px-2 focus:outline-none data-[dragging]:opacity-50"
-                    textValue={issue.id.toString()}
-                  >
-                    <Card issue={issue} />
-                  </GridListItem>
-                )}
-              </GridList>
-            </Virtualizer>
-          )}
-        </AutoSizer>
+      <div className="grow overflow-y-auto pt-2">
+        {filteredIssues.map((issue) => (
+          <div key={issue.id} className="group w-full px-2 focus:outline-none">
+            <Card issue={issue} />
+          </div>
+        ))}
       </div>
     </div>
   )
```

### Diff: src/components/layout/board/draggable.tsx

```diff
diff --git a/src/components/layout/board/draggable.tsx b/src/components/layout/board/draggable.tsx
index b4577fd..eeaf02f 100644
--- a/src/components/layout/board/draggable.tsx
+++ b/src/components/layout/board/draggable.tsx
@@ -1,33 +1,13 @@
 import type { CSSProperties } from 'react'
-import React, { memo } from 'react'
-import { DragPreview, useDrag } from 'react-aria'
+import { memo } from 'react'
+
 import type { Issue } from '@/lib/livestore/schema'
 import { Card } from './card'
 
 export const Draggable = memo(({ issue, style }: { issue: Issue; style: CSSProperties }) => {
-  const preview = React.useRef(null)
-  const { dragProps, isDragging } = useDrag({
-    preview,
-    getItems: () => [{ 'text/plain': issue.id.toString() }],
-  })
-
   return (
     <div className="relative px-2 pb-2" id={issue.id.toString()} key={issue.id} style={style}>
-      <div {...dragProps}>
-        <Card issue={issue} />
-        {isDragging && (
-          <div className="absolute inset-0 bg-neutral-50 p-3 pt-1">
-            <div className="h-full w-full rounded-md border border-neutral-200/50" />
-          </div>
-        )}
-        <DragPreview ref={preview}>
-          {() => (
-            <div className="w-[254px] px-2 lg:w-[318px]">
-              <Card issue={issue} />
-            </div>
-          )}
-        </DragPreview>
-      </div>
+      <Card issue={issue} />
     </div>
   )
 })
```

### Diff: src/components/layout/board/index.tsx

```diff
diff --git a/src/components/layout/board/index.tsx b/src/components/layout/board/index.tsx
index 180b0e3..7b19ef8 100644
--- a/src/components/layout/board/index.tsx
+++ b/src/components/layout/board/index.tsx
@@ -5,7 +5,7 @@ import { Column } from '@/components/layout/board/column'
 import { Filters } from '@/components/layout/filters'
 import { statusOptions } from '@/data/status-options'
 import { tables } from '@/lib/livestore/schema'
-import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
+import { filterStateToOrderBy, filterStateToWhere } from '@/utils'
 import type { Status } from '@/types/status'
 import type { ValidatedSearch } from '@/routes/board'
```

### Diff: src/components/layout/filters/filter-menu.tsx

```diff
diff --git a/src/components/layout/filters/filter-menu.tsx b/src/components/layout/filters/filter-menu.tsx
index c8cf8ed..270e426 100644
--- a/src/components/layout/filters/filter-menu.tsx
+++ b/src/components/layout/filters/filter-menu.tsx
@@ -1,6 +1,6 @@
 import React from 'react'
 import { CheckIcon } from '@heroicons/react/16/solid'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { Link, useSearch } from '@tanstack/react-router'
 import { Icon, type IconName } from '@/components/icons'
 import { useClickOutside } from '@/hooks/useClickOutside'
@@ -38,13 +38,13 @@ export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; c
   // Clone children and add click handler if it's a React element
   const triggerElement = React.isValidElement(children) ? (
     React.cloneElement(children as React.ReactElement<any>, {
-      onPress: () => setIsOpen(!isOpen),
+      onClick: () => setIsOpen(!isOpen),
     })
   ) : (
     <Button
       aria-label="Select filters"
       className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-      onPress={() => setIsOpen(!isOpen)}
+      onClick={() => setIsOpen(!isOpen)}
     >
       <Icon className="size-3.5" name="filter" />
       <span>Filter</span>
```

### Diff: src/components/layout/filters/index.tsx

```diff
diff --git a/src/components/layout/filters/index.tsx b/src/components/layout/filters/index.tsx
index d4e8f62..d1e5398 100644
--- a/src/components/layout/filters/index.tsx
+++ b/src/components/layout/filters/index.tsx
@@ -1,6 +1,6 @@
 import { useStore } from '@livestore/react'
 import { useSearch } from '@tanstack/react-router'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { Icon } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
 import { Header } from '@/components/layout/filters/header'
```

### Diff: src/components/layout/filters/priority-filter.tsx

```diff
diff --git a/src/components/layout/filters/priority-filter.tsx b/src/components/layout/filters/priority-filter.tsx
index 47936e8..b3e0f13 100644
--- a/src/components/layout/filters/priority-filter.tsx
+++ b/src/components/layout/filters/priority-filter.tsx
@@ -1,5 +1,5 @@
 import { XMarkIcon } from '@heroicons/react/16/solid'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { Icon, type IconName } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
 import { priorityOptions } from '@/data/priority-options'
```

### Diff: src/components/layout/filters/sort-menu.tsx

```diff
diff --git a/src/components/layout/filters/sort-menu.tsx b/src/components/layout/filters/sort-menu.tsx
index a13f3bc..59a2ca1 100644
--- a/src/components/layout/filters/sort-menu.tsx
+++ b/src/components/layout/filters/sort-menu.tsx
@@ -1,6 +1,6 @@
 import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'
 import React from 'react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { Link, useSearch } from '@tanstack/react-router'
 import { Shortcut } from '@/components/common/shortcut'
 import { useClickOutside } from '@/hooks/useClickOutside'
@@ -38,7 +38,7 @@ export const SortMenu = () => {
       <Button
         aria-label="Select sorting"
         className="group relative flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-        onPress={() => setIsOpen(!isOpen)}
+        onClick={() => setIsOpen(!isOpen)}
       >
         <ArrowsUpDownIcon className="size-3.5" />
         <span>Sort</span>
```

### Diff: src/components/layout/filters/status-filter.tsx

```diff
diff --git a/src/components/layout/filters/status-filter.tsx b/src/components/layout/filters/status-filter.tsx
index 98fc057..869c783 100644
--- a/src/components/layout/filters/status-filter.tsx
+++ b/src/components/layout/filters/status-filter.tsx
@@ -1,5 +1,5 @@
 import { XMarkIcon } from '@heroicons/react/16/solid'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { Icon, type IconName } from '@/components/icons'
 import { FilterMenu } from '@/components/layout/filters/filter-menu'
 import { statusOptions } from '@/data/status-options'
```

### Diff: src/components/layout/issue/back-button.tsx

```diff
diff --git a/src/components/layout/issue/back-button.tsx b/src/components/layout/issue/back-button.tsx
index d0153e6..bf826c1 100644
--- a/src/components/layout/issue/back-button.tsx
+++ b/src/components/layout/issue/back-button.tsx
@@ -1,6 +1,6 @@
 import { XMarkIcon } from '@heroicons/react/20/solid'
 import React from 'react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 
 export const BackButton = ({ close }: { close: () => void }) => {
   React.useEffect(() => {
@@ -17,7 +17,7 @@ export const BackButton = ({ close }: { close: () => void }) => {
     <Button
       aria-label="Back to issues"
       className="flex size-8 shrink-0 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-      onPress={close}
+      onClick={close}
     >
       <XMarkIcon className="size-5" />
     </Button>
```

### Diff: src/components/layout/issue/comment-input.tsx

```diff
diff --git a/src/components/layout/issue/comment-input.tsx b/src/components/layout/issue/comment-input.tsx
index 635278d..83398f1 100644
--- a/src/components/layout/issue/comment-input.tsx
+++ b/src/components/layout/issue/comment-input.tsx
@@ -1,8 +1,7 @@
 import { ArrowUpIcon } from '@heroicons/react/20/solid'
 import { useStore } from '@livestore/react'
 import React from 'react'
-import { useKeyboard } from 'react-aria'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import Editor from '@/components/common/editor'
 import { useFrontendState } from '@/lib/livestore/queries'
 import { events } from '@/lib/livestore/schema'
@@ -13,13 +12,11 @@ export const CommentInput = ({ issueId, className }: { issueId: number; classNam
   const [frontendState] = useFrontendState()
   const { store } = useStore()
 
-  const { keyboardProps } = useKeyboard({
-    onKeyDown: (e) => {
-      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
-        submitComment()
-      }
-    },
-  })
+  const handleKeyDown = (e: React.KeyboardEvent) => {
+    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
+      submitComment()
+    }
+  }
 
   const submitComment = () => {
     if (!commentDraft) {
@@ -40,7 +37,7 @@ export const CommentInput = ({ issueId, className }: { issueId: number; classNam
   return (
     <div
       className={`rounded-lg border border-transparent bg-white pb-4 shadow dark:border-neutral-700/50 dark:bg-neutral-800 dark:shadow-none ${className}`}
-      {...keyboardProps}
+      onKeyDown={handleKeyDown}
     >
       <Editor
         className="px-4 py-1"
@@ -52,7 +49,7 @@ export const CommentInput = ({ issueId, className }: { issueId: number; classNam
       <Button
         aria-label="Submit comment"
         className="mr-4 ml-auto flex size-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-700 dark:focus:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
-        onPress={submitComment}
+        onClick={submitComment}
       >
         <ArrowUpIcon className="size-4" />
       </Button>
```

### Diff: src/components/layout/issue/delete-button.tsx

```diff
diff --git a/src/components/layout/issue/delete-button.tsx b/src/components/layout/issue/delete-button.tsx
index dd0eb0a..4fd588f 100644
--- a/src/components/layout/issue/delete-button.tsx
+++ b/src/components/layout/issue/delete-button.tsx
@@ -1,7 +1,7 @@
 import { TrashIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
 import React from 'react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { events } from '@/lib/livestore/schema'
 
 const DELETE_CONFIRMATION_TIMEOUT_MS = 2000
@@ -39,7 +39,7 @@ export const DeleteButton = ({
     <Button
       aria-label="Delete issue"
       className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 hover:bg-neutral-100 hover:text-red-600 focus:bg-neutral-100 focus:text-red-600 focus:outline-none dark:focus:bg-neutral-800 dark:focus:text-red-500 dark:hover:bg-neutral-800 dark:hover:text-red-500 ${className}`}
-      onPress={onClick}
+      onClick={onClick}
     >
       <TrashIcon className="size-3.5" />
       {confirm && (
```

### Diff: src/components/layout/issue/index.tsx

```diff
diff --git a/src/components/layout/issue/index.tsx b/src/components/layout/issue/index.tsx
index 1995415..fa43be0 100644
--- a/src/components/layout/issue/index.tsx
+++ b/src/components/layout/issue/index.tsx
@@ -1,7 +1,7 @@
 import { ChevronRightIcon } from '@heroicons/react/16/solid'
 import { queryDb } from '@livestore/livestore'
 import { useStore } from '@livestore/react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { useNavigate, useParams } from '@tanstack/react-router'
 import { Avatar } from '@/components/common/avatar'
 import { MenuButton } from '@/components/common/menu-button'
@@ -58,7 +58,7 @@ export const Issue = () => {
           <Button
             aria-label="Back to issues"
             className="ml-2 font-medium hover:text-neutral-800 focus:outline-none lg:ml-0 dark:hover:text-neutral-100"
-            onPress={close}
+            onClick={close}
           >
             Issues
           </Button>
```

### Diff: src/components/layout/issue/new-issue-modal.tsx

```diff
diff --git a/src/components/layout/issue/new-issue-modal.tsx b/src/components/layout/issue/new-issue-modal.tsx
index d519ec6..2ad07af 100644
--- a/src/components/layout/issue/new-issue-modal.tsx
+++ b/src/components/layout/issue/new-issue-modal.tsx
@@ -1,7 +1,7 @@
 import { useStore } from '@livestore/react'
 import { generateKeyBetween } from 'fractional-indexing'
 import React from 'react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { NewIssueModalContext } from '@/app/contexts'
 import { Modal } from '@/components/common/modal'
 import { PriorityMenu } from '@/components/common/priority-menu'
@@ -85,7 +85,7 @@ export const NewIssueModal = () => {
           <Button
             aria-label="Create issue"
             className="ml-auto rounded-lg bg-orange-500 px-4 text-sm text-white hover:bg-orange-400 focus:bg-orange-400 focus:outline-none"
-            onPress={createIssue}
+            onClick={createIssue}
           >
             Create issue
           </Button>
```

### Diff: src/components/layout/list/index.tsx

```diff
diff --git a/src/components/layout/list/index.tsx b/src/components/layout/list/index.tsx
index d0ecd9d..e4d4800 100644
--- a/src/components/layout/list/index.tsx
+++ b/src/components/layout/list/index.tsx
@@ -4,7 +4,7 @@ import { useSearch } from '@tanstack/react-router'
 import { Filters } from '@/components/layout/filters'
 import { FilteredList } from '@/components/layout/list/filtered-list'
 import { tables } from '@/lib/livestore/schema'
-import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
+import { filterStateToOrderBy, filterStateToWhere } from '@/utils'
 import type { ValidatedSearch } from '@/routes/index'
 
 // Convert search params to filter state format for the utility functions
```

### Diff: src/components/layout/search/index.tsx

```diff
diff --git a/src/components/layout/search/index.tsx b/src/components/layout/search/index.tsx
index 75084a0..720d5c7 100644
--- a/src/components/layout/search/index.tsx
+++ b/src/components/layout/search/index.tsx
@@ -4,7 +4,7 @@ import { useSearch } from '@tanstack/react-router'
 import { Filters } from '@/components/layout/filters'
 import { FilteredList } from '@/components/layout/list/filtered-list'
 import { tables } from '@/lib/livestore/schema'
-import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
+import { filterStateToOrderBy, filterStateToWhere } from '@/utils'
 import type { ValidatedSearch } from '@/routes/search'
 
 // Convert search params to filter state format for the utility functions
```

### Diff: src/components/layout/search/search-bar.tsx

```diff
diff --git a/src/components/layout/search/search-bar.tsx b/src/components/layout/search/search-bar.tsx
index a1ed4ce..52de0bd 100644
--- a/src/components/layout/search/search-bar.tsx
+++ b/src/components/layout/search/search-bar.tsx
@@ -1,7 +1,6 @@
 import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
 import { XMarkIcon } from '@heroicons/react/20/solid'
-import { useKeyboard } from 'react-aria'
-import { Input } from 'react-aria-components'
+import { Input } from '@/components/ui/input'
 import { Link, useSearch, useNavigate } from '@tanstack/react-router'
 import { MenuButton } from '@/components/common/menu-button'
 import type { ValidatedSearch } from '@/routes/index'
@@ -10,13 +9,11 @@ export const SearchBar = () => {
   const searchParams = useSearch({ strict: false }) as ValidatedSearch
   const navigate = useNavigate()
 
-  const { keyboardProps } = useKeyboard({
-    onKeyDown: (e) => {
-      if (e.key === 'Escape') {
-        ;(e.target as HTMLInputElement)?.blur()
-      }
-    },
-  })
+  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
+    if (e.key === 'Escape') {
+      ;(e.target as HTMLInputElement)?.blur()
+    }
+  }
 
   const handleSearchChange = (value: string) => {
     const newQuery = value || undefined
@@ -36,12 +33,12 @@ export const SearchBar = () => {
       <MagnifyingGlassIcon className="ml-2.5 size-4 shrink-0 lg:ml-0" />
       <Input
         autoFocus
-        className="input w-full border-none bg-transparent pl-2 placholder:text-neutral-400 text-neutral-800 text-sm focus:outline-none focus:ring-0 lg:pl-3 dark:text-neutral-200 dark:placeholder:text-neutral-500"
+        className="input w-full border-none bg-transparent pl-2 placeholder:text-neutral-400 text-neutral-800 text-sm focus:outline-none focus:ring-0 lg:pl-3 dark:text-neutral-200 dark:placeholder:text-neutral-500"
         onChange={(e) => handleSearchChange(e.target.value)}
         placeholder="Search issues..."
         type="text"
         value={searchParams.query ?? ''}
-        {...keyboardProps}
+        onKeyDown={handleKeyDown}
       />
       {searchParams.query && (
         <Link
```

### Diff: src/components/layout/sidebar/about-menu.tsx

```diff
diff --git a/src/components/layout/sidebar/about-menu.tsx b/src/components/layout/sidebar/about-menu.tsx
index 84636f7..222a598 100644
--- a/src/components/layout/sidebar/about-menu.tsx
+++ b/src/components/layout/sidebar/about-menu.tsx
@@ -1,6 +1,7 @@
 import { ChevronDownIcon } from '@heroicons/react/16/solid'
 import React from 'react'
-import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
+import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
 import { Icon } from '@/components/icons'
 import { AboutModal } from '@/components/layout/sidebar/about-modal'
 
@@ -10,32 +11,29 @@ export const AboutMenu = () => {
 
   return (
     <>
-      <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
-        <Button
-          aria-label="About menu"
-          className="flex h-8 items-center rounded-lg px-2 font-bold text-lg leading-none hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-        >
-          <Icon className="mr-2 size-5 text-orange-500 dark:text-orange-500" name="zensync" />
-          <span>Zen Sync</span>
-          <ChevronDownIcon className="ml-1 size-4" />
-        </Button>
-        <Popover
-          className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800"
-          offset={0}
-        >
-          <Menu className="focus:outline-none">
-            <MenuItem
-              className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-              onAction={() => {
-                setShowAboutModal(true)
-                setIsOpen(false)
-              }}
-            >
-              <span>About Zen Sync</span>
-            </MenuItem>
-          </Menu>
-        </Popover>
-      </MenuTrigger>
+      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
+        <DropdownMenuTrigger asChild>
+          <Button
+            aria-label="About menu"
+            className="flex h-8 items-center rounded-lg px-2 font-bold text-lg leading-none hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+          >
+            <Icon className="mr-2 size-5 text-orange-500 dark:text-orange-500" name="zensync" />
+            <span>Zen Sync</span>
+            <ChevronDownIcon className="ml-1 size-4" />
+          </Button>
+        </DropdownMenuTrigger>
+        <DropdownMenuContent className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
+          <DropdownMenuItem
+            className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
+            onClick={() => {
+              setShowAboutModal(true)
+              setIsOpen(false)
+            }}
+          >
+            <span>About Zen Sync</span>
+          </DropdownMenuItem>
+        </DropdownMenuContent>
+      </DropdownMenu>
       <AboutModal setShow={setShowAboutModal} show={showAboutModal} />
     </>
   )
```

### Diff: src/components/layout/sidebar/new-issue-button.tsx

```diff
diff --git a/src/components/layout/sidebar/new-issue-button.tsx b/src/components/layout/sidebar/new-issue-button.tsx
index 28daf6b..b9ec44d 100644
--- a/src/components/layout/sidebar/new-issue-button.tsx
+++ b/src/components/layout/sidebar/new-issue-button.tsx
@@ -1,6 +1,6 @@
 import { PlusIcon } from '@heroicons/react/20/solid'
 import React from 'react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { MenuContext, NewIssueModalContext } from '@/app/contexts'
 import { Icon } from '@/components/icons'
 import type { Status } from '@/types/status'
@@ -23,7 +23,7 @@ export const NewIssueButton = ({ status }: { status?: Status }) => {
     <Button
       aria-label="New Issue"
       className={`flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800 ${status === undefined ? 'border border-neutral-200 bg-white shadow dark:border-neutral-700 dark:bg-neutral-900' : ''}`}
-      onPress={() => {
+      onClick={() => {
         setNewIssueModalStatus(status ?? 0)
         setShowMenu(false)
       }}
```

### Diff: src/components/layout/sidebar/theme-button.tsx

```diff
diff --git a/src/components/layout/sidebar/theme-button.tsx b/src/components/layout/sidebar/theme-button.tsx
index 2edaa65..175fc81 100644
--- a/src/components/layout/sidebar/theme-button.tsx
+++ b/src/components/layout/sidebar/theme-button.tsx
@@ -1,8 +1,8 @@
 import { CheckIcon, MoonIcon, SunIcon } from '@heroicons/react/16/solid'
 import { ComputerDesktopIcon } from '@heroicons/react/20/solid'
 import React from 'react'
-import { useKeyboard } from 'react-aria'
-import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
+import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
 import { Shortcut } from '@/components/common/shortcut'
 import { type Theme, themeOptions } from '@/data/theme-options'
 import { useFrontendState } from '@/lib/livestore/queries'
@@ -27,21 +27,7 @@ export const ThemeButton = () => {
     )
   }
 
-  const { keyboardProps } = useKeyboard({
-    onKeyDown: (e) => {
-      if (e.key === 'Escape') {
-        setIsOpen(false)
-        return
-      }
-      for (const { id, shortcut } of themeOptions) {
-        if (e.key === shortcut) {
-          selectTheme(id)
-          setIsOpen(false)
-          break
-        }
-      }
-    },
-  })
+
 
   React.useEffect(() => {
     if (frontendState.theme) {
@@ -50,34 +36,34 @@ export const ThemeButton = () => {
   }, [frontendState.theme])
 
   return (
-    <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
-      <Button
-        aria-label="Change theme"
-        className="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-      >
-        <SunIcon className="size-4 dark:hidden" />
-        <MoonIcon className="hidden size-4 dark:block" />
-      </Button>
-      <Popover className="w-40 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
-        <Menu className="p-2 focus:outline-none" {...keyboardProps}>
-          {themeOptions.map(({ id, label, shortcut }) => {
-            return (
-              <MenuItem
-                className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
-                key={id}
-                onAction={() => selectTheme(id)}
-              >
-                {id === 'light' && <SunIcon className="size-3.5" />}
-                {id === 'dark' && <MoonIcon className="size-3.5" />}
-                {id === 'system' && <ComputerDesktopIcon className="size-3.5" />}
-                <span>{label}</span>
-                {id === theme && <CheckIcon className="absolute right-9 size-4" />}
-                <Shortcut className="absolute right-3" keys={[shortcut]} />
-              </MenuItem>
-            )
-          })}
-        </Menu>
-      </Popover>
-    </MenuTrigger>
+    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
+      <DropdownMenuTrigger asChild>
+        <Button
+          aria-label="Change theme"
+          className="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
+        >
+          <SunIcon className="size-4 dark:hidden" />
+          <MoonIcon className="hidden size-4 dark:block" />
+        </Button>
+      </DropdownMenuTrigger>
+      <DropdownMenuContent className="w-40 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
+        {themeOptions.map(({ id, label, shortcut }) => {
+          return (
+            <DropdownMenuItem
+              className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
+              key={id}
+              onClick={() => selectTheme(id)}
+            >
+              {id === 'light' && <SunIcon className="size-3.5" />}
+              {id === 'dark' && <MoonIcon className="size-3.5" />}
+              {id === 'system' && <ComputerDesktopIcon className="size-3.5" />}
+              <span>{label}</span>
+              {id === theme && <CheckIcon className="absolute right-9 size-4" />}
+              <Shortcut className="absolute right-3" keys={[shortcut]} />
+            </DropdownMenuItem>
+          )
+        })}
+      </DropdownMenuContent>
+    </DropdownMenu>
   )
 }
```

### Diff: src/components/layout/toolbar/download-button.tsx

```diff
diff --git a/src/components/layout/toolbar/download-button.tsx b/src/components/layout/toolbar/download-button.tsx
index 6c440b4..3b917e0 100644
--- a/src/components/layout/toolbar/download-button.tsx
+++ b/src/components/layout/toolbar/download-button.tsx
@@ -1,6 +1,6 @@
 import { ArrowDownIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 
 export const DownloadButton = ({ className }: { className?: string }) => {
   const { store } = useStore()
@@ -13,7 +13,7 @@ export const DownloadButton = ({ className }: { className?: string }) => {
       <Button
         aria-label="Download database"
         className="flex h-6 items-center gap-1 rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
-        onPress={onClick}
+        onClick={onClick}
       >
         <ArrowDownIcon className="size-3 shrink-0" />
         <span>Download</span>
```

### Diff: src/components/layout/toolbar/mobile-menu.tsx

```diff
diff --git a/src/components/layout/toolbar/mobile-menu.tsx b/src/components/layout/toolbar/mobile-menu.tsx
index 61390c5..3a47989 100644
--- a/src/components/layout/toolbar/mobile-menu.tsx
+++ b/src/components/layout/toolbar/mobile-menu.tsx
@@ -1,5 +1,6 @@
 import { ChevronUpIcon } from '@heroicons/react/16/solid'
-import { Button, DialogTrigger, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
+import { DialogContent, DialogTrigger } from '@/components/ui/dialog'
 import { ResetButton } from '@/components/layout/toolbar/reset-button'
 import { SeedInput } from '@/components/layout/toolbar/seed-input'
 import { UserInput } from '@/components/layout/toolbar/user-input'
@@ -17,23 +18,18 @@ export const MobileMenu = () => {
           <span>Tools</span>
           <ChevronUpIcon className="size-4" />
         </Button>
-        <ModalOverlay
-          className="fixed inset-0 bottom-10 flex flex-col justify-end bg-black/10 dark:bg-black/20"
-          isDismissable
-        >
-          <ReactAriaModal className="w-full border-neutral-700 border-t bg-neutral-950 px-2">
-            <div className="flex flex-col items-stretch border-neutral-700 border-x">
-              <div className="border-neutral-700 border-b px-2 py-4 text-neutral-400 text-sm">
-                Please use the desktop version to access all LiveStore tools!
-              </div>
-              <UserInput />
-              <SeedInput />
-              <ResetButton />
-              <ShareButton />
-              <SyncToggle />
+        <DialogContent className="w-full border-neutral-700 border-t bg-neutral-950 px-2 fixed bottom-0 left-0 right-0">
+          <div className="flex flex-col items-stretch border-neutral-700 border-x">
+            <div className="border-neutral-700 border-b px-2 py-4 text-neutral-400 text-sm">
+              Please use the desktop version to access all LiveStore tools!
             </div>
-          </ReactAriaModal>
-        </ModalOverlay>
+            <UserInput />
+            <SeedInput />
+            <ResetButton />
+            <ShareButton />
+            <SyncToggle />
+          </div>
+        </DialogContent>
       </DialogTrigger>
     </div>
   )
```

### Diff: src/components/layout/toolbar/reset-button.tsx

```diff
diff --git a/src/components/layout/toolbar/reset-button.tsx b/src/components/layout/toolbar/reset-button.tsx
index c8738c8..1463268 100644
--- a/src/components/layout/toolbar/reset-button.tsx
+++ b/src/components/layout/toolbar/reset-button.tsx
@@ -1,6 +1,6 @@
 import { TrashIcon } from '@heroicons/react/16/solid'
 import React from 'react'
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { useNavigate } from '@tanstack/react-router'
 
 const CONFIRM_TIMEOUT_MS = 2000
@@ -25,7 +25,7 @@ export const ResetButton = ({ className }: { className?: string }) => {
       <Button
         aria-label="Reset database"
         className={`flex h-6 items-center gap-1 rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none ${confirm ? 'text-red-500' : 'text-neutral-400'}`}
-        onPress={onClick}
+        onClick={onClick}
       >
         <TrashIcon className="size-3 shrink-0" />
         <span>{confirm ? 'Confirm' : 'Reset'}</span>
```

### Diff: src/components/layout/toolbar/seed-input.tsx

```diff
diff --git a/src/components/layout/toolbar/seed-input.tsx b/src/components/layout/toolbar/seed-input.tsx
index 9fdfeba..d270a04 100644
--- a/src/components/layout/toolbar/seed-input.tsx
+++ b/src/components/layout/toolbar/seed-input.tsx
@@ -1,7 +1,8 @@
 import { PlusIcon } from '@heroicons/react/16/solid'
 import { useStore } from '@livestore/react'
 import React from 'react'
-import { Button, Input } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
+import { Input } from '@/components/ui/input'
 import { seed } from '@/lib/livestore/seed'
 
 export const SeedInput = ({ className }: { className?: string }) => {
@@ -29,7 +30,7 @@ export const SeedInput = ({ className }: { className?: string }) => {
       <Button
         aria-label="Seed database"
         className="flex h-6 items-center gap-1 rounded-r bg-neutral-800 pr-1.5 pl-1 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
-        onPress={onClick}
+        onClick={onClick}
       >
         <PlusIcon className="size-3" />
         <span>Seed</span>
```

### Diff: src/components/layout/toolbar/share-button.tsx

```diff
diff --git a/src/components/layout/toolbar/share-button.tsx b/src/components/layout/toolbar/share-button.tsx
index fc39622..e464f46 100644
--- a/src/components/layout/toolbar/share-button.tsx
+++ b/src/components/layout/toolbar/share-button.tsx
@@ -1,6 +1,7 @@
 import { CheckIcon, LinkIcon, QrCodeIcon } from '@heroicons/react/16/solid'
 import React from 'react'
-import { Button, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
+import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
 
 // This uses a public QR code API: https://goqr.me/api/doc/create-qr-code/
 
@@ -26,7 +27,7 @@ export const ShareButton = ({ className }: { className?: string }) => {
         <Button
           aria-label="Copy workspace URL"
           className="flex h-6 items-center gap-1 whitespace-nowrap rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
-          onPress={copyUrl}
+          onClick={copyUrl}
         >
           {copied ? (
             <>
@@ -48,18 +49,14 @@ export const ShareButton = ({ className }: { className?: string }) => {
         <Button
           aria-label="Copy workspace URL"
           className="flex size-6 items-center justify-center rounded bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-800 focus:outline-none"
-          onPress={() => setShowQR(true)}
+          onClick={() => setShowQR(true)}
         >
           <QrCodeIcon className="size-3.5" />
         </Button>
       </div>
-      <ModalOverlay
-        className="fixed inset-0 bottom-12 flex items-start justify-center bg-black/10 p-4 pt-16 lg:pt-32 dark:bg-black/20"
-        isDismissable
-        isOpen={showQR}
-        onOpenChange={setShowQR}
-      >
-        <ReactAriaModal className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-lg">
+      <Dialog open={showQR} onOpenChange={setShowQR}>
+        <DialogContent className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-lg dark:border-neutral-700 dark:bg-neutral-900">
+          <DialogTitle className="sr-only">QR Code</DialogTitle>
           <img
             alt="QR code for sharing workspace URL"
             crossOrigin="anonymous"
@@ -67,8 +64,8 @@ export const ShareButton = ({ className }: { className?: string }) => {
             src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURI(window.location.href)}`}
             width="200"
           />
-        </ReactAriaModal>
-      </ModalOverlay>
+        </DialogContent>
+      </Dialog>
     </>
   )
 }
```

### Diff: src/components/layout/toolbar/sync-toggle.tsx

```diff
diff --git a/src/components/layout/toolbar/sync-toggle.tsx b/src/components/layout/toolbar/sync-toggle.tsx
index e5f3720..496aab8 100644
--- a/src/components/layout/toolbar/sync-toggle.tsx
+++ b/src/components/layout/toolbar/sync-toggle.tsx
@@ -1,5 +1,5 @@
 import React from 'react'
-import { Switch } from 'react-aria-components'
+import { Switch } from '@/components/ui/switch'
 
 export const SyncToggle = ({ className }: { className?: string }) => {
   // TODO hook up actual sync/network state
@@ -11,9 +11,9 @@ export const SyncToggle = ({ className }: { className?: string }) => {
       <Switch
         aria-label="Toggle sync/network"
         className="group flex h-6 cursor-pointer items-center gap-2 rounded bg-neutral-800 pr-1.5 pl-1 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
-        isDisabled={true}
-        isSelected={sync} // TODO enable when sync is implemented
-        onChange={setSync}
+        disabled={true}
+        checked={sync} // TODO enable when sync is implemented
+        onCheckedChange={setSync}
       >
         <div className="h-4 w-6 rounded-full bg-neutral-600 p-px transition-colors group-data-[selected]:bg-orange-500">
           <span className="block size-3.5 rounded-full bg-white transition-transform group-data-[selected]:translate-x-2" />
```

### Diff: src/components/layout/toolbar/toolbar-button.tsx

```diff
diff --git a/src/components/layout/toolbar/toolbar-button.tsx b/src/components/layout/toolbar/toolbar-button.tsx
index 5b167af..be49dc3 100644
--- a/src/components/layout/toolbar/toolbar-button.tsx
+++ b/src/components/layout/toolbar/toolbar-button.tsx
@@ -1,4 +1,4 @@
-import { Button } from 'react-aria-components'
+import { Button } from '@/components/ui/button'
 import { Icon } from '@/components/icons'
 import { useFrontendState } from '@/lib/livestore/queries'
 
@@ -12,7 +12,7 @@ export const ToolbarButton = () => {
     <Button
       aria-label={frontendState.showToolbar ? 'Hide LiveStore Toolbar' : 'Show LiveStore Toolbar'}
       className="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
-      onPress={onClick}
+      onClick={onClick}
     >
       <Icon className="-rotate-90 size-5" name="sidebar" />
     </Button>
```

### Diff: src/components/layout/toolbar/user-input.tsx

```diff
diff --git a/src/components/layout/toolbar/user-input.tsx b/src/components/layout/toolbar/user-input.tsx
index 7760571..4849c89 100644
--- a/src/components/layout/toolbar/user-input.tsx
+++ b/src/components/layout/toolbar/user-input.tsx
@@ -1,4 +1,4 @@
-import { Input } from 'react-aria-components'
+import { Input } from '@/components/ui/input'
 import { useFrontendState } from '@/lib/livestore/queries'
 
 export const UserInput = ({ className }: { className?: string }) => {
```

### Diff: src/lib/livestore/utils.tsx

```diff
diff --git a/src/lib/livestore/utils.tsx b/src/lib/livestore/utils.tsx
deleted file mode 100644
index 2276168..0000000
--- a/src/lib/livestore/utils.tsx
+++ /dev/null
@@ -1,46 +0,0 @@
-import type { BootStatus, QueryBuilder } from '@livestore/livestore'
-import { Icon } from '@/components/icons'
-import type { FilterState, tables } from './schema'
-
-export const renderBootStatus = (bootStatus: BootStatus) => {
-  return (
-    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white text-sm dark:bg-neutral-900">
-      <div className="flex items-center gap-3 font-bold text-xl">
-        <Icon className="mt-1 size-7" name="livestore" />
-        <span>LiveStore</span>
-      </div>
-      {bootStatus.stage === 'loading' && <div>Loading...</div>}
-      {bootStatus.stage === 'migrating' && (
-        <div>
-          Migrating tables ({bootStatus.progress.done}/{bootStatus.progress.total})
-        </div>
-      )}
-      {bootStatus.stage === 'rehydrating' && (
-        <div>
-          Rehydrating state ({bootStatus.progress.done}/{bootStatus.progress.total})
-        </div>
-      )}
-      {bootStatus.stage === 'syncing' && (
-        <div>
-          Syncing state ({bootStatus.progress.done}/{bootStatus.progress.total})
-        </div>
-      )}
-      {bootStatus.stage === 'done' && <div>Ready</div>}
-    </div>
-  )
-}
-
-export const filterStateToWhere = (filterState: FilterState) => {
-  const { status, priority, query } = filterState
-
-  return {
-    status: status ? { op: 'IN', value: status } : undefined,
-    priority: priority ? { op: 'IN', value: priority } : undefined,
-    // TODO treat query as `OR` in
-    title: query ? { op: 'LIKE', value: `%${query}%` } : undefined,
-  } satisfies QueryBuilder.WhereParams<typeof tables.issue>
-}
-
-export const filterStateToOrderBy = (filterState: FilterState) => [
-  { col: filterState.orderBy, direction: filterState.orderDirection },
-]
```

### Diff: vite.config.ts

```diff
diff --git a/vite.config.ts b/vite.config.ts
index deefadb..252a733 100644
--- a/vite.config.ts
+++ b/vite.config.ts
@@ -32,14 +32,14 @@ export default defineConfig({
     react(),
     tailwindcss(),
     livestoreDevtoolsPlugin({ schemaPath: './src/lib/livestore/schema/index.ts' }),
-    svgr({
-      svgrOptions: {
-        svgo: true,
-        plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
-        svgoConfig: {
-          plugins: ['preset-default', 'removeTitle', 'removeDesc', 'removeDoctype', 'cleanupIds'],
-        },
-      },
-    }),
+    // svgr({
+    //   svgrOptions: {
+    //     svgo: true,
+    //     plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
+    //     svgoConfig: {
+    //       plugins: ['preset-default', 'removeTitle', 'removeDesc', 'removeDoctype', 'cleanupIds'],
+    //     },
+    //   },
+    // }),
   ],
 })
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
