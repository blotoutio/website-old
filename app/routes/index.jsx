import SlackIcon from '../graphics/icons/slack-icon'
import stylesUrl from '../styles/index.css'
import { codifyClick, metaInfo } from '../utils'
import PersonaSectionWithPoints from '~/components/home/PersonaSectionWithPoints'
import SectionPoint from '~/components/home/PersonaSectionWithPoints/SectionPoint'

export function meta() {
  return metaInfo('')
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
            The customer data platform reimagined for the privacy era
          </h1>
          <p id='hero-subtitle'>
            Join the trusted enterprises that activate customer journeys with
            100% visibility using Blotout’s trusted solutions
            infrastructure-as-code.
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
              Trusted organizations rely on Blotout
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
          <h2 id='explainer-title'>Reignite your growth stack</h2>
          <p>
            Blotout lets you capture every customer data point -- without loss
            -- to bring accuracy back to your growth stack.
          </p>
          <img
            id='explainer-image'
            src='/img/main/explainer.png'
            alt='A table illustrating how Blotout can benefit teams by being simpler, faster and significantly cost-effective than buidling your own expensive infrastructure or using third-party services plagued with problems like data loss. It also illustrates how Blotout offers everything from CDP, ELT + reverse El and data modeling to BI, privacy compliance and data governance'
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
              For growth marketing teams
            </div>
            <h2 id='marketers-text-title' className='non-engineer-text-title'>
              Maximize your marketing spend in our post-cookie world
            </h2>
            <p
              id='marketers-text-subtitle'
              className='non-engineer-text-subtitle'
            >
              Measure, attribute, optimize, and activate customer data with 100%
              customer coverage.
            </p>
          </div>
          <div
            id='marketers-illustration-group'
            className='non-engineer-illustration-group'
          >
            <div
              id='marketers-illustration'
              className='non-engineer-illustration'
            >
              <img
                src='/img/main/marketers.png'
                alt='A diagram illustrating how Blotout can benefit marketers by letting them capture 100% of their website visitors compared to only 30-50% when using third-party services like Facebook, Google Analytics and Segment'
              />
            </div>
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
        </div>
      </div>

      <PersonaSectionWithPoints
        persona='product-managers'
        title='For product-led growth teams'
        heading='Build better customer journeys'
        sub_heading='The only stack that combines 100% of your digital and offline data
      to give you total customer lifecycle visibility.'
        image_src='img/main/product-managers.png'
        image_alt='A diagram illustrating how the Blotout infrastructure can be deployed under two hours and that it comprises of only three steps - configuration, deployment and scaling'
        codify_as='PM - Trial'
      >
        <SectionPoint
          heading='Combine online and offline journeys'
          sub_heading=''
        />
        <SectionPoint
          heading='Navigate forwards and backwards from an event in time'
          sub_heading=''
        />
        <SectionPoint
          heading='Build trusted relationships with your customers'
          sub_heading=''
        />
      </PersonaSectionWithPoints>

      <PersonaSectionWithPoints
        persona='engineers'
        title='For engineering teams'
        heading='Solutions infrastructure-as-code that builds trust'
        sub_heading='Data engineering is expensive. Engineers aren’t lawyers. Solve for
      both.'
        image_src='img/main/engineers.png'
        image_alt='A diagram illustrating how the Blotout infrastructure can be deployed under two hours and that it comprises of only three steps - configuration, deployment and scaling'
        codify_as='Engineer - Trial'
      >
        <SectionPoint
          heading='Infra-as-code with Terraform'
          sub_heading='Deploy at the CDN edge and 250 data centers globally.'
        />
        <SectionPoint
          heading='Serverless data architecture'
          sub_heading='Airflow and Superset containers built in. DBT pipelines.'
        />
        <SectionPoint
          heading='Zero code unified user graph'
          sub_heading='SDKs for clickstream. EL +T for online and offline sources.
      UI-based data unification.'
        />
      </PersonaSectionWithPoints>

      <div id='privacy' className='home-section'>
        <div id='privacy-content' className='home-section-content'>
          <div id='privacy-content-text'>
            <div id='privacy-hashtag'>#TrustOps</div>
            <h2 id='privacy-title'>
              A trusted relationship is a compliant relationship
            </h2>
            <p id='privacy-subtitle'>
              Establish a trusted data relationship with your customers to build
              loyalty while reducing compliance risk.
            </p>
          </div>
          <a
            href='https://calendly.com/blotout-experts'
            target='_blank'
            rel='noreferrer'
            id='privacy-cta'
            onClick={() => codifyClick('Privacy - Trial')}
          >
            Start Free Trial
          </a>
        </div>
      </div>
    </div>
  )
}
