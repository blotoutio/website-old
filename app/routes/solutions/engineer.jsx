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
        heading='Serverless Infra for Sales & Marketing'
        sub_heading='Deploy a dedicated and managed modern data infrastructure for your sales and marketing teams in 20 minutes.'
      />

      <SolutionsPointsContainer>
        <SolutionsPointsHeader
          text='Bring your Cloud or Onboard to Cloud'
          icon_left={<Cube32 />}
          icon_right={<Cube32 />}
        />

        <SolutionsPointsSubContainer persona='engineer'>
          <SolutionsPoint title='No DevOps. No Data Engineering'>
            <SolutionsPointSlide
              data={solutionsData[0]}
              persona={persona}
              slug='self-provisioned'
            />
          </SolutionsPoint>

          <SolutionsPoint title='Lifetime Cookie & 1st Party Analytics'>
            <SolutionsPointSlide
              data={solutionsData[1]}
              persona={persona}
              slug='lifetime-id'
            />
          </SolutionsPoint>

          <SolutionsPoint title='Zero Code Data Pipelines'>
            <SolutionsPointSlide
              data={solutionsData[2]}
              persona={persona}
              slug='el-plus-t'
            />
          </SolutionsPoint>

          <SolutionsPoint title='Better Customer Journeys'>
            <SolutionsPointSlide
              data={solutionsData[3]}
              persona={persona}
              slug='cross-platform'
            />
          </SolutionsPoint>

          <SolutionsPoint title='Lifetime ID Graph'>
            <SolutionsPointSlide
              data={solutionsData[4]}
              persona={persona}
              slug='online-offline'
            />
          </SolutionsPoint>

          <SolutionsPoint title='Cross-Channel Attribution'>
            <SolutionsPointSlide
              data={solutionsData[5]}
              persona={persona}
              slug='cross-channel'
            />
          </SolutionsPoint>
        </SolutionsPointsSubContainer>
      </SolutionsPointsContainer>

      <SolutionsTestimonial />
    </>
  )
}
