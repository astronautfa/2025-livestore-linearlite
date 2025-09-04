
export const Shortcut = ({ keys, className }: { keys: string[]; className?: string }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {keys.map((key) => (
        <div
          className="flex h-4 min-w-4 items-center justify-center rounded border border-neutral-300 px-1 pt-px font-mono text-2xs uppercase leading-none dark:border-neutral-600"
          key={key}
        >
          {key}
        </div>
      ))}
    </div>
  )
}
