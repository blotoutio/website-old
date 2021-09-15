import { redirect } from 'remix'
import { metaInfo } from '../../utils'

export function meta() {
  return metaInfo('Jobs')
}

export function loader() {
  throw redirect('/about')
}

export default function Job() {
  return null
}
