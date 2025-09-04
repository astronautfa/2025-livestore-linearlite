import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
import { MenuContext } from '@/app/contexts'
import { useFilterState } from '@/lib/livestore/queries'

export const SearchButton = () => {
  const [, setFilterState] = useFilterState()
  const { setShowMenu } = React.useContext(MenuContext)!

  return (
    <Link
      aria-label="Open search page"
      className="flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      onClick={() => {
        setFilterState({ query: null })
        setShowMenu(false)
      }}
      to="/search"
    >
      <MagnifyingGlassIcon className="size-4" />
    </Link>
  )
}
