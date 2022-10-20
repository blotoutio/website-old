import { codifyClick } from '~/utils'

import Section from '~/components/core/Section'
import { Link } from 'react-router-dom'
import LogoLight from '~/graphics/LogoLight'
import AWSPartner from '~/graphics/AWSPartner'
import MetaPartner from '~/graphics/MetaPartner'
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
              {/* Link to home */}

              <Link
                aria-label='Blotout'
                to={'/'}
                className='logo'
                onClick={() => codifyClick('Footer - Logo')}
              >
                <LogoLight />
              </Link>

              {/* Separate link to Slack community */}

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

            {/* Main Navigation */}

            <div className='right'>
              <nav>
                <div className='nav-group'>
                  <div className='nav-group-title'>Product</div>
                  <Link
                    to={{ pathname: './', hash: '#value-props-wrapper' }}
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
                  <Link
                    to='/privacy-policy'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Resources - Privacy Policy')
                    }
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to='/terms-of-service'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Resources - Terms of Service')
                    }
                  >
                    Terms of Service
                  </Link>
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
                  {/* <a
                    href='https://jobs.lever.co/blotout'
                    target='_blank'
                    rel='noreferrer'
                    className='nav-link'
                    onClick={() =>
                      codifyClick('Footer / Company - Careers (Lever)')
                    }
                  >
                    Careers
                  </a> */}
                  <Link
                    to='/blog'
                    className='nav-link'
                    onClick={() => codifyClick('Footer / Company - Blog')}
                  >
                    Blog
                  </Link>
                </div>
              </nav>
            </div>
          </div>

          <div className='bottom'>
            {/* Social Links */}

            <div className='social-links'>
              <a
                aria-label='Twitter'
                href='https://twitter.com/blotout_io'
                target='_blank'
                rel='noreferrer'
                onClick={() => codifyClick('Footer - Twitter')}
              >
                <LogoTwitter24 />
              </a>

              <a
                aria-label='LinkedIn'
                href='https://www.linkedin.com/company/blotout/'
                target='_blank'
                rel='noreferrer'
                onClick={() => codifyClick('Footer - LinkedIn')}
              >
                <LogoLinkedin24 />
              </a>
            </div>

            {/* Legal Links */}

            <div className='legal-links'>
              <div>
                <AWSPartner />
              </div>

              <div>
                <a
                  href='https://www.facebook.com/business/partner-directory/search?solution_type=offline_conversion&ref=pd_home_hero_cta&id=5504531309632254&section=overview'
                  target='_blank'
                  rel='noreferrer'
                  onClick={() => codifyClick('Footer - Meta Partner Badge')}
                >
                  <MetaPartner />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
