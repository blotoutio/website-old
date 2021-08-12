import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import LogoLight from '../graphics/logo-light'
import LogoBlue from '../graphics/logo-blue'

export const Header = () => {
  const location = useLocation()
  const { pathname } = useLocation()

  const getBackgroundColor = () => {
    if (pathname === '/about' || pathname.includes('/job')) {
      return 'var(--dark-blue-1)'
    }

    if (pathname === '/integrations') {
      return 'var(--dark-blue-2)'
    }

    if (pathname === '/privacy-policy' || pathname === '/terms-of-service') {
      return 'var(--grey-3)'
    }

    if (pathname.includes('/blog')) {
      return 'var(--light-blue-3)'
    }

    if (pathname.includes('/case-studies')) {
      return 'var(--light-blue-3)'
    }

    return 'var(--dark-blue-3)'
  }

  const getLogo = () => {
    if (
      pathname === '/privacy-policy' ||
      pathname === '/terms-of-service' ||
      pathname.includes('/blog') ||
      pathname.includes('/case-studies')
    ) {
      return <LogoBlue />
    }

    return <LogoLight />
  }

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
        backgroundColor: getBackgroundColor(),
      }}
    >
      <div id='header-content'>
        <div id='logo'>
          <Link to='/'>{getLogo()}</Link>
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
              <a href='https://docs.blotout.io/' target='_blank' rel='noopener'>
                Overview
              </a>
              <a
                href='https://docs-js.blotout.io/'
                target='_blank'
                rel='noopener'
              >
                JavaScript
              </a>
              <a
                href='https://docs-ios.blotout.io/'
                target='_blank'
                rel='noopener'
              >
                iOS
              </a>
              <a
                href='https://docs-android.blotout.io/'
                target='_blank'
                rel='noopener'
              >
                Android
              </a>
              <a
                href='https://docs-rust.blotout.io/'
                target='_blank'
                rel='noopener'
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
