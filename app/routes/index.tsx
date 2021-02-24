import type { MetaFunction, LinksFunction } from '@remix-run/react'

import styles from 'url:../styles/index.css'

export let meta: MetaFunction = () => {
  return {
    title: 'Blotout',
    description:
      'One enterprise-grade privacy analytics platform to capture product analytics, integrate all customer data, and activate it for doubling revenue.',
  }
}

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Index() {
  return <div>Hi</div>
}
