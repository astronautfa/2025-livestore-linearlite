import { Link } from 'react-router-dom'
import { Modal } from '@/components/common/modal'
import { useFrontendState } from '@/lib/livestore/queries'

export const AboutModal = ({ show, setShow }: { show: boolean; setShow: (show: boolean) => void }) => {
  const [frontendState] = useFrontendState()

  return (
    <Modal setShow={setShow} show={show} title="About Zen Sync">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-2 text-neutral-500 text-sm">
          <p>
            Zen Sync is an example of a collaboration application using a local-first approach, obviously inspired by{' '}
            <Link className="text-orange-600 underline" target="_blank" to="https://linear.app">
              Linear
            </Link>
            .
          </p>
          <p>
            It's built using{' '}
            <Link className="text-orange-600 underline" target="_blank" to="https://www.livestore.dev">
              LiveStore
            </Link>
            , a local-first sync layer for web and mobile apps.
          </p>
        </div>

        <div className="border-t border-neutral-200 pt-4 dark:border-neutral-700">
          <h3 className="mb-2 font-semibold text-neutral-900 text-sm dark:text-neutral-100">Current Workspace</h3>
          <div className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800">
            <div className="flex items-center gap-2">
              <span className="text-neutral-600 text-sm dark:text-neutral-400">User:</span>
              <span className="font-medium text-neutral-900 dark:text-neutral-100">
                {frontendState?.user || 'Not set'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
