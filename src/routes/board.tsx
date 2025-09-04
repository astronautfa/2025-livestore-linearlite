import { createFileRoute } from '@tanstack/react-router'
import { Board } from '@/components/layout/board'
import type { FilterState } from '@/lib/livestore/schema/filter-state'

// Define a type for validated search params that matches what we expect
export type ValidatedSearch = {
  orderBy?: FilterState['orderBy']
  orderDirection?: FilterState['orderDirection']
  status?: FilterState['status']
  priority?: FilterState['priority']
  query?: FilterState['query']
}

export const Route = createFileRoute('/board')({
  validateSearch: (search: Record<string, unknown>): ValidatedSearch => {
    const validated: ValidatedSearch = {}

    // Handle sorting
    if (typeof search.sort === 'string') {
      const [orderBy, orderDirection] = search.sort.split('-')
      if (orderBy === 'priority' || orderBy === 'status' || orderBy === 'created' || orderBy === 'modified') {
        validated.orderBy = orderBy as FilterState['orderBy']
      }
      if (orderDirection === 'asc' || orderDirection === 'desc') {
        validated.orderDirection = orderDirection as FilterState['orderDirection']
      }
    }

    // Handle status filters
    if (typeof search.status === 'string') {
      const statusValues = search.status
        .split(',')
        .map(s => parseInt(s.trim()))
        .filter(s => !isNaN(s) && s >= 0 && s <= 4)
        .map(s => s as 0 | 1 | 2 | 3 | 4)
      if (statusValues.length > 0) {
        validated.status = statusValues as FilterState['status']
      }
    }

    // Handle priority filters
    if (typeof search.priority === 'string') {
      const priorityValues = search.priority
        .split(',')
        .map(p => parseInt(p.trim()))
        .filter(p => !isNaN(p) && p >= 0 && p <= 4)
        .map(p => p as 0 | 1 | 2 | 3 | 4)
      if (priorityValues.length > 0) {
        validated.priority = priorityValues as FilterState['priority']
      }
    }

    // Handle search query
    if (typeof search.q === 'string') {
      validated.query = search.q
    }

    return validated
  },
  component: Board,
})