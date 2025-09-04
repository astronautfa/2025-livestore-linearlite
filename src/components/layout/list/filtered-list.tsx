import AutoSizer from 'react-virtualized-auto-sizer'
import { List } from 'react-window'
import { VirtualRow } from '@/components/layout/list/virtual-row'

export const FilteredList = ({ filteredIssueIds }: { filteredIssueIds: readonly number[] }) => {
  return (
    <div className="grow">
      <AutoSizer>
        {({ height, width }: { width: number; height: number }) => (
          <List
            overscanCount={10}
            rowComponent={({ index, style, ...rowProps }) => (
              <VirtualRow data={rowProps} index={index} style={style} />
            )}
            rowCount={filteredIssueIds.length}
            rowHeight={48}
            rowProps={filteredIssueIds}
            style={{ height, width }}
          />
        )}
      </AutoSizer>
    </div>
  )
}
