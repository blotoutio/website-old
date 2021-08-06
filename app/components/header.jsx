import { useLocation, Link } from "react-router-dom";
import LogoLight from "../graphics/logo-light";
import LogoDark from "../graphics/logo-dark";
import LogoBlue from "../graphics/logo-blue";

export const Header = () => {
    const { pathname } = useLocation();

    return (
        <header style={{ backgroundColor: pathname === "/privacy-policy" ? "var(--grey-3)" : pathname === "/terms-of-service" ? "var(--grey-3)" : pathname === "/blog" ? "var(--light-blue-3)" : pathname === "/case-studies" ? "var(--light-blue-3)" : "var(--dark-blue-3)" }}>
            <div id="header-content">
                <div id="logo">
                    <Link to="/">{pathname === "/privacy-policy" ? <LogoBlue /> : pathname === "/terms-of-service" ? <LogoBlue /> : pathname === "/blog" ? <LogoBlue /> : pathname === "/case-studies" ? <LogoBlue /> : <LogoLight />}</Link>
                </div>
                <div id="header-nav" style={{ color: pathname === "/privacy-policy" ? "var(--dark-blue-3)" : pathname === "/terms-of-service" ? "var(--dark-blue-3)" : pathname === "/blog" ? "var(--dark-blue-3)" : pathname === "/case-studies" ? "var(--dark-blue-3)" : "var(--light-blue-1)" }}>
                    <div className="header-nav-link">Product</div>
                    <div className="header-nav-link">Docs</div>
                    <div className="header-nav-link">Resources</div>
                    <div className="header-nav-link">Company</div>
                </div>
                <div id="cta">Request a Demo</div>
                <div id="header-nav-mobile">|||</div>
            </div>
        </header>
    );
};
