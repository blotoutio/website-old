import { codifyClick } from '~/utils'
import Section from '~/components/core/Section'
import PrimaryCTA from '~/components/core/PrimaryCTA'
import { Partnership32, Rule32, DataSet32 } from '@carbon/icons-react'

const SolutionsIntro = () => {
  return (
    <Section className='solutions-intro'>
      <div className='group-one'>
        <div className='text'>
          <div className='title'>For Engineering Teams</div>
          <div className='heading'>Build your cloud. Or bring your cloud.</div>
          <div className='sub-heading'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
            sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.{' '}
          </div>
        </div>

        <PrimaryCTA text='Get Started' />
      </div>

      <div className='group-two'>
        <div className='solutions-intro-point'>
          <Partnership32 />
          <div>Build Lasting Trust</div>
        </div>
        <div className='solutions-intro-point'>
          <Rule32 />
          <div>Stay Compliant</div>
        </div>
        <div className='solutions-intro-point'>
          <DataSet32 />
          <div>100% Data Accuracy</div>
        </div>
      </div>
    </Section>
  )
}

export default SolutionsIntro
