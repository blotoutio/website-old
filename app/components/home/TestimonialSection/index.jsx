import Section from '~/components/core/Section'

const TestimonialSection = (props) => {
  const { text, name, role } = props

  return (
    <Section id='testimonial-section'>
      <div id='text'>{text}</div>
      <div id='by'>
        <img src='img/home/testimonial-person.png' alt='' />
        <div>
          {name}
          <br />
          <span>{role}</span>
        </div>
      </div>
    </Section>
  )
}

export default TestimonialSection
