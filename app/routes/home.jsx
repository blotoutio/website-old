{
  /* import { redirect } from 'remix' */
}
import stylesUrl from '~/styles/home.css'
import { metaInfo } from '~/utils'
import PrimaryCTA from '~/components/core/PrimaryCTA'
import HeroSection from '~/components/home/HeroSection'
import MainSection from '~/components/home/MainSection'
import ValuePropsWrapper from '~/components/home/ValuePropsWrapper'
import ValuePropsSection from '~/components/home/ValuePropsSection'
import StatsWrapper from '~/components/home/StatsWrapper'
import StatsSection from '~/components/home/StatsSection'
import TestimonialSection from '~/components/home/TestimonialSection'
import SpecialSection from '~/components/home/SpecialSection'

{
  /* export function loader({ request }) {
  let requestURL = new URL(request.url)
  let urlStatus = requestURL.searchParams.get('status')
  let status
  let formMessage

  if (urlStatus === 'thank-you') {
    status = urlStatus
    formMessage = 'Thank you. We’ll be in touch shortly.'
  } else if (urlStatus === 'error') {
    status = urlStatus
    formMessage = 'Something went wrong. Please try again.'
  } else {
    status = 'pending'
    formMessage = null
  }

  return { status, formMessage }
} */
}

{
  /* export let action = async ({ request }) => {
  let body = new URLSearchParams(await request.text())

  let email = body.get('email')

  let info = JSON.stringify({
    email: email,
    firstName: 'xxx',
    customFields: [
      {
        key: 'Lead Source',
        value: 'BO Demo',
      },
    ],
  })

  let headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('x-api-key', process.env.REPLY_TOKEN_MARKUS)

  let options = {
    method: 'post',
    body: info,
    headers: headers,
  }

  let responseText

  await fetch('https://api.reply.io/v1/people', options).then((response) => {
    if (response.status === 201 || response.status === 200) {
      responseText = 'thank-you'
    } else {
      responseText = 'error'
    }
  })

  if (responseText === 'thank-you') {
    return redirect(
      `https://calendly.com/blotout-experts/talk-to-us/?email=${email}`
    )
  } else {
    return redirect(`/?status=${responseText}`)
  }
} */
}

export function meta() {
  return metaInfo('')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function Index() {
  return (
    <div id='home'>
      {/* Hero */}

      <HeroSection />

      {/* Explainer */}

      <MainSection
        heading='Cookies are going extinct'
        sub_heading='Your returning customers are showing up as anonymous. Blotout solves this with one line of code.'
      >
        <PrimaryCTA text='Talk to us' codify_as='Home - CTA (Overview)' />
      </MainSection>

      {/* Value Props Section – EdgeTag & Cloud */}
      <ValuePropsWrapper
        heading='Always accurate. Never blocked.'
        sub_heading='Blotout’s lifetime ID recognizes your new and returning customers with 100% accuracy.'
      >
        <ValuePropsSection
          title='EdgeTag'
          heading='Boost marketing and ad performance'
          text='Privacy changes are hamstringing C-APIs. Blotout’s Edgetag rebuilds your signals around a lifetime ID so you can remarket every site visit in real-time.'
        >
          <PrimaryCTA
            text='Try for free'
            rel='next'
            link='https://edgetag.io/'
          ></PrimaryCTA>
        </ValuePropsSection>

        <ValuePropsSection
          title='Cloud'
          heading='Build your first-party customer database'
          text='Lifetime analytics and multi-touch attribution for every step of the customer journey. Seamlessly segment and activate your audiences in real time.'
        >
          <PrimaryCTA text='Schedule a demo'></PrimaryCTA>
        </ValuePropsSection>
      </ValuePropsWrapper>

      {/* Stats Section */}
      <StatsWrapper>
        <StatsSection figure='20%' text='higher ROAS on Meta'></StatsSection>

        <StatsSection
          figure='3x'
          text='more conversions on Klaviyo'
        ></StatsSection>

        <StatsSection figure='30%' text='higher ROAS on Google'></StatsSection>
      </StatsWrapper>

      {/* TrustOps */}
      <TestimonialSection
        text='EdgeTag has delivered immediate results for a number of our clients, resulting in increases in event match scores and - most importantly - real impact on CPCs, CTRs, and advertising ROI. The team is responsive and technically savvy and we’re excited to be a partner as the ecosystem inextricably moves towards a cookieless future.'
        by='Tim Keen, Co-Founder & CEO at Loop'
      ></TestimonialSection>

      {/* TrustOps */}
      <SpecialSection />
    </div>
  )
}
