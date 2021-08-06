import stylesUrl from "../styles/about.css";

export function meta() {
    return {
        title: "Blotout - About",
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

export default function About() {
    return (
        <div id="about">
            <div id="about-header">
                <div id="about-header-content">
                    <div id="about-title">About</div>
                </div>
            </div>

            <div id="about">
                <div id="about-content"></div>
            </div>
        </div>
    );
}
