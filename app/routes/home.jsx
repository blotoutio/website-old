import { redirect } from 'remix'
import stylesUrl from '~/styles/home.css'
import { metaInfo } from '~/utils'
import PrimaryCTA from '~/components/core/PrimaryCTA'
import HeroSection from '~/components/home/HeroSection'
import MainSection from '~/components/home/MainSection'
import PersonaSection from '~/components/home/PersonaSection'
import PersonaSectionPoint from '~/components/home/PersonaSectionPoint'
import SpecialSection from '~/components/home/SpecialSection'
import { FlowData32 } from '@carbon/icons-react'
import { DataStructured32 } from '@carbon/icons-react'
import { Partnership32 } from '@carbon/icons-react'
import { DataCenter32 } from '@carbon/icons-react'
import { DataBlob32 } from '@carbon/icons-react'
import { Gui32 } from '@carbon/icons-react'

export function loader({ request }) {
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
        heading='Reclaim lost ROI of your current growth stack'
        sub_heading='Improved event matching to decrease your CPC by 30%'
      >
        <PrimaryCTA text='Talk to us' codify_as='Home - CTA (Overview)' />
      </MainSection>

      {/* Engineer */}

      <PersonaSection
        persona='engineer'
        title='For engineering teams'
        heading='The dedicated no-code solution that brings trust and powerhouse analytics'
        sub_heading='Data engineering is expensive and compliance is complicated. Solve for both'
        illustration={false}
        animation={true}
      >
        <div className='persona-section-point-container'>
          <PersonaSectionPoint
            icon={<DataCenter32 />}
            heading='Infra-as-code with Terraform'
            sub_heading='Deploy and manage your infrastructure on 250 data centers globally.'
          />

          <PersonaSectionPoint
            icon={<DataBlob32 />}
            heading='Serverless data architecture'
            sub_heading='Airflow, Airbyte, DBT, and Superset built-in.'
          />

          <PersonaSectionPoint
            icon={<Gui32 />}
            heading='Zero code unified user graph'
            sub_heading='UI workflow to stitch clickstream and online/offline data (EL+T).'
          />
        </div>

        <PrimaryCTA text='Talk to us' codify_as='Home - CTA (For Engineers)' />
      </PersonaSection>

      {/* Marketer */}

      <PersonaSection
        persona='marketer'
        title='For growth marketing teams'
        heading='Personalized engagement with a lifetime ID of your customer'
        sub_heading='Measure across the entire customer journey and respond based on your customer needs'
        illustration={false}
        animation={true}
      >
        <PrimaryCTA text='Talk to us' codify_as='Home - CTA (For Marketers)' />
      </PersonaSection>

      {/* Product Manager */}

      <PersonaSection
        persona='product-manager'
        title='For product-led growth teams'
        heading='Bring order to the chaos of activating sales and marketing channels with consent'
        sub_heading='The only stack bringing together online, offline and event data to deliver the comprehensive customer journey'
        illustration={true}
        animation={false}
      >
        <div className='persona-section-point-container'>
          <PersonaSectionPoint
            icon={<FlowData32 />}
            heading='Combine online and offline journeys'
          />

          <PersonaSectionPoint
            icon={<DataStructured32 />}
            heading='Segment across online and offline customer profiles'
          />

          <PersonaSectionPoint
            icon={<Partnership32 />}
            heading='Build trusted relationships with your customers'
          />
        </div>

        <PrimaryCTA
          text='Talk to us'
          codify_as='Home - CTA (For Product Managers)'
        />
      </PersonaSection>

      {/* TrustOps */}

      <SpecialSection />
    </div>
  )
}
