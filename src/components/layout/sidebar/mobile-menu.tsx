import React from 'react'
import { ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'
import { MenuContext } from '@/app/contexts'
import { Sidebar } from '@/components/layout/sidebar'
import { useFrontendState } from '@/lib/livestore/queries'

export const MobileMenu = () => {
  const menuContext = React.useContext(MenuContext)
  const { showMenu, setShowMenu } = menuContext || {
    showMenu: false,
    setShowMenu: () => {
      // Default no-op function when menu context is not available
    },
  }
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
