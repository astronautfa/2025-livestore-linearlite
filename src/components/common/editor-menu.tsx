import { ItalicIcon } from '@heroicons/react/16/solid'
import { CodeBracketIcon, ListBulletIcon, NumberedListIcon, StrikethroughIcon } from '@heroicons/react/20/solid'
import { CodeBracketSquareIcon } from '@heroicons/react/24/outline'
import { BoldIcon } from '@heroicons/react/24/solid'
import type { Editor as TipTapEditor } from '@tiptap/react'
import { Button } from 'react-aria-components'

export type EditorMenuProps = {
  editor: TipTapEditor
}

const EditorMenu = ({ editor }: EditorMenuProps) => {
  return (
    <div className="flex items-center rounded-lg border border-neutral-200 bg-white text-neutral-500 shadow-md">
      <div className="flex items-center gap-px border-neutral-200 border-r p-1">
        <Button
          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('bold') ? 'bg-neutral-100 text-neutral-800' : ''}`}
          isDisabled={!editor.can().chain().focus().toggleBold().run()}
          onPress={() => editor.chain().focus().toggleBold().run()}
        >
          <BoldIcon className="size-4" />
        </Button>
        <Button
          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('italic') ? 'bg-neutral-100 text-neutral-800' : ''}`}
          isDisabled={!editor.can().chain().focus().toggleItalic().run()}
          onPress={() => editor.chain().focus().toggleItalic().run()}
        >
          <ItalicIcon className="size-4" />
        </Button>
        <Button
          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('strike') ? 'bg-neutral-100 text-neutral-800' : ''}`}
          isDisabled={!editor.can().chain().focus().toggleStrike().run()}
          onPress={() => editor.chain().focus().toggleStrike().run()}
        >
          <StrikethroughIcon className="size-4" />
        </Button>
        <Button
          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('code') ? 'bg-neutral-100 text-neutral-800' : ''}`}
          isDisabled={!editor.can().chain().focus().toggleCode().run()}
          onPress={() => editor.chain().focus().toggleCode().run()}
        >
          <CodeBracketIcon className="size-4" />
        </Button>
      </div>
      <div className="flex items-center gap-px p-1">
        <Button
          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('bulletList') ? 'bg-neutral-100 text-neutral-800' : ''}`}
          isDisabled={!editor.can().chain().focus().toggleBulletList().run()}
          onPress={() => editor.chain().focus().toggleBulletList().run()}
        >
          <ListBulletIcon className="size-4" />
        </Button>
        <Button
          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('orderedList') ? 'bg-neutral-100 text-neutral-800' : ''}`}
          isDisabled={!editor.can().chain().focus().toggleOrderedList().run()}
          onPress={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <NumberedListIcon className="size-4" />
        </Button>
        <Button
          className={`flex size-7 shrink-0 items-center justify-center rounded-md hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none ${editor.isActive('codeBlock') ? 'bg-neutral-100 text-neutral-800' : ''}`}
          isDisabled={!editor.can().chain().focus().toggleCodeBlock().run()}
          onPress={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <CodeBracketSquareIcon className="size-5" />
        </Button>
      </div>
    </div>
  )
}

export default EditorMenu
