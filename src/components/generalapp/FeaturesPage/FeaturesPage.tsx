import FeatureItem from "../FeatureItem/FeatureItem";
import styles from "./FeaturesPage.module.scss";

type Props = {
    featureItems: { head: string; content: string }[];
};

export default function FeaturesPage(props: Props) {
    return (
        <div className={styles.featurespage}>
            <div className={`${styles.headline} textanimation`}>Features</div>
            <div className={styles.featureItems}>
                {props.featureItems.map((x, i) => (
                    <FeatureItem key={i} headline={x.head} content={x.content} />
                ))}
            </div>
        </div>
    );
}
