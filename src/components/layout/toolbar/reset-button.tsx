import { TrashIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button } from 'react-aria-components'
import { useNavigate } from 'react-router-dom'

const CONFIRM_TIMEOUT_MS = 2000

export const ResetButton = ({ className }: { className?: string }) => {
  const [confirm, setConfirm] = React.useState(false)
  const navigate = useNavigate()

  const onClick = () => {
    if (confirm) {
      navigate('/?reset')
      window.location.reload()
    }
    setConfirm(true)
    setTimeout(() => {
      setConfirm(false)
    }, CONFIRM_TIMEOUT_MS)
  }

  return (
    <div className={`flex items-center lg:h-full ${className}`}>
      <Button
        aria-label="Reset database"
        className={`flex h-6 items-center gap-1 rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none ${confirm ? 'text-red-500' : 'text-neutral-400'}`}
        onPress={onClick}
      >
        <TrashIcon className="size-3 shrink-0" />
        <span>{confirm ? 'Confirm' : 'Reset'}</span>
      </Button>
    </div>
  )
}
