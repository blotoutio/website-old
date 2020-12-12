import { Link } from 'react-router-dom'

export interface Props {
  link: string
  text: string
  type: 'primary' | 'secondary'
  external?: boolean
}

export const Button = (props: Props): JSX.Element => {
  if (props.external) {
    return (
      <a
        className={`button ${props.type}`}
        href={props.link}
        target='_blank' rel='noreferrer'
      >
        {props.text}
      </a>
    )
  }

  return (
    <Link className={`button ${props.type}`} to={props.link}>
      {props.text}
    </Link>
  )
}
