import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

import LogoDark from '~/graphics/LogoDark'
import PrimaryCTA from '~/components/core/PrimaryCTA'

import { Menu24 } from '@carbon/icons-react'
import { Close24 } from '@carbon/icons-react'

import { Dashboard32 } from '@carbon/icons-react'
import { Integration32 } from '@carbon/icons-react'

import { Notebook24 } from '@carbon/icons-react'
import { Api_124 } from '@carbon/icons-react'
import { Blog24 } from '@carbon/icons-react'
import { Growth24 } from '@carbon/icons-react'
import { LogoSlack24 } from '@carbon/icons-react'

import { Enterprise32 } from '@carbon/icons-react'

import { codifyClick } from '~/utils'

const Header = () => {
  const location = useLocation()
  const [mobileMenuState, changeCSS] = useState('false')

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

  const toggleMenu = () => {
    changeCSS(!mobileMenuState)
  }

  return (
    <header
      className={mobileMenuState ? 'mobile-menu-closed' : 'mobile-menu-open'}
    >
      <div id='header-container'>
        <Link
          to={'/'}
          className='logo'
          onClick={() => codifyClick('Header - Logo')}
        >
          <LogoDark />
        </Link>
        <nav>
          <Link
            to={{ path: './', hash: '#main-section' }}
            className='nav-link'
            onClick={() => codifyClick('Header - Product')}
          >
            {!mobileMenuState ? <Dashboard32 /> : null}
            <span>Product</span>
          </Link>
          <Link
            to='/integrations'
            className='nav-link'
            onClick={() => codifyClick('Header - Integrations')}
          >
            {!mobileMenuState ? <Integration32 /> : null}
            <span>Integrations</span>
          </Link>
          <div className='nav-group'>
            <div className='sub-nav-title'>Resources</div>
            <div className='sub-nav-wrapper'>
              <div className='sub-nav'>
                <div className='sub-nav-group'>
                  <a
                    href='https://help.blotout.io'
                    target='_blank'
                    rel='noopener'
                    className='sub-nav-link'
                    onClick={() =>
                      codifyClick('Header / Resources - Help Center')
                    }
                  >
                    <Notebook24 />
                    <span>Help Center</span>
                  </a>
                  <a
                    href='https://docs.blotout.io'
                    target='_blank'
                    rel='noopener'
                    className='sub-nav-link'
                    onClick={() =>
                      codifyClick('Header / Resources - Documentation')
                    }
                  >
                    <Api_124 />
                    <span>Documentation</span>
                  </a>
                </div>
                <div className='sub-nav-group'>
                  <Link
                    to='/case-studies'
                    className='sub-nav-link'
                    onClick={() =>
                      codifyClick('Header / Resources - Case Studies')
                    }
                  >
                    <Growth24 />
                    <span>Case Studies</span>
                  </Link>
                  <Link
                    to='/blog'
                    className='sub-nav-link'
                    onClick={() => codifyClick('Header / Resources - Blog')}
                  >
                    <Blog24 />
                    <span>Blog</span>
                  </Link>
                </div>
                <div className='sub-nav-group'>
                  <a
                    href='https://blotout-shared.slack.com'
                    target='_blank'
                    rel='noreferrer'
                    className='sub-nav-link'
                    onClick={() => codifyClick('Header / Resources - Slack')}
                  >
                    <LogoSlack24 />
                    <span>Slack Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Link to='/about' className='nav-link'>
            {!mobileMenuState ? <Enterprise32 /> : null}
            <span>Company</span>
          </Link>
        </nav>
        <PrimaryCTA text='Talk to us' codify_as='Header - CTA' />
        {mobileMenuState ? (
          <Menu24 className='menu-icon' onClick={toggleMenu} />
        ) : (
          <Close24 className='menu-icon' onClick={toggleMenu} />
        )}
      </div>
    </header>
    /* <header
    >
      <div id='header-content'>

        <div
          id='header-nav'
        >
          <Link
            to={{ pathname: './', hash: '#explainer' }}
            id='header-nav-link-product'
            className='header-nav-link'
            onClick={() => codifyClick('Menu - Product')}
          >
            Product
          </Link>
          <Link
            to='/integrations'
            id='header-nav-link-integrations'
            className='header-nav-link'
            onClick={() => codifyClick('Menu - Integrations')}
          >
            Integrations
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
                href='https://help.blotout.io/'
                target='_blank'
                rel='noopener'
                onClick={() => codifyClick('Menu - Help Center')}
              >
                Help Center
              </a>
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
            Company
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

          >
            <div id='header-nav-mobile-links'>
              <Link
                to={{ pathname: './', hash: '#explainer' }}
                style={{ color: mobileLinkColor }}
                onClick={() => {
                  toggleMobileMenu()
                  codifyClick('Menu - Product')
                }}
                id='header-nav-mobile-product'
              >
                Product
              </Link>
              <Link
                to='/integrations'
                style={{ color: mobileLinkColor }}
                onClick={() => {
                  toggleMobileMenu()
                  codifyClick('Menu - Integrations')
                }}
              >
                Integrations
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
                Company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header> */
  )
}

export default Header
