import { useState, useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'

import Banner from '~/components/core/Banner'
import LogoDark from '~/graphics/LogoDark'
import PrimaryCTA from '~/components/core/PrimaryCTA'

import { Menu24 } from '@carbon/icons-react'
import { Close24 } from '@carbon/icons-react'

import { Dashboard32 } from '@carbon/icons-react'
import { Integration32 } from '@carbon/icons-react'

import {
  Notebook24,
  Api_124,
  Blog24,
  Growth24,
  LogoSlack24,
  Enterprise32,
  SummaryKpi24,
  DecisionTree24,
  Datastore24,
} from '@carbon/icons-react'

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
      <Banner />

      <div id='header-container'>
        {/* Link to home */}

        <Link
          aria-label='Blotout'
          to={'/'}
          className='logo'
          onClick={() => {
            {
              !mobileMenuState ? toggleMenu() : null
            }
            codifyClick('Header - Logo')
          }}
        >
          <LogoDark />
        </Link>

        {/* Main Navigation */}

        <nav>
          <div className='nav-group'>
            <div className='sub-nav-title'>Product</div>
            <div className='sub-nav-wrapper'>
              <div className='sub-nav'>
                <div className='sub-nav-group'>
                  <Link
                    to='/for-marketers'
                    className='sub-nav-link'
                    onClick={() => {
                      {
                        !mobileMenuState ? toggleMenu() : null
                      }
                      codifyClick('Header / Product - For Marketers Page')
                    }}
                  >
                    <SummaryKpi24 />
                    <span>For Marketers</span>
                  </Link>

                  <Link
                    to='/for-product-managers'
                    className='sub-nav-link'
                    onClick={() => {
                      {
                        !mobileMenuState ? toggleMenu() : null
                      }
                      codifyClick(
                        'Header / Product - For Product Managers Page'
                      )
                    }}
                  >
                    <DecisionTree24 />
                    <span>For Product Managers</span>
                  </Link>

                  <Link
                    to='/for-engineers'
                    className='sub-nav-link'
                    onClick={() => {
                      {
                        !mobileMenuState ? toggleMenu() : null
                      }
                      codifyClick('Header / Product - For Engineers Page')
                    }}
                  >
                    <Datastore24 />
                    <span>For Engineers</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            to='/integrations'
            className='nav-link'
            onClick={() => {
              {
                !mobileMenuState ? toggleMenu() : null
              }
              codifyClick('Header - Integrations')
            }}
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
                    onClick={() => {
                      {
                        !mobileMenuState ? toggleMenu() : null
                      }
                      codifyClick('Header / Resources - Help Center')
                    }}
                  >
                    <Notebook24 />
                    <span>Help Center</span>
                  </a>
                  <a
                    href='https://docs.blotout.io'
                    target='_blank'
                    rel='noopener'
                    className='sub-nav-link'
                    onClick={() => {
                      {
                        !mobileMenuState ? toggleMenu() : null
                      }
                      codifyClick('Header / Resources - Documentation')
                    }}
                  >
                    <Api_124 />
                    <span>Documentation</span>
                  </a>
                </div>
                <div className='sub-nav-group'>
                  <Link
                    to='/case-studies'
                    className='sub-nav-link'
                    onClick={() => {
                      {
                        !mobileMenuState ? toggleMenu() : null
                      }
                      codifyClick('Header / Resources - Case Studies')
                    }}
                  >
                    <Growth24 />
                    <span>Case Studies</span>
                  </Link>
                  <Link
                    to='/blog'
                    className='sub-nav-link'
                    onClick={() => {
                      {
                        !mobileMenuState ? toggleMenu() : null
                      }
                      codifyClick('Header / Resources - Blog')
                    }}
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
                    onClick={() => {
                      {
                        !mobileMenuState ? toggleMenu() : null
                      }
                      codifyClick('Header / Resources - Slack')
                    }}
                  >
                    <LogoSlack24 />
                    <span>Slack Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Link
            to='/about'
            className='nav-link'
            onClick={() => {
              {
                !mobileMenuState ? toggleMenu() : null
              }
              codifyClick('Header - Company')
            }}
          >
            {!mobileMenuState ? <Enterprise32 /> : null}
            <span>Company</span>
          </Link>
        </nav>

        {/* Main CTA */}

        <PrimaryCTA text='Talk to us' codify_as='Header - CTA' />
        {mobileMenuState ? (
          <Menu24 className='menu-icon' onClick={toggleMenu} />
        ) : (
          <Close24 className='menu-icon' onClick={toggleMenu} />
        )}
      </div>
    </header>
  )
}

export default Header
