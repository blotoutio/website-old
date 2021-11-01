import stylesUrl from '../styles/home.css'
import { codifyClick, metaInfo } from '../utils'
import HeroSection from '~/components/home/HeroSection'
import MainSection from '~/components/home/MainSection'
import PersonaSection from '~/components/home/PersonaSection'
import PersonaSectionPoint from '~/components/home/PersonaSectionPoint'
import SpecialSection from '~/components/home/SpecialSection'
import { FlowData32 } from '@carbon/icons-react'
import { DataStructured32 } from '@carbon/icons-react'
import { Partnership32 } from '@carbon/icons-react'
import { DataCenter32 } from '@carbon/icons-react'
import { DataBlob32 } from '@carbon/icons-react'
import { Gui32 } from '@carbon/icons-react'

export function meta() {
  return metaInfo('')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function Index() {
  return (
    <div id='home'>
      <HeroSection />

      <MainSection
        heading='Reignite your company’s growth stack'
        sub_heading='Trusted enterprises use Blotout’s consented single-tenant CDP and analytics stack to thrive in the post-cookie era.'
      ></MainSection>

      <PersonaSection
        persona='marketer'
        title='For growth marketing teams'
        heading='Maximize your marketing spend in the post-cookie world'
        sub_heading='Measure, attribute, optimize, and activate customer data with 100% customer coverage.'
      ></PersonaSection>

      <PersonaSection
        persona='product-manager'
        title='For product-led growth teams'
        heading='Build better customer journeys'
        sub_heading='The only stack that gives you the complete customer lifecycle by unifying event, online, and offline data sources.'
      >
        <div className='persona-section-point-container'>
          <PersonaSectionPoint
            icon={<FlowData32 className='orange-40' />}
            heading='Combine online and offline journeys'
          />
          <PersonaSectionPoint
            icon={<DataStructured32 className='orange-40' />}
            heading='Segment across online and offline customer profiles'
          />
          <PersonaSectionPoint
            icon={<Partnership32 className='orange-40' />}
            heading='Build trusted relationships with your customers'
          />
        </div>
      </PersonaSection>

      <PersonaSection
        persona='engineer'
        title='For engineering teams'
        heading='Solutions infrastructure-as-code that builds trust'
        sub_heading='Data engineering is expensive. Engineers aren’t lawyers. Solve for both.'
      >
        <div className='persona-section-point-container'>
          <PersonaSectionPoint
            icon={<DataCenter32 className='orange-50' />}
            heading='Infra-as-code with Terraform'
            sub_heading='Deploy and manage your infrastructure on 250 data centers globally.'
          />

          <PersonaSectionPoint
            icon={<DataBlob32 className='orange-50' />}
            heading='Serverless data architecture'
            sub_heading='Airflow, Airbyte, DBT, and Superset built-in.'
          />

          <PersonaSectionPoint
            icon={<Gui32 className='orange-50' />}
            heading='Zero code unified user graph'
            sub_heading='UI workflow to stitch clickstream and online/offline data (EL+T).'
          />
        </div>
      </PersonaSection>

      <SpecialSection />
    </div>
  )
}
