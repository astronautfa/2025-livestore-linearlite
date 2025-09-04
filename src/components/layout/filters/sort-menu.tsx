import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Button } from 'react-aria-components'
import { Link, useSearch } from '@tanstack/react-router'
import { Shortcut } from '@/components/common/shortcut'
import { useClickOutside } from '@/hooks/useClickOutside'
import { type SortingDirection, type SortingOption, sortingOptions } from '@/data/sorting-options'
import type { ValidatedSearch } from '@/routes/index'

export const SortMenu = () => {
  const searchParams = useSearch({ strict: false }) as ValidatedSearch
  const [isOpen, setIsOpen] = React.useState(false)
  const menuRef = React.useRef<HTMLDivElement>(null)

  useClickOutside(menuRef as React.RefObject<Element>, () => setIsOpen(false))

  const toggleSorting = (sortingOption: SortingOption) => {
    const currentSorting = searchParams.orderBy
    const currentDirection = searchParams.orderDirection

    if (currentSorting === sortingOption) {
      // Toggle direction
      return {
        orderBy: sortingOption,
        orderDirection: currentDirection === 'asc' ? 'desc' : 'asc',
      }
    } else {
      // Change sorting option with default direction
      return {
        orderBy: sortingOption,
        orderDirection: sortingOptions[sortingOption as SortingOption].defaultDirection as SortingDirection,
      }
    }
  }

  return (
    <div className="relative" ref={menuRef}>
      <Button
        aria-label="Select sorting"
        className="group relative flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
        onPress={() => setIsOpen(!isOpen)}
      >
        <ArrowsUpDownIcon className="size-3.5" />
        <span>Sort</span>
        <div className="-right-0.5 absolute top-0 size-1.5 rounded-full bg-orange-500" />
      </Button>
      {isOpen && (
        <div className="absolute right-0 top-full z-50 mt-1 w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
          <div className="p-2">
            <div className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Sorting</div>
            {Object.entries(sortingOptions).map(([sortingOption, { name, shortcut }]) => {
              const newSearch = toggleSorting(sortingOption as SortingOption)
              return (
                <Link
                  key={sortingOption}
                  to="."
                  search={(prev: ValidatedSearch) => ({
                    ...prev,
                    ...newSearch,
                  })}
                  className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{name}</span>
                  {searchParams.orderBy === sortingOption && (
                    <div className="absolute right-10">
                      {searchParams.orderDirection === 'asc' && <BarsArrowDownIcon className="size-4" />}
                      {searchParams.orderDirection === 'desc' && <BarsArrowUpIcon className="size-4" />}
                    </div>
                  )}
                  <Shortcut className="absolute right-3" keys={[shortcut]} />
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
