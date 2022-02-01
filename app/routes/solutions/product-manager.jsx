import stylesUrl from '../../styles/solutions.css'
import { codifyClick, metaInfo } from '../../utils'
import SolutionsIntro from '~/components/solutions/SolutionsIntro'
import SolutionsTestimonial from '~/components/solutions/SolutionsTestimonial'
import SolutionsPointsContainer from '~/components/solutions/SolutionsPointsContainer'
import SolutionsPointsHeader from '~/components/solutions/SolutionsPointsHeader'
import SolutionsPointsSubContainer from '~/components/solutions/SolutionsPointsSubContainer'
import SolutionsPoint from '~/components/solutions/SolutionsPoint'
import SolutionsPointSlide from '~/components/solutions/SolutionsPointSlide'
import { ConnectSource32, ConnectTarget32 } from '@carbon/icons-react'
import { useLocation } from 'react-router-dom'

export function meta() {
  return metaInfo('For Product-led Growth Teams')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function ForProductManagers() {
  let location = useLocation()
  let pathname = location.pathname
  let persona = pathname.substring(pathname.lastIndexOf('/') + 1)

  return (
    <>
      <SolutionsIntro
        persona={persona}
        title='For Product-led Growth Teams'
        heading='Build better customer journeys'
        sub_heading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
      sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
      />

      <SolutionsPointsContainer>
        <SolutionsPointsHeader
          icon_left={<ConnectSource32 />}
          text='A complete customer lifecycle'
          icon_right={<ConnectTarget32 />}
        />

        <SolutionsPointsSubContainer persona='product-manager'>
          <SolutionsPoint persona={persona} title='Segments'>
            <SolutionsPointSlide
              intro='true'
              text='Customer segments on the fly'
              sub_text='Enable the ability to measure all of your favourite customer segments without breaking a sweat.'
              intro_slide_text='Learn how it works'
              persona={persona}
              slug='segments'
              number='0'
            />

            <SolutionsPointSlide
              middle='true'
              text='Step 1: Create'
              sub_text='Use a simple UI toolkit to create an online or online segment on the fly.'
              previous_slide_text='Overview'
              next_slide_text='Step 2: Filter'
              persona={persona}
              slug='segments'
              number='1'
            />

            <SolutionsPointSlide
              middle='true'
              text='Step 2: Filter'
              sub_text='Measure your segment against any filter, including email and ad campaigns, to understand how they are trending.'
              previous_slide_text='Step 1: Create'
              next_slide_text='Step 3: Measure'
              persona={persona}
              slug='segments'
              number='2'
            />

            <SolutionsPointSlide
              middle='true'
              text='Step 3: Measure'
              sub_text='Use created filters to measure your segment against metrics, retention, conversions, or cost of acquisition.'
              previous_slide_text='Step 2: Filter'
              next_slide_text='Overview'
              persona={persona}
              slug='segments'
              number='3'
            />

            <SolutionsPointSlide
              done='true'
              text='Customer segments on the fly'
              sub_text='Enable the ability to measure all of your favourite customer segments without breaking a sweat.'
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
