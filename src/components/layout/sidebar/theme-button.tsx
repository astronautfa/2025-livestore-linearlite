import { CheckIcon, MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { ComputerDesktopIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Shortcut } from '@/components/common/shortcut'
import { type Theme, themeOptions } from '@/data/theme-options'
import { useFrontendState } from '@/lib/livestore/queries'

export const ThemeButton = () => {
  const [theme, setTheme] = React.useState<Theme | undefined>(undefined)
  const [isOpen, setIsOpen] = React.useState(false)
  const [frontendState, setFrontendState] = useFrontendState()

  const selectTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme)
    setFrontendState({ theme: selectedTheme })
    if (selectedTheme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.theme = selectedTheme
    }
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    )
  }



  React.useEffect(() => {
    if (frontendState.theme) {
      setTheme(frontendState.theme === 'system' ? undefined : frontendState.theme)
    }
  }, [frontendState.theme])

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Change theme"
          className="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
        >
          <SunIcon className="size-4 dark:hidden" />
          <MoonIcon className="hidden size-4 dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
        {themeOptions.map(({ id, label, shortcut }) => {
          return (
            <DropdownMenuItem
              className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
              key={id}
              onClick={() => selectTheme(id)}
            >
              {id === 'light' && <SunIcon className="size-3.5" />}
              {id === 'dark' && <MoonIcon className="size-3.5" />}
              {id === 'system' && <ComputerDesktopIcon className="size-3.5" />}
              <span>{label}</span>
              {id === theme && <CheckIcon className="absolute right-9 size-4" />}
              <Shortcut className="absolute right-3" keys={[shortcut]} />
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
