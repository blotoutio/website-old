import { useState, useEffect } from 'react'
import { useRouteData } from 'remix'
import { blogList } from '../../data/blogList'
import { formatDate } from '../../utils'
import showdown from 'showdown'
import parse from 'html-react-parser'
import stylesUrl from '../../styles/writing-item.css'

export function loader({ params }) {
  const blogItem = blogList.find((item) => item.slug === params.blog)
  return blogItem
}

export function meta({ params }) {
  const blogItem = blogList.find((item) => item.slug === params.blog)
  return {
    title: `Blotout - Blog | ${blogItem.title}`,
    description: blogItem.description,
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

export default function BlogItem() {
  let data = useRouteData()

  const formattedDate = formatDate(data.date)

  const [html, setHTML] = useState('')

  useEffect(() => {
    fetch('/md/blog/' + data.slug + '.md')
      .then((data) => data.text())
      .then((text) => {
        const converter = new showdown.Converter()
        setHTML(converter.makeHtml(text))
      })
  }, [])

  return (
    <div id='blog' className='writing'>
      <div id='blog-item-header' className='writing-item-header'>
        <div
          id='blog-item-header-content'
          className='writing-item-header-content'
        >
          <h1 id='blog-item-title' className='writing-item-title'>
            {data.title}
          </h1>
          <div id='blog-item-subtitle' className='writing-item-subtitle'>
            {data.formattedDate}
          </div>
        </div>
      </div>

      <div id='blog-item-text' className='writing-item-text'>
        <div id='blog-item-text-content' className='writing-item-text-content'>
          {parse(html)}
        </div>
      </div>
    </div>
  )
}
