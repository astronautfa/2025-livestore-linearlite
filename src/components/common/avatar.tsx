import { getAcronym } from '@/utils/get-acronym'

export const Avatar = ({ name }: { name?: string }) => {
  if (!name) {
    name = 'Me'
  }
  return (
    <div className="flex size-6 shrink-0 items-center justify-center rounded-full bg-neutral-200 font-medium text-neutral-500 text-xs dark:bg-neutral-600 dark:text-neutral-300">
      {getAcronym(name)}
    </div>
  )
}
