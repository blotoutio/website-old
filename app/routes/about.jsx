import { Link } from 'react-router-dom'
import { useRouteData } from '@remix-run/react'
import stylesUrl from '../styles/about.css'
import { codifyClick, metaInfo, postFromModule } from '../utils'

import * as post6 from './jobs/client-engineer-052021.mdx'
import * as post5 from './jobs/ui-ux-engineer-052021.mdx'
import * as post4 from './jobs/data-engineer-052021.mdx'
import * as post3 from './jobs/server-engineer-052021.mdx'
import * as post2 from './jobs/client-internship-052021.mdx'
import * as post1 from './jobs/server-internship-052021.mdx'

export function meta() {
  return metaInfo('About')
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
    postFromModule(post6),
    postFromModule(post5),
    postFromModule(post4),
    postFromModule(post3),
    postFromModule(post2),
    postFromModule(post1),
  ]
}

export default function About() {
  let posts = useRouteData()
  return (
    <div id='about'>
      <div id='about-header'>
        <div id='about-header-content'>
          <h1 id='about-title'>About</h1>
        </div>
      </div>

      <div id='about-text'>
        <div id='about-text-content'>
          <div id='about-text-title'>
            We are a group of individuals that came together with the mindset
            that privacy has an important place in our future, our children’s
            future.
          </div>
          <div className='about-text-header'>Meet our team</div>
          <div className='about-text-header-content'>
            We are engineers, designers, operators, sales, and web/app
            developers who believe privacy is a fundamental right and must
            always be protected. Now over a year in development, we can proudly
            showcase how our technology can co-exist with the data needs of any
            business or enterprise, while ensuring privacy by design and global
            compliance.
          </div>
          <div className='about-text-header'>Our vision for Blotout</div>
          <div className='about-text-header-content'>
            It was a huge win for web consumers when Apple took up the cause of
            protecting user privacy. Since 2017, the company has steadily
            improved the Intelligent Tracking Prevention (ITP) feature in
            WebKit, the engine that powers the Safari browser across its devices
            and operating systems. Other browsers, like Firefox and Brave, have
            extensive tracking prevention and an astonishing 55% of users
            globally use ad blockers that take this sort of prevention even
            further. Reading the times, the team responsible for Chromium — the
            core of Google’s Chrome browser, which has 65% market share — has
            itself committed to eliminating third-party (3P) cookies by 2021.
          </div>
          <div className='about-text-header'>Open Jobs</div>
          <div id='job-list'>
            {posts.map((jobItem) => {
              return (
                <Link
                  to={`/jobs/${jobItem.slug}`}
                  className='job-item'
                  key={jobItem.slug}
                  onClick={() => codifyClick(`Jobs - ${jobItem.title}`)}
                >
                  {jobItem.title}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
