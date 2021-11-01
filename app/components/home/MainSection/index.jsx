import Section from '~/components/core/Section'

const MainSection = (props) => {
  const { heading, sub_heading, children } = props

  return (
    <Section id='main-section'>
      <div id='main-container'>
        <h2>{heading}</h2>
        <p>{sub_heading}</p>
        <img src='img/home/explainer.svg' alt='' />
        {children}
      </div>
    </Section>
  )
}

export default MainSection
