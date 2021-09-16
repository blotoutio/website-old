import { capture } from '@blotoutio/sdk-core'
import { metaDescription } from './data/meta'

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

export const postFromModule = (mod) => {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ''),
    title: mod.attributes.meta.title.replace(' | Blotout', ''),
    ...mod.attributes.data,
  }
}

export const metaInfo = (title, desc) => {
  if (title) {
    title = `${title} | Blotout`
  } else {
    title = 'Blotout'
  }
  const description = desc || metaDescription

  return {
    title,
    description: description,
    'og:title': title,
    'og:description': description,
  }
}
