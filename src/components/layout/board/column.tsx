import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import { useSearch } from '@tanstack/react-router'
import { Icon } from '@/components/icons'
import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
import type { StatusDetails } from '@/data/status-options'
import { tables } from '@/lib/livestore/schema'
import { filterStateToWhere } from '@/utils'
import type { Status } from '@/types/status'
import type { ValidatedSearch } from '@/routes/board'
import { Card } from './card'

export const Column = ({ status, statusDetails }: { status: Status; statusDetails: StatusDetails }) => {
  const { store } = useStore()
  const searchParams = useSearch({ strict: false }) as ValidatedSearch
  const filteredIssues$ = queryDb(
    () => {
      const filterState = {
        orderBy: searchParams.orderBy || 'created',
        orderDirection: searchParams.orderDirection || 'desc',
        status: searchParams.status || null,
        priority: searchParams.priority || null,
        query: searchParams.query || null,
      }
      return tables.issue
        .select()
        .where({ priority: filterStateToWhere(filterState)?.priority, status, deleted: null })
        .orderBy('kanbanorder', 'desc')
    },
    { label: 'List.visibleIssues', deps: [status] },
  )
  const filteredIssues = store.useQuery(filteredIssues$)



  return (
    <div className="flex h-full w-64 shrink-0 flex-col rounded-lg border border-neutral-100 bg-neutral-50 lg:w-80 dark:border-neutral-700/50 dark:bg-neutral-800">
      <div className="flex items-center justify-between gap-4 p-2 pb-0 pl-4">
        <div className="flex items-center gap-2">
          <Icon className={`size-3.5 ${statusDetails.style}`} name={statusDetails.icon} />
          <h3 className="font-medium text-sm">{statusDetails.name}</h3>
        </div>
        <NewIssueButton status={status} />
      </div>
      <div className="grow overflow-y-auto pt-2">
        {filteredIssues.map((issue) => (
          <div key={issue.id} className="group w-full px-2 focus:outline-none">
            <Card issue={issue} />
          </div>
        ))}
      </div>
    </div>
  )
}
