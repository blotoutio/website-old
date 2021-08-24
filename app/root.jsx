import { useEffect } from 'react'
import { Meta, Links, Scripts, LiveReload } from 'remix'
import { capture, init } from '@blotoutio/sdk-core'
import { useLocation, Outlet } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'

import stylesUrl from './styles/main.css'

export function meta() {
  const { pathname } = useLocation()

  return {
    'og:site_name': 'Blotout, Inc.',
    'og:image': 'https://blotout.io/img/og-rectangle.png',
    'og:url': `https://blotout.io${pathname}`,
    'twitter:image': 'https://blotout.io/img/og-square.png',
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
  useEffect(() => {
    init({
      token: 'ZWBQ5E48ND3VTPB',
      endpointUrl: 'https://sales.blotout.io/sdk',
      customDomain: 'blotout.io',
    })
    capture('Page Navigation', { link: window.location.pathname })
  }, [])
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
