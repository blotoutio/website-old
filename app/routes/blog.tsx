import React from 'react'
import { useRouteData } from '@remix-run/react'
import Blog from '../components/blog'

export function meta (): Meta {
  return {
    title: 'Blog',
    description: 'Blotout blog'
  }
}

export default function BlogRoute (): JSX.Element {
  const data = useRouteData()
  return <Blog articles={data.articles} />
}
