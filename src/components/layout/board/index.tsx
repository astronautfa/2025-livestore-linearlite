import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import { Column } from '@/components/layout/board/column'
import { Filters } from '@/components/layout/filters'
import { statusOptions } from '@/data/status-options'
import { filterState$ } from '@/lib/livestore/queries'
import { tables } from '@/lib/livestore/schema'
import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
import type { Status } from '@/types/status'

const filteredIssueIds$ = queryDb(
  (get) =>
    tables.issue
      .select('id')
      .where({ ...filterStateToWhere(get(filterState$)), deleted: null })
      .orderBy(filterStateToOrderBy(get(filterState$))),
  { label: 'Board.visibleIssueIds' },
)

export const Board = () => {
  const { store } = useStore()
  const filteredIssueIds = store.useQuery(filteredIssueIds$)

  return (
    <>
      <Filters filteredCount={filteredIssueIds.length} hideSorting hideStatusFilter />
      <div className="grow overflow-x-auto">
        <div className="flex h-full gap-4 p-4">
          {statusOptions.map((statusDetails, statusOption) => (
            <Column key={statusOption} status={statusOption as Status} statusDetails={statusDetails} />
          ))}
          <div className="-ml-4 w-4 shrink-0" />
        </div>
      </div>
    </>
  )
}
