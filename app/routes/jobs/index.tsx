import { LinksFunction } from '@remix-run/react'
import BlogList from '../../components/blogList'
import styles from 'css:../../styles/blog.css'
import { jobs } from '../../data/jobs'
import JobsList from '../../components/jobsList'

export function meta() {
  return {
    title: 'Jobs',
    description:
      'Read out Blotout philosophy and how we are bring privacy to enterprise while doubling revenue, and reducing costs.',
  }
}

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function BlogRoute(): JSX.Element {
  return <JobsList articles={jobs} />
}
