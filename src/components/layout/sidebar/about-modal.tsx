import React from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '@/components/common/modal'

export const AboutModal = ({ show, setShow }: { show: boolean; setShow: (show: boolean) => void }) => {
  return (
    <Modal setShow={setShow} show={show} title="About LinearLite">
      <div className="flex flex-col gap-2 p-4 text-neutral-500 text-sm">
        <p>
          LinearLite is an example of a collaboration application using a local-first approach, obviously inspired by{' '}
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
    </Modal>
  )
}
