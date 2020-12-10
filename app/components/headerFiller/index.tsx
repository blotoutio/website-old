import React from 'react'
import { Filler, Wrapper } from './style'

export default function HeaderFiller (props: any): JSX.Element {
  return (
    <Wrapper>
      <Filler />
      {props.children}
    </Wrapper>
  )
}
