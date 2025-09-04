import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Shortcut } from '@/components/common/shortcut'
import { Icon, type IconName } from '@/components/icons'
import { statusOptions } from '@/data/status-options'
import type { Status } from '@/types/status'

export const StatusMenu = ({
  status,
  onStatusChange,
  showLabel = false,
}: {
  status: Status
  onStatusChange: (status: Status) => void
  showLabel?: boolean
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Select status"
          className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
        >
          <Icon
            className={`size-3.5 ${statusOptions[status]?.style || ''}`}
            name={statusOptions[status]?.icon as IconName}
          />
          {showLabel && <span>{statusOptions[status]?.name}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
        {statusOptions.map(({ name, id, icon, style, shortcut }, statusOption) => (
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2 rounded-md p-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
            key={id}
            onClick={() => onStatusChange(statusOption as Status)}
          >
            <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
            <span>{name}</span>
            {statusOption === status && <CheckIcon className="absolute right-9 size-4" />}
            <Shortcut className="absolute right-3" keys={[shortcut]} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
