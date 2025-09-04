import { useStore } from '@livestore/react'
import type { CSSProperties } from 'react'
import { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Avatar } from '@/components/common/avatar'
import { PriorityMenu } from '@/components/common/priority-menu'
import { StatusMenu } from '@/components/common/status-menu'
import { events } from '@/lib/livestore/schema'
import type { Issue } from '@/types/issue'
import type { Priority } from '@/types/priority'
import type { Status } from '@/types/status'
import { formatDate } from '@/utils/format-date'
import { getIssueTag } from '@/utils/get-issue-tag'

export const Row = memo(({ issue, style }: { issue: Issue; style: CSSProperties }) => {
  const navigate = useNavigate()
  const { store } = useStore()

  const handleChangeStatus = (status: Status) =>
    store.commit(events.updateIssueStatus({ id: issue.id, status, modified: new Date() }))

  const handleChangePriority = (priority: Priority) =>
    store.commit(events.updateIssuePriority({ id: issue.id, priority, modified: new Date() }))

  return (
    <button
      className="flex w-full cursor-pointer items-center justify-between gap-4 border-neutral-200 border-b border-none bg-transparent p-0 pr-4 pl-2 text-left text-sm last:border-b-0 hover:bg-neutral-50 lg:pl-4 dark:border-neutral-700 dark:hover:bg-neutral-800/50"
      id={issue.id.toString()}
      key={issue.id}
      onClick={() => navigate(`/issue/${issue.id}`)}
      style={style}
      type="button"
    >
      <div className="flex items-center gap-px">
        <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} />
        <div className="hidden min-w-14 px-1 text-neutral-500 text-xs lg:block dark:text-neutral-400">
          {getIssueTag(issue.id)}
        </div>
        <StatusMenu onStatusChange={handleChangeStatus} status={issue.status} />
        <div className="ml-2 line-clamp-1 shrink font-medium">{issue.title}</div>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden text-neutral-500 text-xs lg:block dark:text-neutral-400">
          {formatDate(new Date(issue.created))}
        </div>
        <Avatar name={issue.creator} />
      </div>
    </button>
  )
})
