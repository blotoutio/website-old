import stylesUrl from "../styles/legal.css";

export function meta() {
    return {
        title: "Blotout - Terms of Service",
        description: "",
    };
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: stylesUrl,
        },
    ];
}

export default function TermsOfService() {
    return (
        <div id="terms-of-service" className="legal">
            <div id="terms-of-service-header" className="legal-header">
                <div id="terms-of-service-header-content" className="legal-header-content">
                    <div id="terms-of-service-title" className="legal-title">
                        Terms of Service
                    </div>
                </div>

                {/* <div id="terms-of-service-header-divider" className="legal-divider legal-header-divider">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 100,0 100,100" />
                    </svg>
                </div> */}
            </div>

            <div id="terms-of-service-text" className="legal-text">
                <div id="terms-of-service-text-content" className="legal-text-content">
                    <p>These Terms of Service (“Terms” , “Terms of Service”) govern your (the “Client”) relationship with Blotout Software Development Kit and Blotout Server SDK (the “SDK”) owned and operated by Blotout, Inc registered in California, USA (“us”, “we”, or “our”).</p>
                    <p>Please read these Terms of Service carefully before using the SDK.</p>
                    <p>Your (the “Client”) access to and use of the SDK is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, authorized users, and others who access or use the SDK.</p>
                    <p>By accessing or using the SDK the Client agrees to be bound by the Terms of Service. If you disagree with any part of the terms then you may not access or make use of the SDK.</p>
                    <p>
                        <span>Use of Service</span>
                    </p>
                    <p>By agreeing to the Terms of Service, Blotout, Inc grants the Client a limited, non-exclusive, non-transferable right to the SDK, and SDK Services governed by the Terms of Service.</p>
                    <p>The Client’s access to the SDK and the SDK service is limited and governed by the contract (the “Contract”) you may have signed with Blotout, Inc.</p>
                    <p>The Client authorizes its users access to the services provided by the SDK and is solely responsible for their access according to the Terms of Service.</p>
                    <p>
                        <span>Prohibitions</span>
                    </p>
                    <p>The Client shall use the SDK Services only in compliance with all applicable laws, including any applicable data protection and privacy laws, and the terms of this Agreement.</p>
                    <p>
                        <span>The Contract and Subscription fees</span>
                    </p>
                    <p>The SDK is billed on a subscription basis (“Subscription(s)”) based on the agreement signed between Blotout, Inc and the Client’s (the “Contract”)</p>
                    <p>Your Subscription(s) to the SDK is based on the Contract that you may have signed with Blotout, Inc. The Contract decides the terms of your payment and limits the user of SDK per terms in the Contract. The Contract dictates if your services are to be continued or discontinued per these terms.</p>
                    <p>Blotout, Inc has the right to change the subscription fees set forth in the Contract at any time during the term of the Contract via a written notice to the client authorized account.</p>
                    <p>
                        <span>Refunds</span>
                    </p>
                    <p>Any refunds are mandated via the Contract. If no such mandate is present, the Terms of Service provides no provision for a refund of fees.</p>
                    <p>
                        <span>Your Account</span>
                    </p>
                    <p>When you create an account with us as the Client, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>
                    <p>You are responsible for the accounts created by individual employees, and for their passwords to utilize and access the SDK. You agree not to share or disclose the account credentials to any third party or provide any third party access to the SDK and services without a written authorization.</p>
                    <p>You are responsible for the usernames and passwords registered with the SDK. You may not choose to use usernames that may infringe a trademark or copyright or otherwise offensive, obscene, or vulgar.</p>
                    <p>When you sign up with the SDK, you assign rights to use your logo for the SDK’s marketing purposes.</p>
                    <p>
                        <span>Intellectual Property, Trademarks</span>
                    </p>
                    <p>The SDK and its original content, features and functionality are and will remain the exclusive property of Blotout, Inc. The SDK is protected by copyright, trademark, and other laws of the United States and other foreign nations. Our trademarks may not be used in connection with any product or service without the prior written consent of Blotout, Inc</p>
                    <p>
                        <span>Termination</span>
                    </p>
                    <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms of Service.</p>
                    <p>Upon termination, your right to use the SDK will immediately cease. If you wish to terminate your account, you may simply discontinue using the SDK and inform Blotout, Inc with a written notice of termination. You will be continued to be charged per the Contract.</p>
                    <p>
                        <span>Privacy policy and Compliance</span>
                    </p>
                    <p>Please refer to our privacy policy here that guides our privacy principles and operating requirements to be compliant with various laws in EU, California and other countries.</p>
                    <p>
                        <span>Limitation Of Liability</span>
                    </p>
                    <p>In no event shall Blotout, Inc, nor its directors, shareholders, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the SDK; (ii) any conduct or content of any third party on the SDK; (iii) any content obtained from the SDK; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, negligence or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.</p>
                    <p>
                        <span>Disclaimer</span>
                    </p>
                    <p>Your use of the SDK is at your sole risk. The SDK is provided on an “AS IS” and “AS AVAILABLE” basis via a Blotout, Inc hosted location. The SDK is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
                    <p>Blotout, Inc, its subsidiaries, affiliates, and its licensors do not warrant that a) the SDK will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; c) the SDK is free of viruses or other harmful components; or d) the results of using the SDK will meet your requirements.</p>
                    <p>
                        <span>Governing Law</span>
                    </p>
                    <p>These Terms shall be governed and construed in accordance with the laws of California, United States without regard to its conflict of law provisions.</p>
                    <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the SDK.</p>
                    <p>
                        <span>Changes to the Terms of Service</span>
                    </p>
                    <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is made, we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
                    <p>By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the SDK.</p>
                    <p>
                        <span>Contact</span>
                    </p>
                    <p>Please email us.</p>
                </div>

                {/* <div id="terms-of-service-text-divider" className="legal-divider legal-text-divider">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="0,100 100,0 100,100" />
                    </svg>
                </div> */}
            </div>
        </div>
    );
}
