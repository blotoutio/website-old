import { formatDate } from '../../utils'

const getCaseStudyTitle = (title) => {
  return title.replace(' | Blotout', '')
}

const CaseStudy = (props) => {
  return (
    <div id='case-studies' className='writing'>
      <div id='case-studies-item-header' className='writing-item-header'>
        <div
          id='case-studies-item-header-content'
          className='writing-item-header-content'
        >
          <h1 id='case-studies-item-title' className='writing-item-title'>
            {getCaseStudyTitle(props.title)}
          </h1>
          <p id='case-studies-item-subtitle' className='writing-item-subtitle'>
            {formatDate(props.date)}
          </p>
        </div>
      </div>

      <div id='case-studies-item-text' className='writing-item-text'>
        <div
          id='case-studies-item-text-content'
          className='writing-item-text-content'
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default CaseStudy
