import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import { type CSSProperties, memo } from 'react'
import { Row } from '@/components/layout/list/row'
import { tables } from '@/lib/livestore/schema'

export const VirtualRow = memo(
  ({ issueId, style }: { issueId: number; style: CSSProperties }) => {
    const { store } = useStore()

    // Always call the hook with a stable query structure
    const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId }).first(), { deps: [issueId] }))

    // Early return if no issueId or no issue data
    if (!issueId || !issue) {
      return null
    }

    return <Row issue={issue} key={`issue-${issue.id}`} style={style} />
  },
)
