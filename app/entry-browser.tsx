import React from 'react'
import ReactDOM from 'react-dom'
import Remix from '@remix-run/react/browser'

import App from './app'

ReactDOM.hydrate(
  // @ts-expect-error
  <Remix>
    <App />
  </Remix>,
  document
)
