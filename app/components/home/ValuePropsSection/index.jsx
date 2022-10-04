import PrimaryCTA from '~/components/core/PrimaryCTA'

const ValuePropsSection = (props) => {
  const { title, heading, text, children, graphic } = props

  return (
    <div className='value-props-section-container'>
      <div className='value-props-section value-props-section-main'>
        <span className='value-props-section-title'>{title}</span>
        <div className='value-props-section-heading'>{heading}</div>
        <div className='value-props-section-text'>{text}</div>
        {children}
      </div>
      <div className='value-props-section value-props-section-graphic'>
        <img src={`img/home/graphic-${graphic}.png`} alt='' />
        {graphic === 'edgetag' ? (
          <PrimaryCTA
            text='Try for free'
            rel='next'
            link='https://app.edgetag.io/'
          ></PrimaryCTA>
        ) : (
          <PrimaryCTA text='Schedule a demo'></PrimaryCTA>
        )}
      </div>
    </div>
  )
}

export default ValuePropsSection
