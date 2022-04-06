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
        Modern <span>data infrastructure</span> for any Commerce in a{' '}
        <span>cookieless era</span>
      </h1>
      <p>Attribution via Lifetime ID for Every Activation Channel</p>
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
        <img src='img/core/customer/uphold.svg' alt='Logo of Uphold' />
        <img
          src='img/core/customer/red_door.svg'
          alt='Logo of Red Door'
          width={104}
        />
        <img src='img/core/customer/pura_vida.svg' alt='Logo of Pura Vida' />
        {/*<img src='img/core/customer/eco_modern.svg' alt='Logo of Eco Modern' />*/}
        <img
          src='img/core/customer/pixated.svg'
          alt='Logo of Pixated'
          width={120}
        />
        <img
          src='img/core/customer/loop_club.svg'
          alt='Logo of Loop Club'
          width={50}
        />
        {/*<img src='img/core/customer/top_tier.svg' alt='Logo of Top Tier' />*/}
        <img
          src='img/core/customer/yellow_line.svg'
          alt='Logo of Yellow Line'
          width={40}
        />
      </div>
    </Section>
  )
}

export default HeroSection
