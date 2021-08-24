import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import {
  getBackgroundColor,
  getLogo,
  getMenuIcon,
  getMobileBackgroundColor,
  getMobileLinkColor,
  getMobileOverlayColor,
  getMobileTitleColor,
  getXIcon,
} from './utils'
import { codifyClick } from '../../utils'

const Header = () => {
  const location = useLocation()
  const { pathname } = useLocation()
  const [isOpen, changeCSS] = useState('false')

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
      })
    }
  }, [location])

  const toggleMobileMenu = () => {
    changeCSS(!isOpen)
  }

  const mobileLinkColor = getMobileLinkColor(pathname)
  const mobileTitleColor = getMobileTitleColor(pathname)

  return (
    <header
      style={{
        backgroundColor: getBackgroundColor(pathname),
      }}
    >
      <div id='header-content'>
        <div id='logo'>
          <Link to='/' onClick={() => codifyClick('Header - Logo')}>
            {getLogo(pathname)}
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
            onClick={() => codifyClick('Menu - Product')}
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
                onClick={() => codifyClick('Menu - Docs Overview')}
              >
                Overview
              </a>
              <a
                href='https://docs-js.blotout.io/'
                target='_blank'
                rel='noopener'
                onClick={() => codifyClick('Menu - Docs JS')}
              >
                JavaScript
              </a>
              <a
                href='https://docs-ios.blotout.io/'
                target='_blank'
                rel='noopener'
                onClick={() => codifyClick('Menu - Docs iOS')}
              >
                iOS
              </a>
              <a
                href='https://docs-android.blotout.io/'
                target='_blank'
                rel='noopener'
                onClick={() => codifyClick('Menu - Docs Android')}
              >
                Android
              </a>
              <a
                href='https://docs-rust.blotout.io/'
                target='_blank'
                rel='noopener'
                onClick={() => codifyClick('Menu - Docs Rust')}
              >
                Rust / C++
              </a>
            </div>
          </div>
          <div id='header-nav-link-resources' className='header-nav-link'>
            <span>Resources</span>
            <div className='header-nav-submenu'>
              <Link
                to='/blog'
                onClick={() => codifyClick('Menu - Resources Blog')}
              >
                Blog
              </Link>
              <Link
                to='/case-studies'
                onClick={() => codifyClick('Menu - Resources Studies')}
              >
                Case Studies
              </Link>
              <a
                href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
                target='_blank'
                rel='noreferrer'
                onClick={() => codifyClick('Menu - Resources Slack')}
              >
                Slack Community
              </a>
            </div>
          </div>
          <Link
            to='/about'
            id='header-nav-link-company'
            className='header-nav-link'
            onClick={() => codifyClick('Menu - Company')}
          >
            <span>Company</span>
          </Link>
        </div>
        <a
          href='https://calendly.com/blotout-experts'
          target='_blank'
          rel='noreferrer'
          id='cta'
          onClick={() => codifyClick('Menu - Trial')}
        >
          Start Free Trial
        </a>
        <div id='header-nav-mobile-menu-icon' onClick={toggleMobileMenu}>
          {getMenuIcon(pathname)}
        </div>
        <div
          id='header-nav-mobile-container'
          style={{
            display: isOpen ? 'none' : 'block',
            backgroundColor: getMobileOverlayColor(pathname),
          }}
        >
          <div
            id='header-nav-mobile'
            style={{ backgroundColor: getMobileBackgroundColor(pathname) }}
          >
            <div id='header-nav-mobile-x-icon' onClick={toggleMobileMenu}>
              {getXIcon(pathname)}
            </div>
            <div id='header-nav-mobile-links'>
              <Link
                to={{ pathname: './', hash: '#explainer' }}
                style={{ color: mobileLinkColor }}
                onClick={() => {
                  toggleMobileMenu()
                  codifyClick('Menu - Product')
                }}
              >
                <span>Product</span>
              </Link>
              <div className='header-nav-mobile-group'>
                <div
                  className='header-nav-mobile-group-title'
                  style={{ color: mobileTitleColor }}
                >
                  Docs
                </div>
                <div className='header-nav-mobile-subgroup'>
                  <a
                    href='https://docs.blotout.io/'
                    target='_blank'
                    rel='noopener'
                    style={{ color: mobileLinkColor }}
                    onClick={() => codifyClick('Menu - Docs')}
                  >
                    Overview
                  </a>
                  <a
                    href='https://docs-js.blotout.io/'
                    target='_blank'
                    rel='noopener'
                    style={{ color: mobileLinkColor }}
                    onClick={() => codifyClick('Menu - JS')}
                  >
                    JavaScript
                  </a>
                  <a
                    href='https://docs-ios.blotout.io/'
                    target='_blank'
                    rel='noopener'
                    style={{ color: mobileLinkColor }}
                    onClick={() => codifyClick('Menu - iOS')}
                  >
                    iOS
                  </a>
                  <a
                    href='https://docs-android.blotout.io/'
                    target='_blank'
                    rel='noopener'
                    style={{ color: mobileLinkColor }}
                    onClick={() => codifyClick('Menu - Android')}
                  >
                    Android
                  </a>
                  <a
                    href='https://docs-rust.blotout.io/'
                    target='_blank'
                    rel='noopener'
                    style={{ color: mobileLinkColor }}
                    onClick={() => codifyClick('Menu - Rust')}
                  >
                    Rust / C++
                  </a>
                </div>
              </div>
              <div className='header-nav-mobile-group'>
                <div
                  className='header-nav-mobile-group-title'
                  style={{ color: mobileTitleColor }}
                >
                  Resources
                </div>
                <div className='header-nav-mobile-subgroup'>
                  <Link
                    to='/blog'
                    style={{ color: mobileLinkColor }}
                    onClick={() => {
                      toggleMobileMenu()
                      codifyClick('Menu - Blog')
                    }}
                  >
                    Blog
                  </Link>
                  <Link
                    to='/case-studies'
                    style={{ color: mobileLinkColor }}
                    onClick={() => {
                      toggleMobileMenu()
                      codifyClick('Menu - Studies')
                    }}
                  >
                    Case Studies
                  </Link>
                  <a
                    href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
                    target='_blank'
                    rel='noreferrer'
                    style={{ color: mobileLinkColor }}
                    onClick={() => codifyClick('Menu - Slack')}
                  >
                    Slack Community
                  </a>
                </div>
              </div>
              <Link
                to='/about'
                style={{ color: mobileLinkColor }}
                onClick={() => {
                  toggleMobileMenu()
                  codifyClick('Menu - Company')
                }}
              >
                <span>Company</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
