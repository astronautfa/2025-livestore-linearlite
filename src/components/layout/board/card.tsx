import { useStore } from '@livestore/react'
import { Button } from '@/components/ui/button'
import { useNavigate } from '@tanstack/react-router'
import { Avatar } from '@/components/common/avatar'
import { PriorityMenu } from '@/components/common/priority-menu'
import { StatusMenu } from '@/components/common/status-menu'
import { events, type Issue } from '@/lib/livestore/schema'
import type { Priority } from '@/types/priority'
import type { Status } from '@/types/status'
import { getIssueTag } from '@/utils/get-issue-tag'

export const Card = ({ issue, className }: { issue: Issue; className?: string }) => {
  const navigate = useNavigate()
  const { store } = useStore()

  const handleChangeStatus = (status: Status) =>
    store.commit(events.updateIssueStatus({ id: issue.id, status, modified: new Date() }))

  const handleChangePriority = (priority: Priority) =>
    store.commit(events.updateIssuePriority({ id: issue.id, priority, modified: new Date() }))

  return (
    <div
      className={`h-full cursor-pointer rounded-md border border-transparent bg-white p-2 text-sm shadow-sm dark:border-neutral-700/50 dark:bg-neutral-900 dark:shadow-none ${className ?? ''}`}
      onClick={() => navigate({ to: '/issue/$id', params: { id: issue.id.toString() } })}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          navigate({ to: '/issue/$id', params: { id: issue.id.toString() } })
        }
      }}
      role="button"
      tabIndex={0}
    >
      <Button className="absolute top-0 left-0 size-0" slot="drag" />
      <div className="mb-0.5 flex items-center justify-between pt-1 pr-1 pl-2">
        <div className="text-neutral-500 text-xs dark:text-neutral-400">{getIssueTag(issue.id)}</div>
        <Avatar name={issue.creator} />
      </div>
      <div className="my-px flex items-center gap-px">
        <StatusMenu onStatusChange={handleChangeStatus} status={issue.status} />
        <div className="line-clamp-1 grow font-medium">{issue.title}</div>
      </div>
      <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} showLabel />
    </div>
  )
}
