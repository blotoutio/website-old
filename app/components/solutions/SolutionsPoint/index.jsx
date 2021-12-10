import { codifyClick } from '~/utils'
import { ArrowLeft24, ArrowRight24 } from '@carbon/icons-react'

const SolutionsPoint = (props) => {
  const { title } = props

  return (
    <div className='solutions-point'>
      <div className='point-title'>{title}</div>

      <div className='sub-point'>
        <div className='text'>
          <div className='sub-point-title'>Point title here</div>
          <div className='sub-point-description'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.{' '}
          </div>
        </div>
        <div className='buttons'>
          <div className='previous-button button'>
            <ArrowLeft24 />
            <span>Previous slide title</span>
          </div>
          <div className='next-button button'>
            <span>Next slide title</span>
            <ArrowRight24 />
          </div>
        </div>
      </div>

      <div className='sub-point-image'></div>
    </div>
  )
}

export default SolutionsPoint
