import { ArrowUpIcon } from '@heroicons/react/20/solid'
import { useStore } from '@livestore/react'
import React from 'react'
import { useKeyboard } from 'react-aria'
import { Button } from 'react-aria-components'
import Editor from '@/components/common/editor'
import { useFrontendState } from '@/lib/livestore/queries'
import { events } from '@/lib/livestore/schema'

export const CommentInput = ({ issueId, className }: { issueId: number; className?: string }) => {
  // TODO move this into LiveStore
  const [commentDraft, setCommentDraft] = React.useState<string>('')
  const [frontendState] = useFrontendState()
  const { store } = useStore()

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
        submitComment()
      }
    },
  })

  const submitComment = () => {
    if (!commentDraft) {
      return
    }
    store.commit(
      events.createComment({
        id: crypto.randomUUID(),
        body: commentDraft,
        issueId,
        created: new Date(),
        creator: frontendState.user,
      }),
    )
    setCommentDraft('')
  }

  return (
    <div
      className={`rounded-lg border border-transparent bg-white pb-4 shadow dark:border-neutral-700/50 dark:bg-neutral-800 dark:shadow-none ${className}`}
      {...keyboardProps}
    >
      <Editor
        className="px-4 py-1"
        onChange={(value) => setCommentDraft(value)}
        placeholder="Leave a comment..."
        value={commentDraft}
      />
      {/* TODO add tooltip for submit shortcut */}
      <Button
        aria-label="Submit comment"
        className="mr-4 ml-auto flex size-7 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-600 shadow hover:bg-neutral-100 hover:text-neutral-800 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-700 dark:focus:text-neutral-100 dark:hover:bg-neutral-700 dark:hover:text-neutral-100"
        onPress={submitComment}
      >
        <ArrowUpIcon className="size-4" />
      </Button>
    </div>
  )
}
