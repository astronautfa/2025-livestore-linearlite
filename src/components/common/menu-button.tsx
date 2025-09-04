import React, { useContext } from 'react'
import { Button } from 'react-aria-components'
import { MenuContext } from '@/app/contexts'
import { Icon } from '@/components/icons'

export const MenuButton = ({ className }: { className?: string }) => {
  const { setShowMenu } = useContext(MenuContext)!

  return (
    <Button
      aria-label="Show menu"
      className={`flex size-8 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800 ${className}`}
      onPress={() => setShowMenu(true)}
    >
      <Icon className="size-4" name="sidebar" />
    </Button>
  )
}
