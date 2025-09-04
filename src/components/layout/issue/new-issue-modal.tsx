import { useStore } from '@livestore/react'
import { generateKeyBetween } from 'fractional-indexing'
import React from 'react'
import { Button } from 'react-aria-components'
import { NewIssueModalContext } from '@/app/contexts'
import { Modal } from '@/components/common/modal'
import { PriorityMenu } from '@/components/common/priority-menu'
import { StatusMenu } from '@/components/common/status-menu'
import { DescriptionInput } from '@/components/layout/issue/description-input'
import { TitleInput } from '@/components/layout/issue/title-input'
import { highestIssueId$, useFrontendState } from '@/lib/livestore/queries'
import { events, tables } from '@/lib/livestore/schema'
import type { Priority } from '@/types/priority'
import type { Status } from '@/types/status'

export const NewIssueModal = () => {
  const [frontendState] = useFrontendState()
  const context = React.useContext(NewIssueModalContext)
  if (!context) {
    throw new Error('NewIssueModal must be used within a NewIssueModalProvider')
  }
  const { newIssueModalStatus, setNewIssueModalStatus } = context
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [priority, setPriority] = React.useState<Priority>(0)
  const { store } = useStore()

  const closeModal = () => {
    setTitle('')
    setDescription('')
    setPriority(0)
    setNewIssueModalStatus(false)
  }

  const createIssue = () => {
    if (!title) {
      return
    }
    const date = new Date()
    // TODO make this "merge safe"
    const highestIssueId = store.query(highestIssueId$)
    const highestKanbanOrder = store.query(
      tables.issue
        .select('kanbanorder')
        .where({ status: newIssueModalStatus === false ? 0 : (newIssueModalStatus as Status) })
        .orderBy('kanbanorder', 'desc')
        .first({ fallback: () => 'a1' }),
    )
    const kanbanorder = generateKeyBetween(highestKanbanOrder, null)
    store.commit(
      events.createIssueWithDescription({
        id: highestIssueId + 1,
        title,
        priority,
        status: newIssueModalStatus as Status,
        modified: date,
        created: date,
        creator: frontendState.user,
        kanbanorder,
        description,
      }),
    )
    closeModal()
  }

  return (
    <Modal setShow={closeModal} show={newIssueModalStatus !== false}>
      <div className="p-2">
        <h2 className="px-2 py-3 font-medium text-2xs text-neutral-400 uppercase leading-none tracking-wide">
          New issue
        </h2>
        <TitleInput autoFocus className="focus:!bg-transparent" setTitle={setTitle} title={title} />
        <DescriptionInput
          className="focus:!bg-transparent -mt-2"
          description={description}
          setDescription={setDescription}
        />
        <div className="mt-2 flex w-full gap-px">
          <StatusMenu
            onStatusChange={setNewIssueModalStatus}
            showLabel
            status={newIssueModalStatus === false ? 0 : (newIssueModalStatus as Status)}
          />
          <PriorityMenu onPriorityChange={setPriority} priority={priority} showLabel />
          <Button
            aria-label="Create issue"
            className="ml-auto rounded-lg bg-orange-500 px-4 text-sm text-white hover:bg-orange-400 focus:bg-orange-400 focus:outline-none"
            onPress={createIssue}
          >
            Create issue
          </Button>
        </div>
      </div>
    </Modal>
  )
}
