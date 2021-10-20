import { Link } from 'react-router-dom'
import SlackIcon from '../../graphics/icons/slack-icon'
import TwitterIcon from '../../graphics/icons/twitter-icon'
import LinkedInIcon from '../../graphics/icons/linkedin-icon'
import { codifyClick } from '../../utils'

const Footer = () => {
  return (
    <footer>
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
              <div className='footer-nav-link-group'>
                <Link
                  to={{ pathname: './', hash: '#explainer' }}
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Product Overview')}
                >
                  Overview
                </Link>
                <Link
                  to='/integrations'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Product Integrations')}
                >
                  Integrations
                </Link>
                <Link
                  to={{ pathname: './', hash: '#marketers' }}
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Product Marketers')}
                >
                  For Marketers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#product-managers' }}
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Product PM')}
                >
                  For Product Managers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#engineers' }}
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Product Engineers')}
                >
                  For Engineers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#privacy' }}
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Product Privacy')}
                >
                  For Privacy Teams
                </Link>
              </div>
            </div>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Docs</div>
              <div className='footer-nav-link-group'>
                <a
                  href='https://docs.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Docs Overview')}
                >
                  Overview
                </a>
                <a
                  href='https://docs-js.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Docs JS')}
                >
                  JavaScript
                </a>
                <a
                  href='https://docs-ios.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Docs iOS')}
                >
                  iOS
                </a>
                <a
                  href='https://docs-android.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Docs Android')}
                >
                  Android
                </a>
                <a
                  href='https://docs-rust.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Docs Rust')}
                >
                  Rust / C++
                </a>
              </div>
            </div>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Resources</div>
              <div className='footer-nav-link-group'>
                <Link
                  to='/blog'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Resources Blog')}
                >
                  Blog
                </Link>
                <Link
                  to='/case-studies'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Resources Studies')}
                >
                  Case Studies
                </Link>
                <a
                  href='https://help.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Menu - Help Center')}
                >
                  Help Center
                </a>
                <a
                  href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
                  target='_blank'
                  rel='noreferrer'
                  className='footer-nav-link'
                  onClick={() => codifyClick('Footer - Resources Slack')}
                >
                  Slack Community
                </a>
              </div>
            </div>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Company</div>
              <div className='footer-nav-link-group'>
                <Link
                  to='/about'
                  className='footer-nav-link'
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
          <div id='footer-legal'>
            <Link
              to='/privacy-policy'
              onClick={() => codifyClick('Footer - Privacy Policy')}
            >
              Privacy Policy
            </Link>
            <Link
              to='/terms-of-service'
              onClick={() => codifyClick('Footer - TOS')}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
