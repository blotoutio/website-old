{
  /* import { useSubmit, useRouteData } from 'remix' */
}
import { capture } from '@blotoutio/sdk-core'
import { mapID } from '@blotoutio/sdk-events'
import { codifyClick } from '~/utils'
import Section from '~/components/core/Section'
import { ArrowUpRight20 } from '@carbon/icons-react'

const HeroSection = () => {
  {
    /* const data = useRouteData()

  const submit = useSubmit()

  const submission = (event) => {
    mapID({
      externalID: event.currentTarget.elements[0].value,
      provider: 'website',
    })

    submit(event.currentTarget, { replace: true })

    event.preventDefault()
  } */
  }

  return (
    <Section className='hero'>
      <h1>
        Headless marketing for the <span>cookieless</span> era
      </h1>
      <p>
        Blotout increases your marketing ROI by restoring customer identity.
      </p>

      {/* <form method='post' onSubmit={submission} className={data.status}>
        <input
          type='text'
          placeholder='Your work email'
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
      </form> */}

      <form id='new-form'>
        <input
          type='text'
          placeholder='Your work email'
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
          Try for free
          <ArrowUpRight20 className='form-button-icon' />
        </button>
        <div className='form-extra-info'>
          Free for the first 1000 API calls.
        </div>
      </form>

      <div id='customers'>
        <div id='customers-text'>Trusted by leading brands and agencies</div>
        <div id='customers-list'>
          <img src='img/core/customer/razer.svg' alt='Logo of Razer' />
          <img src='img/core/customer/uphold.svg' alt='Logo of Uphold' />
          <img
            src='img/core/customer/honda.svg'
            alt='Logo of Honda'
            width={100}
          />
          <img
            src='img/core/customer/globalid.svg'
            alt='Logo of GlobaliD'
            width={100}
          />
          <img
            src='img/core/customer/ethos_life.svg'
            alt='Logo of Ethos Life'
            width={100}
          />
          <img
            src='img/core/customer/consumer_cellular.svg'
            alt='Logo of Consumer Cellular'
            width={125}
          />
          <img
            src='img/core/customer/fubo_tv.svg'
            alt='Logo of Fubo TV'
            width={75}
          />
          <img
            src='img/core/customer/pura_vida.svg'
            alt='Logo of Pura Vida'
            width={100}
          />
          <img
            src='img/core/customer/loop_club.svg'
            alt='Logo of Loop Club'
            width={40}
          />
        </div>
      </div>
    </Section>
  )
}

export default HeroSection
