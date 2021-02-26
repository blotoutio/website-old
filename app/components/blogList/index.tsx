import { Link } from 'react-router-dom'

interface Props {
  articles: BlogArticle[]
}

const generateArticle = (article: BlogArticle): JSX.Element => {
  const formattedDate = new Intl.DateTimeFormat('en', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  }).format(new Date(article.date))

  return (
    <article key={article.link}>
      <Link to={article.link}>
        <h2>{article.title}</h2>
        <p>{formattedDate}</p>
        <p>{article.description}</p>
      </Link>
    </article>
  )
}

export default function BlogList(props: Props): JSX.Element {
  return (
    <>
      <div className='mdx-content'>
        <div className='header'>
          <h1>Blotout Blog</h1>
        </div>
      </div>
      <section id='blog-list' className='content-wrapper'>
        {props.articles.map((article) => generateArticle(article))}
      </section>
    </>
  )
}
