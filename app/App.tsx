import React from 'react'
import { Meta, Scripts, Routes } from '@remix-run/react'
import { Header } from './components/header'

interface Props {
  styledComponentsStyles: React.ReactElement[] | null
}

export default function App ({ styledComponentsStyles }: Props): JSX.Element {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
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
