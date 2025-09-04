import { Button } from 'react-aria-components'
import { Icon } from '@/components/icons'
import { useFrontendState } from '@/lib/livestore/queries'

export const ToolbarButton = () => {
  const [frontendState, setFrontendState] = useFrontendState()
  const onClick = () => {
    setFrontendState({ ...frontendState, showToolbar: !frontendState.showToolbar })
  }

  return (
    <Button
      aria-label={frontendState.showToolbar ? 'Hide LiveStore Toolbar' : 'Show LiveStore Toolbar'}
      className="flex size-8 items-center justify-center rounded-lg border border-neutral-200 bg-white shadow hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:border-neutral-700 dark:bg-neutral-900 dark:focus:bg-neutral-800 dark:hover:bg-neutral-800"
      onPress={onClick}
    >
      <Icon className="-rotate-90 size-5" name="sidebar" />
    </Button>
  )
}
