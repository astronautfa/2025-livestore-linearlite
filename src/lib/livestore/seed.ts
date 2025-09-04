import type { Store } from '@livestore/livestore'
import { generateKeyBetween } from 'fractional-indexing'
import { priorityOptions } from '@/data/priority-options'
import { statusOptions } from '@/data/status-options'
import { events } from '@/lib/livestore/schema'
import type { Priority } from '@/types/priority'
import type { Status } from '@/types/status'
import { highestIssueId$, highestKanbanOrder$, issueCount$ } from './queries'

export const seed = (store: Store, count: number) => {
  try {
    const existingCount = store.query(issueCount$)
    const highestId = store.query(highestIssueId$)
    const highestKanbanOrder = store.query(highestKanbanOrder$)
    if (existingCount >= count) {
      return
    }
    const additionalCount = count - existingCount
    store.commit(...Array.from(createIssues(additionalCount, highestId, highestKanbanOrder)))
  } finally {
    const url = new URL(window.location.href)
    url.searchParams.delete('seed')
    window.history.replaceState({}, '', url.toString())
  }
}

function* createIssues(
  numTasks: number,
  highestId?: number,
  highestKanbanOrder?: string,
): Generator<typeof events.createIssueWithDescription.Event> {
  const startingId = highestId ?? 0
  let currentId = startingId
  let kanbanorder = highestKanbanOrder ?? 'a1'

  const getRandomItem = <T>(items: T[]): T => {
    if (items.length === 0) {
      throw new Error('Cannot get random item from empty array')
    }
    const randomIndex = Math.floor(Math.random() * items.length)
    const item = items[randomIndex]
    if (item === undefined) {
      throw new Error('Unexpected undefined item in array')
    }
    return item
  }
  const generateText = () => {
    const action = getRandomItem(actionPhrases)
    const feature = getRandomItem(featurePhrases)
    const purpose = getRandomItem(purposePhrases)
    const context = getRandomItem(contextPhrases)
    return [`${action} ${feature}`, `${action} ${feature} ${purpose}. ${context}.`] as const
  }

  const now = Date.now()
  const HOURS_PER_DAY = 24
  const MINUTES_PER_HOUR = 60
  const SECONDS_PER_MINUTE = 60
  const MILLISECONDS_PER_SECOND = 1000
  const MILLISECONDS_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR * SECONDS_PER_MINUTE * MILLISECONDS_PER_SECOND
  const DAYS_BETWEEN_ISSUES = 5

  for (let i = 0; i < numTasks; i++) {
    kanbanorder = generateKeyBetween(kanbanorder, undefined)
    const [title, description] = generateText()
    currentId += 1
    const issue = events.createIssueWithDescription({
      id: currentId,
      creator: 'John Doe',
      title,
      created: new Date(now - (numTasks - i) * DAYS_BETWEEN_ISSUES * MILLISECONDS_PER_DAY),
      modified: new Date(now - (numTasks - i) * 2 * MILLISECONDS_PER_DAY),
      status: getRandomItem(statuses),
      priority: getRandomItem(priorities),
      kanbanorder,
      description,
    })
    yield issue
  }
}

export const priorities = priorityOptions.map((_, index) => index) as Priority[]
export const statuses = statusOptions.map((_, index) => index) as Status[]
const actionPhrases = [
  'Implement',
  'Develop',
  'Design',
  'Test',
  'Review',
  'Refactor',
  'Redesign',
  'Enhance',
  'Optimize',
  'Fix',
  'Remove',
  'Mock',
  'Update',
  'Document',
  'Deploy',
  'Revert',
  'Add',
  'Destroy',
]
const featurePhrases = [
  'the login mechanism',
  'the user dashboard',
  'the settings page',
  'database queries',
  'UI/UX components',
  'API endpoints',
  'the checkout process',
  'responsive layouts',
  'error handling logic',
  'the navigation menu',
  'the search functionality',
  'the onboarding flow',
  'the user profile page',
  'the admin dashboard',
  'the billing system',
  'the payment gateway',
  'the user permissions',
  'the user roles',
  'the user management',
]
const purposePhrases = [
  'to improve user experience',
  'to speed up load times',
  'to enhance security',
  'to prepare for the next release',
  'following the latest design mockups',
  'to address reported issues',
  'for better mobile responsiveness',
  'to comply with new regulations',
  'to reflect customer feedback',
  'to keep up with platform changes',
  'to improve overall performance',
  'to fix a critical bug',
  'to add a new feature',
  'to remove deprecated code',
  'to improve code readability',
  'to fix a security vulnerability',
  'to improve SEO',
  'to improve accessibility',
  'to improve the codebase',
]
const contextPhrases = [
  'Based on the latest UX research',
  'To ensure seamless user experience',
  'To cater to increasing user demands',
  'Keeping scalability in mind',
  'As outlined in the last meeting',
  'Following the latest design specifications',
  'To adhere to the updated requirements',
  'While ensuring backward compatibility',
  'To improve overall performance',
  'And ensure proper error feedback to the user',
]
