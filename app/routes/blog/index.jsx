import { Link } from 'react-router-dom'
import { blogList } from '../../data/blogList'
import { codifyClick, formatDate } from '../../utils'
import stylesUrl from '../../styles/writing.css'

export function meta() {
  return {
    title: 'Blotout - Blog',
    description:
      'Serverless data infrastructure to capture, analyze, and activate customer data as a first-party',
    'og:title': 'Blotout - Blog',
    'og:description':
      'Serverless data infrastructure to capture, analyze, and activate customer data as a first-party',
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
            <div className='list-content'>
              {blogList.map((blog) => {
                const formattedDate = formatDate(blog.date)

                return (
                  <div className='list-item' key={blog.slug}>
                    <h2>
                      <Link
                        to={blog.slug}
                        className='list-item-title'
                        onClick={() => codifyClick(`Blog - ${blog.title}`)}
                      >
                        {blog.title}
                      </Link>
                    </h2>
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
