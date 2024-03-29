import { useEffect } from 'react'
import { Meta, Links, Scripts, LiveReload } from 'remix'
import { init, tag } from '@blotoutio/edgetag-sdk-js'
import { useLocation, Outlet } from 'react-router-dom'
import Header from './components/core/Header'
import Footer from './components/core/Footer'
import * as blotoutCloud from '@blotoutio/providers-blotout-cloud-sdk'
import * as ga4 from '@blotoutio/providers-google-analytics-4-sdk'

import stylesUrl from './styles/main.css'

export function meta() {
  const { pathname } = useLocation()

  return {
    'og:type': 'website',
    'og:site_name': 'Blotout, Inc.',
    'og:image': `https://blotout.io/open-graph-large.png`,
    'og:url': `https://blotout.io${pathname}`,
    'twitter:image': `https://blotout.io/open-graph-small.png`,
    'twitter:card': 'summary',
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

function Document({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta
          name='viewport'
          content='width=device-width, height=device-height initial-scale=1'
        />
        <link rel='icon' href='/favicon.png' type='image/png' />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    init({
      edgeURL: 'https://pjmsn.blotout.io',
      disableConsentCheck: true,
      providers: [blotoutCloud, ga4],
    })
  }, [])

  useEffect(() => {
    tag('PageView')
  }, [pathname])

  return (
    <Document>
      <Header />
      <Outlet />
      <Footer />
    </Document>
  )
}

export function ErrorBoundary({ error }) {
  console.error(error)
  return (
    <Document>
      <h1>App Error</h1>
      <pre>{error.message}</pre>
      <p>
        Replace this UI with what you want users to see when your app throws
        uncaught errors.
      </p>
    </Document>
  )
}
