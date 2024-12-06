import { Icon } from "@iconify/react";
import styles from "./AboutPage.module.scss";
import ImprintBox from "@/components/ImprintBox/ImprintBox";

type Props = {
    gitURL: string;
    copyrightText: string;
    authors: { url: string; displayName: string }[];
    iconImage: string;
    appName: string;
    iconRadius: number;
};

export default function AboutPage(props: Props) {
    return (
        <div id="aboutPage" className={styles.aboutPage}>
            <div className={`${styles.headline} textanimation`}>About</div>
            {props.gitURL.length > 0 && (
                <div className={styles.githubInfo}>
                    <a href={props.gitURL}>
                        <Icon className={styles.aboutIcon} color="white" icon="bi:github" />
                    </a>
                    <div className={styles.githubInfoText}>
                        This project is open source on GitHub, contributions are welcome.
                    </div>
                </div>
            )}
            <div>
                <img className={styles.icon} src={props.iconImage} style={{ borderRadius: props.iconRadius }} />
                <div className={styles.appname}>{props.appName}</div>
                <div className={styles.copyright}>
                    {props.copyrightText}{" "}
                    {props.authors.map((x, i) => (
                        <a key={i} className={styles.link} href={x.url}>
                            {x.displayName}
                            {props.authors.length > 1 && i < props.authors.length - 1 && ", "}
                        </a>
                    ))}
                </div>
            </div>
            <ImprintBox />
        </div>
    );
}
