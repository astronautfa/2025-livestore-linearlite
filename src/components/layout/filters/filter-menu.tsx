import { CheckIcon } from '@heroicons/react/16/solid'
import { Header, Menu, MenuItem, MenuSection, MenuTrigger, Popover, Separator } from 'react-aria-components'
import { Icon, type IconName } from '@/components/icons'
import { priorityOptions } from '@/data/priority-options'
import { statusOptions } from '@/data/status-options'
import { useFilterState } from '@/lib/livestore/queries'
import type { Priority } from '@/types/priority'
import type { Status } from '@/types/status'

export const FilterMenu = ({ type, children }: { type?: 'status' | 'priority'; children?: React.ReactNode }) => {
  const [filterState, setFilterState] = useFilterState()

  const toggleFilter = ({
    filterType,
    value,
  }: { filterType: 'status'; value: Status } | { filterType: 'priority'; value: Priority }) => {
    let filters: (Status | Priority)[] | undefined = [...(filterState[filterType] ?? [])]
    if (filters.includes(value)) {
      filters.splice(filters.indexOf(value), 1)
    } else {
      filters.push(value)
    }
    if (!filters.length) {
      filters = undefined
    }
    setFilterState({ [filterType]: filters })
  }

  return (
    <MenuTrigger>
      {children}
      <Popover className="w-48 rounded-lg border border-neutral-200 bg-white text-sm leading-none shadow-md dark:border-neutral-700 dark:bg-neutral-800">
        <Menu className="focus:outline-none" selectionMode="multiple">
          {type !== 'priority' && (
            <MenuSection className="p-2" key="status">
              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Status</Header>
              {statusOptions.map(({ name, icon, style }, index) => {
                const active = filterState.status?.includes(index as Status)
                return (
                  <MenuItem
                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                    key={name}
                    onAction={() => toggleFilter({ filterType: 'status', value: index as Status })}
                  >
                    <div
                      className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
                    >
                      {active && <CheckIcon className="size-4 text-white" />}
                    </div>
                    <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
                    <span>{name}</span>
                  </MenuItem>
                )
              })}
            </MenuSection>
          )}
          {!type && <Separator className="h-px w-full bg-neutral-200 dark:bg-neutral-700" />}
          {type !== 'status' && (
            <MenuSection className="p-2" key="priority">
              <Header className="p-2 font-medium text-2xs text-neutral-400 uppercase tracking-wide">Priority</Header>
              {priorityOptions.map(({ name, icon, style }, index) => {
                const active = filterState.priority?.includes(index as Priority)
                return (
                  <MenuItem
                    className="group/item flex cursor-pointer items-center gap-2 rounded-md p-2 pl-9 hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                    key={name}
                    onAction={() => toggleFilter({ filterType: 'priority', value: index as Priority })}
                  >
                    <div
                      className={`absolute left-4 size-4 rounded ${active ? 'bg-indigo-500' : 'hidden border border-neutral-300 group-hover/item:block group-focus/item:block dark:border-neutral-600'}`}
                    >
                      {active && <CheckIcon className="size-4 text-white" />}
                    </div>
                    <Icon className={`size-3.5 ${style}`} name={icon as IconName} />
                    <span>{name}</span>
                  </MenuItem>
                )
              })}
            </MenuSection>
          )}
        </Menu>
      </Popover>
    </MenuTrigger>
  )
}
