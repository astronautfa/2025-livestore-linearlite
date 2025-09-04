import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { useKeyboard } from 'react-aria'
import { Button, Input } from 'react-aria-components'
import { MenuButton } from '@/components/common/menu-button'
import { useFilterState } from '@/lib/livestore/queries'

export const SearchBar = () => {
  const [filterState, setFilterState] = useFilterState()

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'Escape') (e.target as HTMLInputElement)?.blur()
    },
  })

  return (
    <div className="relative flex h-12 shrink-0 items-center border-neutral-200 border-b p-2 text-sm lg:pl-6 dark:border-neutral-700">
      <MenuButton className="lg:hidden" />
      <MagnifyingGlassIcon className="ml-2.5 size-4 shrink-0 lg:ml-0" />
      <Input
        autoFocus
        className="input w-full border-none bg-transparent pl-2 placholder:text-neutral-400 text-neutral-800 text-sm focus:outline-none focus:ring-0 lg:pl-3 dark:text-neutral-200 dark:placeholder:text-neutral-500"
        onChange={(e) => setFilterState({ query: e.target.value })}
        placeholder="Search issues..."
        type="text"
        value={filterState.query ?? ''}
        {...keyboardProps}
      />
      {filterState.query && (
        <Button
          aria-label="Clear search query"
          className="absolute right-2 flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100"
          onPress={() => setFilterState({ query: null })}
        >
          <XMarkIcon className="size-5" />
        </Button>
      )}
    </div>
  )
}
