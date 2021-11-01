import { useRouteData } from 'remix'
import stylesUrl from '../styles/about.css'
import { codifyClick, metaInfo } from '../utils'

import Section from '~/components/core/Section'
import { ArrowUpRight24 } from '@carbon/icons-react'

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
  return fetch('https://api.lever.co/v0/postings/blotout').then((response) => {
    return response.json()
  })
}

export default function About() {
  let data = useRouteData()

  let numberOfJobs = data.length

  return (
    <>
      <Section id='about-section'>
        <div className='about-introduction'>
          <h1>
            Blotout is reinventing the <span>customer data platform</span> to
            put trust first.
          </h1>
        </div>
      </Section>
      <Section id='info'>
        <div className='company-details'>
          <div className='left'>
            <p>
              Most companies today depend on marketing and analytics tools that
              track users and silo data. Increasingly, this means data loss,
              compliance risk, and weak customer relationships.
            </p>
            <p>
              Blotout turns this on its head by providing companies with
              solutions infrastructure-as-code that they run themselves. Instead
              of sending customer data to third-parties, they capture it to
              their own warehouse — data is never lost and incredible
              possibilities open for a unified view of the customer.
            </p>
            <p>
              This is a completely new way to think of the growth stack. Our
              platform makes it possible for anyone from startups to publicly
              traded companies to harness the power of a direct and trusted
              relationship with their customers.
            </p>
            <p>
              We're venture funded and proud to count Y Combinator and leading
              investors as our backers.
            </p>
          </div>
          <div className='right'>
            <span>Backed by leading investors</span>
            <img
              src='img/core/investor/yc.svg'
              alt='Logo of Y Combinator'
            ></img>
          </div>
        </div>
      </Section>
      <Section id='careers'>
        <h2>Join the team</h2>
        <p>
          We’re growing rapidly and looking to fill roles across our teams.
          You'll get to work alongside experts on some of the most interesting
          questions of our moment as we reamgine the growth stack for the
          privacy era.
        </p>
        <a
          href='https://jobs.lever.co/blotout'
          target='_blank'
          rel='noreferrer'
          className='careers-cta'
          onClick={() => codifyClick('About - Lever')}
        >
          View {numberOfJobs >= 5 ? numberOfJobs : null} open positions
          <ArrowUpRight24 className='careers-cta-icon' />
        </a>
      </Section>
    </>
  )
}
