import Section from '~/components/core/Section'
import PrimaryCTA from '~/components/core/PrimaryCTA'

const HeroSection = () => {
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
      <form>
        <input type='text' placeholder='Your work email' />
        <PrimaryCTA text='Sign up for a demo' />
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
