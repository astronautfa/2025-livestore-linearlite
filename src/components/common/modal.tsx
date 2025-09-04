import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'

export const Modal = ({
  show,
  setShow,
  title,
  children,
}: {
  show: boolean
  setShow: (show: boolean) => void
  title?: string
  children: React.ReactNode
}) => {
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShow(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [setShow])

  return (
    <Dialog open={show} onOpenChange={setShow}>
      <DialogContent
        className="w-full max-w-xl rounded-xl border border-neutral-200 bg-white shadow-lg dark:border-neutral-700 dark:bg-neutral-800"
        style={{ animation: 'none' }}
      >
        {title && (
          <div className="flex items-center justify-between border-neutral-200 border-b p-2 pl-4 dark:border-neutral-700">
            <DialogTitle className="font-bold text-lg">
              {title}
            </DialogTitle>
          </div>
        )}
        {children}
      </DialogContent>
    </Dialog>
  )
}
