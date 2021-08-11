import { useState, useEffect } from 'react'
import { useRouteData } from 'remix'
import { jobList } from '../../data/jobList'
import showdown from 'showdown'
import parse from 'html-react-parser'
import stylesUrl from '../../styles/writing-item.css'

export function loader({ params }) {
  const jobItem = jobList.find((item) => item.slug === params.about)
  return jobItem
}

export function meta({ params }) {
  const jobItem = jobList.find((item) => item.slug === params.about)
  return {
    title: `Blotout - Jobs | ${jobItem.title}`,
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

export default function CaseStudyItem() {
  let data = useRouteData()

  const [html, setHTML] = useState('')

  useEffect(() => {
    fetch('/md/jobs/' + data.slug + '.md')
      .then((data) => data.text())
      .then((text) => {
        const converter = new showdown.Converter()
        setHTML(converter.makeHtml(text))
      })
  }, [])

  return (
    <div id='jobs' className='writing'>
      <div id='jobs-item-header' className='writing-item-header'>
        <div
          id='jobs-item-header-content'
          className='writing-item-header-content'
        >
          <h1 id='jobs-item-title' className='writing-item-title'>
            {data.title}
          </h1>
        </div>
      </div>

      <div id='jobs-item-text' className='writing-item-text'>
        <div id='jobs-item-text-content' className='writing-item-text-content'>
          {parse(html)}
        </div>
      </div>
    </div>
  )
}