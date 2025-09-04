import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Icon } from '@/components/icons'
import { AboutModal } from '@/components/layout/sidebar/about-modal'

export const AboutMenu = () => {
  const [showAboutModal, setShowAboutModal] = React.useState(false)
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <>
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label="About menu"
            className="flex h-8 items-center rounded-lg px-2 font-bold text-lg leading-none hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
          >
            <Icon className="mr-2 size-5 text-orange-500 dark:text-orange-500" name="zensync" />
            <span>Zen Sync</span>
            <ChevronDownIcon className="ml-1 size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
            onClick={() => {
              setShowAboutModal(true)
              setIsOpen(false)
            }}
          >
            <span>About Zen Sync</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AboutModal setShow={setShowAboutModal} show={showAboutModal} />
    </>
  )
}
