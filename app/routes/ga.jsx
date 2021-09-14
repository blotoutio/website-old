import stylesUrl from '../styles/campaign.css'
import { useSubmit, redirect, json, useRouteData } from 'remix'
import { capture } from '@blotoutio/sdk-core'
import { codifyClick } from '../utils'
import LogoBlue from '../graphics/logo-blue'

export let loader = async ({ request }) => {
  requestJSON = json(await request)
  requestCode = requestJSON.status
  console.log(requestCode)
  return requestCode
}

export function meta() {
  return {
    title: 'Blotout - Comparison with Google Analytics',
    description:
      'Serverless data infrastructure to capture, analyze, and activate customer data as a first-party',
    'og:title': 'Blotout - Comparison with Google Analytics',
    'og:description':
      'Serverless data infrastructure to capture, analyze, and activate customer data as a first-party',
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export let action = async ({ request }) => {
  let body = new URLSearchParams(await request.text())

  let email = body.get('email')

  let info = JSON.stringify({
    email: email,
    firstName: 'xxx',
    customFields: [
      {
        key: 'Lead Source',
        value: 'Google Campaign',
      },
    ],
  })

  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('x-api-key', `4J6OqWceq69vqTNRQPCLD44n`)

  let options = {
    method: 'post',
    body: info,
    headers: headers,
  }

  let responseCode

  await fetch('https://api.reply.io/v1/people', options).then((response) => {
    if (response.status === 201) {
      responseCode = 201
      console.log('New user has signed up')
      console.log(responseCode)
    } else if (response.status === 200) {
      responseCode = 200
      console.set('Already signed up')
      console.log(responseCode)
    } else {
      responseCode = response.status
      console.log(response)
    }
  })

  return redirect(`/compare-with-google-analytics`, {
    status: responseCode,
  })
}

export default function Campaign() {
  const submit = useSubmit()

  const submission = (event) => {
    submit(event.currentTarget, { replace: true })
    event.preventDefault()
  }

  return (
    <div id='campaign'>
      <div id='campaign-content'>
        <h1 id='campaign-title'>Why Google Analytics isn’t enough</h1>
        <h2 id='campaign-subtitle'>
          You’re missing key user segments and valuable data sources. Blotout
          solves that.
        </h2>

        <div className='cta-box campaign-section'>
          <div className='cta-text'>Learn how to fix your analytics today</div>
          <form id='form-top' method='post' onSubmit={submission}>
            <input
              placeholder='E-mail address here'
              type='email'
              name='email'
              required
              onFocus={() => capture('GA Campaign - Form Input Focus')}
            ></input>
            <button
              type='submit'
              onClick={() => codifyClick('Form Submit - GA Campaign')}
            >
              Learn More
            </button>
          </form>
          <div className='form-message'>
            Thank you. We’ll be in touch shortly.
          </div>
        </div>

        <div id='points' className='campaign-section'>
          <div className='point'>
            <img src='/img/campaign/subtract-filled.svg' />
            <div>
              Right now you miss up to half your users. That’s because services
              like Google Analytics get blocked as trackers.
            </div>
          </div>
          <div className='point'>
            <img src='/img/campaign/add-filled.svg' />
            <div>
              With Blotout, you’re never blocked. The data goes to you, not
              someone else (like Google). With 100% user visibility and data in
              your own warehouse, you can finally do things that no other
              analytics or marketing solutions can.
            </div>
          </div>
        </div>

        <div id='comparison-table' className='campaign-section'>
          <div id='table-title'>How Blotout & Google Analytics Compare</div>

          {/* Desktop */}

          <div id='table-content'>
            <div></div>
            <div className='blotout-box main-box'>
              <LogoBlue />
            </div>
            <div className='ga-box main-box'>Google Analytics</div>

            <div className='comparison-feature first-feature'>
              True KPIs (CAC, ROAS,…)
            </div>
            <div className='blotout-box first-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box first-box'>
              <img src='/img/campaign/no.svg' />
            </div>

            <div className='comparison-feature'>Cohort 100% of users</div>
            <div className='blotout-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box'>
              <img src='/img/campaign/no.svg' />
            </div>

            <div className='comparison-feature'>
              Multi-channel and multi-platform attribution
            </div>
            <div className='blotout-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box'>
              <img src='/img/campaign/no.svg' />
            </div>

            <div className='comparison-feature'>
              Connect external data sources (including offline data)
            </div>
            <div className='blotout-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box'>
              <img src='/img/campaign/no.svg' />
            </div>

            <div className='comparison-feature'>Complete Customer Journeys</div>
            <div className='blotout-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box'>
              <img src='/img/campaign/no.svg' />
            </div>

            <div className='comparison-feature'>Campaign Attribution</div>
            <div className='blotout-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box partial-feature'>Partial</div>

            <div className='comparison-feature'>Campaign Optimization</div>
            <div className='blotout-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box'>
              <img src='/img/campaign/no.svg' />
            </div>

            <div className='comparison-feature'>Free BI</div>
            <div className='blotout-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box'>
              <img src='/img/campaign/check.svg' />
            </div>

            <div className='comparison-feature'>Globally Compliant</div>
            <div className='blotout-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box'>
              <img src='/img/campaign/no.svg' />
            </div>

            <div className='comparison-feature last-feature'>
              Warehouse (Native)
            </div>
            <div className='blotout-box last-box'>
              <img src='/img/campaign/check-filled.svg' />
            </div>
            <div className='ga-box last-box'>
              <img src='/img/campaign/no.svg' />
            </div>
          </div>

          {/* Mobile */}

          <div id='table-content-mobile'>
            <div className='table-mobile-group'>
              <div className='blotout-box main-box'>
                <LogoBlue />
              </div>
              <div className='ga-box main-box'>Google Analytics</div>
            </div>

            <div className='comparison-feature first-feature'>
              True KPIs (CAC, ROAS,…)
            </div>

            <div className='table-mobile-group'>
              <div className='blotout-box first-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box first-box'>
                <img src='/img/campaign/no.svg' />
              </div>
            </div>

            <div className='comparison-feature'>Cohort 100% of users</div>

            <div className='table-mobile-group'>
              <div className='blotout-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box'>
                <img src='/img/campaign/no.svg' />
              </div>
            </div>

            <div className='comparison-feature'>
              Multi-channel and multi-platform attribution
            </div>

            <div className='table-mobile-group'>
              <div className='blotout-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box'>
                <img src='/img/campaign/no.svg' />
              </div>
            </div>

            <div className='comparison-feature'>
              Connect external data sources (including offline data)
            </div>

            <div className='table-mobile-group'>
              <div className='blotout-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box'>
                <img src='/img/campaign/no.svg' />
              </div>
            </div>

            <div className='comparison-feature'>Complete Customer Journeys</div>

            <div className='table-mobile-group'>
              <div className='blotout-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box'>
                <img src='/img/campaign/no.svg' />
              </div>
            </div>

            <div className='comparison-feature'>Campaign Attribution</div>

            <div className='table-mobile-group'>
              <div className='blotout-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box partial-feature'>Partial</div>
            </div>

            <div className='comparison-feature'>Campaign Optimization</div>

            <div className='table-mobile-group'>
              <div className='blotout-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box'>
                <img src='/img/campaign/no.svg' />
              </div>
            </div>

            <div className='comparison-feature'>Free BI</div>

            <div className='table-mobile-group'>
              <div className='blotout-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box'>
                <img src='/img/campaign/check.svg' />
              </div>
            </div>

            <div className='comparison-feature'>Globally Compliant</div>

            <div className='table-mobile-group'>
              <div className='blotout-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box'>
                <img src='/img/campaign/no.svg' />
              </div>
            </div>

            <div className='comparison-feature last-feature'>
              Warehouse (Native)
            </div>

            <div className='table-mobile-group'>
              <div className='blotout-box last-box'>
                <img src='/img/campaign/check-filled.svg' />
              </div>
              <div className='ga-box last-box'>
                <img src='/img/campaign/no.svg' />
              </div>
            </div>
          </div>
        </div>

        <div id='quote' className='campaign-section'>
          We always knew that something was off when using cookie cutter
          analytics from advertisers like Google. No solutions works as well as
          Blotout for performance. Every test we run side beside, none come
          close.
          <div>Alex S., Shredcube Founder</div>
        </div>

        <div className='cta-box campaign-section'>
          <div className='cta-text'>Learn how to fix your analytics today</div>
          <form id='form-bottom' method='post'>
            <input
              placeholder='E-mail address here'
              type='email'
              name='email'
              required
              onFocus={() => capture('GA Campaign - Form Focus')}
            ></input>
            <button
              type='submit'
              onClick={() => codifyClick('Form Submit - GA Campaign')}
            >
              Learn More
            </button>
          </form>
          <div className='form-message'>
            Thank you. We’ll be in touch shortly.
          </div>
        </div>
      </div>
    </div>
  )
}
