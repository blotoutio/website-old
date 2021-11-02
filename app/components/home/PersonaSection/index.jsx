import Section from '~/components/core/Section'
import { Player } from '@lottiefiles/react-lottie-player'

const PersonaSection = (props) => {
  const {
    persona,
    title,
    heading,
    sub_heading,
    illustration,
    animation,
    children,
  } = props

  return (
    <Section id={persona} className='persona-section'>
      <div className='container'>
        <span>{title}</span>

        <h2>{heading}</h2>

        <p>{sub_heading}</p>

        {illustration ? (
          <img
            className='graphic'
            src={'img/home/' + persona + '.svg'}
            alt=''
          />
        ) : null}

        {animation ? (
          <div className='graphic'>
            <Player
              autoplay
              loop
              src={'animation-data/animation_data_' + persona + '.json'}
            ></Player>
          </div>
        ) : null}

        {children}
      </div>
    </Section>
  )
}

export default PersonaSection