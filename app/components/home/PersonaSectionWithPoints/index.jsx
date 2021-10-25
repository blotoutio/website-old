import SectionPoint from './SectionPoint'
import { codifyClick } from '~/utils'

const PersonaSectionWithPoints = (props) => {
  const {
    persona,
    title,
    heading,
    sub_heading,
    image_src,
    image_alt,
    codify_as,
    children,
  } = props

  return (
    <div id={persona} className='home-section persona-section-with-points'>
      <div className='home-section-content content'>
        <div className='introductory-text-group'>
          <div className='title'>{title}</div>
          <h2 className='heading'>{heading}</h2>
          <p className='sub-heading'>{sub_heading}</p>
        </div>
        <div className='illustration'>
          <img src={image_src} alt={image_alt} />
        </div>
        <div className='section-point-group'>{children}</div>
        <a
          href='https://calendly.com/blotout-experts'
          target='_blank'
          rel='noreferrer'
          className='cta'
          onClick={() => codifyClick({ codify_as })}
        >
          Start Free Trial
        </a>
      </div>
    </div>
  )
}

export default PersonaSectionWithPoints
