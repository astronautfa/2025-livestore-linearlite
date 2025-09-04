import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import { useSearch } from '@tanstack/react-router'
import { Filters } from '@/components/layout/filters'
import { FilteredList } from '@/components/layout/list/filtered-list'
import { tables } from '@/lib/livestore/schema'
import { filterStateToOrderBy, filterStateToWhere } from '@/lib/livestore/utils'
import type { ValidatedSearch } from '@/routes/search'

// Convert search params to filter state format for the utility functions
const searchToFilterState = (search: ValidatedSearch) => ({
  orderBy: search.orderBy || 'created',
  orderDirection: search.orderDirection || 'desc',
  status: search.status || null,
  priority: search.priority || null,
  query: search.query || null,
})

export const Search = () => {
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
    { label: 'Search.visibleIssueIds' },
  )

  const filteredIssueIds = store.useQuery(filteredIssueIds$)

  return (
    <>
      <Filters filteredCount={searchParams.query ? filteredIssueIds.length : 0} search />
      <FilteredList filteredIssueIds={searchParams.query ? filteredIssueIds : []} />
    </>
  )
}
