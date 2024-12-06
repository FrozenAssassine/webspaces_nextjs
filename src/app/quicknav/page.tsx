"use client";
import GeneralApp from "@/pages/generalapp/generalApp";

export default function Home() {
    return (
        <GeneralApp
            tools_languages={["C#", "XAML", "WinUI3"]}
            tools_ides={["Visual Studio 2022"]}
            authors={[
                { url: "https://frozenassassine.de", displayName: "Julius Kirsch" },
                { url: "https://finnfreitag.com?ref=julius", displayName: "Finn Freitag" },
            ]}
            appName="QuickNav"
            copyrightNotice="Copyright © 2024"
            downloadURL={[
                {
                    icon: "fluent:store-microsoft-16-filled",
                    text: "Download",
                    url: "https://apps.microsoft.com/detail/QuickNav/9N8KBW01WD62?launch=true&mode=mini",
                },
                { icon: "mdi:github", text: "Github", url: "https://www.github.com/FrozenAssassine/quicknav" },
            ]}
            featureItems={[
                {
                    head: "Live Advanced Calculator",
                    content: "Perform calculations with advanced functions like sin, cos, tan, e, and pi.",
                },
                { head: "File Search", content: "Quickly search for files on your system." },
                { head: "Commandline Executor", content: "Execute commands directly from QuickNav." },
                { head: "File Info", content: "Get information about files on your system." },
                { head: "Start Apps", content: "Launch applications with ease." },
                { head: "System Information", content: "View information about your system." },
                { head: "Lock Screen", content: "Lock your screen instantly." },
                { head: "Web Search", content: "Search the web directly from QuickNav." },
                { head: "Clipboard to Plain Text", content: "Convert clipboard contents to plain text." },
                { head: "Timer", content: "Set timers for various tasks." },
                { head: "Word Counter", content: "Count words in a text snippet." },
                { head: "Color Chooser", content: "Select colors for your projects." },
            ]}
            galleryImages={[
                "/assets/quicknav/image1.png",
                "/assets/quicknav/image3.png",
                "/assets/quicknav/image4.png",
                "/assets/quicknav/image5.png",
                "/assets/quicknav/image8.png",
                "/assets/quicknav/image9.png",
                "/assets/quicknav/image10.png",
            ]}
            gitURL="https://www.github.com/FrozenAssassine/quicknav"
            headerImage="/assets/quicknav/banner.png"
            headerText="QuickNav"
            subHeaderText="Simplifying Windows multitasking with a keystroke"
            iconImage="/assets/quicknav/icon.svg"
        ></GeneralApp>
    );
}
