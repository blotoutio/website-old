import type { LinksFunction, LoaderFunction } from '@remix-run/react'
import { Meta, Links, Scripts, useRouteData } from '@remix-run/react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'

import globalStyle from 'css:./styles/global.pcss'
import headerStyle from 'css:./components/header/style.pcss'
import footerStyle from 'css:./components/footer/style.pcss'
import { useEffect, useRef } from 'react'

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStyle },
    { rel: 'stylesheet', href: headerStyle },
    { rel: 'stylesheet', href: footerStyle },
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
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.png' />
        <Meta />
        <Links />
        <Scripts />
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