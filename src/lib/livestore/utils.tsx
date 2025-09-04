import type { BootStatus, QueryBuilder } from '@livestore/livestore'
import { Icon } from '@/components/icons'
import type { FilterState, tables } from './schema'

export const renderBootStatus = (bootStatus: BootStatus) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white text-sm dark:bg-neutral-900">
      <div className="flex items-center gap-3 font-bold text-xl">
        <Icon className="mt-1 size-7" name="livestore" />
        <span>LiveStore</span>
      </div>
      {bootStatus.stage === 'loading' && <div>Loading...</div>}
      {bootStatus.stage === 'migrating' && (
        <div>
          Migrating tables ({bootStatus.progress.done}/{bootStatus.progress.total})
        </div>
      )}
      {bootStatus.stage === 'rehydrating' && (
        <div>
          Rehydrating state ({bootStatus.progress.done}/{bootStatus.progress.total})
        </div>
      )}
      {bootStatus.stage === 'syncing' && (
        <div>
          Syncing state ({bootStatus.progress.done}/{bootStatus.progress.total})
        </div>
      )}
      {bootStatus.stage === 'done' && <div>Ready</div>}
    </div>
  )
}

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
