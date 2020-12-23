import MainFold from '../components/mainFold'
import Fold from '../components/fold'

export function meta (): Meta {
  return {
    title: 'Blotout',
    description: 'One enterprise-grade privacy analytics platform to capture product analytics, integrate all customer data, and activate it for doubling revenue..'
  }
}

export default function Index (): JSX.Element {
  return (
    <>
      <MainFold />
      <Fold number={1} title='Coverage'>
        <>
          <h4>
            Can I be able to analyze 100% of my customer journeys?
          </h4>
          <p>
            Unlike traditional cross site tracking providers, Blotout installs in your cloud,
            enabling you to analyze 100% of users.
          </p>
        </>
      </Fold>
      <Fold number={2} title='Product analytics'>
        <>
          <h4>
            Can I perform cohort analysis via custom segments?
          </h4>
          <p>
            Blotout automates cross platform system event collection and developer codified events – providing clear
            articulation of user type conversions and fallouts.
          </p>
        </>
      </Fold>
      <Fold number={3} title='Marketing analytics'>
        <>
          <h4>
            Can I optimize spend real time and assign LTV per referrer?
          </h4>
          <p>
            Blotout automatically assigns referrers and LTV to both organic users and marketed consumers — automatically
            revealing how referrers drive site traffic while providing a clear understanding of conversion metrics.
          </p>
        </>
      </Fold>
      <Fold number={4} title='Data governance'>
        <>
          <h4>
            Can I create access policies and generate audit logs?
          </h4>
          <p>
            Blotout provides row and column level access management. RBAC provides role based access while as columns
            are text classified for automatic PII and PHI detection. Explicit policies need to be created to access
            PII and PHI. Custom policies need zero code.
          </p>
        </>
      </Fold>
      <Fold number={5} title='Data Integrations'>
        <>
          <h4>
            Can I integrate all of my customer data via no code?
          </h4>
          <p>
            The Blotout container comes with an enterprise grade warehouse and data connectors that require no
            expertise. Plug and play your data at any frequency, and build out your customer data platform that
            requires no coding.
          </p>
        </>
      </Fold>
      <Fold number={6} title='1st Party DMP'>
        <>
          <h4>
            Can I build my 1st party DMP using Blotout?
          </h4>
          <p>
            Blotout uses a NLP based text classifier that automatically segments your content to IAB V2 and Demographic
            lookalikes. Besides segmentation, you can generate brand safety context alongside.
            No software required - 3 clicks and done.
          </p>
        </>
      </Fold>
    </>
  )
}
