import styles from "./FriendItem.module.scss";

type Props = {
    name: string;
    url: string;
    description: string;
    projects?: { name: string; url: string; description: string }[];
};

export default function FriendItem({ name, url, projects, description }: Props) {
    return (
        <div className={styles.frienditem}>
            <a href={url} className={styles.name}>{name}</a>
            <div className={styles.desc}>{description}</div>
            {projects !== undefined && (
                <div className={styles.projects}>
                    <div className={styles.projectsheadline}>Coolest Project:</div>
                    {projects.map((item, index) => (
                        <a key={index} href={item.url} className={styles.project}>
                            <div className={styles.projectname}>
                                {item.name}
                            </div>
                            <div className={styles.projectdesc}>
                                {item.description}
                            </div>
                        </a>
                    ))}
                </div>
            )}{projects === undefined &&
                <div></div>
            }
        </div>
    );
}
