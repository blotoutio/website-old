{
  /* import { codifyClick } from '~/utils' */
}

import Section from '~/components/core/Section'
import { Link } from 'react-router-dom'
import LogoLight from '~/graphics/LogoLight'
import { navigation_main } from '~/data/core/Footer/navigation_main'
import { LogoTwitter24 } from '@carbon/icons-react'
import { LogoLinkedin24 } from '@carbon/icons-react'

const Footer = () => {
  return (
    <footer>
      <div id='footer-styled-container'>
        <div id='footer-container'>
          <div className='top'>
            <Link to={'/'} className='logo'>
              <LogoLight />
            </Link>
            <div className='nav'>
              <div className='nav-group'>
                <div className='nav-group-title'>Product</div>
                <Link
                  to={{ pathname: './', hash: '#main-section' }}
                  className='nav-link'
                >
                  Overview
                </Link>
                <Link to='/integrations' className='nav-link'>
                  Integrations
                </Link>
                <Link
                  to={{ pathname: './', hash: '#marketer' }}
                  className='nav-link'
                >
                  For Marketers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#product-manager' }}
                  className='nav-link'
                >
                  For Product Managers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#engineer' }}
                  className='nav-link'
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
                >
                  Help Center
                </a>
                <a
                  href='https://docs.blotout.io'
                  target='_blank'
                  rel='noopener'
                  className='nav-link'
                >
                  API Documentation
                </a>
              </div>
              <div className='nav-group'>
                <div className='nav-group-title'>Resources</div>
                <Link to='/case-studies' className='nav-link'>
                  Case Studies
                </Link>
                <a
                  href='https://help.blotout.io/core-features'
                  target='_blank'
                  rel='noopener'
                  className='nav-link'
                >
                  Core Features
                </a>
                <a
                  href='https://help.blotout.io/creating-utility'
                  target='_blank'
                  rel='noopener'
                  className='nav-link'
                >
                  Creating Utility
                </a>
                <a
                  href='https://blotout-shared.slack.com'
                  target='_blank'
                  rel='noreferrer'
                  className='nav-link'
                >
                  Slack Community
                </a>
              </div>
              <div className='nav-group'>
                <div className='nav-group-title'>Company</div>
                <Link to='/about' className='nav-link'>
                  About
                </Link>
                <a
                  href='https://jobs.lever.co/blotout'
                  target='_blank'
                  rel='noreferrer'
                  className='nav-link'
                >
                  Careers
                </a>
                <Link to='/blog' className='nav-link'>
                  Blog
                </Link>
                <a
                  href='https://help.blotout.io/roadmap'
                  target='_blank'
                  rel='noopener'
                  className='nav-link'
                >
                  Roadmap
                </a>
              </div>
            </div>
          </div>
          <div className='bottom'>
            <div className='social-links'>
              <a
                href='https://twitter.com/blotout_io'
                target='_blank'
                rel='noreferrer'
              >
                <LogoTwitter24 />
              </a>
              <a
                href='https://www.linkedin.com/company/blotout/'
                target='_blank'
                rel='noreferrer'
              >
                <LogoLinkedin24 />
              </a>
            </div>
            <div className='legal-links'>
              <Link to='/privacy-policy'>Privacy Policy</Link>
              <Link to='/terms-of-service'>Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    /* <footer>
      <div id='footer-content'>
        <div id='footer-main'>
          <div id='footer-special'>
            <div id='footer-special-text'>
              Join our community to learn how to take analytics and marketing
              measurement in&#8209;house.
            </div>
            <a
              href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
              target='_blank'
              rel='noreferrer'
              id='footer-special-cta'
              onClick={() => codifyClick('Footer - Slack Button')}
            >
              <div className='cta-icon'>
                <SlackIcon />
              </div>
              <div className='cta-text'>Join our Slack</div>
            </a>
          </div>

          <div id='footer-nav'>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Product</div>
              <Link to={} className='footer-nav-link-groLink>
                <Link
                  to={{ pathname: './', hash: '#explainer' }}
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Product Overview')}
                >
                  Overview
                </Link>
                <Link
                  to='/integrations'
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Product Integrations')}
                >
                  Integrations
                </Link>
                <Link
                  to={{ pathname: './', hash: '#marketers' }}
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Product Marketers')}
                >
                  For Marketers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#product-managers' }}
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Product PM')}
                >
                  For Product Managers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#engineers' }}
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Product Engineers')}
                >
                  For Engineers
                </Link>
              </div>
            </div>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Docs</div>
              <Link to={} className='footer-nav-link-groLink>
                <a
                  href='https://docs.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Docs Overview')}
                >
                  Overview
                </a>
              </div>
            </div>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Resources</div>
              <Link to={} className='footer-nav-link-groLink>
                <Link
                  to='/blog'
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Resources Blog')}
                >
                  Blog
                </Link>
                <Link
                  to='/case-studies'
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Resources Studies')}
                >
                  Case Studies
                </Link>
                <a
                  href='https://help.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Menu - Help Center')}
                >
                  Help Center
                </a>
                <a
                  href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
                  target='_blank'
                  rel='noreferrer'
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Resources Slack')}
                >
                  Slack Community
                </a>
              </div>
            </div>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Company</div>
              <Link to={} className='footer-nav-link-groLink>
                <Link
                  to='/about'
                  cLink to={}sName='footer-nav-lLink'
                  onClick={() => codifyClick('Footer - Company About')}
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id='footer-rest'>
          <div id='footer-social'>
            <a
              href='https://twitter.com/blotout_io'
              target='_blank'
              rel='noreferrer'
              onClick={() => codifyClick('Footer - Twitter')}
            >
              <TwitterIcon />
            </a>
            <a
              href='https://www.linkedin.com/company/blotout/'
              target='_blank'
              rel='noreferrer'
              onClick={() => codifyClick('Footer - LinkedIn')}
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </footer> */
  )
}

export default Footer
