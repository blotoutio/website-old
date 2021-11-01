import { useSubmit, useRouteData } from 'remix'
import { capture } from '@blotoutio/sdk-core'
import { codifyClick } from '~/utils'
import Section from '~/components/core/Section'
import { ArrowRight20 } from '@carbon/icons-react'

const HeroSection = () => {
  const data = useRouteData()

  const submit = useSubmit()

  const submission = (event) => {
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
          <ArrowRight20 className='form-button-icon' />
        </button>
        <div className='form-message'>{data.formMessage}</div>
      </form>
      <div className='customers'>
        <img src='img/core/customer/razer.svg' />
        <img src='img/core/customer/smart.svg' />
        <img src='img/core/customer/uphold.svg' />
        <img src='img/core/customer/globalid.svg' />
        <img src='img/core/customer/tapcars.svg' />
        <img src='img/core/customer/swarm.svg' />
      </div>
    </Section>
  )
}

export default HeroSection
