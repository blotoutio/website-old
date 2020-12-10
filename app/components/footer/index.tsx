import React from 'react'
import { Wrapper, Social, SiteMap, StyledLink, Copy } from './style'

const siteMap = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/blog',
    text: 'Blog'
  },
  {
    link: '/about',
    text: 'About'
  },
  {
    link: '/terms-of-services',
    text: 'Terms of Services'
  },
  {
    link: '/privacy-policy',
    text: 'Privacy Policy'
  }
]

const social = [
  {
    link: 'https://twitter.com/blotout3',
    image: '/icons/twitter.svg',
    alt: 'twitter'
  },
  {
    link: 'https://www.linkedin.com/company/blotout',
    image: '/icons/linkedin.svg',
    alt: 'linkedin'
  },
  {
    link: 'https://medium.com/@blotout',
    image: '/icons/medium.svg',
    alt: 'medium'
  },
  {
    link: 'https://www.youtube.com/channel/UC-ywhz5uMq_3kX_JnHorg-A',
    image: '/icons/youtube.svg',
    alt: 'youtube'
  }
]

export const Footer = (): JSX.Element => {
  return (
    <Wrapper>
      <Social>
        {
          social.map(item => (
            <a href={item.link} key={item.link}>
              <img src={item.image} alt={item.alt} width='30' height='30' />
            </a>
          ))
        }
      </Social>
      <SiteMap>
        {
          siteMap.map(link => <StyledLink to={link.link} key={link.link}>{link.text}</StyledLink>)
        }
      </SiteMap>
      <Copy>
        Copyright © 2020 Blotout. All rights reserved.
      </Copy>
    </Wrapper>
  )
}
