import { CheckIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Shortcut } from '@/components/common/shortcut'
import { Icon, type IconName } from '@/components/icons'
import { priorityOptions } from '@/data/priority-options'
import type { Priority } from '@/types/priority'

const URGENT_PRIORITY = 4

export const PriorityMenu = ({
  priority,
  onPriorityChange,
  showLabel = false,
}: {
  priority: Priority
  onPriorityChange: (priority: Priority) => void
  showLabel?: boolean
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          aria-label="Select priority"
          className="group flex h-6 min-w-6 items-center justify-center gap-1.5 rounded-lg px-1.5 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
        >
          <Icon
            className={`size-3.5 ${priority === URGENT_PRIORITY ? 'text-red-400 group-hover:text-red-600 dark:group-hover:text-red-300' : priorityOptions[priority]?.style || ''}`}
            name={priorityOptions[priority]?.icon as IconName}
          />
          {showLabel && <span>{priorityOptions[priority]?.name}</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="ml-1 w-48 rounded-lg border border-neutral-200 bg-white p-2 text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
        {priorityOptions.map(({ name, icon, style, shortcut }, priorityOption) => (
          <DropdownMenuItem
            className="flex cursor-pointer items-center gap-2 rounded-md py-1.5 px-2 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
            key={name}
            onClick={() => onPriorityChange(priorityOption as Priority)}
          >
            <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
            <span>{name}</span>
            {priorityOption === priority && <CheckIcon className="absolute right-9 size-4" />}
            <Shortcut className="absolute right-3" keys={[shortcut]} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
