import SlackIcon from "../graphics/icons/slack-icon";
import PrivacyIcons from "../graphics/privacy-icons";
import stylesUrl from "../styles/index.css";

export function meta() {
    return {
        title: "Blotout",
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

export default function Index() {
    return (
        <div id="home">
            <div id="hero" className="home-section">
                <div id="hero-content" className="home-section-content">
                    <div id="hero-title">Cloud prem analytics and marketing attribution for the privacy era</div>
                    <div id="hero-subtitle">Your third-party tools are bleeding data. Fix this by going in-house. Blotout gives you the only no-code, cloud prem customer data infrastructure built at SaaS scale.</div>
                    <div id="hero-cta-group">
                        <div id="hero-primary-cta" className="hero-cta">
                            Start Free Trial
                        </div>
                        <div id="hero-secondary-cta" className="hero-cta">
                            <div className="cta-icon">
                                <SlackIcon />
                            </div>
                            <div className="cta-text">Join our Slack</div>
                        </div>
                    </div>
                    {/* <div id="hero-customer-logo-group">
                        <div className="hero-customer-logo"></div>
                        <div className="hero-customer-logo"></div>
                        <div className="hero-customer-logo"></div>
                        <div className="hero-customer-logo"></div>
                        <div className="hero-customer-logo"></div>
                    </div> */}
                </div>
            </div>

            <div id="explainer" className="home-section">
                <div id="explainer-content" className="home-section-content"></div>
            </div>

            <div id="marketers" className="home-section non-engineer">
                <div id="marketers-content" className="home-section-content non-engineer-content">
                    <div id="marketers-text-group" className="non-engineer-text-group">
                        <div id="marketers-text-heading" className="non-engineer-text-heading">
                            For Marketers
                        </div>
                        <div id="marketers-text-title" className="non-engineer-text-title">
                            Accurately measure and optimize conversions in the post-cookie era
                        </div>
                        <div id="marketers-text-subtitle" className="non-engineer-text-subtitle">
                            Capture your data in-house to accurately measure the value of every dollar you spend across the lifetimes of your campaigns.
                        </div>
                    </div>
                    <div id="marketers-cta" className="non-engineer-cta">
                        Start Free Trial
                    </div>
                    <div id="marketers-illustration-group" className="non-engineer-illustration-group">
                        <div id="marketers-point-group" className="non-engineer-point-group">
                            <div className="marketers-point non-engineer-point">Re-capture every missing user and event</div>
                            <div className="marketers-point non-engineer-point">Measure true campaign ROI and ROAS</div>
                            <div className="marketers-point non-engineer-point">Attribute conversions across channels and devices</div>
                        </div>
                        <div id="marketers-illustration" className="non-engineer-illustration">
                            <img src="/marketers.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="product-managers" className="home-section non-engineer">
                <div id="product-managers-content" className="home-section-content non-engineer-content">
                    <div id="product-managers-text-group" className="non-engineer-text-group">
                        <div id="product-managers-text-heading" className="non-engineer-text-heading">
                            For Product Managers
                        </div>
                        <div id="product-managers-text-title" className="non-engineer-text-title">
                            Map the entire customer journey
                        </div>
                        <div id="product-managers-text-subtitle" className="non-engineer-text-subtitle">
                            Customer journeys go beyond your site and app. Finally see journeys with every service ticket, package return, and any other interaction in one place.
                        </div>
                    </div>
                    <div id="product-managers-cta" className="non-engineer-cta">
                        Start Free Trial
                    </div>
                    <div id="product-managers-illustration-group" className="non-engineer-illustration-group">
                        <div id="product-managers-point-group" className="non-engineer-point-group">
                            <div className="product-managers-point non-engineer-point">Visualize and optimize complete customer funnels</div>
                            <div className="product-managers-point non-engineer-point">Segment behaviors and personas without code</div>
                            <div className="product-managers-point non-engineer-point">Personalize content and products with feature flags</div>
                        </div>
                        <div id="product-managers-illustration" className="non-engineer-illustration">
                            <img src="/product-managers.png" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="engineers" className="home-section">
                <div id="engineers-content" className="home-section-content">
                    <div id="engineers-text-group">
                        <div id="engineers-text-heading">For Engineers</div>
                        <div id="engineers-text-title">A complete privacy data engineering stack in your cloud prem</div>
                        <div id="engineers-text-subtitle">Data engineering is expensive. Engineers aren’t privacy lawyers. Solve for both with our no-code customer data infrastructure stack built for privacy.</div>
                    </div>
                    <div id="engineers-cta">Start Free Trial</div>
                    <div id="engineers-illustration">
                        <img src="/engineers.png" />
                    </div>
                    <div id="engineers-point-group">
                        <div className="engineers-point">Deploy to your cloud premise</div>
                        <div className="engineers-point">Save millions in engineering time and effort</div>
                        <div className="engineers-point">Rely on built in-privacy solutions</div>
                    </div>
                </div>
            </div>

            {/* <div id="blog" className="home-section">
                <div id="blog-content" className="home-section-content"></div>
            </div> */}

            <div id="privacy" className="home-section">
                <div id="privacy-content" className="home-section-content">
                    <div id="privacy-content-text">
                        <div id="privacy-hashtag">#PrivacyOps</div>
                        <div id="privacy-title">Privacy woven into the fabric of your data infrastructure</div>
                        <div id="privacy-subtitle">Consent management, audit logs, and governance from the moment of ingestion for compliance with the GDPR, CPRA, and all global privacy laws.</div>
                        <div id="privacy-point-group">
                            <div className="privacy-point">Cloud prem</div>
                            <div className="privacy-point">100% accurate</div>
                            <div className="privacy-point">You are sole controller and processor</div>
                            <div className="privacy-point">Consent and purpose limitation built-in</div>
                            <div className="privacy-point">Purpose limitation workflows and access policies</div>
                            <div className="privacy-point">Auditability and observability for compliance</div>
                            <div className="privacy-point">Privacy-preserving data sharing via consent management</div>
                            <div className="privacy-point">Privacy incident management and clearinghouse</div>
                        </div>
                    </div>
                    <div id="privacy-icons">
                        <PrivacyIcons />
                    </div>
                </div>
            </div>
        </div>
    );
}
