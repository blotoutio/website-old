import { NavLink, Link, useLocation } from 'react-router-dom'
import Logo from '../../icons/logo'
import { useEffect, useState } from 'react'

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
  const location = useLocation()
  const [menu, setMenu] = useState(false)

  useEffect(() => {
    trends('pageView')
  }, [location])

  const handleClick = () => {
    setMenu(!menu)
  }

  return (
    <header className='wrapper'>
      <Link to='/' aria-label='Logo'>
        <Logo />
      </Link>
      <div className={`toggle ${menu ? 'open' : ''}`} onClick={handleClick}>
        <div className='spinner diagonal part-1' />
        <div className='spinner horizontal' />
        <div className='spinner diagonal part-2' />
      </div>
      <div className={`links ${menu ? 'open' : ''}`}>
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
              onClick={handleClick}
            >
              {link.text}
            </NavLink>
          )
        })}
      </div>
    </header>
  )
}
