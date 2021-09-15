import { formatDate } from '../../utils'

const getBlogTitle = (title) => {
  return title.replace(' | Blotout', '')
}

const Blog = (props) => {
  return (
    <div id='blog' className='writing'>
      <div id='blog-item-header' className='writing-item-header'>
        <div
          id='blog-item-header-content'
          className='writing-item-header-content'
        >
          <h1 id='blog-item-title' className='writing-item-title'>
            {getBlogTitle(props.title)}
          </h1>
          <div id='blog-item-subtitle' className='writing-item-subtitle'>
            {formatDate(props.date)}
          </div>
        </div>
      </div>

      <div id='blog-item-text' className='writing-item-text'>
        <div id='blog-item-text-content' className='writing-item-text-content'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default Blog
