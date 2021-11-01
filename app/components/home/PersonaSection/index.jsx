import Section from '~/components/core/Section'
import PrimaryCTA from '~/components/core/PrimaryCTA'

const PersonaSection = (props) => {
  const { persona, title, heading, sub_heading, children } = props

  return (
    <Section id={persona} className='persona-section'>
      <div className='styled-container'>
        <div className='container'>
          <span>{title}</span>
          <h2>{heading}</h2>
          <p>{sub_heading}</p>
          <img
            className='illustration'
            src={'img/home/' + persona + '.svg'}
            alt=''
          />
          {children}
          <PrimaryCTA text='Talk to us' />
        </div>
      </div>
    </Section>
  )
}

export default PersonaSection
