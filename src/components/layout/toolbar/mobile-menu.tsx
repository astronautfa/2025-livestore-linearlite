import { ChevronUpIcon } from '@heroicons/react/16/solid'
import { Button } from '@/components/ui/button'
import { DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { ResetButton } from '@/components/layout/toolbar/reset-button'
import { SeedInput } from '@/components/layout/toolbar/seed-input'
import { UserInput } from '@/components/layout/toolbar/user-input'
import { ShareButton } from './share-button'
import { SyncToggle } from './sync-toggle'

export const MobileMenu = () => {
  return (
    <div className="flex h-full shrink-0 items-center border-neutral-700 border-x lg:hidden">
      <DialogTrigger>
        <Button
          aria-label="Open LiveStore tools"
          className="flex h-8 items-center gap-1 border-neutral-700 border-y pr-2 pl-3 text-neutral-400 text-sm hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none"
        >
          <span>Tools</span>
          <ChevronUpIcon className="size-4" />
        </Button>
        <DialogContent className="w-full border-neutral-700 border-t bg-neutral-950 px-2 fixed bottom-0 left-0 right-0">
          <div className="flex flex-col items-stretch border-neutral-700 border-x">
            <div className="border-neutral-700 border-b px-2 py-4 text-neutral-400 text-sm">
              Please use the desktop version to access all LiveStore tools!
            </div>
            <UserInput />
            <SeedInput />
            <ResetButton />
            <ShareButton />
            <SyncToggle />
          </div>
        </DialogContent>
      </DialogTrigger>
    </div>
  )
}
