import { LinksFunction } from '@remix-run/react'
import BlogList from '../../components/blogList'
import styles from 'css:../../styles/blog.css'
import { blogArticles } from '../../data/blog'

export function meta() {
  return {
    title: 'Blog',
    description:
      'Read out Blotout philosophy and how we are bring privacy to enterprise while doubling revenue, and reducing costs.',
  }
}

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function BlogRoute(): JSX.Element {
  return <BlogList articles={blogArticles} />
}
