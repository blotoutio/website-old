import type { LinksFunction, LoaderFunction } from '@remix-run/react'
import { Meta, Links, Scripts, useRouteData } from '@remix-run/react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'

import globalStyle from 'css:./styles/global.pcss'
import { useEffect, useRef } from 'react'

export function meta() {
  return {
    viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
    charSet: 'utf-8',
  }
}

export let links: LinksFunction = () => {
  return [
    { rel: 'icon', href: '/favicon.png' },
    { rel: 'stylesheet', href: globalStyle },
  ]
}

export let loader: LoaderFunction = () => {
  return { date: new Date() }
}

function useScrollToTop(): void {
  // TODO: remove when Remix does this automatically
  const location = useLocation()

  const keys = useRef<Set<string> | null>(null)
  if (keys.current === null) {
    keys.current = new Set(location.key)
  }

  useEffect(() => {
    if (keys.current?.has(location.key)) {
      return
    }
    keys.current?.add(location.key)
    window.scrollTo(0, 0)
  }, [location])
}

export default function App() {
  useScrollToTop()
  let data = useRouteData()

  return (
    <html lang='en'>
      <head>
        <script type='application/javascript' src='/global.js' />
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        <Outlet />
        <Footer />
      </body>
    </html>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>Oops!</title>
      </head>
      <body>
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
          <p>
            Replace this UI with what you want users to see when your app throws
            uncaught errors. The file is at <code>app/App.tsx</code>.
          </p>
        </div>

        <Scripts />
      </body>
    </html>
  )
}
