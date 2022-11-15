import { redirect } from '@remix-run/react'

export function loader() {
  return redirect('/about')
}

export default function Job() {
  return null
}
