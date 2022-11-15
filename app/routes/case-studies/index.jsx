import { Link } from '@remix-run/react'
import { codifyClick, formatDate, metaInfo, postFromModule } from '../../utils'
import stylesUrl from '../../styles/writing.css'
import { useRouteData } from '@remix-run/react'

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
    <div className='case-studies'>
      <ContentHeader
        icon={<Growth32 />}
        text='Case Studies'
        className='case-studies-header'
      />
      <div id='case-studies-list' className='content-list'>
        {posts.map((caseStudy) => {
          const formattedDate = formatDate(caseStudy.date)

          return (
            <article className='content-item' key={caseStudy.slug}>
              <Link
                to={caseStudy.slug}
                className='content-item-link'
                onClick={() => codifyClick(`Case Studies - ${caseStudy.title}`)}
              >
                <img
                  src={
                    'img/case-studies/' +
                    (caseStudy.customThumbnail
                      ? `${caseStudy.slug}/thumbnail`
                      : 'default-thumbnail') +
                    '.png'
                  }
                  alt='Case Study Thumbnail'
                  className='content-item-thumbnail'
                />
                <h2 className='content-item-title'>{caseStudy.title}</h2>
              </Link>
              <span className='content-item-date'>{formattedDate}</span>
            </article>
          )
        })}
      </div>
    </div>
  )
}
