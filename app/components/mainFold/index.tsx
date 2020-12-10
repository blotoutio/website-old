import React from 'react'
import { Wrapper, Header1, Header2, Buttons, ImageWrapper } from './style'
import { Button } from '../button'

export default function MainFold (): JSX.Element {
  return (
    <Wrapper>
      <Header1>
        The Privacy Era Analytics <br />
        and Customer Data Platform
      </Header1>
      <Header2>
        Cloud Native Analytics, Data Integrations, Governance, Messaging, and Automation
      </Header2>
      <Buttons>
        <Button
          external
          link='mailto:sales@blotout.io'
          text='Signup for Demo'
          type='primary'
        />
        <Button
          external
          link='https://www.youtube.com/channel/UC-ywhz5uMq_3kX_JnHorg-A'
          text='See our Product Video'
          type='secondary'
        />
      </Buttons>
      <ImageWrapper>
        <img src='/images/main_fold.png' alt='Main image' height='100%' width='100%' />
      </ImageWrapper>
    </Wrapper>
  )
}
