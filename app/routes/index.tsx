import MainFold from '../components/mainFold'
import Fold from '../components/fold'

export function meta (): Meta {
  return {
    title: 'Blotout',
    description: 'Think Privacy. A Federated Data Platform Company. Privacy first. Automation, not just Analytics. Federation, not just Cloud.'
  }
}

export default function Index (): JSX.Element {
  return (
    <>
      <MainFold />
      <Fold number={1} title='Coverage'>
        <>
          <h4>
            Will I be able to analyze 100% of my users?
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
            Can I visualize key events and why conversion fails?
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
            Can I better understand which of my marketing campaigns are most effective?
          </h4>
          <p>
            Blotout automatically assigns referrers and LTV to both organic users and marketed consumers — automatically
            revealing how referrers drive site traffic while providing a clear understanding of conversion metrics.
          </p>
        </>
      </Fold>
      <Fold number={4} title='Data privacy'>
        <>
          <h4>
            How is data collected and governed?
          </h4>
          <p>
            Blotout provides a true cloud-native, open source, SaaS software solution with Business Intelligence tools,
            data governance, and a built-in data warehouse – all securely deployed within your cloud.
          </p>
        </>
      </Fold>
      <Fold number={5} title='Data integration'>
        <>
          <h4>
            Can I integrate my Marketing, CRM, Customer Service, and API data to Blotout?
          </h4>
          <p>
            Your deployed Blotout container comes with a built-in data warehouse and over 100 data integration
            services to automate streaming or data ingestion from third party services. The software also builds a
            unified customer view without any code requirements.
          </p>
        </>
      </Fold>
      <Fold number={6} title='Advertising'>
        <>
          <h4>
            Can I use this for ad monetized websites and apps?
          </h4>
          <p>
            Blotout has built-in Machine Learning that enables 1st Party text classification and demographic
            lookalikes to enable everyday advertising tech.
          </p>
        </>
      </Fold>
    </>
  )
}
