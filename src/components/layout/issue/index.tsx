import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import { Button } from '@/components/ui/button'
import { useNavigate, useParams } from '@tanstack/react-router'
import { Avatar } from '@/components/common/avatar'
import { MenuButton } from '@/components/common/menu-button'
import { PriorityMenu } from '@/components/common/priority-menu'
import { StatusMenu } from '@/components/common/status-menu'
import { BackButton } from '@/components/layout/issue/back-button'
import { CommentInput } from '@/components/layout/issue/comment-input'
import { Comments } from '@/components/layout/issue/comments'
import { DeleteButton } from '@/components/layout/issue/delete-button'
import { DescriptionInput } from '@/components/layout/issue/description-input'
import { TitleInput } from '@/components/layout/issue/title-input'
import { events, tables } from '@/lib/livestore/schema'
import type { Priority } from '@/types/priority'
import type { Status } from '@/types/status'
import { formatDate } from '@/utils/format-date'
import { getIssueTag } from '@/utils/get-issue-tag'

export const Issue = () => {
  const { id } = useParams({ from: '/issue/$id' })
  const navigate = useNavigate()
  const { store } = useStore()
  const issueId = Number(id ?? 0)
  const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId }).first(), { deps: [issueId] }))

  const close = () => {
    if (window.history.length > 2) {
      window.history.back()
    } else {
      navigate({ to: '/' })
    }
  }

  const handleChangeStatus = (status: Status) => {
    store.commit(events.updateIssueStatus({ id: issueId, status, modified: new Date() }))
  }

  const handleChangePriority = (priority: Priority) => {
    store.commit(events.updateIssuePriority({ id: issueId, priority, modified: new Date() }))
  }

  const handleChangeDescription = (body: string) => {
    store.commit(events.updateDescription({ id: issueId, body }))
  }

  const description = store.useQuery(
    queryDb(tables.description.select('body').where({ id: issueId }).first(), { deps: [issueId] }),
  )

  return (
    <div className="flex h-full flex-col">
      <div className="flex h-12 shrink-0 items-center justify-between gap-8 border-neutral-200 border-b px-2 lg:pl-6 dark:border-neutral-700">
        <div className="flex items-center gap-1 text-sm lg:gap-2">
          <MenuButton className="lg:hidden" />
          <Button
            aria-label="Back to issues"
            className="ml-2 font-medium hover:text-neutral-800 focus:outline-none lg:ml-0 dark:hover:text-neutral-100"
            onClick={close}
          >
            Issues
          </Button>
          <ChevronRightIcon className="size-3.5" />
           <div className="text-neutral-500 dark:text-neutral-400">{getIssueTag(issueId)}</div>
        </div>
        <div className="flex items-center gap-px">
          <DeleteButton className="hidden lg:block" close={close} issueId={issueId} />
          <BackButton close={close} />
        </div>
      </div>
      <div className="flex h-[calc(100%-3rem)] flex-col lg:flex-row">
        <div className="flex flex-wrap justify-between gap-2 border-neutral-200 border-b p-4 lg:hidden dark:border-neutral-700">
          <div className="flex items-center gap-px">
            <StatusMenu onStatusChange={handleChangeStatus} showLabel status={issue.status} />
            <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} showLabel />
          </div>
          <div className="flex items-center gap-2">
            <div className="text-neutral-500 text-xs dark:text-neutral-400">{formatDate(new Date(issue.created))}</div>
            <Avatar name={issue.creator} />
          </div>
        </div>
        <div className="grow overflow-y-auto">
          <div className="border-neutral-200 border-b p-4 lg:p-14 dark:border-neutral-700">
            <TitleInput className="lg:mb-4" issue={issue} />
            <DescriptionInput description={description} setDescription={handleChangeDescription} />
          </div>
          <div className="p-4 lg:p-14">
            <h2 className="mb-4 font-medium text-2xs text-neutral-400 uppercase leading-none tracking-wide">
              Comments
            </h2>
            <CommentInput issueId={issue.id} />
            <Comments issueId={issue.id} />
          </div>
        </div>
        <div className="hidden w-64 space-y-px border-neutral-200 border-l px-8 py-16 lg:block dark:border-neutral-700">
          <h2 className="mb-4 font-medium text-2xs text-neutral-400 uppercase leading-none tracking-wide">
            Properties
          </h2>
          <div className="flex h-8 items-center">
            <div className="-mr-0.5 w-16 shrink-0">Creator:</div>
            <Avatar name={issue.creator} />
            <div className="mr-2 ml-2.5 font-medium">{issue.creator}</div>
          </div>
          <div className="flex h-8 items-center">
            <div className="w-16 shrink-0">Created:</div>
            <div>{formatDate(new Date(issue.created))}</div>
          </div>
          <div className="flex h-8 items-center">
            <div className="w-14 shrink-0">Status:</div>
            <StatusMenu onStatusChange={handleChangeStatus} showLabel status={issue.status} />
          </div>
          <div className="flex h-8 items-center">
            <div className="w-14 shrink-0">Priority:</div>
            <PriorityMenu onPriorityChange={handleChangePriority} priority={issue.priority} showLabel />
          </div>
        </div>
      </div>
    </div>
  )
}
