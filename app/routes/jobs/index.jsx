import { redirect } from 'remix'

export function meta() {
  return {
    title: 'Blotout - Job',
    description:
      'Cloud prem data infrastructure to capture, analyze, and activate customer data as a first-party',
  }
}

export function loader({ request }) {
  throw redirect('/about')
}

export default function Job() {
  return null
}
