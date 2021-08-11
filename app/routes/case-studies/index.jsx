import { Link } from 'react-router-dom'
import { caseStudyList } from '../../data/caseStudyList'
import { formatDate } from '../../utils'
import stylesUrl from '../../styles/writing.css'

export function meta() {
  return {
    title: 'Blotout - Case Studies',
    description: '',
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function CaseStudies() {
  return (
    <div id='case-studies' className='writing'>
      <div id='case-studies-header' className='writing-header'>
        <div
          id='case-studies-header-content'
          className='writing-header-content'
        >
          <h1 id='case-studies-title' className='writing-title'>
            Case Studies
          </h1>
        </div>
      </div>

      <div id='case-studies-list' className='writing-list'>
        <div id='case-studies-list-content' className='writing-list-content'>
          <div className='list'>
            {/* <div className='list-title'>All Case Studies</div> */}
            <div className='list-content'>
              {caseStudyList.map((caseStudy) => {
                const formattedDate = formatDate(caseStudy.date)

                return (
                  <div className='list-item' key={caseStudy.slug}>
                    <Link to={caseStudy.slug} className='list-item-title'>
                      {caseStudy.title}
                    </Link>
                    <div className='list-item-info'>{formattedDate}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
