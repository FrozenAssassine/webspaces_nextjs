import AboutPage from "@/components/generalapp/AboutPage/AboutPage";
import FeaturesPage from "@/components/generalapp/FeaturesPage/FeaturesPage";
import GalleryPage from "@/components/generalapp/GalleryPage/GalleryPage";
import HomePage from "@/components/generalapp/HomePage/HomePage";
import React from "react";

type Props = {
    iconImage: string;
    headerText: string;
    appName: string;
    subHeaderText: string;
    headerImage: string;
    downloadURL: { url: string; text: string; icon: string }[];
    featureItems: { head: string; content: string }[];
    galleryImages: string[];
    gitURL: string;
    copyrightNotice: string;
    authors: { url: string; displayName: string }[];
    iconRadius?: number;
};

export default function GeneralApp(props: Props) {
    return (
        <div>
            <HomePage
                downloadURL={props.downloadURL}
                headerImage={props.headerImage}
                headerText={props.headerText}
                iconImage={props.iconImage}
                subHeaderText={props.subHeaderText}
                iconRadius={props.iconRadius ?? 0}
            />
            <FeaturesPage featureItems={props.featureItems} />
            <GalleryPage images={props.galleryImages} />
            <AboutPage
                appName={props.appName}
                iconImage={props.iconImage}
                authors={props.authors}
                copyrightText={props.copyrightNotice}
                gitURL={props.gitURL}
                iconRadius={props.iconRadius ?? 0}
            />
        </div>
    );
}
