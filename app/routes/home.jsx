import stylesUrl from '~/styles/home.css'
import { metaInfo } from '~/utils'
import { codifyClick } from '~/utils'
import PrimaryCTA from '~/components/core/PrimaryCTA'
import HeroSection from '~/components/home/HeroSection'
import MainSection from '~/components/home/MainSection'
import ValuePropsWrapper from '~/components/home/ValuePropsWrapper'
import ValuePropsSection from '~/components/home/ValuePropsSection'
import StatsWrapper from '~/components/home/StatsWrapper'
import StatsSection from '~/components/home/StatsSection'
import TestimonialSection from '~/components/home/TestimonialSection'
import SpecialSection from '~/components/home/SpecialSection'
import { tag } from '@blotoutio/edgetag-sdk-js'

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
  const handleCTAClick = () => {
    codifyClick('Home - Hero Calendly CTA Click')
    tag('Lead', { currency: 'USD', value: 10 })
  }

  return (
    <div id='home'>
      {/* Hero */}

      <HeroSection
        text={
          <>
            Supercharge your marketing signals
            <br />
            &nbsp;in the <span>post-cookie</span> world
          </>
        }
      >
        <div id='cta-section'>
          <PrimaryCTA
            text='Try for free'
            rel='next'
            link='https://app.edgetag.io/'
            codify_as='Home - Hero EdgeTag CTA Click'
            class_name='new-cta'
          ></PrimaryCTA>

          <a
            href='https://calendly.com/blotout-experts/talk-to-us'
            target='_blank'
            rel='noreferrer'
            className='hero-cta'
            onClick={handleCTAClick}
          >
            <span>Schedule a demo</span>
          </a>
        </div>
      </HeroSection>

      {/* Explainer */}

      <MainSection
        heading='Cookies are going extinct'
        sub_heading='Your returning customers are showing up as anonymous. Blotout solves this with one line of code.'
      ></MainSection>

      {/* Value Props Section – EdgeTag & Cloud */}
      <ValuePropsWrapper
        heading='Always accurate. Never blocked.'
        sub_heading='Blotout’s lifetime ID recognizes your new and returning customers with 100% accuracy.'
      >
        <ValuePropsSection
          title='EdgeTag'
          heading='Boost marketing and ad performance'
          text='Privacy changes are weakening C-API signals. Blotout rebuilds your signals around a lifetime ID so you can remarket every site visit in real-time.'
          graphic='edgetag'
        >
          <PrimaryCTA
            text='Try for free'
            rel='next'
            link='https://app.edgetag.io/'
          ></PrimaryCTA>
        </ValuePropsSection>

        <ValuePropsSection
          title='EdgeTag + Cloud'
          heading='Build your first-party customer database'
          text='Lifetime analytics and multi-touch attribution for every step of the customer journey. Seamlessly segment across online and offline customer profiles.'
          graphic='cloud'
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
        name='Tim Keen'
        role='Co-Founder & CEO at Loop'
      ></TestimonialSection>

      {/* TrustOps */}
      <SpecialSection>
        <a
          href='https://calendly.com/blotout-experts/talk-to-us'
          target='_blank'
          rel='noreferrer'
          className='special-cta'
          onClick={() => codifyClick('TrustOps - CTA')}
        >
          Learn how
        </a>
      </SpecialSection>
    </div>
  )
}
