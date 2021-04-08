import { Link } from 'react-router-dom'

interface Props {
  articles: Jobs[]
}

const generate = (article: Jobs): JSX.Element => {
  return (
    <article key={article.link}>
      <Link to={article.link}>
        <h2>{article.title}</h2>
      </Link>
    </article>
  )
}

export default function JobsList(props: Props): JSX.Element {
  return (
    <>
      <div className='mdx-content'>
        <div className='header'>
          <h1>Open jobs</h1>
          <div className='sub-text'>
            Join our remote team on awesome journey.
          </div>
        </div>
      </div>
      <section id='blog-list' className='content-wrapper'>
        {props.articles.map((article) => generate(article))}
      </section>
    </>
  )
}
