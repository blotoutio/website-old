import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer>
            <div id="footer-content">
                <div id="footer-special">
                    <div id="footer-special-text">Join our community to learn how to take analytics and marketing measurement in-house</div>
                    <div id="footer-special-cta">Join our Slack</div>
                </div>

                <div id="footer-nav">
                    <div className="footer-nav-group">
                        <div className="footer-nav-heading">Product</div>
                        <div className="footer-nav-link-group">
                            <Link to="/" className="footer-nav-link">
                                Overview
                            </Link>
                            <Link to="/" className="footer-nav-link">
                                Integrations
                            </Link>
                            <Link to="/" className="footer-nav-link">
                                For Marketers
                            </Link>
                            <Link to="/" className="footer-nav-link">
                                For Product Managers
                            </Link>
                            <Link to="/" className="footer-nav-link">
                                For Engineers
                            </Link>
                            <Link to="/" className="footer-nav-link">
                                For Privacy Teams
                            </Link>
                        </div>
                    </div>
                    <div className="footer-nav-group">
                        <div className="footer-nav-heading">Docs</div>
                        <div className="footer-nav-link-group">
                            <a href="https://docs.blotout.io/" className="footer-nav-link">
                                Overview
                            </a>
                            <a href="https://docs-js.blotout.io/" className="footer-nav-link">
                                JavaScript
                            </a>
                            <a href="https://docs-ios.blotout.io/" className="footer-nav-link">
                                iOS
                            </a>
                            <a href="https://docs-android.blotout.io/" className="footer-nav-link">
                                Android
                            </a>
                            <a href="https://docs-rust.blotout.io/" className="footer-nav-link">
                                Rust / C++
                            </a>
                        </div>
                    </div>
                    <div className="footer-nav-group">
                        <div className="footer-nav-heading">Resources</div>
                        <div className="footer-nav-link-group">
                            <Link to="/blog" className="footer-nav-link">
                                Blog
                            </Link>
                            <Link to="/case-studies" className="footer-nav-link">
                                Case Studies
                            </Link>
                            <Link to="/" className="footer-nav-link">
                                Slack Community
                            </Link>
                        </div>
                    </div>
                    <div className="footer-nav-group">
                        <div className="footer-nav-heading">Company</div>
                        <div className="footer-nav-link-group">
                            <Link to="/about" className="footer-nav-link">
                                About
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
