import React from 'react'
import { CheckIcon } from '@heroicons/react/16/solid'
import { Button } from 'react-aria-components'
import { Link, useSearch } from '@tanstack/react-router'
import { Icon, type IconName } from '@/components/icons'
import { useClickOutside } from '@/hooks/useClickOutside'
import { priorityOptions } from '@/data/priority-options'
import { statusOptions } from '@/data/status-options'
import type { Priority } from '@/types/priority'
import type { Status } from '@/types/status'
import type { ValidatedSearch } from '@/routes/index'

export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; children?: React.ReactNode }) => {
  const searchParams = useSearch({ strict: false }) as ValidatedSearch
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  useClickOutside(menuRef as React.RefObject<Element>, () => setIsOpen(false))

  const toggleFilter = ({
    filterType,
    value,
  }: { filterType: 'status'; value: Status } | { filterType: 'priority'; value: Priority }) => {
    const currentFilters = searchParams[filterType] ?? []
    let newFilters: (Status | Priority)[]

    if (currentFilters.includes(value)) {
      newFilters = currentFilters.filter(f => f !== value)
    } else {
      newFilters = [...currentFilters, value]
    }

    return {
      [filterType]: newFilters.length > 0 ? newFilters : undefined,
    }
  }

  // Clone children and add click handler if it's a React element
  const triggerElement = React.isValidElement(children) ? (
    React.cloneElement(children as React.ReactElement<any>, {
      onPress: () => setIsOpen(!isOpen),
    })
  ) : (
    <Button
      aria-label="Select filters"
      className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      onPress={() => setIsOpen(!isOpen)}
    >
      <Icon className="size-3.5" name="filter" />
      <span>Filter</span>
    </Button>
  )

  return (
    <div className="relative" ref={menuRef}>
      {triggerElement}
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
          <div className="p-2">
            {type !== 'priority' && (
              <div className="mb-2">
                <div className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Status</div>
                {statusOptions.map(({ name, icon, style }, index) => {
                  const active = searchParams.status?.includes(index as Status)
                  const newSearch = toggleFilter({ filterType: 'status', value: index as Status })
                  return (
                    <Link
                      key={name}
                      to="."
                      search={(prev: ValidatedSearch) => ({
                        ...prev,
                        ...newSearch,
                      })}
                      className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
                      >
                        {active && <CheckIcon className="size-4 text-white" />}
                      </div>
                      <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
                      <span>{name}</span>
                    </Link>
                  )
                })}
              </div>
            )}
            {!type && <div className="h-px w-full bg-neutral-200 dark:bg-neutral-700 my-2" />}
            {type !== 'status' && (
              <div>
                <div className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Priority</div>
                {priorityOptions.map(({ name, icon, style }, index) => {
                  const active = searchParams.priority?.includes(index as Priority)
                  const newSearch = toggleFilter({ filterType: 'priority', value: index as Priority })
                  return (
                    <Link
                      key={name}
                      to="."
                      search={(prev: ValidatedSearch) => ({
                        ...prev,
                        ...newSearch,
                      })}
                      className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                      onClick={() => setIsOpen(false)}
                    >
                      <div
                        className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
                      >
                        {active && <CheckIcon className="size-4 text-white" />}
                      </div>
                      <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
                      <span>{name}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
