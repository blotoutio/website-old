import { redirect } from 'remix'

export function meta() {
  return {
    title: 'Blotout - Jobs',
    description:
      'Cloud prem data infrastructure to capture, analyze, and activate customer data as a first-party',
    'og:title': 'Blotout - Jobs',
    'og:description':
      'Cloud prem data infrastructure to capture, analyze, and activate customer data as a first-party',
  }
}

export function loader({ request }) {
  throw redirect('/about')
}

export default function Job() {
  return null
}
