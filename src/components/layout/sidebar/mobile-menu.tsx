import React from 'react'
import { ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
import { MenuContext } from '@/app/contexts'
import { Sidebar } from '@/components/layout/sidebar'
import { useFrontendState } from '@/lib/livestore/queries'

export const MobileMenu = () => {
  const { showMenu, setShowMenu } = React.useContext(MenuContext)!
  const [frontendState] = useFrontendState()

  return (
    <ModalOverlay
      className={`fixed inset-0 flex items-stretch bg-black/10 dark:bg-black/20 ${frontendState.showToolbar ? 'bottom-10' : ''}`}
      isDismissable
      isOpen={showMenu}
      onOpenChange={setShowMenu}
    >
      <ReactAriaModal className="border-neutral-200 border-r dark:border-neutral-700">
        <Sidebar className="h-full" />
      </ReactAriaModal>
    </ModalOverlay>
  )
}
