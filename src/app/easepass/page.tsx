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
            appName="Ease Pass"
            copyrightNotice="Copyright © 2023-2024"
            downloadURL={[
                {
                    icon: "fluent:store-microsoft-16-filled",
                    text: "Download",
                    url: "https://apps.microsoft.com/store/detail/ease-pass/9NQPF80923F5?hl=en-us&gl=us&ocid=pdpshare",
                },
                { icon: "mdi:github", text: "Github", url: "https://github.com/FrozenAssassine/easepass" },
            ]}
            featureItems={[
                { head: "Security", content: "Passwords are exclusively encrypted using your master password." },
                { head: "Offline Access", content: "Access your passwords even when you are offline." },
                { head: "Backup", content: "Create encrypted backups of stored passwords." },
                {
                    head: "2FA Token Generation",
                    content: "Generate two-factor authentication tokens for added security.",
                },
                { head: "Search Functionality", content: "Quickly search for your passwords in the list." },
                { head: "Simplicity", content: "Enjoy a straightforward and user-friendly interface." },
                { head: "Browser Password Import", content: "Import your passwords directly from your browser." },
                { head: "Windows Wifi Password Import", content: "Import your Wi-Fi passwords from Windows." },
            ]}
            galleryImages={[
                "/assets/easepass/image1.png",
                "/assets/easepass/image2.png",
                "/assets/easepass/image3.png",
                "/assets/easepass/image4.png",
                "/assets/easepass/image5.png",
                "/assets/easepass/image6.png",
                "/assets/easepass/image7.png",
                "/assets/easepass/image8.png",
                "/assets/easepass/image9.png",
                "/assets/easepass/image10.png",
            ]}
            gitURL="https://github.com/FrozenAssassine/EasePass"
            headerImage="/assets/easepass/banner.png"
            headerText="Ease Pass"
            subHeaderText="A simple, but powerful open source password manager"
            iconImage="/assets/easepass/icon.png"
        ></GeneralApp>
    );
}
