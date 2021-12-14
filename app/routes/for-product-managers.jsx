import stylesUrl from '../styles/solutions.css'
import { codifyClick, metaInfo } from '../utils'
import SolutionsIntro from '~/components/solutions/SolutionsIntro'
import SolutionsGraphic from '~/components/solutions/SolutionsGraphic'
import SolutionsTestimonial from '~/components/solutions/SolutionsTestimonial'
import SolutionsPointsContainer from '~/components/solutions/SolutionsPointsContainer'
import SolutionsPointsHeader from '~/components/solutions/SolutionsPointsHeader'
import SolutionsPointsSubContainer from '~/components/solutions/SolutionsPointsSubContainer'
import SolutionsPoint from '~/components/solutions/SolutionsPoint'
import { ConnectSource32, ConnectTarget32 } from '@carbon/icons-react'

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
  return (
    <>
      <SolutionsIntro
        title='For Product-led Growth Teams'
        heading='Create better customer journeys'
        sub_heading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
      sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
      />

      <SolutionsGraphic />

      <SolutionsTestimonial />

      <SolutionsPointsContainer>
        <SolutionsPointsHeader
          icon_left={<ConnectSource32 />}
          text='A complete customer lifecycle'
          icon_right={<ConnectTarget32 />}
        />

        <SolutionsPointsSubContainer>
          <SolutionsPoint title='Main point 1' />
          <SolutionsPoint title='Main point 2' />
          <SolutionsPoint title='Main point 3' />
          <SolutionsPoint title='Main point 4' />
          <SolutionsPoint title='Main point 5' />
          <SolutionsPoint title='Main point 6' />
        </SolutionsPointsSubContainer>
      </SolutionsPointsContainer>

      {/*       <div>
        <div>Sub-nav-link-1</div>
        <div>Sub-nav-link-2</div>
        <div>Sub-nav-link-3</div>
        <div>Sub-nav-link-4</div>
        <div>Sub-nav-link-5</div>
        <div>Sub-nav-link-6</div>
      </div> */}
    </>
  )
}
