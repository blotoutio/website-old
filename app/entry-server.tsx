import React from 'react'
import ReactDOMServer from 'react-dom/server'
import type { EntryContext } from '@remix-run/core'
import Remix from '@remix-run/react/server'
import { ServerStyleSheet } from 'styled-components'

import App from './App'

export default function handleRequest (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
): Response {
  const sheet = new ServerStyleSheet()

  ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Remix context={remixContext} url={request.url}>
        <App styledComponentsStyles={null} />
      </Remix>
    )
  )

  // figure out what styles were created during render
  const styleElements = sheet.getStyleElement()

  const markup: string = ReactDOMServer.renderToString(
    sheet.collectStyles(
      <Remix context={remixContext} url={request.url}>
        <App styledComponentsStyles={styleElements} />
      </Remix>
    )
  )

  return new Response(`<!DOCTYPE html> ${markup}`, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      'Content-Type': 'text/html'
    }
  })
}
