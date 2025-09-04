import { XMarkIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Button } from 'react-aria-components'

export const BackButton = ({ close }: { close: () => void }) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [close])

  return (
    <Button
      aria-label="Back to issues"
      className="flex size-8 shrink-0 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      onPress={close}
    >
      <XMarkIcon className="size-5" />
    </Button>
  )
}
