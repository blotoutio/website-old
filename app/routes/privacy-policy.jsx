import stylesUrl from '../styles/legal.css'

export function meta() {
  return {
    title: 'Blotout - Privacy Policy',
    description:
      'Cloud prem data infrastructure to capture, analyze, and activate customer data as a first-party',
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

export default function PrivacyPolicy() {
  return (
    <div id='privacy-policy' className='legal'>
      <div id='privacy-policy-header' className='legal-header'>
        <div
          id='privacy-policy-header-content'
          className='legal-header-content'
        >
          <h1 id='privacy-policy-title' className='legal-title'>
            Privacy Policy
          </h1>
        </div>
      </div>

      <div id='privacy-policy-text' className='legal-text'>
        <div id='privacy-policy-text-content' className='legal-text-content'>
          <p>
            Blotout, Inc (“us”, “we”, or “our”) operates Blotout Software
            Development kit (SDK) and the Blotout Server (the “SDK”). Blotout,
            Inc also operates blotout.io (the “Site”).
          </p>
          <p>
            This page informs you of the SDK’s policies regarding the
            collection, use and disclosure of Personal Information that may be
            received due to our Customer’s application’s (the “Application”) use
            of the SDK by their users (the “Consumer”). The Consumer generates
            events (the “Events”) by virtue of using the Application.
          </p>
          <p>
            This policy statement does not cover the Consumer for data collected
            by our customer’s use of the SDK.
          </p>
          <p>
            <span>SDK statements</span>
          </p>
          <p>
            The SDK, by design, can not collect any personal information or
            personal identifiers (“IDs”) or IP address for any of its Consumer’s
            data By design, the SDK keeps the Consumer’s behavioral data and
            personal information generated via the Application locally, on the
            Consumer’s device (Smartphone or Computer) and Events with no ID or
            IP are sent to the SDK server in a random time sequence Any location
            data tagged to Events is generated by the SDK within the Application
            on the Consumer’s device and does not allow for narrowing beyond a
            country or city to prevent location re-identification. By design, no
            data from the Consumer can be used by the SDK to be matched or used
            against any third party for re-identification or re-marketing
            purposes
          </p>
          <p>
            <span>Site statements</span>
          </p>
          <p>
            The Site does not track or collect any data from any visitor
            Personal information without the visitor opting in to product or
            promotional updates.
          </p>
          <p>
            <span>Information Collection And Use</span>
          </p>
          <p>
            The SDK generates and collects Events via Application, and does not
            provide any tools for matching Events with any third party for
            retargeting or remarketing purposes. By design, the SDK stores any
            correlated Events on the Consumer’s device, and shares isolated
            Events in a random sequence with the Server for Business
            Intelligence purposes; no personal data – Device or Advertising
            Identifiers or IP address – is shared with the server.
          </p>
          <p>
            The Customer’s registration data used via creating accounts with the
            SDK may be used to send SDK updates and promotions. Customer’s data
            is deleted automatically when the Customer account is deleted,
            besides requirements for financial documentation needs.
          </p>
          <p>
            While using our Site, you may choose to provide us with certain
            personally identifiable information (email address) that can be used
            to send you product and marketing updates specific to the SDK. This
            data is kept securely and not resold or used for any other purpose.
            This data (email address) is deleted when you opt out of the email
            marketing service.
          </p>
          <p>
            <span>Communications</span>
          </p>
          <p>
            We may use your Personal Information, that you opted-in via the Site
            or collected via account registration, to contact you with
            newsletters, marketing or promotional materials specific to the SDK
            only.
          </p>
          <p>
            <span>Cookies or other identifiers</span>
          </p>
          <p>
            The SDK or the Site does not collect any cookie identifiers or
            Device identifiers that are specific to any user. No IP addresses
            are collected by the SDK or the Site.
          </p>
          <p>
            <span>Security</span>
          </p>
          <p>
            The security of your Personal information collected via the Site or
            via account registration with the SDK is important to us. While we
            use industry standard means to protect your Personal Information
            opted in via the Site or collected via account registration with the
            SDK, we cannot guarantee its absolute security.
          </p>
          <p>The SDK collects no Personal information for any Consumer.</p>
          <p>
            <span>Changes To This Privacy Policy</span>
          </p>
          <p>
            This Privacy Policy is effective as of March 30, 2020 and will
            remain in effect except with respect to any changes in its
            provisions in the future, which will be in effect immediately after
            being posted on this page.
          </p>
          <p>
            We reserve the right to update or change our Privacy Policy at any
            time and you should check this Privacy Policy periodically. Your
            continued use of the Service after we post any modifications to the
            Privacy Policy on this page will constitute your acknowledgment of
            the modifications and your consent to abide and be bound by the
            modified Privacy Policy.
          </p>
          <p>
            If we make any material changes to this Privacy Policy, we will
            notify you by placing a prominent notice on our website.
          </p>
          <p>
            <span>Contact Us</span>
          </p>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </div>
      </div>
    </div>
  )
}
