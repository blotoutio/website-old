import { codifyClick } from '~/utils'
import Section from '~/components/core/Section'

const SolutionsPointsSubContainer = (props) => {
  const { children } = props

  return (
    <Section className='solutions-points-sub-container'>{children}</Section>
  )
}

export default SolutionsPointsSubContainer
