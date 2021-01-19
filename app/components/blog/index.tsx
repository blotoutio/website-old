import HeaderFiller from '../headerFiller'
import { Link } from 'react-router-dom'

interface Props {
  articles: BlogArticle[]
}

const generateArticle = (article: BlogArticle): JSX.Element => {
  const formattedDate = new Intl.DateTimeFormat('en', { month: 'long', day: '2-digit', year: 'numeric' })
    .format(new Date(article.date))
  return (
    <article className='blog_article' key={article.link}>
      <h2 className='blog_title'>{article.title}</h2>
      <small>{formattedDate}</small>
      <p>{article.description}</p>
      {
        article.link
          ? (
            <Link className='blog_readMore' to={article.link}>
              Continue reading {'>'}
            </Link>
          ) : (
            <a className='blog_readMore' href={article.mediumLink} target='_blank' rel='noreferrer'>
              Continue reading {'>'}
            </a>
          )
      }
    </article>
  )
}

export default function Blog (props: Props): JSX.Element {
  return (
    <HeaderFiller>
      <section className='blog_content'>
        {props.articles.map((article: BlogArticle) => generateArticle(article))}
      </section>
    </HeaderFiller>
  )
}
