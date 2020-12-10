import React from 'react'
import { Wrapper, StyledLink } from './style'
import { Link } from 'react-router-dom'

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
      <Link to='/'>
        <img src='/logo.svg' alt='logo' width={297} height={67} />
      </Link>
      <div>
        {
          links.map(link => <StyledLink to={link.link} key={link.link}>{link.text}</StyledLink>)
        }
      </div>
    </Wrapper>
  )
}
