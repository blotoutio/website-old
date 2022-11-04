import Section from '~/components/core/Section'
import Special from '~/graphics/home/Special'
import SpecialVisual from '~/graphics/home/SpecialVisual'
import { ArrowUpRight24 } from '@carbon/icons-react'

const SpecialSection = (props) => {
  const { children } = props

  return (
    <Section id='special-section'>
      <div id='special-container'>
        <div className='top'>
          <div className='left'>
            <div className='graphic'>
              <Special />
            </div>
            <div className='text'>
              <h2 className='heading'>
                A trusted relationship is a compliant relationship
              </h2>
              <p className='sub-heading'>
                A trusted data relationship with your customers builds loyalty
                and maintains compliance with the GDPR and global privacy laws.
              </p>
            </div>
          </div>
          <div className='right'>
            <SpecialVisual />
          </div>
        </div>
        <div className='bottom'>{children}</div>
      </div>
    </Section>
  )
}

export default SpecialSection
