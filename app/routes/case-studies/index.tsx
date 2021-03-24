import { LinksFunction } from '@remix-run/react'
import styles from 'css:../../styles/case-studies.css'
import { studies } from '../../data/case.studies'
import CaseStudiesList from '../../components/caseStudiesList'

export function meta() {
  return {
    title: 'Case studies',
    description:
      'Read out Blotout philosophy and how we are bring privacy to enterprise while doubling revenue, and reducing costs.',
  }
}

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function BlogRoute(): JSX.Element {
  return <CaseStudiesList studies={studies} />
}
