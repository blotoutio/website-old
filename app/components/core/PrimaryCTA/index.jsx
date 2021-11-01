import { ArrowUpRight20 } from '@carbon/icons-react'

const PrimaryCTA = (props) => {
  const { text } = props

  return (
    <a
      href='https://calendly.com/blotout-experts/30-minute-zoom-session'
      target='_blank'
      rel='noreferrer'
      className='primary-cta'
    >
      {text}
      <ArrowUpRight20 className='primary-cta-icon' />
    </a>
  )
}

export default PrimaryCTA
