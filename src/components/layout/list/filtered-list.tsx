import { VirtualRow } from '@/components/layout/list/virtual-row'

export const FilteredList = ({ filteredIssueIds }: { filteredIssueIds: readonly number[] }) => {
  return (
    <div className="grow overflow-y-auto">
      {filteredIssueIds.map((issueId) => (
        <div key={issueId} style={{ height: '48px', position: 'relative' }}>
          <VirtualRow issueId={issueId} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
        </div>
      ))}
    </div>
  )
}
