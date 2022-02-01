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
          <SolutionsPoint persona={persona} title='EL + T'>
            <SolutionsPointSlide
              intro='true'
              text='Some text here'
              sub_text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
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
          </SolutionsPoint>

          <SolutionsPoint title='Some Feature' />

          <SolutionsPoint title='Another Feature' />

          <SolutionsPoint title='A Crucial Feature' />

          <SolutionsPoint title='An Important Feature' />

          <SolutionsPoint title='Yet Another Feature' />
        </SolutionsPointsSubContainer>
      </SolutionsPointsContainer>

      <SolutionsTestimonial />
    </>
  )
}
