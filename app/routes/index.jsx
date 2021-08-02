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
                    <div id="hero-subtitle">Cloud prem analytics and marketing attribution for the privacy era</div>
                    <div id="hero-cta-group">
                        <div id="hero-primary-cta">Request a Demo</div>
                        <div id="hero-secondary-cta">Join our Slack</div>
                    </div>
                </div>
            </div>
            <div id="explainer" className="home-section">
                <div id="explainer-content" className="home-section-content"></div>
            </div>
            <div id="marketers" className="home-section">
                <div id="marketers-content" className="home-section-content"></div>
            </div>
            <div id="product-managers" className="home-section">
                <div id="product-managers-content" className="home-section-content"></div>
            </div>
            <div id="engineers" className="home-section">
                <div id="engineers-content" className="home-section-content"></div>
            </div>
            <div id="blog" className="home-section">
                <div id="blog-content" className="home-section-content"></div>
            </div>
            <div id="privacy" className="home-section">
                <div id="privacy-content" className="home-section-content"></div>
            </div>
        </div>
    );
}
