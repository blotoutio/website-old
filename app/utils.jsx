import { tag } from '@blotoutio/edgetag-sdk-js'
import { metaDescription } from './data/meta'

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}

export const codifyClick = (name, payload = {}) => {
  tag(
    name,
    payload,
    {
      blotoutCloud: true,
    },
    {
      method: 'beacon',
    }
  )
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
    title = `${title} | Blotout – Supercharge your marketing signals in the post-cookie world`
  } else {
    title =
      'Supercharge your marketing signals in the post-cookie world | Blotout'
  }
  const description = desc || metaDescription

  return {
    title,
    description: description,
    'og:title': title,
    'og:description': description,
  }
}
