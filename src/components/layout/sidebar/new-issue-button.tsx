import { PlusIcon } from '@heroicons/react/20/solid'
import { Button } from 'react-aria-components'
import { MenuContext, NewIssueModalContext } from '@/app/contexts'
import { Icon } from '@/components/icons'
import type { Status } from '@/types/status'

export const NewIssueButton = ({ status }: { status?: Status }) => {
  const { setNewIssueModalStatus } = React.useContext(NewIssueModalContext)!
  const { setShowMenu } = React.useContext(MenuContext)!

  return (
    <Button
      aria-label="New Issue"
      className={`flex size-8 items-center justify-center rounded-lg hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800 ${status === undefined ? 'border border-neutral-200 bg-white shadow dark:border-neutral-700 dark:bg-neutral-900' : ''}`}
      onPress={() => {
        setNewIssueModalStatus(status ?? 0)
        setShowMenu(false)
      }}
    >
      {status === undefined ? <Icon className="size-4" name="new-issue" /> : <PlusIcon className="size-4" />}
    </Button>
  )
}
