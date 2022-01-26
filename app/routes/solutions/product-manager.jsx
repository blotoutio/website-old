import stylesUrl from '../../styles/solutions.css'
import { codifyClick, metaInfo } from '../../utils'
import SolutionsIntro from '~/components/solutions/SolutionsIntro'
import SolutionsTestimonial from '~/components/solutions/SolutionsTestimonial'
import SolutionsPointsContainer from '~/components/solutions/SolutionsPointsContainer'
import SolutionsPointsHeader from '~/components/solutions/SolutionsPointsHeader'
import SolutionsPointsSubContainer from '~/components/solutions/SolutionsPointsSubContainer'
import SolutionsPoint from '~/components/solutions/SolutionsPoint'
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
        title='For Product-led Growth Teams'
        heading='Create better customer journeys'
        sub_heading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
      sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
      />

      <SolutionsTestimonial />

      <SolutionsPointsContainer persona={persona}>
        <SolutionsPointsHeader
          icon_left={<ConnectSource32 />}
          text='A complete customer lifecycle'
          icon_right={<ConnectTarget32 />}
        />

        <SolutionsPointsSubContainer persona={persona}>
          <SolutionsPoint
            persona={persona}
            title='Segments'
            topic='Customer segments on the fly'
            description='Enable the ability to measure all of your favourite customer segments without breaking a sweat.'
            previous_topic='Previous slide title'
            next_topic='Next slide title'
            slug='segments'
            number='0'
            temp='true'
          />

          <SolutionsPoint title='Some Feature' />

          <SolutionsPoint title='Some Feature' />

          <SolutionsPoint title='Some Feature' />

          <SolutionsPoint title='Some Feature' />

          <SolutionsPoint title='Some Feature' />
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
