"use client"

import { Icon } from "@iconify/react";
import styles from "./page.module.scss";
import textanimation from '@/generalstyles/textAnimation.module.scss';

export default function SocialPage() {
    return (
        <div className={styles.socialPage}>
            <div className={styles.header}>
                <img className={styles.icon} src="/assets/frozenassassine/frozenassassineIcon.png" />
                <div className={textanimation.textanimation}>FrozenAssassine</div>
            </div>
            <div className={styles.socialItems}>
                
                <div className={styles.socialItem}>
                    <Icon icon="mdi:internet" />
                    <div>Website</div>
                </div>

                <div className={styles.socialItem}>
                    <Icon icon="mdi:instagram" />
                    <div>Instagram</div>
                </div>

                <div className={styles.socialItem}>
                    <Icon icon="mdi:github" />
                    <div>Github</div>
                </div>
                <div className={styles.socialItem}>
                    <Icon icon="mdi:email-outline" /> 
                    <div>Email</div>
                </div>
            </div>
        </div>
    );
}
