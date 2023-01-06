import { useEffect, useState } from 'react'
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
  const [showIframe, setShowIframe] = useState(true)
  const { pathname } = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    if (params.has('et_u_id')) {
      setShowIframe(false)
    }

    init({
      edgeURL: 'https://pjmsn.blotout.io',
      disableConsentCheck: true,
      providers: [blotoutCloud, ga4],
      userId: params.get('et_u_id'),
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
      {!showIframe && (
        <iframe
          src='https://nosignalloss.com?redirect=true'
          width={1}
          height={1}
          style={{ visibility: 'hidden' }}
        />
      )}
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
