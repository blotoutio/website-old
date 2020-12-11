import React from 'react'
import { Link } from 'react-router-dom'

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
    <footer className='footer_wrapper'>
      <div className='footer_social'>
        {
          social.map(item => (
            <a href={item.link} key={item.link}>
              <img src={item.image} alt={item.alt} width='30' height='30' />
            </a>
          ))
        }
      </div>
      <div className='footer_siteMap'>
        {
          siteMap.map(link => <Link className='footer_link' to={link.link} key={link.link}>{link.text}</Link>)
        }
      </div>
      <div className='footer_copy'>
        Copyright © 2020 Blotout. All rights reserved.
      </div>
    </footer>
  )
}
