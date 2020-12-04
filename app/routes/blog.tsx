import React from 'react'
import { useRouteData } from '@remix-run/react'

export function meta (): Meta {
  return {
    title: 'Blog',
    description: 'Blotout blog'
  }
}

const generateArticle = (article: BlogArticle): JSX.Element => {
  const formattedDate = new Intl.DateTimeFormat('en', { month: 'long', day: '2-digit', year: 'numeric' })
    .format(new Date(article.date))
  return (
    <div key={article.link}>
      <h3>{article.title}</h3>
      <small>{formattedDate}</small>
      <p>{article.description}</p>
      <a href={article.link} target='_blank' rel='noreferrer'>Continue reading</a>
    </div>
  )
}

export default function Blog (): JSX.Element {
  const data = useRouteData()
  return (
    <div>
      {
        data.articles.map((article: BlogArticle) => generateArticle(article))
      }
    </div>
  )
}
