import { PlusIcon } from '@heroicons/react/16/solid'
import { useStore } from '@livestore/react'
import { Button, Input } from 'react-aria-components'
import { seed } from '@/lib/livestore/seed'

export const SeedInput = ({ className }: { className?: string }) => {
  const [count, setCount] = React.useState(50)
  const { store } = useStore()

  const onClick = () => {
    if (count === 0) return
    seed(store, count)
  }

  return (
    <div className={`flex items-center gap-px lg:h-full ${className}`}>
      <Input
        aria-label="Seed count"
        autoComplete="off"
        className="h-6 w-12 rounded-l border-none bg-neutral-800 px-1.5 text-neutral-300 text-xs placeholder:text-neutral-500 hover:bg-neutral-700 focus:border-none focus:bg-neutral-700 focus:outline-none focus:ring-0"
        onChange={(e) => setCount(Number(e.target.value))}
        placeholder="123"
        type="number"
        value={count}
      />
      <Button
        aria-label="Seed database"
        className="flex h-6 items-center gap-1 rounded-r bg-neutral-800 pr-1.5 pl-1 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
        onPress={onClick}
      >
        <PlusIcon className="size-3" />
        <span>Seed</span>
      </Button>
    </div>
  )
}
