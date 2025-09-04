import { useStore } from '@livestore/react'
import { events } from '@/lib/livestore/schema'
import type { Issue } from '@/types/issue'

export const TitleInput = ({
  issue,
  title,
  setTitle,
  className,
  autoFocus,
}: {
  issue?: Issue
  title?: string
  setTitle?: (title: string) => void
  className?: string
  autoFocus?: boolean
}) => {
  const { store } = useStore()

  const handleTitleChange = (title: string) => {
    if (issue) {
      store.commit(events.updateIssueTitle({ id: issue.id, title, modified: new Date() }))
    }
    if (setTitle) {
      setTitle(title)
    }
  }

  return (
    <input
      autoFocus={autoFocus}
      className={`input w-full max-w-xl rounded-md border-none bg-transparent p-2 font-semibold text-xl leading-none placeholder-neutral-400 focus:border-none focus:bg-neutral-50 focus:outline-none focus:ring-0 dark:focus:bg-neutral-800 ${className}`}
      onBlur={(e) => handleTitleChange(e.target.value)}
      onChange={(e) => handleTitleChange(e.target.value)}
      placeholder="Issue title"
      value={issue?.title ?? title}
    />
  )
}
