import SlackIcon from '../graphics/icons/slack-icon'
import PrivacyIcons from '../graphics/privacy-icons'
import stylesUrl from '../styles/index.css'

export function meta() {
  return {
    title: 'Blotout',
    description: '',
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function Index() {
  return (
    <div id='home'>
      <div id='hero' className='home-section'>
        <div id='hero-content' className='home-section-content'>
          <div id='hero-title'>
            Cloud prem analytics and marketing attribution for the privacy era
          </div>
          <div id='hero-subtitle'>
            Your third-party analytics and marketing tools are bleeding data.
            Blotout gives you the turnkey cloud prem infrastructure and
            solutions to solve this.
          </div>
          <div id='hero-cta-group'>
            <a
              href='https://calendly.com/blotout-experts'
              target='_blank'
              rel='noopener'
              rel='noreferrer'
              id='hero-primary-cta'
              className='hero-cta'
            >
              Start Free Trial
            </a>
            <a
              href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
              id='hero-secondary-cta'
              target='_blank'
              rel='noopener'
              rel='noreferrer'
              className='hero-cta'
            >
              <div className='cta-icon'>
                <SlackIcon />
              </div>
              <div className='cta-text'>Join our Slack</div>
            </a>
          </div>
          <div id='hero-customer'>
            <div id='hero-customer-text'>
              Trusted by privacy-first organizations
            </div>
            <div id='hero-customer-logo-group'>
              <img
                src='/img/customer/razer.png'
                className='hero-customer-logo'
              />
              <img
                src='/img/customer/uphold.png'
                className='hero-customer-logo'
              />
              <img
                src='/img/customer/swarm-markets.png'
                className='hero-customer-logo'
              />
            </div>
          </div>
        </div>
      </div>

      <div id='explainer' className='home-section'>
        <div id='explainer-content' className='home-section-content'>
          <div id='explainer-title'>
            Fix your measurements, enhance your metrics, and exceed your privacy
            obligations at a fraction of the cost of doing it yourself
          </div>
          <img
            id='explainer-image'
            src='/explainer.png'
            alt='An image illustrating how Blotout can benefit teams'
          />
        </div>
      </div>

      <div id='marketers' className='home-section non-engineer'>
        <div
          id='marketers-content'
          className='home-section-content non-engineer-content'
        >
          <div id='marketers-text-group' className='non-engineer-text-group'>
            <div
              id='marketers-text-heading'
              className='non-engineer-text-heading'
            >
              For Marketers
            </div>
            <div id='marketers-text-title' className='non-engineer-text-title'>
              Accurately measure and optimize conversions in the post-cookie era
            </div>
            <div
              id='marketers-text-subtitle'
              className='non-engineer-text-subtitle'
            >
              Capture your data in-house to accurately measure the value of
              every dollar you spend across the lifetimes of your campaigns.
            </div>
          </div>
          <a
            href='https://calendly.com/blotout-experts'
            target='_blank'
            rel='noopener'
            rel='noreferrer'
            id='marketers-cta'
            className='non-engineer-cta'
          >
            Start Free Trial
          </a>
          <div
            id='marketers-illustration-group'
            className='non-engineer-illustration-group'
          >
            <div
              id='marketers-point-group'
              className='non-engineer-point-group'
            >
              <div className='marketers-point non-engineer-point'>
                Capture every missing user and event
              </div>
              <div className='marketers-point non-engineer-point'>
                Measure true campaign ROI and ROAS
              </div>
              <div className='marketers-point non-engineer-point'>
                Attribute conversions across channels and devices
              </div>
            </div>
            <div
              id='marketers-illustration'
              className='non-engineer-illustration'
            >
              <img
                src='/marketers.png'
                alt='An image illustrating how Blotout can benefit marketers'
              />
            </div>
          </div>
        </div>
      </div>

      <div id='product-managers' className='home-section non-engineer'>
        <div
          id='product-managers-content'
          className='home-section-content non-engineer-content'
        >
          <div
            id='product-managers-text-group'
            className='non-engineer-text-group'
          >
            <div
              id='product-managers-text-heading'
              className='non-engineer-text-heading'
            >
              For Product Managers
            </div>
            <div
              id='product-managers-text-title'
              className='non-engineer-text-title'
            >
              Map the entire customer journey
            </div>
            <div
              id='product-managers-text-subtitle'
              className='non-engineer-text-subtitle'
            >
              Customer journeys go beyond your site and app. Finally see
              journeys with every service ticket, package return, and all your
              other interactions in one place.
            </div>
          </div>
          <a
            href='https://calendly.com/blotout-experts'
            target='_blank'
            rel='noopener'
            rel='noreferrer'
            id='product-managers-cta'
            className='non-engineer-cta'
          >
            Start Free Trial
          </a>
          <div
            id='product-managers-illustration-group'
            className='non-engineer-illustration-group'
          >
            <div
              id='product-managers-point-group'
              className='non-engineer-point-group'
            >
              <div className='product-managers-point non-engineer-point'>
                Optimize your customer funnels
              </div>
              <div className='product-managers-point non-engineer-point'>
                Segment behaviors and personas without code
              </div>
              <div className='product-managers-point non-engineer-point'>
                Personalize content and products with feature flags
              </div>
            </div>
            <div
              id='product-managers-illustration'
              className='non-engineer-illustration'
            >
              <img
                src='/product-managers.png'
                alt='An image illustrating how Blotout can benefit product managers'
              />
            </div>
          </div>
        </div>
      </div>

      <div id='engineers' className='home-section'>
        <div id='engineers-content' className='home-section-content'>
          <div id='engineers-text-group'>
            <div id='engineers-text-heading'>For Engineers</div>
            <div id='engineers-text-title'>
              A complete privacy data engineering stack in your cloud prem
            </div>
            <div id='engineers-text-subtitle'>
              Data engineering is expensive. Engineers aren’t privacy lawyers.
              Solve for both with our no-code customer data infrastructure stack
              built for privacy.
            </div>
          </div>
          <a
            href='https://calendly.com/blotout-experts'
            target='_blank'
            rel='noopener'
            rel='noreferrer'
            id='engineers-cta'
          >
            Start Free Trial
          </a>
          <div id='engineers-illustration'>
            <img
              src='/engineers.png'
              alt='An image illustrating how Blotout can benefit engineers'
            />
          </div>
          <div id='engineers-point-group'>
            <div className='engineers-point'>Deploy to your cloud premise</div>
            <div className='engineers-point'>
              Save millions in engineering time and effort
            </div>
            <div className='engineers-point'>
              Rely on built in-privacy solutions
            </div>
          </div>
        </div>
      </div>

      {/* <div id="blog" className="home-section">
                <div id="blog-content" className="home-section-content"></div>
            </div> */}

      <div id='privacy' className='home-section'>
        <div id='privacy-content' className='home-section-content'>
          <div id='privacy-content-text'>
            <div id='privacy-hashtag'>#PrivacyOps</div>
            <div id='privacy-title'>
              Privacy woven into the fabric of your data infrastructure
            </div>
            <div id='privacy-subtitle'>
              Consent management, audit logs, and governance from the moment of
              ingestion for compliance with the GDPR, CPRA, and all global
              privacy laws.
            </div>
            <div id='privacy-point-group'>
              <div className='privacy-point'>
                Data processing in your cloud prem as Controller
              </div>
              <div className='privacy-point'>
                Integrated consent for subject identity
              </div>
              <div className='privacy-point'>
                Observable and auditable infra
              </div>
              <div className='privacy-point'>
                Governed and secure data management
              </div>
              <div className='privacy-point'>Purpose-limited data sharing</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
