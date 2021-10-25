const SectionPoint = (props) => {
  const { heading, sub_heading } = props

  return (
    <div className='section-point'>
      <h3>{heading}</h3>
      <span>{sub_heading}</span>
    </div>
  )
}

export default SectionPoint
