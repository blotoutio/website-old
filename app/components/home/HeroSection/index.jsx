import { codifyClick } from '~/utils'
import Section from '~/components/core/Section'

const HeroSection = (props) => {
  const { text, children } = props

  return (
    <Section className='hero'>
      <h1>{text}</h1>
      <p>
        Increase sales, recover lost carts, and reduce CAC
        <br />
        &nbsp;by restoring customer identity.
      </p>

      {children}

      <div id='customers'>
        <div id='customers-text'>Trusted by leading brands and agencies</div>
        <div id='customers-list-outer-container'>
          <div id='customers-list-inner-container'>
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

            {/* Get rid of this copy by using a map function */}

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
      </div>
    </Section>
  )
}

export default HeroSection
