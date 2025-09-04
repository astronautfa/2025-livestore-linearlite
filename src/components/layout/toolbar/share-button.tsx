import { CheckIcon, LinkIcon, QrCodeIcon } from '@heroicons/react/16/solid'
import React from 'react'
import { Button, ModalOverlay, Modal as ReactAriaModal } from 'react-aria-components'

// This uses a public QR code API: https://goqr.me/api/doc/create-qr-code/

export const ShareButton = ({ className }: { className?: string }) => {
  const [copied, setCopied] = React.useState(false)
  const [showQR, setShowQR] = React.useState(false)

  // TODO build sharable workspace feature
  const copyUrl = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <>
      <div className={`flex items-center gap-1 ${className}`}>
        <span>Workspace:</span>
        <Button
          aria-label="Copy workspace URL"
          className="flex h-6 items-center gap-1 whitespace-nowrap rounded bg-neutral-800 px-1.5 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-none"
          onPress={copyUrl}
        >
          {copied ? (
            <>
              <CheckIcon className="size-3 shrink-0" />
              <span>
                <span className="hidden xl:inline">URL copied!</span>
                <span className="xl:hidden">Copied!</span>
              </span>
            </>
          ) : (
            <>
              <LinkIcon className="size-3 shrink-0" />
              <span>
                Share<span className="hidden xl:inline"> workspace</span>
              </span>
            </>
          )}
        </Button>
        <Button
          aria-label="Copy workspace URL"
          className="flex size-6 items-center justify-center rounded bg-neutral-800 hover:bg-neutral-700 focus:bg-neutral-800 focus:outline-none"
          onPress={() => setShowQR(true)}
        >
          <QrCodeIcon className="size-3.5" />
        </Button>
      </div>
      <ModalOverlay
        className="fixed inset-0 bottom-12 flex items-start justify-center bg-black/10 p-4 pt-16 lg:pt-32 dark:bg-black/20"
        isDismissable
        isOpen={showQR}
        onOpenChange={setShowQR}
      >
        <ReactAriaModal className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white p-4 shadow-lg">
          <img
            crossOrigin="anonymous"
            height="200"
            src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURI(window.location.href)}`}
            width="200"
          />
        </ReactAriaModal>
      </ModalOverlay>
    </>
  )
}
