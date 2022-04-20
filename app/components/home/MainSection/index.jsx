import Section from '~/components/core/Section'
import { Player } from '@lottiefiles/react-lottie-player'

const MainSection = (props) => {
  const { heading, sub_heading, children } = props

  return (
    <Section id='main-section'>
      <div id='main-container'>
        <h2>{heading}</h2>
        <p>{sub_heading}</p>
        <div className='graphic'>
          <Player
            autoplay
            loop
            src={'animation-data/animation_data_explainer.json'}
          ></Player>
        </div>
        {children}
      </div>
    </Section>
  )
}

export default MainSection
