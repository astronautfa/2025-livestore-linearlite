import type { CSSProperties } from 'react'
import React, { memo } from 'react'
import { DragPreview, useDrag } from 'react-aria'
import type { Issue } from '@/lib/livestore/schema'
import { Card } from './card'

export const Draggable = memo(({ issue, style }: { issue: Issue; style: CSSProperties }) => {
  const preview = React.useRef(null)
  const { dragProps, isDragging } = useDrag({
    preview,
    getItems: () => [{ 'text/plain': issue.id.toString() }],
  })

  return (
    <div className="relative px-2 pb-2" id={issue.id.toString()} key={issue.id} style={style}>
      <div {...dragProps}>
        <Card issue={issue} />
        {isDragging && (
          <div className="absolute inset-0 bg-neutral-50 p-3 pt-1">
            <div className="h-full w-full rounded-md border border-neutral-200/50" />
          </div>
        )}
        <DragPreview ref={preview}>
          {() => (
            <div className="w-[254px] px-2 lg:w-[318px]">
              <Card issue={issue} />
            </div>
          )}
        </DragPreview>
      </div>
    </div>
  )
})
