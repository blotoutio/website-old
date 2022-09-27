import Section from '~/components/core/Section'

const StatsWrapper = (props) => {
  const { children } = props

  return (
    <Section id='stats-wrapper'>
      <div id='main-container'>{children}</div>
    </Section>
  )
}

export default StatsWrapper
