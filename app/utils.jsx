import { capture } from '@blotoutio/sdk-core'

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}

export const codifyClick = (name, payload = {}) => {
  capture(name, payload, {
    method: 'beacon',
  })
}
