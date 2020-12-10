import React from 'react'
import { Content, Article, ReadMore, Title } from './style'
import HeaderFiller from '../headerFiller'

interface Props {
  articles: BlogArticle[]
}

const generateArticle = (article: BlogArticle): JSX.Element => {
  const formattedDate = new Intl.DateTimeFormat('en', { month: 'long', day: '2-digit', year: 'numeric' })
    .format(new Date(article.date))
  return (
    <Article key={article.link}>
      <Title>{article.title}</Title>
      <small>{formattedDate}</small>
      <p>{article.description}</p>
      <ReadMore href={article.link} target='_blank' rel='noreferrer'>
        Continue reading {'>'}
      </ReadMore>
    </Article>
  )
}

export default function Blog (props: Props): JSX.Element {
  return (
    <HeaderFiller>
      <Content>
        {props.articles.map((article: BlogArticle) => generateArticle(article))}
      </Content>
    </HeaderFiller>
  )
}
