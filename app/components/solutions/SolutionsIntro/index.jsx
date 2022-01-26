import { codifyClick } from '~/utils'
import Section from '~/components/core/Section'
import PrimaryCTA from '~/components/core/PrimaryCTA'
import { Partnership32, Rule32, DataSet32 } from '@carbon/icons-react'

const SolutionsIntro = (props) => {
  const { persona, title, heading, sub_heading } = props
  return (
    <Section className='solutions-intro'>
      <div className='group-one'>
        <div className='text'>
          <div className='title'>{title}</div>
          <div className='heading'>{heading}</div>
          <div className='sub-heading'>{sub_heading}</div>
        </div>

        <PrimaryCTA text='Get started' />
      </div>

      <div className='group-two'>
        <img src={'../img/solutions/' + persona + '/' + 'main.svg'} />
      </div>
    </Section>
  )
}

export default SolutionsIntro
