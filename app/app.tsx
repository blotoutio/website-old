import { useRef, useEffect } from 'react'
import { Meta, Routes, Styles } from '@remix-run/react'
import { useLocation } from 'react-router-dom'
import { Header } from './components/header'
import { Footer } from './components/footer'

function useScrollToTop() {
  // TODO: remove when Remix does this automatically
  let location = useLocation()

  let keys = useRef<Set<string> | null>(null)
  if (keys.current === null) {
    keys.current = new Set(location.key)
  }

  useEffect(() => {
    if (keys.current?.has(location.key)) {
      return
    }
    keys.current?.add(location.key)
    window.scrollTo(0, 0)
  }, [location]);
}

export default function App (): JSX.Element {
  useScrollToTop()
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <script type="application/javascript" src="/global.js" />
        <Meta />
        <style dangerouslySetInnerHTML={{
          __html: `
          @font-face {
            font-family: 'Roboto';
            src: url('/font/roboto-light-webfont.woff2') format('woff2'),
                 url('/fontroboto-light-webfont.woff') format('woff'),
                 url('/fontroboto-light-webfont.ttf') format('truetype');
            font-weight: normal;
            font-style: normal;
            font-display: swap;
          }
        `
        }}
        />
        <Styles />
      </head>
      <body>
        <Header />
        <Routes />
        <Footer />
      </body>
    </html>
  )
}
