import Editor from '@/components/common/editor'

export const DescriptionInput = ({
  description,
  setDescription,
  className,
}: {
  description: string
  setDescription: (description: string) => void
  className?: string
}) => (
  <Editor
    className={`rounded-md px-2 py-px focus:bg-neutral-50 dark:focus:bg-neutral-800 ${className}`}
    onChange={(value) => setDescription(value)}
    placeholder="Add description..."
    value={description ?? ''}
  />
)
