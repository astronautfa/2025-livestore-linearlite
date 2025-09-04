import type { QueryBuilder } from '@livestore/livestore'
import type { FilterState, tables } from '@/lib/livestore/schema'

export const filterStateToWhere = (filterState: FilterState) => {
  const { status, priority, query } = filterState

  return {
    status: status ? { op: 'IN', value: status } : undefined,
    priority: priority ? { op: 'IN', value: priority } : undefined,
    // TODO treat query as `OR` in
    title: query ? { op: 'LIKE', value: `%${query}%` } : undefined,
  } satisfies QueryBuilder.WhereParams<typeof tables.issue>
}

export const filterStateToOrderBy = (filterState: FilterState) => [
  { col: filterState.orderBy, direction: filterState.orderDirection },
]