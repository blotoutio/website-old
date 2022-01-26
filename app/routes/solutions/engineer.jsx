import stylesUrl from '../../styles/solutions.css'
import { codifyClick, metaInfo } from '../../utils'
import SolutionsIntro from '~/components/solutions/SolutionsIntro'
import SolutionsTestimonial from '~/components/solutions/SolutionsTestimonial'
import SolutionsPointsContainer from '~/components/solutions/SolutionsPointsContainer'
import SolutionsPointsHeader from '~/components/solutions/SolutionsPointsHeader'
import SolutionsPointsSubContainer from '~/components/solutions/SolutionsPointsSubContainer'
import SolutionsPoint from '~/components/solutions/SolutionsPoint'
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
        title='For Engineering Teams'
        heading='Build your cloud. Or bring your cloud.'
        sub_heading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
      sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
      />

      <SolutionsTestimonial />

      <SolutionsPointsContainer persona={persona}>
        <SolutionsPointsHeader
          text='Solutions infrastructure-as-code'
          icon_left={<Cube32 />}
          icon_right={<Cube32 />}
        />

        <SolutionsPointsSubContainer persona={persona}>
          <SolutionsPoint
            persona={persona}
            title='EL + T'
            topic='Some text here'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
            previous_topic='Previous slide title'
            next_topic='Next slide title'
            slug='el-plus-t'
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
