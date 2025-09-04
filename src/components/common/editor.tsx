import { EditorContent, type Extensions, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React, { useEffect } from 'react'
import { Markdown } from 'tiptap-markdown'

const Editor = ({
  value,
  onBlur,
  onChange,
  className = '',
  placeholder,
}: {
  value: string
  onBlur?: (value: string) => void
  onChange?: (value: string) => void
  className?: string
  placeholder?: string
}) => {
  const extensions: Extensions = [StarterKit, Markdown]

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: `input prose text-neutral-600 dark:text-neutral-200 prose-sm prose-strong:text-neutral-600 dark:prose-strong:text-neutral-200 prose-p:my-2 prose-ol:my-2 prose-ul:my-2 prose-pre:my-2 w-full max-w-xl font-normal focus:outline-none appearance-none editor ${className}`,
      },
    },
    content: value || undefined,
    onBlur: onBlur
      ? ({ editor }) => {
          const markdown = editor.storage.markdown.getMarkdown()
          onBlur(markdown || '')
        }
      : undefined,
    onUpdate: onChange
      ? ({ editor }) => {
          const markdown = editor.storage.markdown.getMarkdown()
          onChange(markdown || '')
        }
      : undefined,
  })

  useEffect(() => {
    if (editor && value !== editor.storage.markdown.getMarkdown()) {
      editor.commands.setContent(value)
    }
  }, [value, editor])

  return <EditorContent editor={editor} />
}

export default Editor
