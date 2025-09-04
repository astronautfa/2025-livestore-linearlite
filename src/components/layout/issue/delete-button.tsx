import { TrashIcon } from '@heroicons/react/16/solid'
import { useStore } from '@livestore/react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { events } from '@/lib/livestore/schema'

const DELETE_CONFIRMATION_TIMEOUT_MS = 2000

export const DeleteButton = ({
  issueId,
  close,
  className,
}: {
  issueId: number
  close: () => void
  className?: string
}) => {
  const { store } = useStore()
  const [confirm, setConfirm] = React.useState(false)

  const onClick = () => {
    if (confirm) {
      const deleted = new Date()
      store.commit(
        events.deleteIssue({ id: issueId, deleted }),
        events.deleteDescription({ id: issueId, deleted }),
        events.deleteCommentsByIssueId({ issueId, deleted }),
      )
      setConfirm(false)
      close()
    }
    setConfirm(true)
    setTimeout(() => {
      setConfirm(false)
    }, DELETE_CONFIRMATION_TIMEOUT_MS)
  }

  return (
    <Button
      aria-label="Delete issue"
      className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 hover:bg-neutral-100 hover:text-red-600 focus:bg-neutral-100 focus:text-red-600 focus:outline-none dark:focus:bg-neutral-800 dark:focus:text-red-500 dark:hover:bg-neutral-800 dark:hover:text-red-500 ${className}`}
      onClick={onClick}
    >
      <TrashIcon className="size-3.5" />
      {confirm && (
        <span className="mr-1 ml-1.5 font-medium">
          Confirm<span className="hidden lg:inline"> delete</span>
        </span>
      )}
    </Button>
  )
}
