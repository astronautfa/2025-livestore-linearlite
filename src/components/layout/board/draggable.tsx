import type { CSSProperties } from 'react'
import { memo } from 'react'

import type { Issue } from '@/lib/livestore/schema'
import { Card } from './card'

export const Draggable = memo(({ issue, style }: { issue: Issue; style: CSSProperties }) => {
  return (
    <div className="relative px-2 pb-2" id={issue.id.toString()} key={issue.id} style={style}>
      <Card issue={issue} />
    </div>
  )
})
