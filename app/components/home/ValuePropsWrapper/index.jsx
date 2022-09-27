import Section from '~/components/core/Section'

const ValuePropsWrapper = (props) => {
  const { heading, sub_heading, children } = props

  return (
    <Section id='value-props-wrapper'>
      <div id='main-container'>{children}</div>
    </Section>
  )
}

export default ValuePropsWrapper
