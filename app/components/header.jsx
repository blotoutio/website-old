import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import LogoLight from '../graphics/logo-light'
import LogoDark from '../graphics/logo-dark'
import LogoBlue from '../graphics/logo-blue'

export const Header = () => {
  const location = useLocation()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (location.hash) {
      let element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    }
  }, [location])

  return (
    <header
      style={{
        backgroundColor: pathname.includes('/about')
          ? 'var(--dark-blue-1)'
          : pathname === '/integrations'
          ? 'var(--dark-blue-2)'
          : pathname === '/privacy-policy'
          ? 'var(--grey-3)'
          : pathname === '/terms-of-service'
          ? 'var(--grey-3)'
          : pathname.includes('/blog')
          ? 'var(--light-blue-3)'
          : pathname.includes('/case-studies')
          ? 'var(--light-blue-3)'
          : 'var(--dark-blue-3)',
      }}
    >
      <div id='header-content'>
        <div id='logo'>
          <Link to='/'>
            {pathname === '/privacy-policy' ? (
              <LogoBlue />
            ) : pathname === '/terms-of-service' ? (
              <LogoBlue />
            ) : pathname.includes('/blog') ? (
              <LogoBlue />
            ) : pathname.includes('/case-studies') ? (
              <LogoBlue />
            ) : (
              <LogoLight />
            )}
          </Link>
        </div>
        <div
          id='header-nav'
          style={{
            color:
              pathname === './'
                ? 'var(--light-blue-1)'
                : pathname === '/privacy-policy'
                ? 'var(--dark-blue-3)'
                : pathname === '/terms-of-service'
                ? 'var(--dark-blue-3)'
                : pathname.includes('/blog')
                ? 'var(--dark-blue-3)'
                : pathname.includes('/case-studies')
                ? 'var(--dark-blue-3)'
                : 'var(--dark-blue-3)',
          }}
          className={
            pathname.includes('/blog')
              ? 'blog'
              : pathname.includes('/case-studies')
              ? 'case-studies'
              : 'other'
          }
        >
          <Link
            to={{ pathname: './', hash: '#explainer' }}
            id='header-nav-link-product'
            className='header-nav-link'
          >
            <span>Product</span>
          </Link>
          <div id='header-nav-link-docs' className='header-nav-link'>
            <span>Docs</span>
            <div className='header-nav-submenu'>
              <a
                href='https://docs.blotout.io/'
                target='_blank'
                rel='noopener'
                rel='noreferrer'
              >
                Overview
              </a>
              <a
                href='https://docs-js.blotout.io/'
                target='_blank'
                rel='noopener'
                rel='noreferrer'
              >
                JavaScript
              </a>
              <a
                href='https://docs-ios.blotout.io/'
                target='_blank'
                rel='noopener'
                rel='noreferrer'
              >
                iOS
              </a>
              <a
                href='https://docs-android.blotout.io/'
                target='_blank'
                rel='noopener'
                rel='noreferrer'
              >
                Android
              </a>
              <a
                href='https://docs-rust.blotout.io/'
                target='_blank'
                rel='noopener'
                rel='noreferrer'
              >
                Rust / C++
              </a>
            </div>
          </div>
          <div id='header-nav-link-resources' className='header-nav-link'>
            <span>Resources</span>
            <div className='header-nav-submenu'>
              <Link to='/blog'>Blog</Link>
              <Link to='/case-studies'>Case Studies</Link>
              <a
                href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
                target='_blank'
                rel='noopener'
                rel='noreferrer'
              >
                Slack Community
              </a>
            </div>
          </div>
          <Link
            to='/about'
            id='header-nav-link-company'
            className='header-nav-link'
          >
            <span>Company</span>
          </Link>
        </div>
        <a
          href='https://calendly.com/blotout-experts'
          target='_blank'
          target='_blank'
          rel='noopener'
          rel='noreferrer'
          id='cta'
        >
          Start Free Trial
        </a>
        <div id='header-nav-mobile'>
          <img src='/img/menu.svg' />
        </div>
      </div>
    </header>
  )
}
