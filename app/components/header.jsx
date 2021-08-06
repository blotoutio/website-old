import { useLocation, Link } from "react-router-dom";
import LogoLight from "../graphics/logo-light";
import LogoDark from "../graphics/logo-dark";
import LogoBlue from "../graphics/logo-blue";

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <header style={{ backgroundColor: pathname === "/about" ? "var(--dark-blue-1)" : pathname === "/integrations" ? "var(--dark-blue-2)" : pathname === "/privacy-policy" ? "var(--grey-3)" : pathname === "/terms-of-service" ? "var(--grey-3)" : pathname === "/blog" ? "var(--light-blue-3)" : pathname === "/case-studies" ? "var(--light-blue-3)" : "var(--dark-blue-3)" }}>
            <div id="header-content">
                <div id="logo">
                    <Link to="/">{pathname === "/privacy-policy" ? <LogoBlue /> : pathname === "/terms-of-service" ? <LogoBlue /> : pathname === "/blog" ? <LogoBlue /> : pathname === "/case-studies" ? <LogoBlue /> : <LogoLight />}</Link>
                </div>
                <div id="header-nav" style={{ color: pathname === "/privacy-policy" ? "var(--dark-blue-3)" : pathname === "/terms-of-service" ? "var(--dark-blue-3)" : pathname === "/blog" ? "var(--dark-blue-3)" : pathname === "/case-studies" ? "var(--dark-blue-3)" : "var(--light-blue-1)" }}>
                    <div className="header-nav-link">
                        <span>Product</span>
                        <div className="header-nav-submenu">
                            <Link to={{ pathname: "./", hash: "#explainer" }}>Overview</Link>
                            <Link to="/integrations">Integrations</Link>
                            <Link to={{ pathname: "./", hash: "#marketers" }}>For Marketers</Link>
                            <Link to={{ pathname: "./", hash: "#product-managers" }}>For Product Managers</Link>
                            <Link to={{ pathname: "./", hash: "#engineers" }}>For Engineers</Link>
                            <Link to={{ pathname: "./", hash: "#privacy" }}>For Privacy Teams</Link>
                        </div>
                    </div>
                    <div className="header-nav-link">
                        <span>Docs</span>
                        <div className="header-nav-submenu">
                            <a href="https://docs.blotout.io/">Overview</a>
                            <a href="https://docs-js.blotout.io/">JavaScript</a>
                            <a href="https://docs-ios.blotout.io/">iOS</a>
                            <a href="https://docs-android.blotout.io/">Android</a>
                            <a href="https://docs-rust.blotout.io/">Rust / C++</a>
                        </div>
                    </div>
                    <div className="header-nav-link">
                        <span>Resources</span>
                        <div className="header-nav-submenu">
                            <Link to="/blog">Blog</Link>
                            <Link to="/case-studies">Case Studies</Link>
                            <Link to="/">Slack Community</Link>
                        </div>
                    </div>
                    <div className="header-nav-link">
                        <span>Company</span>
                        <div className="header-nav-submenu">
                            <Link to="/about">About</Link>
                        </div>
                    </div>
                </div>
                <div id="cta">Start Free Trial</div>
                <div id="header-nav-mobile">|||</div>
            </div>
        </header>
    );
};
