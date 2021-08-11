import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import SlackIcon from '../graphics/icons/slack-icon'

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
        <div id='footer-special'>
          <div id='footer-special-text'>
            Join our community to learn how to take analytics and marketing
            measurement in-house.
          </div>
          <a
            href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
            target='_blank'
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
              <a href='https://docs.blotout.io/' className='footer-nav-link'>
                Overview
              </a>
              <a href='https://docs-js.blotout.io/' className='footer-nav-link'>
                JavaScript
              </a>
              <a
                href='https://docs-ios.blotout.io/'
                className='footer-nav-link'
              >
                iOS
              </a>
              <a
                href='https://docs-android.blotout.io/'
                className='footer-nav-link'
              >
                Android
              </a>
              <a
                href='https://docs-rust.blotout.io/'
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
                id='hero-secondary-cta'
                target='_blank'
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
    </footer>
  )
}
