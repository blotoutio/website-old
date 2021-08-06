import stylesUrl from "../styles/writing.css";

export function meta() {
    return {
        title: "Blotout - Case Studies",
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

export default function CaseStudies() {
    return (
        <div id="case-studies" className="writing">
            <div id="case-studies-header" className="writing-header">
                <div id="case-studies-header-content" className="writing-header-content">
                    <div id="case-studies-title" className="writing-title">
                        Case Studies
                    </div>
                </div>
            </div>

            <div id="case-studies-list" className="writing-list">
                <div id="case-studies-list-content" className="writing-list-content">
                    <div className="featured">
                        <div className="featured-image"></div>
                        <div className="featured-text">
                            <div className="featured-text-title">LUX Foundation Solutions</div>
                            <div className="featured-text-subtitle">LUX Foundation Solutions specializes in engineering and structural in the residential and commercial building markets. They use a sophisticated marketing mix of SEO and lead generation campaigns across a variety of channels in order to increase brand awareness and drive top of funnel activity…</div>
                            <div className="featured-text-info">1 January, 2021</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="list-title">All Case Studies</div>
                        <div className="list-content">
                            <div className="list-item">
                                <div className="list-item-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                                <div className="list-item-info">1 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Consectetur adipiscing elit, praesent vestibulum</div>
                                <div className="list-item-info">2 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Praesent vestibulum</div>
                                <div className="list-item-info">3 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Adipiscing elit</div>
                                <div className="list-item-info">4 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Lorem ipsum dolor sit amet</div>
                                <div className="list-item-info">5 January, 2021</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
