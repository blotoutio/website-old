import { Link } from 'react-router-dom'
import Slack from '../../icons/slack'
import Discord from '../../icons/discord'
import YouTube from '../../icons/youtube'
import Medium from '../../icons/medium'
import LinkedIn from '../../icons/linkedin'
import Twitter from '../../icons/twitter'

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
    link: '/terms-of-service',
    text: 'Terms of Service'
  },
  {
    link: '/privacy-policy',
    text: 'Privacy Policy'
  },
  {
    link: 'https://docs.blotout.io/',
    text: 'Documentation',
    external: true
  }
]

const social = [
  {
    link: 'https://twitter.com/blotout3',
    image: <Twitter />,
  },
  {
    link: 'https://www.linkedin.com/company/blotout',
    image: <LinkedIn />,
  },
  {
    link: 'https://medium.com/@blotout',
    image: <Medium />,
  },
  {
    link: 'https://discord.gg/JsWgSzEV',
    image: <Discord />,
  },
  {
    link: 'https://join.slack.com/t/blotout-workspace/shared_invite/zt-medvirwy-ucfSJGHl6gjBh_tTWPWAYQ',
    image: <Slack />,
  }
]

export const Footer = (): JSX.Element => {
  return (
    <footer className='footer_wrapper'>
      <div className='footer_social'>
        {
          social.map(item => (
            <a href={item.link} key={item.link} target='_blank' rel='noreferrer'>
              {item.image}
            </a>
          ))
        }
      </div>
      <div className='footer_siteMap'>
        {
          siteMap.map(link => {
            if (link.external) {
              return (
                <a
                  className='footer_link'
                  href={link.link}
                  key={link.link}
                  data-event={`sitemap-${link.text}`}
                  rel='nofollow noreferrer'
                  target='_blank'>
                  {link.text}
                </a>
              )
            }
            return (
              <Link className='footer_link' to={link.link} key={link.link} data-event={`sitemap-${link.text}`}>
                {link.text}
              </Link>
            )
          })
        }
      </div>
      <div className='footer_copy'>
        Copyright © 2020 Blotout. All rights reserved.
      </div>
    </footer>
  )
}
