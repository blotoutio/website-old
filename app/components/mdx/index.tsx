import React from 'react'
import { Content } from './style'
import HeaderFiller from '../headerFiller'

export default function MDX (props: any): JSX.Element {
  return (
    <HeaderFiller>
      <Content>
        {props.children}
      </Content>
    </HeaderFiller>
  )
}
