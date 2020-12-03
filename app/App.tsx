import React from 'react'
import { Meta, Scripts, Styles, Routes } from '@remix-run/react'

export default function App (): JSX.Element {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.png' />
        <Meta />
        <Styles />
      </head>
      <body>
        <Routes />
        <Scripts />
      </body>
    </html>
  )
}
