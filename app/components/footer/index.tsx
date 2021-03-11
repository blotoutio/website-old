import { NavLink, Link } from 'react-router-dom'
import Slack from '../../icons/slack'
import Discord from '../../icons/discord'
import Medium from '../../icons/medium'
import LinkedIn from '../../icons/linkedin'
import Twitter from '../../icons/twitter'
import Logo from '../../icons/logo'

const links = [
  {
    link: 'https://docs.blotout.io',
    text: 'Docs',
  },
  {
    link: '/blog',
    text: 'Blog',
  },
  {
    link: '/about',
    text: 'About',
  },
]

const social = [
  {
    name: 'twitter',
    link: 'https://twitter.com/blotout3',
    image: <Twitter />,
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/company/blotout',
    image: <LinkedIn />,
  },
  {
    name: 'medium',
    link: 'https://medium.com/@blotout',
    image: <Medium />,
  },
  {
    name: 'discord',
    link: 'https://discord.gg/JsWgSzEV',
    image: <Discord />,
  },
  {
    name: 'slack',
    link:
      'https://join.slack.com/t/blotout-workspace/shared_invite/zt-medvirwy-ucfSJGHl6gjBh_tTWPWAYQ',
    image: <Slack />,
  },
]

export const Footer = (): JSX.Element => {
  return (
    <footer className='wrapper content-wrapper'>
      <div className='top'>
        <div className='left'>
          <Link to='/' aria-label='Logo'>
            <Logo />
          </Link>
          <div className='links'>
            {links.map((link) => {
              if (link.link.startsWith('https://')) {
                return (
                  <a
                    className='link'
                    href={link.link}
                    key={link.link}
                    data-event={`menu-${link.text}`}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {link.text}
                  </a>
                )
              }

              return (
                <NavLink
                  className='link'
                  to={link.link}
                  key={link.link}
                  data-event={`menu-${link.text}`}
                >
                  {link.text}
                </NavLink>
              )
            })}
          </div>
        </div>
        <div className='right'>
          {social.map((item) => (
            <a
              href={item.link}
              key={item.link}
              data-event={`social-${item.name}`}
              target='_blank'
              rel='noreferrer'
              aria-label={item.name}
            >
              {item.image}
            </a>
          ))}
        </div>
      </div>
      <div className='bottom'>
        <div className='copy'>
          Copyright © {new Date().getFullYear()} Blotout. All rights reserved.
        </div>
        <div className='second-links'>
          <NavLink
            className='link'
            to='/terms-of-service'
            data-event={`footer-terms-of-service`}
          >
            Terms of Service
          </NavLink>
          <NavLink
            className='link'
            to='/privacy-policy'
            data-event={`footer-privacy-policy`}
          >
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </footer>
  )
}
