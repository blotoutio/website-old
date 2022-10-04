import Section from '~/components/core/Section'

const MainSection = (props) => {
  const { heading, sub_heading } = props

  return (
    <Section id='main-section'>
      <div id='main-container'>
        <h2>{heading}</h2>
        <p>{sub_heading}</p>
      </div>
    </Section>
  )
}

export default MainSection
