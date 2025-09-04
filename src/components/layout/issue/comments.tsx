import { queryDb } from '@livestore/livestore'
import { useStore } from '@livestore/react'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Avatar } from '@/components/common/avatar'
import { tables } from '@/lib/livestore/schema'
import { formatDate } from '@/utils/format-date'

export const Comments = ({ issueId }: { issueId: number }) => {
  const { store } = useStore()
  const comments = store.useQuery(
    queryDb(tables.comment.where('issueId', issueId).orderBy('created', 'desc'), { deps: [issueId] }),
  )

  return (
    <ul className="mt-4 flex flex-col gap-4">
      {comments.map(({ id, body, creator, created }) => (
        <li
          className="rounded-lg border border-transparent bg-white p-4 shadow dark:border-neutral-700/50 dark:bg-neutral-800"
          key={id}
        >
          <div className="-ml-0.5 -mt-0.5 mb-2 flex items-center text-sm">
            <Avatar name={creator} />
            <div className="mr-2 ml-2.5 font-medium">{creator}</div>
            {/* TODO: make this a relative date */}
            <div className="text-neutral-500 dark:text-neutral-400">{formatDate(new Date(created))}</div>
          </div>
          <div className="prose-sm -mb-2 prose-ol:my-2 prose-p:my-2 prose-pre:my-2 prose-ul:my-2 font-normal prose-strong:text-neutral-600 text-neutral-600 dark:prose-strong:text-neutral-200 dark:text-neutral-200">
            <ReactMarkdown>{body}</ReactMarkdown>
          </div>
        </li>
      ))}
    </ul>
  )
}
