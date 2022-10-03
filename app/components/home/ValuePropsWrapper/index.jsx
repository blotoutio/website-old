import Section from '~/components/core/Section'

const ValuePropsWrapper = (props) => {
  const { heading, sub_heading, children } = props

  return (
    <Section id='value-props-wrapper'>
      <h2>{heading}</h2>
      <p>{sub_heading}</p>
      <div id='main-container'>{children}</div>
    </Section>
  )
}

export default ValuePropsWrapper
