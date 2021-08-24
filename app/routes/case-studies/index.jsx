import { Link } from 'react-router-dom'
import { caseStudyList } from '../../data/caseStudyList'
import { codifyClick, formatDate } from '../../utils'
import stylesUrl from '../../styles/writing.css'

export function meta() {
  return {
    title: 'Blotout - Case Studies',
    description:
      'Cloud prem data infrastructure to capture, analyze, and activate customer data as a first-party',
    'og:title': 'Blotout - Case Studies',
    'og:description':
      'Cloud prem data infrastructure to capture, analyze, and activate customer data as a first-party',
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
            <div className='list-content'>
              {caseStudyList.map((caseStudy) => {
                const formattedDate = formatDate(caseStudy.date)

                return (
                  <div className='list-item' key={caseStudy.slug}>
                    <h2>
                      <Link
                        to={caseStudy.slug}
                        className='list-item-title'
                        onClick={() =>
                          codifyClick(`Case Studies - ${caseStudy.title}`)
                        }
                      >
                        {caseStudy.title}
                      </Link>
                    </h2>
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
