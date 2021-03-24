import type { MetaFunction, LinksFunction } from '@remix-run/react'

import styles from 'css:../styles/index.css'
import Accurate from '../icons/home/accurate'
import Unify from '../icons/home/unify'
import Efficient from '../icons/home/efficient'
import Cloud from '../icons/home/cloud'
import Private from '../icons/home/private'
import Solution from '../icons/home/solution'

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
        <h1>
          The unified <span>source of truth</span> for all your customer data
        </h1>
        <h2>
          Blotout is the customer data lake that deploys in your infrastructure.
        </h2>
        <div className='buttons'>
          <a className='button-main' href='mailto:sales@blotout.io'>
            Get a demo
          </a>
          <a
            className='button-secondary'
            href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
            target='_blank'
            rel='noreferrer'
          >
            Join our Slack
          </a>
        </div>
      </section>
      <section id='third'>
        <div className='content-wrapper'>
          <h2>Build your customer record of truth for the privacy-era</h2>
        </div>
      </section>
      <section id='why' className='content-wrapper'>
        <div className='left'>
          <div className='image'>
            <Accurate />
          </div>
          <div className='text'>
            <h3 className='accurate'>Accurate and complete</h3>
            <p>Analytics and attribution for every user, event, and platform</p>
          </div>
        </div>
        <div className='right'>
          <div className='image'>
            <Solution />
          </div>
          <div className='text'>
            <h3 className='solution'>Solutions, not just pipes</h3>
            <p>
              Apps to measure anything in your lake and consent-based sharing
              with third-parties
            </p>
          </div>
        </div>
        <div className='left'>
          <div className='image'>
            <Private />
          </div>
          <div className='text'>
            <h3 className='private'>Private and secure</h3>
            <p>
              Eliminate third-party scripts/SDKs and reduce your attack surface
            </p>
          </div>
        </div>
        <div className='right'>
          <div className='image'>
            <Efficient />
          </div>
          <div className='text'>
            <h3 className='efficient'>Efficient</h3>
            <p>
              Pay for what you use, consolidate tools, and improve site
              performance
            </p>
          </div>
        </div>
        <div className='left'>
          <div className='image'>
            <Unify />
          </div>
          <div className='text'>
            <h3 className='unify'>Unified</h3>
            <p>
              All your customer data in one place, including sensitive sources
            </p>
          </div>
        </div>
      </section>
      <section id='deploy'></section>
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
          <div className='image'>
            <Cloud />
          </div>
        </div>
      </section>
    </>
  )
}
