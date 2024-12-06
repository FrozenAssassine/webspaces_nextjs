"use client"
import GameButton from "@/components/games/GameButton/GameButton";
import ImprintBox from "@/components/ImprintBox/ImprintBox";
import styles from './page.module.scss';

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.headline}>FrozenAssassine's Play Zone</div>
			</div>
			<div className={styles.gamesList}>
				<GameButton route="./tictactoe" gameImage="./assets/games/tictactoe.png" gameName="Tic Tac Toe" />
			</div>
            <ImprintBox className={styles.imprint}/>
		</div>
	);
}
