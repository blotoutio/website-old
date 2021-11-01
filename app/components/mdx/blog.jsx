import { formatDate } from '../../utils'

import SubHeader from '~/components/core/SubHeader'

const getBlogTitle = (title) => {
  return title.replace(' | Blotout', '')
}

const Blog = (props) => {
  return (
    <div className='writing-item-new'>
      <SubHeader
        heading={getBlogTitle(props.title)}
        sub_heading={formatDate(props.date)}
      />
      <div id='blog' className='writing'>
        <div id='blog-item-text' className='writing-item-text'>
          <div
            id='blog-item-text-content'
            className='writing-item-text-content'
          >
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
