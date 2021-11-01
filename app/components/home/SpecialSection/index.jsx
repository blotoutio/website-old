import Section from '~/components/core/Section'
import Special from '~/graphics/home/Special'
import SpecialVisual from '~/graphics/home/SpecialVisual'
import { ArrowRight24 } from '@carbon/icons-react'

const SpecialSection = () => {
  return (
    <Section id='special-section'>
      <div id='special-container'>
        <div className='top'>
          <div className='left'>
            <div className='graphic'>
              <Special />
            </div>
            <div className='text'>
              <div className='heading'>
                A trusted relationship is a compliant relationship
              </div>
              <div className='sub-heading'>
                Establish a trusted data relationship with your customers to
                build loyalty and maintain compliance with the GDPR and global
                privacy laws.
              </div>
            </div>
          </div>
          <div className='right'>
            <SpecialVisual />
          </div>
        </div>
        <div className='bottom'>
          <a href='.' className='special-cta'>
            On a privacy-centric future
            <ArrowRight24 className='special-cta-icon' />
          </a>
        </div>
      </div>
    </Section>
  )
}

export default SpecialSection
