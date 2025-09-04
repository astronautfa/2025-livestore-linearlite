import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import React, { type CSSProperties, memo } from 'react'
import { Row } from '@/components/layout/list/row'
import { tables } from '@/lib/livestore/schema'

export const VirtualRow = memo(
  ({ data, index, style }: { data: readonly number[]; index: number; style: CSSProperties }) => {
    const { store } = useStore()
    const issueId = data[index]

    if (!issueId) {
      return null
    }

    const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId }).first(), { deps: [issueId] }))

    if (!issue) {
      return null
    }

    return <Row issue={issue} key={`issue-${issue.id}`} style={style} />
  },
)
