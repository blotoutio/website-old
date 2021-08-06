import stylesUrl from "../../styles/writing.css";

export function meta() {
    return {
        title: "Blotout - Blog",
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

export default function Blog() {
    return (
        <div id="blog" className="writing">
            <div id="blog-header" className="writing-header">
                <div id="blog-header-content" className="writing-header-content">
                    <div id="blog-title" className="writing-title">
                        Blog
                    </div>
                </div>
            </div>

            <div id="blog-list" className="writing-list">
                <div id="blog-list-content" className="writing-list-content">
                    <div className="featured">
                        <div className="featured-image"></div>
                        <div className="featured-text">
                            <div className="featured-text-title">Introducing the Blotout Technical Blog Series</div>
                            <div className="featured-text-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus volutpat, libero gravida varius varius, massa ante convallis lorem, eget consectetur nisl nisi non turpis.</div>
                            <div className="featured-text-info">1 January, 2021</div>
                        </div>
                    </div>
                    <div className="list">
                        <div className="list-title">All Blog Posts</div>
                        <div className="list-content">
                            <div className="list-item">
                                <div className="list-item-title">Accommodating evil in the era of trust</div>
                                <div className="list-item-info">1 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">iOS 14.5 and the tracking apocalypse</div>
                                <div className="list-item-info">2 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Exciting funding news: we’re a YC company</div>
                                <div className="list-item-info">3 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">The Hypocrisy in Privacy</div>
                                <div className="list-item-info">4 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Blotout 360 for Publishers and SSPs</div>
                                <div className="list-item-info">5 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Announcing Blotout V0.1</div>
                                <div className="list-item-info">6 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Privacy by trust vs. Privacy by design</div>
                                <div className="list-item-info">7 January, 2021</div>
                            </div>
                            <div className="list-item">
                                <div className="list-item-title">Privacy has muscle at the device edge!</div>
                                <div className="list-item-info">8 January, 2021</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
