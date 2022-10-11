import { codifyClick } from '~/utils'

import { ArrowUpRight20 } from '@carbon/icons-react'

const PrimaryCTA = (props) => {
  const { text, link, rel, class_name, codify_as, arrow } = props

  return (
    <a
      href={link || 'https://calendly.com/blotout-experts/talk-to-us'}
      target='_blank'
      rel={rel || 'noreferrer'}
      className={`primary-cta ${class_name}`}
      onClick={() => codifyClick(codify_as)}
    >
      {text}
      {arrow === 'yes' ? <ArrowUpRight20 className='primary-cta-icon' /> : null}
    </a>
  )
}

export default PrimaryCTA
