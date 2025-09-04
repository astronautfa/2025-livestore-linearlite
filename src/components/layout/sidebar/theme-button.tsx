import { CheckIcon, MoonIcon, SunIcon } from '@heroicons/react/16/solid'
import { ComputerDesktopIcon } from '@heroicons/react/20/solid'
import { useKeyboard } from 'react-aria'
import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components'
import { Shortcut } from '@/components/common/shortcut'
import { type Theme, themeOptions } from '@/data/theme-options'
import { useFrontendState } from '@/lib/livestore/queries'

export const ThemeButton = () => {
  const [theme, setTheme] = React.useState<Theme | undefined>(undefined)
  const [isOpen, setIsOpen] = React.useState(false)
  const [frontendState, setFrontendState] = useFrontendState()

  const selectTheme = (theme: Theme) => {
    setTheme(theme)
    setFrontendState({ theme })
    if (theme === 'system') localStorage.removeItem('theme')
    else localStorage.theme = theme
    document.documentElement.classList.toggle(
      'dark',
      localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches),
    )
  }

  const { keyboardProps } = useKeyboard({
    onKeyDown: (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false)
        return
      }
      themeOptions.forEach(({ id, shortcut }) => {
        if (e.key === shortcut) {
          selectTheme(id)
          setIsOpen(false)
          return
        }
      })
    },
  })

  React.useEffect(() => {
    if (frontendState.theme) {
      setTheme(frontendState.theme === 'system' ? undefined : frontendState.theme)
    }
  }, [frontendState.theme])

  return (
    <MenuTrigger isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button
        aria-label="Change theme"
        className="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      >
        <SunIcon className="size-4 dark:hidden" />
        <MoonIcon className="hidden size-4 dark:block" />
      </Button>
      <Popover className="w-40 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
        <Menu className="p-2 focus:outline-none" {...keyboardProps}>
          {themeOptions.map(({ id, label, shortcut }) => {
            return (
              <MenuItem
                className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                key={id}
                onAction={() => selectTheme(id)}
              >
                {id === 'light' && <SunIcon className="size-3.5" />}
                {id === 'dark' && <MoonIcon className="size-3.5" />}
                {id === 'system' && <ComputerDesktopIcon className="size-3.5" />}
                <span>{label}</span>
                {id === theme && <CheckIcon className="absolute right-9 size-4" />}
                <Shortcut className="absolute right-3" keys={[shortcut]} />
              </MenuItem>
            )
          })}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
