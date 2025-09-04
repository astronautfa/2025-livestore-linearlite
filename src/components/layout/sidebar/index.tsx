import { Bars4Icon, ViewColumnsIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import { MenuContext } from '@/app/contexts'
import { AboutMenu } from '@/components/layout/sidebar/about-menu'
import { NewIssueButton } from '@/components/layout/sidebar/new-issue-button'
import { SearchButton } from '@/components/layout/sidebar/search-button'
import { ThemeButton } from '@/components/layout/sidebar/theme-button'
import { ToolbarButton } from '@/components/layout/toolbar/toolbar-button'
import { useFilterState } from '@/lib/livestore/queries'

export const Sidebar = ({ className }: { className?: string }) => {
  const [, setFilterState] = useFilterState()
  const menuContext = React.useContext(MenuContext)
  const setShowMenu =
    menuContext?.setShowMenu ||
    (() => {
      // Default no-op function when menu context is not available
    })

  const navItems = [
    {
      title: 'List view',
      icon: Bars4Icon,
      href: '/',
      onClick: () => setFilterState({ status: null }),
    },
    {
      title: 'Board view',
      icon: ViewColumnsIcon,
      href: '/board',
      onClick: () => setFilterState({ status: null }),
    },
  ]

  return (
    <aside
      className={`flex w-64 shrink-0 flex-col justify-between overflow-y-auto bg-white p-2 pt-4 dark:bg-neutral-900 ${className}`}
    >
      <div>
        <div className="flex items-center justify-between pr-2">
          <AboutMenu />
          <div className="flex items-center gap-2">
            <SearchButton />
            <NewIssueButton />
          </div>
        </div>
        <h2 className="mt-8 p-2 pt-0 font-medium text-2xs text-neutral-400 uppercase leading-none tracking-wide">
          Issues
        </h2>
        <nav className="space-y-px text-sm leading-none">
          {navItems.map(({ title, icon: Icon, href, onClick }) => (
            <Link
              className="flex h-8 items-center gap-2 rounded-md px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
              key={href}
              onClick={() => {
                onClick()
                setShowMenu(false)
              }}
              to={href}
            >
              <Icon className="size-4" />
              <span>{title}</span>
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-2 p-2">
        <ToolbarButton />
        <ThemeButton />
      </div>
    </aside>
  )
}
