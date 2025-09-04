import { XMarkIcon } from '@heroicons/react/20/solid'
import { Button, Heading, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'

export const Modal = ({
  show,
  setShow,
  title,
  children,
}: {
  show: boolean
  setShow: (show: boolean) => void
  title?: string
  children: React.ReactNode
}) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShow(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setShow])

  return (
    <ModalOverlay
      className="fixed inset-0 flex items-start justify-center bg-black/10 p-4 pt-16 lg:pt-32 dark:bg-black/20"
      isDismissable
      isOpen={show}
      onOpenChange={setShow}
    >
      <ReactAriaModal className="relative w-full max-w-xl rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800">
        {title && (
          <div className="flex items-center justify-between border-neutral-200 border-b p-2 pl-4 dark:border-neutral-700">
            <Heading className="font-bold text-lg" slot="title">
              {title}
            </Heading>
          </div>
        )}
        {children}
        <Button
          className="absolute top-2 right-2 flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-700 focus:outline-none dark:hover:bg-neutral-700"
          onPress={() => setShow(false)}
          slot="close"
        >
          <XMarkIcon className="size-5" />
        </Button>
      </ReactAriaModal>
    </ModalOverlay>
  )
}
