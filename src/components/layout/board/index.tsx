import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import { useSearch } from '@tanstack/react-router'
import { Column } from '@/components/layout/board/column'
import { Filters } from '@/components/layout/filters'
import { statusOptions } from '@/data/status-options'
import { tables } from '@/lib/livestore/schema'
import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
import type { Status } from '@/types/status'
import type { ValidatedSearch } from '@/routes/board'

// Convert search params to filter state format for the utility functions
const searchToFilterState = (search: ValidatedSearch) => ({
  orderBy: search.orderBy || 'created',
  orderDirection: search.orderDirection || 'desc',
  status: search.status || null,
  priority: search.priority || null,
  query: search.query || null,
})

export const Board = () => {
  const { store } = useStore()
  const searchParams = useSearch({ strict: false }) as ValidatedSearch

  // Create a reactive query that uses search params directly
  const filteredIssueIds$ = queryDb(
    () => {
      const filterState = searchToFilterState(searchParams)
      return tables.issue
        .select('id')
        .where({ ...filterStateToWhere(filterState), deleted: null })
        .orderBy(filterStateToOrderBy(filterState))
    },
    { label: 'Board.visibleIssueIds' },
  )

  const filteredIssueIds = store.useQuery(filteredIssueIds$)

  return (
    <>
      <Filters filteredCount={filteredIssueIds.length} hideSorting hideStatusFilter />
      <div className="grow overflow-x-auto">
        <div className="flex h-full gap-4 p-4">
          {statusOptions.map((statusDetails, index) => (
            <Column key={statusDetails.id} status={index as Status} statusDetails={statusDetails} />
          ))}
          <div className="-ml-4 w-4 shrink-0" />
        </div>
      </div>
    </>
  )
}
