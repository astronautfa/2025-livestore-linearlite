import { CodeBracketIcon } from '@heroicons/react/16/solid'
import { useStore } from '@livestore/react'
import React from 'react'

export const DevtoolsButton = ({ className }: { className?: string }) => {
  const { store } = useStore()
  const devtoolsUrl = React.useMemo(() => {
    const searchParams = new URLSearchParams()
    searchParams.set('storeId', store.storeId)
    searchParams.set('sessionId', store.sessionId)
    searchParams.set('clientId', store.clientId)
    return `${location.origin}/_livestore?${searchParams.toString()}`
  }, [store.storeId, store.sessionId, store.clientId])

  return (
    <div className={`flex items-center lg:h-full ${className}`}>
      <a
        aria-label="Download database"
        className="flex h-6 items-center gap-1 rounded bg-orange-500 px-1.5 text-white hover:bg-orange-400 focus:bg-orange-400 focus:outline-none"
        href={devtoolsUrl}
        target="_blank"
      >
        <CodeBracketIcon className="size-3.5 shrink-0" />
        <span>Devtools</span>
      </a>
    </div>
  )
}
