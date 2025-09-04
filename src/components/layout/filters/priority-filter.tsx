import { XMarkIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button } from 'react-aria-components'
import { Icon, type IconName } from '@/components/icons'
import { FilterMenu } from '@/components/layout/filters/filter-menu'
import { priorityOptions } from '@/data/priority-options'
import { useFilterState } from '@/lib/livestore/queries'
import type { Priority } from '@/types/priority'

export const PriorityFilter = () => {
  const [filterState, setFilterState] = useFilterState()
  if (!filterState.priority) return null

  return (
    <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
      <div className="flex h-full items-center gap-1 border-neutral-200 border-r px-2 dark:border-neutral-700">
        <span className="font-medium text-neutral-600 dark:text-neutral-200">Priority</span>
        <span>{filterState.priority.length > 1 ? 'is any of' : 'is'}</span>
      </div>
      <FilterMenu type="priority">
        <Button className="flex h-full items-center gap-1.5 px-2 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
          {filterState.priority.length === 1 ? (
            <>
              <Icon
                className={`h-3.5 ${priorityOptions[filterState.priority[0] as Priority]!.style}`}
                name={priorityOptions[filterState.priority[0] as Priority]!.icon as IconName}
              />
              <span className="font-medium text-neutral-600 dark:text-neutral-200">
                {priorityOptions[filterState.priority[0] as Priority]!.name}
              </span>
            </>
          ) : (
            <span>{filterState.priority.length} priorities</span>
          )}
        </Button>
      </FilterMenu>
      <Button
        className="group flex h-full items-center border-neutral-200 border-l px-1 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
        onPress={() => setFilterState({ priority: null })}
      >
        <XMarkIcon className="size-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
      </Button>
    </div>
  )
}
