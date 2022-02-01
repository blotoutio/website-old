import stylesUrl from '../../styles/solutions.css'
import { codifyClick, metaInfo } from '../../utils'
import SolutionsIntro from '~/components/solutions/SolutionsIntro'
import SolutionsTestimonial from '~/components/solutions/SolutionsTestimonial'
import SolutionsPointsContainer from '~/components/solutions/SolutionsPointsContainer'
import SolutionsPointsHeader from '~/components/solutions/SolutionsPointsHeader'
import SolutionsPointsSubContainer from '~/components/solutions/SolutionsPointsSubContainer'
import SolutionsPoint from '~/components/solutions/SolutionsPoint'
import SolutionsPointSlide from '~/components/solutions/SolutionsPointSlide'
import { Growth32 } from '@carbon/icons-react'

export function meta() {
  return metaInfo('For Growth-Marketing Teams')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function ForMarketers() {
  return (
    <>
      <SolutionsIntro
        title='For Growth-Marketing Teams'
        heading='Precise ROI & ROAS'
        sub_heading='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor
      sollicitudin libero eget tincidunt. Donec sit amet aliquam risus.'
      />

      <SolutionsPointsContainer>
        <SolutionsPointsHeader
          icon_left={<Growth32 />}
          text='Your growth-marketing stack'
          icon_right={<Growth32 />}
        />

        <SolutionsPointsSubContainer persona='marketer'>
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
