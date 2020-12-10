import React from 'react'
import { StyledLink, StyledExternalLink } from './style'

export interface Props {
  link: string
  text: string
  type: 'primary' | 'secondary'
  external?: boolean
}

export const Button = (props: Props): JSX.Element => {
  if (props.external) {
    return (
      <StyledExternalLink href={props.link} {...props} target='_blank' rel='noreferrer'>
        {props.text}
      </StyledExternalLink>
    )
  }

  return (
    <StyledLink to={props.link} {...props}>
      {props.text}
    </StyledLink>
  )
}
