import React from 'react'
import { MenuButton } from '@/components/common/menu-button'

export const Header = ({
  totalCount,
  filteredCount,
  heading,
}: {
  totalCount: number
  filteredCount: number
  heading: string
}) => {
  return (
    <div className="flex h-12 items-center gap-2 border-neutral-200 border-b pl-2 text-sm lg:pl-6 dark:border-neutral-700">
      <MenuButton className="lg:hidden" />
      <div className="ml-1 font-medium lg:ml-0">{heading}</div>
      <div className="text-neutral-500 dark:text-neutral-400">
        <span>{filteredCount}</span>
        {filteredCount !== totalCount && <span> of {totalCount}</span>}
        {heading !== 'Issues' && <span> issues</span>}
      </div>
    </div>
  )
}
