import { useState, useEffect } from 'react'
import { useRouteData } from 'remix'
import { caseStudyList } from '../../data/caseStudyList'
import { formatDate } from '../../utils'
import showdown from 'showdown'
import parse from 'html-react-parser'
import stylesUrl from '../../styles/writing-item.css'

export function loader({ params }) {
  const caseStudyItem = caseStudyList.find(
    (item) => item.slug === params.caseStudies
  )
  return caseStudyItem
}

export function meta({ params }) {
  const caseStudyItem = caseStudyList.find(
    (item) => item.slug === params.caseStudies
  )
  return {
    title: `Blotout - Case Studies | ${caseStudyItem.title}`,
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

  const formattedDate = formatDate(data.date)

  const [html, setHTML] = useState('')

  useEffect(() => {
    fetch('/md/case-studies/' + data.slug + '.md')
      .then((data) => data.text())
      .then((text) => {
        const converter = new showdown.Converter()
        setHTML(converter.makeHtml(text))
      })
  }, [])

  return (
    <div id='case-studies' className='writing'>
      <div id='case-studies-item-header' className='writing-item-header'>
        <div
          id='case-studies-item-header-content'
          className='writing-item-header-content'
        >
          <h1 id='case-studies-item-title' className='writing-item-title'>
            {data.title}
          </h1>
          <div
            id='case-studies-item-subtitle'
            className='writing-item-subtitle'
          >
            {data.formattedDate}
          </div>
        </div>
      </div>

      <div id='case-studies-item-text' className='writing-item-text'>
        <div
          id='case-studies-item-text-content'
          className='writing-item-text-content'
        >
          {parse(html)}
        </div>
      </div>
    </div>
  )
}
