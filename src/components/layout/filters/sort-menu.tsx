import { ArrowsUpDownIcon, BarsArrowDownIcon, BarsArrowUpIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useKeyboard } from 'react-aria'
import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover } from 'react-aria-components'
import { Shortcut } from '@/components/common/shortcut'
import { type SortingDirection, type SortingOption, sortingOptions } from '@/data/sorting-options'
import { useFilterState } from '@/lib/livestore/queries'

export const SortMenu = ({ type }: { type?: 'status' | 'priority' }) => {
  const [filterState, setFilterState] = useFilterState()
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleSorting = (sortingOption: SortingOption) => {
    const currentSorting = filterState.orderBy
    const currentDirection = filterState.orderDirection
    if (currentSorting === sortingOption) {
      setFilterState({ orderDirection: currentDirection === 'asc' ? 'desc' : 'asc' })
    } else {
      setFilterState({
        orderBy: sortingOption,
        orderDirection: sortingOptions[sortingOption as SortingOption].defaultDirection as SortingDirection,
      })
    }
  }

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        return
      }
      for (const [sortingOption, { shortcut }] of Object.entries(sortingOptions)) {
        if (e.key === shortcut) {
          toggleSorting(sortingOption as SortingOption)
          break
        }
      }
    },
  })

  return (
    <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        aria-label="Select sorting"
        className="group relative flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 font-medium text-xs hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      >
        <ArrowsUpDownIcon className="size-3.5" />
        <span>Sort</span>
        <div className="-right-0.5 absolute top-0 size-1.5 rounded-full bg-orange-500" />
      </Button>
      <Popover className="w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
        <Menu className="focus:outline-none" selectionMode="multiple" {...keyboardProps}>
          {type !== 'priority' && (
            <MenuSection className="p-2" key="status">
              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Sorting</Header>
              {Object.entries(sortingOptions).map(([sortingOption, { name, shortcut }]) => {
                return (
                  <MenuItem
                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                    key={sortingOption}
                    onAction={() => toggleSorting(sortingOption as SortingOption)}
                  >
                    <span>{name}</span>
                    {filterState.orderBy === sortingOption && (
                      <div className="absolute right-10">
                        {filterState.orderDirection === 'asc' && <BarsArrowDownIcon className="size-4" />}
                        {filterState.orderDirection === 'desc' && <BarsArrowUpIcon className="size-4" />}
                      </div>
                    )}
                    <Shortcut className="absolute right-3" keys={[shortcut]} />
                  </MenuItem>
                )
              })}
            </MenuSection>
          )}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
