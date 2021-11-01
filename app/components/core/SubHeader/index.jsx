const SubHeader = (props) => {
  const { heading, sub_heading, title, date } = props

  return (
    <section id='sub-header'>
      <div className='main-container'>
        <h1>{heading}</h1>
        {sub_heading ? <span>{sub_heading || null}</span> : null}
      </div>
    </section>
  )
}

export default SubHeader
