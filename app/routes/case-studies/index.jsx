import { Link } from 'react-router-dom'
import { codifyClick, formatDate, metaInfo, postFromModule } from '../../utils'
import stylesUrl from '../../styles/writing.css'
import { useRouteData } from 'remix'

import * as post3 from './edgetag-facebook-lux.mdx'
import * as post2 from './besmitten.mdx'
import * as post1 from './lux-foundation-solutions.mdx'

import ContentHeader from '~/components/core/ContentHeader'
import { Growth32 } from '@carbon/icons-react'

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
  return [postFromModule(post3), postFromModule(post2), postFromModule(post1)]
}

export default function CaseStudies() {
  let posts = useRouteData()
  return (
    <div className='writing-new'>
      <ContentHeader
        icon={<Growth32 />}
        text='Case Studies'
        className='case-studies-header'
      />
      <div id='case-studies' className='writing'>
        <div id='case-studies-list' className='writing-list'>
          <div id='case-studies-list-content' className='writing-list-content'>
            <div className='list'>
              <div className='list-content'>
                {posts.map((caseStudy) => {
                  const formattedDate = formatDate(caseStudy.date)

                  return (
                    <article className='list-item' key={caseStudy.slug}>
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
                      <p className='list-item-info'>{formattedDate}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
