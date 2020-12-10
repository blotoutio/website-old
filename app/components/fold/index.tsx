import React from 'react'
import { Wrapper, Text, Image, Center, TitleWrapper, Title } from './style'

export interface Props {
  number: number
  title: string
  children: JSX.Element
}

export default function Fold (props: Props): JSX.Element {
  return (
    <Wrapper {...props}>
      <Center>
        <Text>
          <TitleWrapper>
            <img src={`/icons/fold${props.number}.svg`} width='56' height='56' alt={props.title} />
            <Title>{props.title}</Title>
          </TitleWrapper>
          {props.children}
        </Text>
        <Image>
          <img src={`/images/fold${props.number}.jpg`} height='100%' width='100%' alt={`section-${props.number}`} />
        </Image>
      </Center>
    </Wrapper>
  )
}
