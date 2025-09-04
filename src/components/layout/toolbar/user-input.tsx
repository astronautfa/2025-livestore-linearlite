import React from 'react'
import { Input } from 'react-aria-components'
import { useFrontendState } from '@/lib/livestore/queries'

export const UserInput = ({ className }: { className?: string }) => {
  const [frontendState, setFrontendState] = useFrontendState()

  return (
    <div className={`flex items-center gap-1 lg:h-full ${className}`}>
      <span>User:</span>
      <Input
        aria-label="Test User"
        autoComplete="off"
        className="h-6 grow rounded border-none bg-neutral-800 bg-transparent px-1.5 text-neutral-300 text-xs placeholder:text-neutral-500 hover:bg-neutral-700 focus:border-none focus:bg-neutral-700 focus:outline-none focus:ring-0 lg:w-28 lg:grow-0"
        onBlur={() => setFrontendState({ ...frontendState, user: frontendState.user || 'John Doe' })}
        onChange={(e) => setFrontendState({ ...frontendState, user: e.target.value })}
        placeholder="Test User"
        type="text"
        value={frontendState.user}
      />
    </div>
  )
}
