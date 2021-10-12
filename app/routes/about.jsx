import { Link } from 'react-router-dom'
import { useRouteData } from '@remix-run/react'
import stylesUrl from '../styles/about.css'
import { codifyClick, metaInfo } from '../utils'

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
  let jobs = fetch('https://api.lever.co/v0/postings/blotout?group=department')

  return jobs
}

export default function About() {
  let jobs = useRouteData()

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
            {jobs.map((department) => {
              return (
                <div className='job-group' key={department.title}>
                  <div className='job-group-title'>{department.title}</div>
                  <div className='job-group-items'>
                    {department.postings.map((posting) => {
                      return (
                        <a
                          href={posting.hostedUrl}
                          className='job-title'
                          target='_blank'
                          rel='noreferrer'
                          key={posting.id}
                          onClick={() => codifyClick(`Jobs - ${posting.text}`)}
                        >
                          {posting.text}
                        </a>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
