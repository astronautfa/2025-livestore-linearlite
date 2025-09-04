import { ArrowDownIcon } from '@heroicons/react/16/solid'
import { useStore } from '@livestore/react'
import { Button } from 'react-aria-components'

export const DownloadButton = ({ className }: { className?: string }) => {
  const { store } = useStore()
  const onClick = () => {
    ;(store as any)._dev.downloadDb()
  }

  return (
    <div className={`flex items-center lg:h-full ${className}`}>
      <Button
        aria-label="Download database"
        className="flex h-6 items-center gap-1 rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
        onPress={onClick}
      >
        <ArrowDownIcon className="size-3 shrink-0" />
        <span>Download</span>
      </Button>
    </div>
  )
}
