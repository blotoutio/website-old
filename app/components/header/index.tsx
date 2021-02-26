import { NavLink, Link } from 'react-router-dom'
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

export const Header = (): JSX.Element => {
  return (
    <header className='wrapper'>
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
    </header>
  )
}
