"use client"
import SidebarItem from "@/components/frozenassassine/SidebarItem/SidebarItem";
import AboutPage from "@/pages/frozenassassine/AboutPage/AboutPage";
import Homepage from "@/pages/frozenassassine/HomePage/HomePage";
import OtherInterestsPage from "@/pages/frozenassassine/OtherInterestsPage/OtherInterestsPage";
import ProjectsPage from "@/pages/frozenassassine/ProjectsPage/ProjectsPage";
import SkillsPage from "@/pages/frozenassassine/SkillsPage/SkillsPage";
import React from "react";
import styles from './page.module.scss';
import textAnimation from '@/generalstyles/textAnimation.module.scss';
import ImprintBox from "@/components/ImprintBox/ImprintBox";

function App() {
    return (
        <div className={styles.appstyle}>
            <div className={styles.wrapper}>
                <div className={styles.sidebarLeft}>
                    <SidebarItem icon="mdi:github" url="https://github.com/FrozenAssassine" />
                    <SidebarItem icon="mdi:instagram" url="https://www.instagram.com/frozenassassine/" />
                    <SidebarItem
                        icon="mdi:stackoverflow"
                        url="https://stackoverflow.com/users/14772994/frozenassassine"
                    />
                    <div className={styles.separator} />
                </div>
                <div className={styles.pages} id="homePage">
                    <Homepage />
                    <div id="skillsPage" className={`${styles.headline} ${textAnimation.textanimation}`}>
                        Skills
                    </div>
                    <SkillsPage />
                    <div id="projectsPage" className={`${styles.headline} ${textAnimation.textanimation}`}>
                        Projects
                    </div>
                    <ProjectsPage />
                    <div id="otherInterestsPage" className={`${styles.headline} ${textAnimation.textanimation}`}>
                        Other Interests
                    </div>
                    <OtherInterestsPage />
                    <div id="aboutPage" className={styles.headline}>
                        About Me
                    </div>
                    <AboutPage />
                    <ImprintBox/>
                </div>
                <div className={styles.sidebarRight}>
                    <div className={styles.separator} />
                    <SidebarItem scrollToId="homePage" icon="material-symbols:home" />
                    <SidebarItem scrollToId="skillsPage" icon="jam:tools" />
                    <SidebarItem scrollToId="projectsPage" icon="material-symbols:list-alt-outline-rounded" />
                    <SidebarItem scrollToId="otherInterestsPage" icon="ph:drone-fill" />
                    <SidebarItem scrollToId="aboutPage" icon="material-symbols:info-outline-rounded" />
                </div>
            </div>
        </div>
    );
}

export default App;
