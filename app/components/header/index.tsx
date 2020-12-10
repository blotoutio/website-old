import React from 'react'
import { Wrapper, StyledLink, Image } from './style'
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
        <Image src='/logo.svg' alt='logo' width={130} height={44} />
      </Link>
      <div>
        {
          links.map(link => <StyledLink to={link.link} key={link.link}>{link.text}</StyledLink>)
        }
      </div>
    </Wrapper>
  )
}
