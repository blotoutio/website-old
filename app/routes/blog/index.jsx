import { Link } from 'react-router-dom'
import { blogList } from '../../data/blogList'
import { formatDate } from '../../utils'
import stylesUrl from '../../styles/writing.css'

export function meta() {
  return {
    title: 'Blotout - Blog',
    description: '',
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function Blog() {
  return (
    <div id='blog' className='writing'>
      <div id='blog-header' className='writing-header'>
        <div id='blog-header-content' className='writing-header-content'>
          <h1 id='blog-title' className='writing-title'>
            Blog
          </h1>
        </div>
      </div>

      <div id='blog-list' className='writing-list'>
        <div id='blog-list-content' className='writing-list-content'>
          <div className='list'>
            {/* <div className='list-title'>All Blog Posts</div> */}
            <div className='list-content'>
              {blogList.map((blog) => {
                const formattedDate = formatDate(blog.date)

                return (
                  <div className='list-item' key={blog.slug}>
                    <Link to={blog.slug} className='list-item-title'>
                      {blog.title}
                    </Link>
                    <div className='list-item-info'>{formattedDate}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
