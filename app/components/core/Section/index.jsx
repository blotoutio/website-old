const Section = (props) => {
  const { id, className, children } = props

  return (
    <section id={id} className={`section ${className}`}>
      <div className='section-content'>{children}</div>
    </section>
  )
}

export default Section
