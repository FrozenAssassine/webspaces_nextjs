import Button1 from "../Button1/Button1";
import styles from "./HomePage.module.scss";
import textanimation from "@/generalstyles/textAnimation.module.scss";

type Props = {
    iconImage: string;
    headerText: string;
    subHeaderText: string;
    headerImage: string;
    downloadURL: { url: string; text: string; icon: string }[];
    iconRadius: number;
};

export default function HomePage(props: Props) {
    return (
        <div className={styles.homepage}>
            <img src={props.iconImage} className={styles.icon} style={{ borderRadius: props.iconRadius }} />
            <div className={`${styles.headline} ${textanimation.textanimation}`}>{props.headerText}</div>
            <div className={styles.subheadline}>{props.subHeaderText}</div>
            <div className={styles.buttons}>
                {props.downloadURL.map((x, idx) => (
                    <Button1 key={idx} text={x.text} accent={true} href={x.url} icon={x.icon} />
                ))}
            </div>
            <img className={styles.image} src={props.headerImage} />
        </div>
    );
}
