import React from 'react'
import { Switch } from 'react-aria-components'

export const SyncToggle = ({ className }: { className?: string }) => {
  // TODO hook up actual sync/network state
  const [sync, setSync] = React.useState(false)

  return (
    <div className={`flex items-center ${className}`}>
      {/* TODO add disabled tooltip for now */}
      <Switch
        aria-label="Toggle sync/network"
        className="group flex h-6 cursor-pointer items-center gap-2 rounded bg-neutral-800 pr-1.5 pl-1 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
        isDisabled={true}
        isSelected={sync} // TODO enable when sync is implemented
        onChange={setSync}
      >
        <div className="h-4 w-6 rounded-full bg-neutral-600 p-px transition-colors group-data-[selected]:bg-orange-500">
          <span className="block size-3.5 rounded-full bg-white transition-transform group-data-[selected]:translate-x-2" />
        </div>
        <span>
          Sync<span className="hidden xl:inline">/Network</span>
        </span>
      </Switch>
    </div>
  )
}
