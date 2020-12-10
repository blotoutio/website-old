import React from 'react'
import { Wrapper, Links, StyledLink, Logo } from './style'

const links = [
  {
    link: '/blog',
    text: 'Blog'
  },
  {
    link: '/about',
    text: 'About'
  }
]

export const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <Logo to='/'>
        <img src='/logo.svg' alt='logo' width={120} height={27} />
      </Logo>
      <Links>
        {
          links.map(link => <StyledLink to={link.link} key={link.link}>{link.text}</StyledLink>)
        }
      </Links>
    </Wrapper>
  )
}
