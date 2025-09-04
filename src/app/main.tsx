import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import '@/app/style.css'
import { createRoot } from 'react-dom/client'

const router = createRouter({ routeTree })

const root = createRoot(document.getElementById('root')!)
root.render(<RouterProvider router={router} />)
