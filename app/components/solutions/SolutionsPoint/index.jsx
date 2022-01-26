import { codifyClick } from '~/utils'
import PrimaryCTA from '~/components/core/PrimaryCTA'
import { ArrowLeft24, ArrowRight24 } from '@carbon/icons-react'

const SolutionsPoint = (props) => {
  const {
    persona,
    title,
    topic,
    description,
    previous_topic,
    next_topic,
    slug,
    number,
    temp,
  } = props

  return (
    <div className='solutions-point'>
      <div className='point-title'>{title}</div>

      <div className='sub-point'>
        <div className='text'>
          <div className='sub-point-title'>
            {topic ? topic : 'Some text here'}
          </div>
          <div className='sub-point-description'>
            {description
              ? description
              : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'}
          </div>
        </div>

        <div className='intro-buttons buttons'>
          <PrimaryCTA text='Get started' className='button' />
          <div className='learn-button move-right button'>
            <span>Learn how it works</span>
            <ArrowRight24 />
          </div>
        </div>

        <div className='slideshow-buttons buttons'>
          <div className='previous-button move-left button'>
            <ArrowLeft24 />
            <span>
              {previous_topic ? previous_topic : 'Previous slide title'}
            </span>
          </div>
          <div className='next-button move-right button'>
            <span>{next_topic ? next_topic : 'Next slide title'}</span>
            <ArrowRight24 />
          </div>
        </div>
      </div>

      <div className='sub-point-image'>
        {temp ? (
          <img
            src={
              '../img/solutions/' + persona + '/' + slug + '/' + number + '.png'
            }
          />
        ) : null}
      </div>
    </div>
  )
}

export default SolutionsPoint
