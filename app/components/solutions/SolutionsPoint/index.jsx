const SolutionsPoint = (props) => {
  const { persona, title, children } = props

  return (
    <div className='solutions-point'>
      <div className='point-title'>{title}</div>

      {children}
    </div>
  )
}

export default SolutionsPoint
