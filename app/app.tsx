import React from 'react'
import { Meta, Scripts, Routes, Styles } from '@remix-run/react'
import { Header } from './components/header'

interface Props {
  styledComponentsStyles?: React.ReactElement[]
}

export default function App ({ styledComponentsStyles }: Props): JSX.Element {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
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
        {styledComponentsStyles}
      </head>
      <body>
        <Header />
        <Routes />
        <Scripts />
      </body>
    </html>
  )
}
