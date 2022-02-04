import { useSubmit, useRouteData } from 'remix'
import { capture } from '@blotoutio/sdk-core'
import { mapID } from '@blotoutio/sdk-events'
import { codifyClick } from '~/utils'
import Section from '~/components/core/Section'
import { ArrowUpRight20 } from '@carbon/icons-react'

const HeroSection = () => {
  const data = useRouteData()

  const submit = useSubmit()

  const submission = (event) => {
    mapID({
      externalID: event.currentTarget.elements[0].value,
      provider: 'website',
    })

    submit(event.currentTarget, { replace: true })

    event.preventDefault()
  }

  return (
    <Section className='hero'>
      <h1>
        The <span>customer data platform</span> reimagined for the trusted
        enterprise
      </h1>
      <p>
        Activate customer journeys with complete visibility using
        infrastructure-as-code.
      </p>
      <form method='post' onSubmit={submission} className={data.status}>
        <input
          type='text'
          placeholder='Your work email'
          placeholder='E-mail address here'
          type='email'
          name='email'
          required
          onFocus={() => capture('Home - Hero Form Input Focus')}
        />
        <button
          type='submit'
          className='form-button'
          onClick={() => codifyClick('Home - Hero Form Submit')}
        >
          Sign up for a demo
          <ArrowUpRight20 className='form-button-icon' />
        </button>
        <div className='form-message'>{data.formMessage}</div>
      </form>
      <div className='customers'>
        <img src='img/core/customer/razer.svg' alt='Logo of Razer' />
        <img src='img/core/customer/smart.svg' alt='Logo of Smart Adserver' />
        <img src='img/core/customer/uphold.svg' alt='Logo of Uphold' />
        <img src='img/core/customer/globalid.svg' alt='Logo of GlobaliD' />
        <img src='img/core/customer/tapcars.svg' alt='Logo of TapCars' />
        <img src='img/core/customer/swarm.svg' alt='Logo of Swarm Markets' />
      </div>
    </Section>
  )
}

export default HeroSection
