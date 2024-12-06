import styles from "./ToolsUsedPage.module.scss";

type Props = {
    tools_languages: string[];
    tools_ides: string[];
};

export default function ToolsUsedPage(props: Props) {
    return (
        <div className={styles.toolsUsedPage}>
            <div className={styles.headline}>Tools Used</div>

            <div className={styles.smallheadline}>Languages & Tools</div>
            <div className={styles.list}>
                {props.tools_languages.map((item, i) => (
                    <div key={i} className={styles.listitem}>
                        {item}
                    </div>
                ))}
            </div>
            <div className={styles.smallheadline}>Software</div>
            <div className={styles.list}>
                {props.tools_ides.map((item, i) => (
                    <div key={i} className={styles.listitem}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
