import styles from "./ImprintBox.module.scss";

type Props = {
    className?: string
}

export default function ImprintBox(props: Props) {
    return (
        <div className={`${styles.wrapper} ${props.className}`}>
            <a className={styles.imprint} href="assets/imprint.txt">
                Imprint
            </a>
        </div>
    );
}
