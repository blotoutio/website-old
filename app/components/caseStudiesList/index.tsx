import { Link } from 'react-router-dom'
import { formatDate } from '../../utils'

interface Props {
  studies: StudyArticle[]
}

const generate = (study: StudyArticle): JSX.Element => {
  const formattedDate = formatDate(study.date)

  return (
    <article key={study.link}>
      <Link to={study.link}>
        <h2>{study.company}</h2>
        <p>{formattedDate}</p>
        <p>{study.description}</p>
      </Link>
    </article>
  )
}

export default function CaseStudiesList(props: Props): JSX.Element {
  return (
    <>
      <div className='mdx-content'>
        <div className='header'>
          <h1>Case studies</h1>
        </div>
      </div>
      <section id='case-studies-list' className='content-wrapper'>
        {props.studies.map((study) => generate(study))}
      </section>
    </>
  )
}
