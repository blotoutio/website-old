import { useState } from 'react'
import { codifyClick } from '~/utils'
import PrimaryCTA from '~/components/core/PrimaryCTA'
import { ArrowLeft24, ArrowRight24, LogoSlack24 } from '@carbon/icons-react'

const SolutionsPointSlide = (props) => {
  const { data, persona, slug } = props

  const slideData = data.slides

  const [slideNumber, setSlideNumber] = useState(0)
  const [slideStatus, setSlideStatus] = useState('pending')

  const maxLimit = slideData.length - 1

  const goToNextSlide = (e) => {
    if (slideNumber !== maxLimit) {
      setSlideNumber(slideNumber + 1)
    }
  }

  const goToPreviousSlide = (e) => {
    if (slideNumber !== 0) {
      setSlideNumber(slideNumber - 1)
      if (slideNumber === 0) {
        e.target.addClassName('disabled')
      }
    }
  }

  const goToFirstSlide = () => {
    setSlideNumber(0)
    setSlideStatus('done')
  }

  return (
    <div className='solutions-point-slide'>
      <div className='sub-point'>
        <div className='text'>
          <div className='sub-point-title'>{slideData[0].text}</div>

          <div className='sub-point-description'>{slideData[0].sub_text}</div>
        </div>

        {slideNumber === 0 ? (
          slideStatus !== 'done' ? (
            <div className='intro-buttons buttons'>
              <PrimaryCTA text='Get started' className='button' />

              <div
                className='learn-button move-right button'
                onClick={goToNextSlide}
              >
                <span>Learn how it works</span>
                <ArrowRight24 />
              </div>
            </div>
          ) : slideStatus === 'done' ? (
            <div className='done-buttons buttons'>
              <div className='slack-button button'>
                <LogoSlack24 />
                <span>Join Slack Community</span>
              </div>

              <PrimaryCTA text='Get a Demo' className='button' />
            </div>
          ) : null
        ) : slideNumber <= maxLimit ? (
          <div className='slideshow-buttons buttons'>
            <div
              className='previous-button move-left button'
              onClick={goToPreviousSlide}
            >
              <ArrowLeft24 />
              <span>
                {slideNumber === 1
                  ? 'Overview'
                  : slideData[slideNumber - 1].text}
              </span>
            </div>

            <div
              className='next-button move-right button'
              onClick={() =>
                slideNumber === maxLimit ? goToFirstSlide() : goToNextSlide()
              }
            >
              <span>
                {slideNumber !== maxLimit
                  ? slideData[slideNumber + 1].text
                  : 'Get started'}
              </span>
              <ArrowRight24 />
            </div>
          </div>
        ) : null}

        {slideStatus === 'done' ? (
          <div
            className='minor-text'
            onClick={() => {
              goToNextSlide()
              setSlideStatus('pending')
            }}
          >
            <span>Learn how it works</span>
            <ArrowRight24 />
          </div>
        ) : null}
      </div>

      <div className='sub-point-image'>
        <img
          src={
            '../img/solutions/' +
            persona +
            '/' +
            slug +
            '/' +
            slideNumber +
            '.png'
          }
        />
      </div>
    </div>
  )
}

export default SolutionsPointSlide
