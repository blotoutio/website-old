import { codifyClick } from '~/utils'

import { ArrowUpRight20 } from '@carbon/icons-react'

const PrimaryCTA = (props) => {
  const { text, link, codify_as } = props

  return (
    <a
      href={link || 'https://calendly.com/blotout-experts/talk-to-us'}
      target='_blank'
      rel='noreferrer'
      className='primary-cta'
      onClick={() => codifyClick(codify_as)}
    >
      {text}
      <ArrowUpRight20 className='primary-cta-icon' />
    </a>
  )
}

export default PrimaryCTA
