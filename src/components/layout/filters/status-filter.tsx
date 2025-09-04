import { XMarkIcon } from '@heroicons/react/16/solid'
import { Button } from 'react-aria-components'
import { Icon, type IconName } from '@/components/icons'
import { FilterMenu } from '@/components/layout/filters/filter-menu'
import { statusOptions } from '@/data/status-options'
import { useFilterState } from '@/lib/livestore/queries'
import type { Status } from '@/types/status'

export const StatusFilter = () => {
  const [filterState, setFilterState] = useFilterState()
  if (!filterState.status) {
    return null
  }

  return (
    <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
      <div className="flex h-full items-center gap-1 border-neutral-200 border-r px-2 dark:border-neutral-700">
        <span className="font-medium text-neutral-600 dark:text-neutral-200">Status</span>
        <span>{filterState.status.length > 1 ? 'is any of' : 'is'}</span>
      </div>
      <FilterMenu type="status">
        <Button className="flex h-full items-center gap-1.5 pr-2 pl-5 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
          {filterState.status.map((status, index) => (
            <div className="-ml-3 h-4 rounded-full bg-white p-px dark:bg-neutral-900" key={index}>
              <Icon
                className={`h-full ${statusOptions[status as Status]!.style}`}
                name={statusOptions[status as Status]!.icon as IconName}
              />
            </div>
          ))}
          {filterState.status.length === 1 ? (
            <span className="font-medium text-neutral-600 dark:text-neutral-200">
              {statusOptions[filterState.status[0] as Status]!.name}
            </span>
          ) : (
            <span>{filterState.status.length} statuses</span>
          )}
        </Button>
      </FilterMenu>
      <Button
        className="group flex h-full items-center border-neutral-200 border-l px-1 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
        onPress={() => setFilterState({ status: null })}
      >
        <XMarkIcon className="size-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
      </Button>
    </div>
  )
}
