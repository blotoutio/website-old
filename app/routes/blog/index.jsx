import { Link } from 'react-router-dom'
import { useRouteData } from 'remix'
import { codifyClick, formatDate, metaInfo, postFromModule } from '../../utils'
import stylesUrl from '../../styles/writing.css'

import * as post34 from './first-party-data-advantage.mdx'
import * as post33 from './klaviyo-support-edgetag.mdx'
import * as post32 from './small-businesses-with-own-martech.mdx'
import * as post31 from './pixated-martech-series.mdx'
import * as post30 from './cyber-news.mdx'
import * as post29 from './cookieless-future.mdx'
import * as post28 from './conversion-mobile-and-tiktok.mdx'
import * as post27 from './modernize-site-tag-management.mdx'
import * as post26 from './finalized-eu-digital-services-act.mdx'
import * as post25 from './eu-legislation.mdx'
import * as post24 from './tech-in-adtech.mdx'
import * as post23 from './federal-deal.mdx'
import * as post22 from './adweek-article-marketers.mdx'
import * as post21 from './edgetag-cdn-general-availability.mdx'
import * as post20 from './freethink-interview-youtube.mdx'
import * as post19 from './blotout-release-point-thirteen.mdx'
import * as post18 from './demise-of-cookies-rise-of-trust.mdx'
import * as post17 from './cloudflare-tv-founder-spotlight.mdx'
import * as post16 from './edgetag-announcement.mdx'
import * as post15 from './building-with-cloudflare-workers.mdx'
import * as post14 from './funding-announcement.mdx'
import * as post13 from './google-ministry-of-magic-losing.mdx'
import * as post12 from './storybook-for-blotout.mdx'
import * as post11 from './open-ai.mdx'
import * as post10 from './introducing-technical-blogs.mdx'
import * as post9 from './accommodating-evil-in-the-era-of-trust.mdx'
import * as post8 from './ios-update-14-5.mdx'
import * as post7 from './yc-announcement.mdx'
import * as post6 from './the-hypocrisy-in-privacy.mdx'
import * as post5 from './blotout-360-for-publishers-and-ssps.mdx'
import * as post4 from './announcing-blotout-V0-1.mdx'
import * as post3 from './kiss-making-privacy-by-design-easy.mdx'
import * as post2 from './privacy-by-trust-vs-privacy-by-design.mdx'
import * as post1 from './privacy-has-muscle-at-the-device-edge.mdx'

import ContentHeader from '~/components/core/ContentHeader'
import { Blog32 } from '@carbon/icons-react'

export function meta() {
  return metaInfo('Blog')
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
  return [
    postFromModule(post34),
    postFromModule(post33),
    postFromModule(post32),
    postFromModule(post31),
    postFromModule(post30),
    postFromModule(post29),
    postFromModule(post28),
    postFromModule(post27),
    postFromModule(post26),
    postFromModule(post25),
    postFromModule(post24),
    postFromModule(post23),
    postFromModule(post22),
    postFromModule(post21),
    postFromModule(post20),
    postFromModule(post19),
    postFromModule(post18),
    postFromModule(post17),
    postFromModule(post16),
    postFromModule(post15),
    postFromModule(post14),
    postFromModule(post13),
    postFromModule(post12),
    postFromModule(post11),
    postFromModule(post10),
    postFromModule(post9),
    postFromModule(post8),
    postFromModule(post7),
    postFromModule(post6),
    postFromModule(post5),
    postFromModule(post4),
    postFromModule(post3),
    postFromModule(post2),
    postFromModule(post1),
  ]
}

export default function Blog() {
  let posts = useRouteData()
  return (
    <div className='blog'>
      <ContentHeader icon={<Blog32 />} text='Blog' className='blog-header' />
      <div id='blog-list' className='content-list'>
        {posts.map((blog) => (
          <article className='content-item' key={blog.slug}>
            {blog.internal ? (
              <Link
                to={blog.slug}
                className='content-item-link'
                onClick={() => codifyClick(`Blog - ${blog.title}`)}
              >
                <img
                  src={
                    'img/blog/' +
                    (blog.customThumbnail
                      ? `${blog.slug}/thumbnail`
                      : 'default-thumbnail') +
                    '.png'
                  }
                  alt='Blog Thumbnail'
                  className='content-item-thumbnail'
                />
                <h2 className='content-item-title'>{blog.title}</h2>
              </Link>
            ) : blog.external ? (
              <a
                href={blog.url}
                className='content-item-link'
                onClick={() => codifyClick(`Blog (External) - ${blog.title}`)}
                target='_blank'
                rel='noreferrer'
              >
                <img
                  src={'img/blog/' + `${blog.slug}/thumbnail` + '.png'}
                  alt='Blog Thumbnail'
                  className='content-item-thumbnail'
                />
                <h2 className='content-item-title'>{blog.title}</h2>
              </a>
            ) : null}
            <span className='content-item-date'>{formatDate(blog.date)}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
