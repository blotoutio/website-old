import stylesUrl from '../styles/legal.css'
import { metaInfo } from '../utils'

import SubHeader from '~/components/core/SubHeader'

export function meta() {
  return metaInfo('Terms of Service')
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesUrl,
    },
  ]
}

export default function TermsOfService() {
  return (
    <div className='legal-new'>
      <SubHeader
        heading='Terms of Service'
        sub_heading='Last Updated: November 30, 2021'
      />
      <div id='terms-of-service' className='legal'>
        <div id='terms-of-service-text' className='legal-text'>
          <div
            id='terms-of-service-text-content'
            className='legal-text-content'
          >
            <p>
              These Terms of Service (“<strong>Terms</strong>”) govern your
              access and use of our online services (the “
              <strong>Services</strong>”), which also includes services or other
              products or features made available by us to you on an unpaid
              trial or free basis (the “<strong>Free Services</strong>”). These
              Terms and any Order Form together form a binding “
              <strong>Contract</strong>” between Customer and us. “Customer” is
              the organization that you represent in agreeing to the Contract;
              “we,” “our,” and “us” refer to Blotout, Inc. You may purchase a
              subscription via an order form entered into between Customer and
              us (“<strong>Order Form</strong>”); in so doing, you agree to the
              then-current Contract on behalf of Customer. Free Services may be
              made available without an Order Form. Customer represents and
              warrants that it has validly entered into the Contract and has the
              legal power to do so. Subscriptions commence when we make them
              available to Customer and continue for the term specified in the
              Order Form; fees are specified in the Order Form. The foregoing
              sentence does not apply to Free Services, which are described
              below.
            </p>

            <p>
              We will make available the Services, or may make available the
              Free Services, in accordance with these Terms. All of our rights
              not expressly granted by these Terms are hereby retained.
            </p>

            <p>
              Customer may make data, including personal data, available to the
              Services (“<strong>Customer Data</strong>”). Customer grants us a
              worldwide, limited-term license to host, copy, use, transmit, and
              display Customer Data or any Third-Party Apps created by or for
              Customer. Subject to the limited licenses granted herein, we
              acquire no right, title, or interest from Customer in or to any
              Customer Data.
            </p>

            <p>
              Customer is responsible for the accuracy, quality, and legality of
              Customer Data, the means by which Customer acquired Customer Data,
              and its use of Customer Data with the Services or any Third-Party
              App. Customer will ensure that all necessary rights and
              permissions are established for the transfer and/or processing of
              Customer Data in connection with the Services or the applicable
              Third-Party App in compliance with all applicable laws,
              regulations, and self-regulatory requirements.
            </p>

            <p>
              We will maintain appropriate administrative, physical and
              technical safeguards for protection of the security,
              confidentiality, and integrity of Customer Data, including
              measures designed to prevent unauthorized access to or disclosure
              of Customer Data. Adherence to security best practices obliges us
              to provide end-user authentication, in addition to other technical
              measures, as required, where the end user (e.g., customer of
              Customer) will engage directly with the Services (including, e.g.,
              via two-factor authentication, downloading, or logging-in to the
              Services). Customer will not attempt to use the Services, or ask
              us to configure the Services, in a manner inconsistent with these
              requirements.
            </p>

            <p>
              Subject to the limited rights expressly granted herein, we reserve
              all of our right, title, and interest (including all intellectual
              property rights) in and to the Services, and, as between us and
              Customer, we own any data within or related to the Services that
              is not Customer Data.
            </p>

            <p>
              In its use of the Services, Customer will comply with these Terms
              (including any usage limits specified in Order Forms) and all
              applicable laws and regulations. Customer will use commercially
              reasonable efforts to prevent unauthorized access to or use of
              Services and notify us promptly of any such unauthorized access or
              use. Customer is responsible for its personnel’s and agents’
              compliance with Customer’s obligations under these Terms.
            </p>

            <p>
              Our Services offer Customer the ability to select and integrate
              applications that complement Customer’s use of the Services (each,
              a “Third-Party App”). These are not our services, so we do not
              warrant or support Third-Party Apps. Any use of Third-Party Apps
              is solely between Customer and the applicable provider. We are not
              responsible for any use, disclosure, modification or deletion of
              Customer Data that is transmitted to, or accessed by, a
              Third-Party App.
            </p>

            <p>
              The Contract remains effective until all subscriptions have
              expired or been terminated or the Contract itself terminates.
              Termination of the Contract will terminate all subscriptions and
              Order Forms. Unless an Order Form says something different, all
              subscriptions automatically renew for additional periods equal in
              length to the initial period. Either party can give the other
              notice of non-renewal at least thirty (30) days before the end of
              a subscription term.
            </p>

            <p>
              We or Customer may terminate the Contract on notice to the other
              party if the other party materially breaches the Contract and such
              breach is not cured within thirty (30) days after the
              non-breaching party provides notice of the breach. We may suspend
              the Services or terminate the Contract immediately on notice to
              Customer if we believe the Services are being used in violation of
              applicable law or in a way that may cause risk of litigation or
              otherwise be harmful to us. In no event will termination relieve
              Customer of the obligation to pay any fees payable to us for the
              period prior to the effective date of termination. Following
              termination or expiration of subscriptions, we will have no
              obligation to maintain or provide any Customer Data.
            </p>

            <p>
              Free Services are provided to Customer without charge up to
              certain limits as described in the Documentation. Customer hereby
              acknowledges that usage over these limits requires Customer’s
              purchase of additional resources or services. Customer agrees that
              we may, in our sole discretion and for any or no reason, terminate
              Customer’s access to the Free Services or any part thereof.
              Customer agrees that any termination of Customer’s access to the
              Free Services may be without prior notice, and Customer agrees
              that we will not be liable to Customer or any third party for such
              termination. Customer is solely responsible for exporting Customer
              Data from the Free Services prior to termination of Customer’s
              access to the Free Services for any reason, provided that if we
              terminate Customer’s account, except as required by law we will
              provide Customer a reasonable opportunity to retrieve its Customer
              Data. We may change the limits that apply to Customer’s use of the
              Free Services at any time in our sole discretion without notice to
              Customer, regardless of whether or not these are used in
              conjunction with other products or services for which Customers
              pays us a fee. We may make changes to the Free Services that
              materially reduce the functionality provided to Customer.
            </p>

            <p>
              EXCEPT AS EXPRESSLY PROVIDED FOR HEREIN, THE SERVICES AND ALL
              RELATED COMPONENTS AND INFORMATION ARE PROVIDED ON AN “AS IS” AND
              “AS AVAILABLE” BASIS WITHOUT ANY WARRANTIES OF ANY KIND, AND WE
              EXPRESSLY DISCLAIM ANY AND ALL WARRANTIES, WHETHER EXPRESS OR
              IMPLIED, INCLUDING THE IMPLIED WARRANTIES OF MERCHANTABILITY,
              TITLE, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              CUSTOMER ACKNOWLEDGES THAT WE DO NOT WARRANT THAT THE SERVICES
              WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
            </p>

            <p>
              OTHER THAN IN CONNECTION WITH A PARTY’S INDEMNIFICATION
              OBLIGATIONS HEREUNDER, IN NO EVENT WILL EITHER CUSTOMER’S OR OUR
              AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS
              (WHETHER IN CONTRACT OR TORT OR UNDER ANY OTHER THEORY OF
              LIABILITY) EXCEED THE TOTAL AMOUNT PAID BY CUSTOMER HEREUNDER IN
              THE TWELVE (12) MONTHS PRECEDING THE LAST EVENT GIVING RISE TO
              LIABILITY. THE FOREGOING WILL NOT LIMIT CUSTOMER’S PAYMENT
              OBLIGATIONS.
            </p>

            <p>
              IN NO EVENT WILL EITHER PARTY HAVE ANY LIABILITY TO THE OTHER
              PARTY OR TO ANY THIRD PARTY FOR ANY LOST PROFITS OR REVENUES OR
              FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, COVER OR
              PUNITIVE DAMAGES HOWEVER CAUSED, WHETHER IN CONTRACT, TORT OR
              UNDER ANY OTHER THEORY OF LIABILITY, AND WHETHER OR NOT THE PARTY
              HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING
              DISCLAIMER WILL NOT APPLY TO THE EXTENT PROHIBITED BY APPLICABLE
              LAW.
            </p>

            <p>
              Customer will defend us from and against any and all third-party
              claims, actions, suits, proceedings, and demands arising from or
              related to Customer’s violation of these Terms or of applicable
              law (a “<strong>Claim Against Us</strong>”), and will indemnify us
              for all reasonable attorney’s fees incurred and damages and other
              costs finally awarded against us in connection with or as a result
              of, and for amounts paid by us under a settlement Customer
              approves of in connection with, a Claim Against Us. We must
              provide Customer with prompt written notice of any Claim Against
              Us and allow Customer the right to assume the exclusive defense
              and control, and cooperate with any reasonable requests assisting
              Customer’s defense and settlement of such matter.
            </p>

            <p>
              Customer grants us the right to use Customer’s company name and
              logo as a reference for marketing or promotional purposes on our
              website and in other public or private communications with our
              existing or potential customers.
            </p>

            <p>
              This Agreement is governed by the laws of the State of California,
              without regard to conflicts of laws rules.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
