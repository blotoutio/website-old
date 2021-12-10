import { codifyClick } from '~/utils'

const SolutionsPointsHeader = (props) => {
  const { icon, text } = props

  return (
    <div className='solutions-points-header'>
      <div className='icon'>{icon}</div>
      <div className='text'>{text}</div>
      <div className='icon'>{icon}</div>
    </div>
  )
}

export default SolutionsPointsHeader
