import type { BootStatus } from '@livestore/livestore'
import { Icon } from '@/components/icons'

export const renderBootStatus = (bootStatus: BootStatus) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-4 bg-white text-sm dark:bg-neutral-900">
      <div className="flex items-center gap-3 font-bold text-xl">
        <Icon className="mt-1 size-7" name="livestore" />
        <span>LiveStore</span>
      </div>
      {bootStatus.stage === 'loading' && <div>Loading...</div>}
      {bootStatus.stage === 'migrating' && (
        <div>
          Migrating tables ({bootStatus.progress.done}/{bootStatus.progress.total})
        </div>
      )}
      {bootStatus.stage === 'rehydrating' && (
        <div>
          Rehydrating state ({bootStatus.progress.done}/{bootStatus.progress.total})
        </div>
      )}
      {bootStatus.stage === 'syncing' && (
        <div>
          Syncing state ({bootStatus.progress.done}/{bootStatus.progress.total})
        </div>
      )}
      {bootStatus.stage === 'done' && <div>Ready</div>}
    </div>
  )
}