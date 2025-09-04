import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import { XMarkIcon } from '@heroicons/react/20/solid'
import { Input } from '@/components/ui/input'
import { Link, useSearch, useNavigate } from '@tanstack/react-router'
import { MenuButton } from '@/components/common/menu-button'
import type { ValidatedSearch } from '@/routes/index'

export const SearchBar = () => {
  const searchParams = useSearch({ strict: false }) as ValidatedSearch
  const navigate = useNavigate()

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      ;(e.target as HTMLInputElement)?.blur()
    }
  }

  const handleSearchChange = (value: string) => {
    const newQuery = value || undefined
    navigate({
      to: '.',
      search: (prev: ValidatedSearch) => ({
        ...prev,
        query: newQuery,
      }),
      replace: true,
    })
  }

  return (
    <div className="relative flex h-12 shrink-0 items-center border-neutral-200 border-b p-2 text-sm lg:pl-6 dark:border-neutral-700">
      <MenuButton className="lg:hidden" />
      <MagnifyingGlassIcon className="ml-2.5 size-4 shrink-0 lg:ml-0" />
      <Input
        autoFocus
        className="input w-full border-none bg-transparent pl-2 placeholder:text-neutral-400 text-neutral-800 text-sm focus:outline-none focus:ring-0 lg:pl-3 dark:text-neutral-200 dark:placeholder:text-neutral-500"
        onChange={(e) => handleSearchChange(e.target.value)}
        placeholder="Search issues..."
        type="text"
        value={searchParams.query ?? ''}
        onKeyDown={handleKeyDown}
      />
      {searchParams.query && (
        <Link
          to="."
          search={(prev: ValidatedSearch) => ({
            ...prev,
            query: undefined,
          })}
          className="absolute right-2 flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100"
          aria-label="Clear search query"
        >
          <XMarkIcon className="size-5" />
        </Link>
      )}
    </div>
  )
}
