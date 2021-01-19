import { useRouteData } from '@remix-run/react'
import type { Loader } from '@remix-run/data'
import Blog from '../components/blog'
import { articles } from '../data/blog'

export let loader: Loader = async () => {
  return {
    articles
  }
}

export function meta (): Meta {
  return {
    title: 'Blog',
    description: 'Read out Blotout philosophy and how we are bring privacy to enterprise while doubling revenue, and reducing costs.'
  }
}

export default function BlogRoute (): JSX.Element {
  const data = useRouteData()
  return <Blog articles={data.articles} />
}
