// app/router.tsx - This is the file that will dictate the behavior of TanStack Router used within Start. Here, you can configure everything from the default preloading functionality to caching staleness - routeTree.gen.ts is generated after first running `npm run dev` or `npm run start`
import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export function createRouter() {
  const router = createTanStackRouter({
    routeTree,
    scrollRestoration: true,
  })

  return router
}

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}