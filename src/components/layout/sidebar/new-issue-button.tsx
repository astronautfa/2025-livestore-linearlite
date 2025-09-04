import { PlusIcon } from '@heroicons/react/20/solid'
import React from 'react'
import { Button } from '@/components/ui/button'
import { MenuContext, NewIssueModalContext } from '@/app/contexts'
import { Icon } from '@/components/icons'
import type { Status } from '@/types/status'

export const NewIssueButton = ({ status }: { status?: Status }) => {
  const newIssueModalContext = React.useContext(NewIssueModalContext)
  const { setNewIssueModalStatus } = newIssueModalContext || {
    setNewIssueModalStatus: () => {
      // Default no-op function when modal context is not available
    },
  }
  const menuContext = React.useContext(MenuContext)
  const { setShowMenu } = menuContext || {
    setShowMenu: () => {
      // Default no-op function when menu context is not available
    },
  }

  return (
    <Button
      aria-label="New Issue"
      className={`flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800 ${status === undefined ? 'border border-neutral-200 bg-white shadow dark:border-neutral-700 dark:bg-neutral-900' : ''}`}
      onClick={() => {
        setNewIssueModalStatus(status ?? 0)
        setShowMenu(false)
      }}
    >
      {status === undefined ? <Icon className="size-4" name="new-issue" /> : <PlusIcon className="size-4" />}
    </Button>
  )
}
