import { Link } from 'react-router-dom'
import { codifyClick, formatDate, metaInfo, postFromModule } from '../../utils'
import stylesUrl from '../../styles/writing.css'
import { useRouteData } from '@remix-run/react'

import * as post1 from './lux-foundation-solutions.mdx'
import * as post2 from './besmitten.mdx'

export function meta() {
  return metaInfo('Case Studies')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export function loader() {
  return [postFromModule(post2), postFromModule(post1)]
}

export default function CaseStudies() {
  let posts = useRouteData()
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
              {posts.map((caseStudy) => {
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
