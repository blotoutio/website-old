import { redirect } from 'remix'

export function loader() {
  return redirect('/about')
}

export default function Index() {
  return null
}
