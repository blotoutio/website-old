import React from 'react'
import ReactDOM from 'react-dom'
import Remix from '@remix-run/react/browser'

import App from './App'

ReactDOM.hydrate(
  // @ts-expect-error
  <Remix>
    <App styledComponentsStyles={null} />
  </Remix>,
  document
)
