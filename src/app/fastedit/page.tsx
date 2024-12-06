"use client";
import GeneralApp from "@/pages/generalapp/generalApp";

export default function Home() {
    return (
        <GeneralApp
            authors={[{ url: "https://frozenassassine.de", displayName: "Julius Kirsch" }]}
            appName="Fastedit"
            copyrightNotice="Copyright © 2023-2024"
            downloadURL={[
                {
                    icon: "fluent:store-microsoft-16-filled",
                    text: "Download",
                    url: "https://apps.microsoft.com/store/detail/fastedit/9NTQ53W18DPW?hl=en-us&gl=us&activetab=pivot%3Aoverviewtab",
                },
                { icon: "mdi:github", text: "Github", url: "https://github.com/FrozenAssassine/Fastedit" },
            ]}
            featureItems={[
                {
                    head: "Syntax highlighting",
                    content: "Enhance your code with syntax highlighting for improved readability and clarity.",
                },
                { head: "Tabs", content: "Efficiently navigate your code or documents using tabs." },
                { head: "Designs", content: "Personalize your writing experience with customizable designs." },
                {
                    head: "Line numbers",
                    content: "Track your writing with line numbers for efficient navigation and reference.",
                },
                {
                    head: "Quick access",
                    content:
                        "Maximize your productivity with the Quick Access flyout that displays all available functions and shortcuts.",
                },
                {
                    head: "Undock tab",
                    content:
                        "Undock tabs into separate windows for increased productivity and a tailored work environment.",
                },
                { head: "Session snapshot", content: "Continue your work where you left off." },
            ]}
            galleryImages={[
                "/assets/fastedit/image1.png",
                "/assets/fastedit/image2.png",
                "/assets/fastedit/image3.png",
                "/assets/fastedit/image4.png",
                "/assets/fastedit/image5.png",
                "/assets/fastedit/image6.png",
            ]}
            gitURL="https://github.com/FrozenAssassine/Fastedit"
            headerImage="/assets/fastedit/banner.png"
            headerText="Fastedit - Texteditor"
            subHeaderText="Fastedit is an ultimate text editor app with line numbering, custom designs, session snapshot, line highlighter, and syntax highlighting to improve editing and organizing documents."
            iconImage="/assets/fastedit/icon.png"
        ></GeneralApp>
    );
}
