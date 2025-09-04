import { MobileMenu } from '@/components/layout/sidebar/mobile-menu'
import { Sidebar } from '@/components/layout/sidebar'
import { Toolbar } from '@/components/layout/toolbar'
import { useFrontendState } from '@/lib/livestore/queries'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const [frontendState] = useFrontendState()

  return (
    <div className="flex h-full flex-col">
      <div className={`relative flex w-screen grow ${frontendState.showToolbar ? 'h-[calc(100%-3.5rem)]' : 'h-full'}`}>
        <Sidebar />
        {children}
      </div>
      {frontendState.showToolbar && <Toolbar />}
      <MobileMenu />
    </div>
  )
}
