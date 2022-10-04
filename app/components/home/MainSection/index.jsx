import { useState } from 'react'
import Section from '~/components/core/Section'

const MainSection = (props) => {
  const { heading, sub_heading } = props

  const [toggled, setToggled] = useState(true)

  const toggleImage = () => setToggled(!toggled)

  return (
    <Section id='main-section'>
      <div id='main-container'>
        <h2>{heading}</h2>
        <p>{sub_heading}</p>
        <div id='graphic'>
          <div id='toggle-container'>
            <div
              id='without-switch'
              className={'switch ' + (toggled ? '' : 'selected')}
              onClick={() => toggleImage()}
            >
              Without Blotout
            </div>
            <div
              id='with-switch'
              className={'switch ' + (toggled ? 'selected' : '')}
              onClick={() => toggleImage()}
            >
              With Blotout
            </div>
          </div>
          <div id='image-container'>
            <img
              src={`img/home/${toggled ? 'with' : 'without'}-blotout.svg`}
              alt=''
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

export default MainSection
