import { codifyClick } from '~/utils'

import Section from '~/components/core/Section'

import Special from '~/graphics/home/Special'
import SpecialVisual from '~/graphics/home/SpecialVisual'
import { ArrowUpRight24 } from '@carbon/icons-react'

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
              <h2 className='heading'>
                A trusted relationship is a compliant relationship
              </h2>
              <p className='sub-heading'>
                Establish a trusted data relationship with your customers to
                build loyalty and maintain compliance with the GDPR and global
                privacy laws.
              </p>
            </div>
          </div>
          <div className='right'>
            <SpecialVisual />
          </div>
        </div>
        <div className='bottom'>
          <a
            href='https://calendly.com/blotout-experts/talk-to-us'
            target='_blank'
            rel='noreferrer'
            className='special-cta'
            onClick={() => codifyClick('TrustOps - CTA')}
          >
            Learn how
            <ArrowUpRight24 className='special-cta-icon' />
          </a>
        </div>
      </div>
    </Section>
  )
}

export default SpecialSection
