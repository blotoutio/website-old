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
        <PrimaryCTA
          text='Learn more'
          link='https://blotout.io/no-signal-loss'
        ></PrimaryCTA>
      </div>
    </div>
  )
}

export default ValuePropsSection
