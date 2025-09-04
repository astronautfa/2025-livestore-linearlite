import { createFileRoute } from '@tanstack/react-router'
import { Issue } from '@/components/layout/issue'

export const Route = createFileRoute('/issue/$id')({
  component: Issue,
})