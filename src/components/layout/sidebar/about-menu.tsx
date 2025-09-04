import { ChevronDownIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button, MenuTrigger } from 'react-aria-components'
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
      </MenuTrigger>
      <AboutModal setShow={setShowAboutModal} show={showAboutModal} />
    </>
  )
}
