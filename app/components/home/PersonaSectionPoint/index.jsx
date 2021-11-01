const PersonaSectionPoint = (props) => {
  const { icon, heading, sub_heading } = props

  return (
    <div className='persona-section-point'>
      {icon}
      <h3>{heading}</h3>
      {sub_heading ? <p>{sub_heading || null}</p> : null}
    </div>
  )
}

export default PersonaSectionPoint
