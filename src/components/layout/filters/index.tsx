import { useStore } from '@livestore/react'
import React from 'react'
import { Button } from 'react-aria-components'
import { Icon } from '@/components/icons'
import { FilterMenu } from '@/components/layout/filters/filter-menu'
import { Header } from '@/components/layout/filters/header'
import { PriorityFilter } from '@/components/layout/filters/priority-filter'
import { SortMenu } from '@/components/layout/filters/sort-menu'
import { StatusFilter } from '@/components/layout/filters/status-filter'
import { SearchBar } from '@/components/layout/search/search-bar'
import { statusOptions } from '@/data/status-options'
import { issueCount$, useFilterState } from '@/lib/livestore/queries'
import type { Status } from '@/types/status'

export const Filters = ({
  filteredCount,
  hideStatusFilter,
  hideSorting,
  search,
}: {
  filteredCount: number
  hideStatusFilter?: boolean
  hideSorting?: boolean
  search?: boolean
}) => {
  const { store } = useStore()
  const totalCount = store.useQuery(issueCount$)
  const [filterState] = useFilterState()

  return (
    <>
      {search ? (
        <SearchBar />
      ) : (
        <Header
          filteredCount={filteredCount}
          heading={filterState?.status?.length === 1 ? statusOptions[filterState.status[0] as Status]!.name : 'Issues'}
          totalCount={totalCount}
        />
      )}
      <div className="flex h-12 items-center justify-between gap-8 border-neutral-200 border-b px-4 text-sm dark:border-neutral-700">
        <div className="flex items-center">
          {search && (
            <div className="mr-2 text-neutral-500 text-xs lg:ml-2 dark:text-neutral-400">
              <span>{filteredCount}</span>
              {filteredCount !== totalCount && <span> of {totalCount}</span>}
              <span> Issues</span>
            </div>
          )}
          <FilterMenu type={hideStatusFilter ? 'priority' : undefined}>
            <Button
              aria-label="Select filters"
              className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
            >
              <Icon className="size-3.5" name="filter" />
              <span className={filterState.status?.length || filterState.priority?.length ? 'lg:hidden' : ''}>
                Filter
              </span>
            </Button>
          </FilterMenu>
          <div className="hidden items-center lg:flex">
            {!hideStatusFilter && <StatusFilter />}
            <PriorityFilter />
          </div>
        </div>
        {/* TODO add clear filters/sorting button */}
        {!hideSorting && <SortMenu />}
      </div>
      {filterState.status?.length || filterState.priority?.length ? (
        <div className="h-12 overflow-x-auto border-neutral-200 border-b lg:hidden dark:border-neutral-700">
          <div className="flex h-full items-center pl-2">
            {!hideStatusFilter && <StatusFilter />}
            <PriorityFilter />
            <div className="h-full w-4 shrink-0" />
          </div>
        </div>
      ) : null}
    </>
  )
}
