import { Provider } from '@/app/provider'
import { Layout } from '@/components/layout'
import { Board } from '@/components/layout/board'
import { Issue } from '@/components/layout/issue'
import { NewIssueModal } from '@/components/layout/issue/new-issue-modal'
import { List } from '@/components/layout/list'
import { Search } from '@/components/layout/search'
import { Sidebar } from '@/components/layout/sidebar'
import 'animate.css/animate.min.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const App = () => {
  const router = (
    <Routes>
      <Route element={<List />} path="/" />
      <Route element={<Search />} path="/search" />
      <Route element={<Board />} path="/board" />
      <Route element={<Issue />} path="/issue/:id" />
    </Routes>
  )

  return (
    <BrowserRouter>
      <Provider>
        <Layout>
          <Sidebar className="hidden lg:flex" />
          <div className="w-full p-2 lg:max-w-[calc(100%-16rem)] lg:pl-0">
            <main className="flex h-full flex-col rounded-lg border border-neutral-200 dark:border-neutral-700">
              {router}
            </main>
          </div>
        </Layout>
        <NewIssueModal />
      </Provider>
    </BrowserRouter>
  )
}
