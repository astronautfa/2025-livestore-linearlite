import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import { type CSSProperties, memo } from 'react'
import { Row } from '@/components/layout/list/row'
import { tables } from '@/lib/livestore/schema'

export const VirtualRow = memo(
  ({ data, index, style }: { data: readonly number[]; index: number; style: CSSProperties }) => {
    const { store } = useStore()
    const issueId = data[index]

    // Always call the hook with a stable query structure
    const issue = store.useQuery(queryDb(tables.issue.where({ id: issueId || 0 }).first(), { deps: [issueId] }))

    // Early return if no issueId or no issue data
    if (!(issueId && issue)) {
      return null
    }

    return <Row issue={issue} key={`issue-${issue.id}`} style={style} />
  },
)
