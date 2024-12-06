"use client";
import GeneralApp from "@/pages/generalapp/generalApp";

export default function Home() {
    return (
        <GeneralApp
            authors={[
                { url: "https://frozenassassine.de?ref=web_ultimaterunner", displayName: "Julius Kirsch" },
                { url: "https://github.com/Nathans-SushiCat", displayName: "SushiCat" },
            ]}
            appName="Ultimate Runner"
            copyrightNotice="Copyright © 2024"
            downloadURL={[
                {
                    icon: "lineicons:play-store",
                    text: "Play Store",
                    url: "https://play.google.com/store/apps/details?id=com.FrozenCatStudios.UltimateRunner&pli=1",
                },
            ]}
            featureItems={[
                { head: "Diverse Levels", content: "Play across five unique and exciting level types." },
                { head: "Endless Adventure", content: "Run, fly, swing, and drive endlessly in 2D fun." },
                { head: "Multiple Currencies", content: "Collect coins, gems, and revivers for upgrades." },
                { head: "Mystery Boxes", content: "Unlock rewards like coins, gems, and exclusive skins." },
                { head: "Unique Skins", content: "Customize players, planes, and cars with cool designs." },
                { head: "Challenging Obstacles", content: "Dodge cacti, pipes, balloons, and more." },
                { head: "Dynamic Gameplay", content: "Levels feature different mechanics for endless excitement." },
                { head: "Gem Trading", content: "Trade gems for coins or mystery boxes." },
                { head: "Revive After Deat", content: "Use revivers to continue after failing." },
                { head: "Endless Fun", content: "Compete for the highest score in endless mode." },
            ]}
            galleryImages={[
                "/assets/ultimaterunner/image4.png",
                "/assets/ultimaterunner/image2.png",
                "/assets/ultimaterunner/image1.png",
                "/assets/ultimaterunner/image3.png",
                "/assets/ultimaterunner/image5.png",
                "/assets/ultimaterunner/image6.png",
                "/assets/ultimaterunner/image7.png",
            ]}
            gitURL="" /*empty to hide github info*/
            headerImage="./assets/ultimaterunner/banner.png"
            headerText="Ultimate Runner"
            subHeaderText="Nonstop Action in the Ultimate 2D Endless Runner Adventure!"
            iconImage="/assets/ultimaterunner/icon.png"
            iconRadius={20}
        ></GeneralApp>
    );
}
