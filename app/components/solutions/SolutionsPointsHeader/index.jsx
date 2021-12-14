import { codifyClick } from '~/utils'

const SolutionsPointsHeader = (props) => {
  const { icon_left, text, icon_right } = props

  return (
    <div className='solutions-points-header'>
      <div className='icon'>{icon_left}</div>
      <div className='text'>{text}</div>
      <div className='icon'>{icon_right}</div>
    </div>
  )
}

export default SolutionsPointsHeader
