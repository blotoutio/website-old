const StatsSection = (props) => {
  const { figure, text } = props

  return (
    <div className='stats-section'>
      <span className='stats-section-figure'>{figure}</span>
      <span className='stats-section-text'>{text}</span>
    </div>
  )
}

export default StatsSection
