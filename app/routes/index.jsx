import SlackIcon from '../graphics/icons/slack-icon'
import stylesUrl from '../styles/index.css'
import { codifyClick } from '../utils'

export function meta() {
  return {
    title: 'Blotout',
    description:
      'Serverless data infrastructure to capture, analyze, and activate customer data as a first-party',
    'og:title': 'Blotout',
    'og:description':
      'Serverless data infrastructure to capture, analyze, and activate customer data as a first-party',
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
          <h1 id='hero-title'>
            Serverless analytics and marketing attribution for the privacy era
          </h1>
          <p id='hero-subtitle'>
            Your third-party analytics and marketing tools are bleeding data.
            Blotout gives you the turnkey infrastructure and solutions to solve
            this.
          </p>
          <div id='hero-cta-group'>
            <a
              href='https://calendly.com/blotout-experts'
              target='_blank'
              rel='noreferrer'
              id='hero-primary-cta'
              className='hero-cta'
              onClick={() => codifyClick('Hero - Trial')}
            >
              Start Free Trial
            </a>
            <a
              href='https://join.slack.com/t/blotout-shared/shared_invite/zt-nzwq4zpj-hOpfoZUs9Ar0n~fSxPBaSw'
              id='hero-secondary-cta'
              target='_blank'
              rel='noreferrer'
              className='hero-cta'
              onClick={() => codifyClick('Hero - Slack')}
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
              <div className='hero-customer-logo'>
                <img
                  src='/img/customer/razer.png'
                  alt='A logo of the company Razer'
                />
              </div>
              <div className='hero-customer-logo'>
                <img
                  src='/img/customer/uphold.png'
                  alt='A logo of the company Uphold'
                />
              </div>
              <div className='hero-customer-logo'>
                <img
                  src='/img/customer/swarm-markets.png'
                  alt='A logo of the company Swarm Markets'
                />
              </div>
              <div className='hero-customer-logo'>
                <img
                  src='/img/customer/global-id.png'
                  alt='A logo of the company GlobaliD'
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id='explainer' className='home-section'>
        <div id='explainer-content' className='home-section-content'>
          <h2 id='explainer-title'>
            Fix your measurements, enhance your metrics, and exceed your privacy
            obligations at a fraction of the cost of doing it yourself
          </h2>
          <img
            id='explainer-image'
            src='/img/main/explainer.png'
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
            <h2 id='marketers-text-title' className='non-engineer-text-title'>
              Accurately measure and optimize conversions in the post-cookie era
            </h2>
            <p
              id='marketers-text-subtitle'
              className='non-engineer-text-subtitle'
            >
              Capture your data in-house to accurately measure the value of
              every dollar you spend across the lifetimes of your campaigns.
            </p>
          </div>
          <a
            href='https://calendly.com/blotout-experts'
            target='_blank'
            rel='noreferrer'
            id='marketers-cta'
            className='non-engineer-cta'
            onClick={() => codifyClick('Marketer - Trial')}
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
              <h3 className='marketers-point non-engineer-point'>
                Capture every missing user and event
              </h3>
              <h3 className='marketers-point non-engineer-point'>
                Measure true campaign ROI and ROAS
              </h3>
              <h3 className='marketers-point non-engineer-point'>
                Attribute conversions across channels and devices
              </h3>
            </div>
            <div
              id='marketers-illustration'
              className='non-engineer-illustration'
            >
              <img
                src='/img/main/marketers.png'
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
            <h2
              id='product-managers-text-title'
              className='non-engineer-text-title'
            >
              Map the entire customer journey
            </h2>
            <p
              id='product-managers-text-subtitle'
              className='non-engineer-text-subtitle'
            >
              Customer journeys go beyond your site and app. Finally see
              journeys with every service ticket, package return, and all your
              other interactions in one place.
            </p>
          </div>
          <a
            href='https://calendly.com/blotout-experts'
            target='_blank'
            rel='noreferrer'
            id='product-managers-cta'
            className='non-engineer-cta'
            onClick={() => codifyClick('PM - Trial')}
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
              <h3 className='product-managers-point non-engineer-point'>
                Optimize your customer funnels
              </h3>
              <h3 className='product-managers-point non-engineer-point'>
                Segment behaviors and personas without code
              </h3>
              <h3 className='product-managers-point non-engineer-point'>
                Personalize content and products with feature flags
              </h3>
            </div>
            <div
              id='product-managers-illustration'
              className='non-engineer-illustration'
            >
              <img
                src='/img/main/product-managers.png'
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
            <h2 id='engineers-text-title'>
              A complete privacy data engineering stack as infrastructure
            </h2>
            <p id='engineers-text-subtitle'>
              Data engineering is expensive. Engineers aren’t privacy lawyers.
              Solve for both with our no-code customer data infrastructure stack
              built for privacy.
            </p>
          </div>
          <a
            href='https://calendly.com/blotout-experts'
            target='_blank'
            rel='noreferrer'
            id='engineers-cta'
            onClick={() => codifyClick('Engineer - Trial')}
          >
            Start Free Trial
          </a>
          <div id='engineers-illustration'>
            <img
              src='/img/main/engineers.png'
              alt='An image illustrating how Blotout can benefit engineers'
            />
          </div>
          <div id='engineers-point-group'>
            <h3 className='engineers-point'>Deploy as your infrastructure</h3>
            <h3 className='engineers-point'>
              Save millions in engineering time and effort
            </h3>
            <h3 className='engineers-point'>
              Rely on built in-privacy solutions
            </h3>
          </div>
        </div>
      </div>

      <div id='privacy' className='home-section'>
        <div id='privacy-content' className='home-section-content'>
          <div id='privacy-content-text'>
            <div id='privacy-hashtag'>#PrivacyOps</div>
            <h2 id='privacy-title'>
              Privacy woven into the fabric of your data infrastructure
            </h2>
            <p id='privacy-subtitle'>
              Consent management, audit logs, and governance from the moment of
              ingestion for compliance with global privacy laws.
            </p>
            <div id='privacy-point-group'>
              <h3 className='privacy-point'>
                Data processing in your infrastructure as Controller
                <img src='/img/check.svg' alt='A check mark' />
              </h3>
              <h3 className='privacy-point'>
                Integrated consent for subject identity
                <img src='/img/check.svg' alt='A check mark' />
              </h3>
              <h3 className='privacy-point'>
                Observable and auditable infra
                <img src='/img/check.svg' alt='A check mark' />
              </h3>
              <h3 className='privacy-point'>
                Governed and secure data management
                <img src='/img/check.svg' alt='A check mark' />
              </h3>
              <h3 className='privacy-point'>
                Purpose-limited data sharing
                <img src='/img/check.svg' alt='A check mark' />
              </h3>
              <h3 className='privacy-point special'>
                GDPR, CCPA, CPRA, POPIA, LGPD
                <img src='/img/check.svg' alt='A check mark' />
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
