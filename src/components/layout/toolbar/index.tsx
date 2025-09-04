import { FPSMeter } from '@overengineering/fps-meter'
import { Icon } from '@/components/icons'
import { DownloadButton } from '@/components/layout/toolbar/download-button'
import { ResetButton } from '@/components/layout/toolbar/reset-button'
import { SeedInput } from '@/components/layout/toolbar/seed-input'
import { ShareButton } from '@/components/layout/toolbar/share-button'
import { UserInput } from '@/components/layout/toolbar/user-input'
import { DevtoolsButton } from './devtools-button'
import { SyncToggle } from './sync-toggle'

export const Toolbar = () => {
  return (
    <div className="flex h-10 w-screen items-center justify-between border-neutral-700 border-t bg-neutral-950 pr-2 pl-1 text-neutral-400">
      <div className="flex items-center gap-1">
        <a
          className="flex h-6 items-center gap-2 rounded bg-neutral-900 px-1.5 font-bold text-neutral-300 text-sm hover:bg-neutral-800 focus:bg-neutral-800"
          target="_blank"
          href="https://livestore.dev/"
          rel="noopener noreferrer"
        >
          <Icon className="mt-0.5 size-5" name="livestore" />
          <span>LiveStore</span>
        </a>
        <SyncToggle />
      </div>
      <div className="hidden items-center gap-1 lg:flex">
        <UserInput />
        <ShareButton />
      </div>
      <div className="hidden items-center gap-1 lg:flex">
        <span>Database:</span>
        <SeedInput />
        <ResetButton />
        <DownloadButton />
        {import.meta.env.DEV && <DevtoolsButton />}
      </div>
      <FPSMeter className="hidden lg:block" height={28} />
    </div>
  )
}
