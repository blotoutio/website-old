import { codifyClick } from '~/utils'

import Section from '~/components/core/Section'
import { Link } from 'react-router-dom'
import LogoLight from '~/graphics/LogoLight'
import { LogoTwitter24 } from '@carbon/icons-react'
import { LogoLinkedin24 } from '@carbon/icons-react'
import { ArrowUpRight16 } from '@carbon/icons-react'

const Footer = () => {
  return (
    <footer>
      <div id='footer-styled-container'>
        <div id='footer-container'>
          <div className='top'>
            <div className='left'>
              <Link
                to={'/'}
                className='logo'
                onClick={() => codifyClick('Footer - Logo')}
              >
                <LogoLight />
              </Link>

              <div className='slack-invitation'>
                <div className='invitation-text'>
                  Learn how to take analytics and marketing measurement
                  in‑house.
                </div>
                <a
                  href='https://blotout-shared.slack.com'
                  target='_blank'
                  rel='noreferrer'
                  className='invitation-link'
                  onClick={() => codifyClick('Footer - Slack (Separate)')}
                >
                  <span>Join Slack Community</span>
                  <ArrowUpRight16 />
                </a>
              </div>
            </div>
            <div className='right'>
              <div className='nav'>
                <div className='nav-group'>
                  <div className='nav-group-title'>Product</div>
                  <Link
                    to={{ pathname: './', hash: '#main-section' }}
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Product - Overview (Home)')
                    }
                  >
                    Overview
                  </Link>
                  <Link
                    to='/integrations'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Product - Integrations')
                    }
                  >
                    Integrations
                  </Link>
                  <Link
                    to={{ pathname: './', hash: '#marketer' }}
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Product - For Marketers (Home')
                    }
                  >
                    For Marketers
                  </Link>
                  <Link
                    to={{ pathname: './', hash: '#product-manager' }}
                    className='nav-link'
                    onClick={() =>
                      codifyClick(
                        'Footer / Product - For Product Managers (Home)'
                      )
                    }
                  >
                    For Product Managers
                  </Link>
                  <Link
                    to={{ pathname: './', hash: '#engineer' }}
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Product - For Engineers (Home)')
                    }
                  >
                    For Engineers
                  </Link>
                </div>
                <div className='nav-group'>
                  <div className='nav-group-title'>Documentation</div>
                  <a
                    href='https://help.blotout.io'
                    target='_blank'
                    rel='noopener'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Documentation - Help Center')
                    }
                  >
                    Help Center
                  </a>
                  <a
                    href='https://docs.blotout.io'
                    target='_blank'
                    rel='noopener'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Documentation - API Documentation')
                    }
                  >
                    API Documentation
                  </a>
                </div>
                <div className='nav-group'>
                  <div className='nav-group-title'>Resources</div>
                  <Link
                    to='/case-studies'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Resources - Case Studies')
                    }
                  >
                    Case Studies
                  </Link>
                  <a
                    href='https://help.blotout.io/core-features'
                    target='_blank'
                    rel='noopener'
                    className='nav-link'
                    onClick={() =>
                      codifyClick(
                        'Footer / Resources - Core Features (Help Center)'
                      )
                    }
                  >
                    Core Features
                  </a>
                  <a
                    href='https://help.blotout.io/creating-utility'
                    target='_blank'
                    rel='noopener'
                    className='nav-link'
                    onClick={() =>
                      codifyClick(
                        'Footer / Resources - Creating Utility (Help Center)'
                      )
                    }
                  >
                    Creating Utility
                  </a>
                  <a
                    href='https://blotout-shared.slack.com'
                    target='_blank'
                    rel='noreferrer'
                    className='nav-link'
                    onClick={() => codifyClick('Footer / Resources - Slack')}
                  >
                    Slack Community
                  </a>
                </div>
                <div className='nav-group'>
                  <div className='nav-group-title'>Company</div>
                  <Link
                    to='/about'
                    className='nav-link'
                    onClick={() => codifyClick('Footer / Company - About')}
                  >
                    About
                  </Link>
                  <a
                    href='https://jobs.lever.co/blotout'
                    target='_blank'
                    rel='noreferrer'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Company - Careers (Lever)')
                    }
                  >
                    Careers
                  </a>
                  <Link
                    to='/blog'
                    className='nav-link'
                    onClick={() => codifyClick('Footer / Company - Blog')}
                  >
                    Blog
                  </Link>
                  <a
                    href='https://help.blotout.io/roadmap'
                    target='_blank'
                    rel='noopener'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Company - Roadmap (Help Center)')
                    }
                  >
                    Roadmap
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <div className='social-links'>
              <a
                href='https://twitter.com/blotout_io'
                target='_blank'
                rel='noreferrer'
                onClick={() => codifyClick('Footer - Twitter')}
              >
                <LogoTwitter24 />
              </a>
              <a
                href='https://www.linkedin.com/company/blotout/'
                target='_blank'
                rel='noreferrer'
                onClick={() => codifyClick('Footer - LinkedIn')}
              >
                <LogoLinkedin24 />
              </a>
            </div>
            <div className='legal-links'>
              <Link
                to='/privacy-policy'
                onClick={() => codifyClick('Footer - Privacy Policy')}
              >
                Privacy Policy
              </Link>
              <Link
                to='/terms-of-service'
                onClick={() => codifyClick('Footer - Terms of Service')}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer