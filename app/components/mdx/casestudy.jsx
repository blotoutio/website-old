import { formatDate } from '../../utils'

import SubHeader from '~/components/core/SubHeader'

const getCaseStudyTitle = (title) => {
  return title.replace(' | Blotout', '')
}

const CaseStudy = (props) => {
  return (
    <div className='writing-item-new'>
      <SubHeader
        heading={getCaseStudyTitle(props.title)}
        sub_heading={formatDate(props.date)}
      />
      <div id='case-studies' className='writing'>
        <div id='case-studies-item-text' className='writing-item-text'>
          <div
            id='case-studies-item-text-content'
            className='writing-item-text-content'
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
