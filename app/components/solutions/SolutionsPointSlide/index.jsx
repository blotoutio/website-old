import { codifyClick } from '~/utils'
import PrimaryCTA from '~/components/core/PrimaryCTA'
import { ArrowLeft24, ArrowRight24, LogoSlack24 } from '@carbon/icons-react'

const SolutionsPointSlide = (props) => {
  const {
    intro,
    middle,
    done,
    text,
    sub_text,
    intro_slide_text,
    previous_slide_text,
    next_slide_text,
    intro_again_text,
    persona,
    slug,
    number,
  } = props

  return (
    <div
      className={
        'solutions-point-slide ' +
        (intro ? 'intro' : middle ? 'middle' : done ? 'done' : null)
      }
    >
      <div className='sub-point'>
        <div className='text'>
          <div className='sub-point-title'>{text}</div>
          <div className='sub-point-description'>{sub_text}</div>
        </div>

        {intro ? (
          <div className='intro-buttons buttons'>
            <PrimaryCTA text='Get started' className='button' />
            <div className='learn-button move-right button'>
              <span>{intro_slide_text}</span>
              <ArrowRight24 />
            </div>
          </div>
        ) : middle ? (
          <div className='slideshow-buttons buttons'>
            <div className='previous-button move-left button'>
              <ArrowLeft24 />
              <span>{previous_slide_text}</span>
            </div>
            <div className='next-button move-right button'>
              <span>{next_slide_text}</span>
              <ArrowRight24 />
            </div>
          </div>
        ) : done ? (
          <div className='done-buttons buttons'>
            <div className='slack-button button'>
              <LogoSlack24 />
              <span>Join Slack Community</span>
            </div>
            <PrimaryCTA text='Get a Demo' className='button' />
          </div>
        ) : null}
      </div>

      <div className='sub-point-image'>
        <img
          src={
            '../img/solutions/' + persona + '/' + slug + '/' + number + '.png'
          }
        />
      </div>
    </div>
  )
}

export default SolutionsPointSlide
