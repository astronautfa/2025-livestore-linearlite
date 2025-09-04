import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Provider } from '@/app/provider'
import { Layout } from '@/components/layout'
import { NewIssueModal } from '@/components/layout/issue/new-issue-modal'

export const Route = createRootRoute({
  component: () => (
    <Provider>
      <Layout>
        <div className="w-full p-2 lg:max-w-[calc(100%-16rem)] lg:pl-0">
          <main className="flex h-full flex-col rounded-lg border border-neutral-200 dark:border-neutral-700">
            <Outlet />
          </main>
        </div>
      </Layout>
      <NewIssueModal />
      <TanStackRouterDevtools />
    </Provider>
  ),
})