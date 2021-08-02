import Logo from "../graphics/logo";

export const Header = () => {
    return (
        <header>
            <div id="header-content">
                <div id="logo">
                    <Logo />
                </div>
                <div id="header-nav">
                    <div className="header-nav-link">Product</div>
                    <div className="header-nav-link">Docs</div>
                    <div className="header-nav-link">Resources</div>
                    <div className="header-nav-link">Company</div>
                </div>
                <div id="cta">Request a Demo</div>
            </div>
        </header>
    );
};
