import { NavLink, Link } from 'react-router-dom'

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
    <header className='header_wrapper'>
      <Link to='/'>
        <img className='header_image' src='/logo.svg' alt='logo' width={130} height={44} />
      </Link>
      <div className='header_links'>
        {
          links.map(link => <NavLink className='header_link' to={link.link} key={link.link}>{link.text}</NavLink>)
        }
      </div>
    </header>
  )
}
