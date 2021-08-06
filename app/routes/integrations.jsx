import stylesUrl from "../styles/integrations.css";

export function meta() {
    return {
        title: "Blotout - Integrations",
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

export default function Integrations() {
    return (
        <div id="integrations">
            <div id="integrations-header">
                <div id="integrations-header-content">
                    <div id="integrations-title">Integrations</div>
                </div>
            </div>

            <div id="integrations">
                <div id="integrations-content"></div>
            </div>
        </div>
    );
}
