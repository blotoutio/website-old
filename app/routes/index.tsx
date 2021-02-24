import type { MetaFunction, LinksFunction } from '@remix-run/react'

import styles from 'css:../styles/index.pcss'
import MainImage from '../icons/home/main'
import Watch from '../icons/home/watch'
import Measure from '../icons/home/measure'
import Person from '../icons/home/person'
import Attribute from '../icons/home/attribute'
import Self from '../icons/home/self'
import Managed from '../icons/home/managed'
import Cloud from '../icons/home/cloud'

export let meta: MetaFunction = () => {
  return {
    title: 'Blotout',
    description:
      'One enterprise-grade privacy analytics platform to capture product analytics, integrate all customer data, and activate it for doubling revenue.',
  }
}

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function Index() {
  return (
    <>
      <section id='main-fold'>
        <div className='content-wrapper'>
          <div className='content'>
            <h1>
              Capture <span>customer</span> journeys in your infrastructure
            </h1>
            <h2>
              Blotout lets you see the users and data that third-party analytics
              can't.
            </h2>
            <div className='buttons'>
              <a className='button-main' href='mailto:sales@blotout.io'>
                Get a demo
              </a>
              <a
                className='button-secondary'
                href='https://join.slack.com/t/blotout-workspace/shared_invite/zt-medvirwy-ucfSJGHl6gjBh_tTWPWAYQ'
                target='_blank'
                rel='noreferrer'
              >
                Join our Slack
              </a>
            </div>
            <div className='watch'>
              <Watch />
              <span>Watch the 2-min intro video</span>
            </div>
          </div>
          <div className='main-image'>
            <MainImage />
          </div>
        </div>
      </section>
      <section id='third'>
        <div className='content-wrapper'>
          <h2>Third-party analytics tools are costing you data and trust</h2>
          <p>
            Blotout is a customer data lake and analytics platform hosted in
            your infrastructure that balances privacy and attribution
          </p>
        </div>
      </section>
      <section id='why' className='content-wrapper'>
        <div className='area'>
          <h3 className='measure'>Measure 100% of users</h3>
          <p>
            Tools like Amplitude and Segment miss 20-50% because of privacy
            browsers and ad blockers.
          </p>
        </div>
        <div className='area measure right'>
          <Measure />
        </div>
        <div className='area unify'>
          <Person />
        </div>
        <div className='area right'>
          <h3 className='unify'>Unify your analytics</h3>
          <p>All your customer data sources in one place.</p>
        </div>
        <div className='area'>
          <h3 className='attribute'>Attribute accurately</h3>
          <p>Understand the actual ROI for every campaign you run.</p>
        </div>
        <div className='area attribute right'>
          <Attribute />
        </div>
      </section>
      <section id='deploy'>
        <div className='content-wrapper'>
          <h2>Two ways to deploy</h2>
          <div className='boxes'>
            <div className='box'>
              <Self />
              <h3>Self-hosted</h3>
              <p>Deploy our container to your infrastructure</p>
              <a className='button' href='mailto:sales@blotout.io'>
                Get started
              </a>
            </div>
            <div className='box'>
              <Managed />
              <h3>Managed service</h3>
              <p>We take care of the deployment for you</p>
              <a className='button' href='mailto:sales@blotout.io'>
                Get started
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='cloud'>
        <div className='content-wrapper'>
          <div className='left'>
            <h3>All of your customer data in your cloud.</h3>
            <ul>
              <li>See invisible users</li>
              <li>Unify customer data in one place</li>
              <li>Comply with GDPR, CPRA, and global privacy laws</li>
            </ul>
            <a href='mailto:sales@blotout.io' className='button-main'>
              Get a demo
            </a>
          </div>
          <Cloud />
        </div>
      </section>
    </>
  )
}
