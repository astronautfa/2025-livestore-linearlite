import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { useNavigate } from '@tanstack/react-router'
import { MenuContext } from '@/app/contexts'
import { useFilterState } from '@/lib/livestore/queries'

export const SearchButton = () => {
  const [, setFilterState] = useFilterState()
  const navigate = useNavigate()
  const menuContext = React.useContext(MenuContext)
  const { setShowMenu } = menuContext || {
    setShowMenu: () => {
      // Default no-op function when menu context is not available
    },
  }

  return (
    <button
      aria-label="Open search page"
      className="flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      onClick={() => {
        setFilterState({ query: null })
        setShowMenu(false)
        navigate({ to: '/search' })
      }}
    >
      <MagnifyingGlassIcon className="size-4" />
    </button>
  )
}
