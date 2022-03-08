import stylesUrl from '../../styles/solutions.css'
import { codifyClick, metaInfo } from '../../utils'
import SolutionsIntro from '~/components/solutions/SolutionsIntro'
import SolutionsTestimonial from '~/components/solutions/SolutionsTestimonial'
import SolutionsPointsContainer from '~/components/solutions/SolutionsPointsContainer'
import SolutionsPointsHeader from '~/components/solutions/SolutionsPointsHeader'
import SolutionsPointsSubContainer from '~/components/solutions/SolutionsPointsSubContainer'
import SolutionsPoint from '~/components/solutions/SolutionsPoint'
import SolutionsPointSlide from '~/components/solutions/SolutionsPointSlide'
import { Cube32 } from '@carbon/icons-react'
import { useLocation } from 'react-router-dom'
import { solutionsData } from '~/data/solutionsData'

export function meta() {
  return metaInfo('For Engineering Teams')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function ForEngineers() {
  let location = useLocation()
  let pathname = location.pathname
  let persona = pathname.substring(pathname.lastIndexOf('/') + 1)

  return (
    <>
      <SolutionsIntro
        persona={persona}
        title='For Engineering Teams'
        heading='Build your cloud. Or bring your cloud.'
        sub_heading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
      sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
      />

      <SolutionsPointsContainer>
        <SolutionsPointsHeader
          text='Solutions infrastructure-as-code'
          icon_left={<Cube32 />}
          icon_right={<Cube32 />}
        />

        <SolutionsPointsSubContainer persona='engineer'>
          <SolutionsPoint title='Zero Code Data Pipelines'>
            <SolutionsPointSlide
              data={solutionsData}
              persona={persona}
              slug='el-plus-t'
              number='0'
            />
          </SolutionsPoint>

          {/*           <SolutionsPoint title='Self Provisioned (No DevOps)'>
            <SolutionsPointSlide
              intro='true'
              text='Own your sales and marketing infrastructure'
              sub_text='Get your zero code lakehouse or warehouse with lifetime customer data in less than 15 minutes.'
              intro_slide_text='Learn how it works'
              persona={persona}
              slug='self-provisioned'
              number='0'
            />
          </SolutionsPoint> */}

          {/*           <SolutionsPoint title='Lifetime ID & Lossless Analytics'>
            <SolutionsPointSlide
              intro='true'
              text='Lifetime ID (iOS 14.5 fix)'
              sub_text='Get lossless behavioral analytics with a lifetime cookie. Map your customer ID online & offline.'
              intro_slide_text='Learn how it works'
              persona={persona}
              slug='lifetime-id'
              number='0'
            />
          </SolutionsPoint> */}

          {/*           <SolutionsPoint title='Zero Code Data Pipelines'>
            <SolutionsPointSlide
              intro='true'
              text='EL + T and Unify workflow engine'
              sub_text='Incrementatlly unify your customer journeys and CRM in your warehouse.'
              intro_slide_text='Learn how it works'
              persona={persona}
              slug='el-plus-t'
              number='0'
            />

            <SolutionsPointSlide
              middle='true'
              text='Step 1: Source'
              sub_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
              previous_slide_text='Overview'
              next_slide_text='Step 2: Schema'
              persona={persona}
              slug='el-plus-t'
              number='1'
            />

            <SolutionsPointSlide
              middle='true'
              text='Step 2: Schema'
              sub_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
              previous_slide_text='Step 1: Source'
              next_slide_text='Step 3: Summary'
              persona={persona}
              slug='el-plus-t'
              number='2'
            />

            <SolutionsPointSlide
              middle='true'
              text='Step 3: Summary'
              sub_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
              previous_slide_text='Step 2: Schema'
              next_slide_text='Overview'
              persona={persona}
              slug='el-plus-t'
              number='3'
            />

            <SolutionsPointSlide
              done='true'
              text='Some text here'
              sub_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
              intro_again_text='Learn how it works'
              persona={persona}
              slug='segments'
              number='0'
            />
          </SolutionsPoint> */}

          {/*           <SolutionsPoint title='Cross-App/Platform Analytics'>
            <SolutionsPointSlide
              intro='true'
              text='Cross-platform behaviors'
              sub_text='Send data from your apps to your warehouse and map your cross-platform attribution in-house.'
              intro_slide_text='Learn how it works'
              persona={persona}
              slug='cross-platform'
              number='0'
            />
          </SolutionsPoint> */}

          {/*           <SolutionsPoint title='Online & Offline ID Unification'>
            <SolutionsPointSlide
              intro='true'
              text='Activate loyalty with consented data activation'
              sub_text='Lossless pixels that work with iOS 14.5 and activate customer segments with UI workflows.'
              intro_slide_text='Learn how it works'
              persona={persona}
              slug='online-offline'
              number='0'
            />
          </SolutionsPoint> */}

          {/*           <SolutionsPoint title='Cross-Channel Attribution'>
            <SolutionsPointSlide
              intro='true'
              text='Measure & activate growth with built-in attribution'
              sub_text='Measurement expertise for B2C and B2B organizations built-in as turnkey workflow-based analytics.'
              intro_slide_text='Learn how it works'
              persona={persona}
              slug='cross-channel'
              number='0'
            />
          </SolutionsPoint> */}
        </SolutionsPointsSubContainer>
      </SolutionsPointsContainer>

      <SolutionsTestimonial />
    </>
  )
}
