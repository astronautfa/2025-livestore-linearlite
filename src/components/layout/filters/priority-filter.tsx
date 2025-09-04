import { XMarkIcon } from '@heroicons/react/16/solid'
import { Button } from '@/components/ui/button'
import { Icon, type IconName } from '@/components/icons'
import { FilterMenu } from '@/components/layout/filters/filter-menu'
import { priorityOptions } from '@/data/priority-options'
import { Link, useSearch } from '@tanstack/react-router'
import type { Priority } from '@/types/priority'
import type { ValidatedSearch } from '@/routes/index'

export const PriorityFilter = () => {
  const searchParams = useSearch({ strict: false }) as ValidatedSearch
  if (!searchParams.priority) {
    return null
  }

  return (
    <div className="ml-2 flex h-6 shrink-0 overflow-hidden whitespace-nowrap rounded-md border border-neutral-300 text-neutral-500 text-xs dark:border-neutral-600 dark:text-neutral-400">
      <div className="flex h-full items-center gap-1 border-neutral-200 border-r px-2 dark:border-neutral-700">
        <span className="font-medium text-neutral-600 dark:text-neutral-200">Priority</span>
        <span>{searchParams.priority.length > 1 ? 'is any of' : 'is'}</span>
      </div>
       <FilterMenu type="priority">
         <Button className="flex h-full items-center gap-1.5 px-2 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800">
           {searchParams.priority.length === 1 ? (
             <>
               <Icon
                 className={`h-3.5 ${priorityOptions[searchParams.priority[0] as Priority]?.style || ''}`}
                 name={priorityOptions[searchParams.priority[0] as Priority]?.icon as IconName}
               />
               <span className="font-medium text-neutral-600 dark:text-neutral-200">
                 {priorityOptions[searchParams.priority[0] as Priority]?.name || 'Unknown'}
               </span>
             </>
           ) : (
             <span>{searchParams.priority.length} priorities</span>
           )}
         </Button>
       </FilterMenu>
      <Link
        to="."
        search={(prev: ValidatedSearch) => ({
          ...prev,
          priority: undefined,
        })}
        className="group flex h-full items-center border-neutral-200 border-l px-1 hover:bg-neutral-50 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      >
        <XMarkIcon className="size-4 group-hover:text-neutral-700 dark:group-hover:text-neutral-200" />
      </Link>
    </div>
  )
}
