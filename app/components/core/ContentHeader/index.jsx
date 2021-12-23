const ContentHeader = (props) => {
  const { icon, text, className } = props

  return (
    <section id='content-header' className={className}>
      <div className='main-container'>
        <div className='header-group'>
          {icon}
          <h1>{text}</h1>
        </div>
      </div>
    </section>
  )
}

export default ContentHeader
