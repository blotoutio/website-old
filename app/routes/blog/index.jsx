import { Link } from 'react-router-dom'
import { useRouteData } from 'remix'
import { codifyClick, formatDate, metaInfo, postFromModule } from '../../utils'
import stylesUrl from '../../styles/writing.css'

import * as post15 from './announcing-our-partnership-with-cloudflare.mdx'
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

import SubHeader from '~/components/core/SubHeader'

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
    <div className='writing-new'>
      <SubHeader heading='Blog' />
      <div id='blog' className='writing'>
        <div id='blog-list' className='writing-list'>
          <div id='blog-list-content' className='writing-list-content'>
            <div className='list'>
              <div className='list-content'>
                {posts.map((blog) => (
                  <article className='list-item' key={blog.slug}>
                    <h2>
                      <Link
                        to={blog.slug}
                        className='list-item-title'
                        onClick={() => codifyClick(`Blog - ${blog.title}`)}
                      >
                        {blog.title}
                      </Link>
                    </h2>
                    <p className='list-item-info'>{formatDate(blog.date)}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
