import Section from '~/components/core/Section'

const TestimonialSection = (props) => {
  const { text, by } = props

  return (
    <Section id='testimonial-section'>
      <div id='text'>{text}</div>
      <div id='by'>{by}</div>
    </Section>
  )
}

export default TestimonialSection
