const ValuePropsSection = (props) => {
  const { title, heading, text, children } = props

  return (
    <div className='value-props-section'>
      <span className='value-props-section-title'>{title}</span>
      <div className='value-props-section-heading'>{heading}</div>
      <div className='value-props-section-text'>{text}</div>
      {children}
    </div>
  )
}

export default ValuePropsSection
