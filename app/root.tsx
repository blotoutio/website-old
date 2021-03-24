import type { LinksFunction, LoaderFunction } from '@remix-run/react'
import { Meta, Links, Scripts } from '@remix-run/react'
import { init, capture } from '@blotoutio/sdk-core'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'

import globalStyle from 'css:./styles/global.css'
import { useEffect, useRef } from 'react'

const addListeners = () => {
  window.onload = function () {
    document.querySelectorAll('a').forEach((item) => {
      item.addEventListener('click', (event) => {
        if (!event || !event.target || !event.target.dataset) {
          return
        }

        const name = event.target.dataset.event
        if (!name) {
          return
        }

        let referrer
        try {
          referrer = JSON.parse(
            window.sessionStorage.getItem('_trendsData') || ''
          ).referrer
        } catch (e) {}

        if (!referrer) {
          referrer = 'none'
        }

        capture(
          `click-${name}`,
          {
            date: new Intl.DateTimeFormat('en-US').format(Date.now()),
            referrer,
          },
          {
            method: 'beacon',
          }
        )
      })
    })
  }
}

export function meta() {
  return {
    viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
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
  useEffect(() => {
    init({
      token: 'ZWBQ5E48ND3VTPB',
      endpointUrl: 'https://sales.blotout.io/sdk',
      customDomain: 'blotout.io',
    })
    addListeners()
  }, [])

  useScrollToTop()

  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
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
