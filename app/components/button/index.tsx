import { Link } from 'react-router-dom'

export interface Props {
  link: string
  text: string
  type: 'primary' | 'secondary'
  external?: boolean
  id?: string
}

export const Button = (props: Props): JSX.Element => {
  if (props.external) {
    return (
      <a
        data-event={props.id}
        className={`button ${props.type}`}
        href={props.link}
        target='_blank'
        rel='noreferrer'
      >
        {props.text}
      </a>
    )
  }

  return (
    <Link data-event={props.id} className={`button ${props.type}`} to={props.link}>
      {props.text}
    </Link>
  )
}
