import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button, Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
import { Icon } from '@/components/icons'
import { AboutModal } from '@/components/layout/sidebar/about-modal'

export const AboutMenu = () => {
  const [showAboutModal, setShowAboutModal] = React.useState(false)

  return (
    <>
      <MenuTrigger>
        <Button
          aria-label="Menu"
          className="flex h-8 items-center rounded-lg px-2 font-bold text-lg leading-none hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
        >
          <Icon className="mr-2 size-5 text-orange-500 dark:text-orange-500" name="zensync" />
          <span>Zen Sync</span>
          <ChevronDownIcon className="ml-1 size-4" />
        </Button>
        <Popover className="ml-1 w-56 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
          <Menu className="focus:outline-none">
            <MenuSection className="p-2" key="zensync">
              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Zen Sync</Header>
              <MenuItem
                className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                onAction={() => setShowAboutModal(true)}
              >
                About
              </MenuItem>
            </MenuSection>
            <Separator className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />
            <MenuSection className="p-2" key="livestore">
              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">LiveStore</Header>
              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
                About
              </MenuItem>
              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
                Documentation
              </MenuItem>
              <MenuItem className="cursor-pointer rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700">
                GitHub
              </MenuItem>
            </MenuSection>
          </Menu>
        </Popover>
      </MenuTrigger>
      <AboutModal setShow={setShowAboutModal} show={showAboutModal} />
    </>
  )
}
