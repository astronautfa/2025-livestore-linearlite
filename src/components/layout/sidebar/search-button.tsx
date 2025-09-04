import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Link, useSearch } from '@tanstack/react-router'
import { MenuContext } from '@/app/contexts'
import type { ValidatedSearch } from '@/routes/index'

export const SearchButton = () => {
  const searchParams = useSearch({ strict: false }) as ValidatedSearch
  const menuContext = React.useContext(MenuContext)
  const { setShowMenu } = menuContext || {
    setShowMenu: () => {
      // Default no-op function when menu context is not available
    },
  }

  return (
    <Link
      to="/search"
      search={searchParams}
      aria-label="Open search page"
      className="flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      onClick={() => setShowMenu(false)}
    >
      <MagnifyingGlassIcon className="size-4" />
    </Link>
  )
}
