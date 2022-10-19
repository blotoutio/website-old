import { ArrowRight20 } from '@carbon/icons-react'
import { codifyClick } from '~/utils'

const LinkBanner = () => {
  return (
    <div className='banner'>
      <span>New Case Study:</span> Blotout doubles Pura Vida’s email marketing
      sales by augmenting Klaviyo audiences.
      <a
        href='doc/pura-vida-klaviyo-case-study-by-blotout.pdf'
        download='doc/pura-vida-klaviyo-case-study-by-blotout.pdf'
        onClick={() => codifyClick('Banner - Case Study (Pura Vida / Klaviyo)')}
      >
        Read here <ArrowRight20 />
      </a>
    </div>
  )
}

export default LinkBanner
