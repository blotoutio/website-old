import type { LinksFunction } from '@remix-run/react'
import For0For from '../icons/404'
import styles from 'css:../styles/404.css'

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export function meta() {
  return { title: "Ain't nothing here" }
}

export default function FourOhFour() {
  return (
    <div id='not-found'>
      <For0For />
      <h1>Page not found</h1>
      <p>
        We are very sorry for the inconvenience. It looks like you are trying to
        access a page that either has been deleted or never existed.
      </p>
      <a href='/' className={'button-main'}>
        Go back
      </a>
    </div>
  )
}
