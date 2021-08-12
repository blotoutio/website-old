import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import SlackIcon from '../graphics/icons/slack-icon'
import TwitterIcon from '../graphics/icons/twitter-icon'
import LinkedInIcon from '../graphics/icons/linkedin-icon'

export const Footer = () => {
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
                >
                  Overview
                </Link>
                <Link to='/integrations' className='footer-nav-link'>
                  Integrations
                </Link>
                <Link
                  to={{ pathname: './', hash: '#marketers' }}
                  className='footer-nav-link'
                >
                  For Marketers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#product-managers' }}
                  className='footer-nav-link'
                >
                  For Product Managers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#engineers' }}
                  className='footer-nav-link'
                >
                  For Engineers
                </Link>
                <Link
                  to={{ pathname: './', hash: '#privacy' }}
                  className='footer-nav-link'
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
                >
                  Overview
                </a>
                <a
                  href='https://docs-js.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                >
                  JavaScript
                </a>
                <a
                  href='https://docs-ios.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                >
                  iOS
                </a>
                <a
                  href='https://docs-android.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                >
                  Android
                </a>
                <a
                  href='https://docs-rust.blotout.io/'
                  target='_blank'
                  rel='noopener'
                  className='footer-nav-link'
                >
                  Rust / C++
                </a>
              </div>
            </div>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Resources</div>
              <div className='footer-nav-link-group'>
                <Link to='/blog' className='footer-nav-link'>
                  Blog
                </Link>
                <Link to='/case-studies' className='footer-nav-link'>
                  Case Studies
                </Link>
                <a
                  href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
                  target='_blank'
                  rel='noreferrer'
                  className='footer-nav-link'
                >
                  Slack Community
                </a>
              </div>
            </div>
            <div className='footer-nav-group'>
              <div className='footer-nav-heading'>Company</div>
              <div className='footer-nav-link-group'>
                <Link to='/about' className='footer-nav-link'>
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div id='footer-rest'>
          <div id='footer-social'>
            <a
              href='https://twitter.com/blotout3'
              target='_blank'
              rel='noreferrer'
            >
              <TwitterIcon />
            </a>
            <a
              href='https://www.linkedin.com/company/blotout/'
              target='_blank'
              rel='noreferrer'
            >
              <LinkedInIcon />
            </a>
          </div>
          <div id='footer-legal'>
            <Link to='/privacy-policy'>Privacy Policy</Link>
            <Link to='/terms-of-service'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
