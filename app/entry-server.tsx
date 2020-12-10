import React from 'react'
import { renderToString } from 'react-dom/server'
import type { EntryContext } from '@remix-run/core'
import Remix from '@remix-run/react/server'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

import App from './app'

export default function handleRequest (
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
): Response {
  const sheet = new ServerStyleSheet()

  renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Remix context={remixContext} url={request.url}>
        <App />
      </Remix>
    </StyleSheetManager>
  )

  const styleElements = sheet.getStyleElement()

  const markup: string = renderToString(
    <Remix context={remixContext} url={request.url}>
      <App styledComponentsStyles={styleElements} />
    </Remix>
  )

  return new Response(`<!DOCTYPE html> ${markup}`, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      'Content-Type': 'text/html'
    }
  })
}
