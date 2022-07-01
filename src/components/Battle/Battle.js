import styles from './styles.module.css';
import { opponentStats } from './shared/characters'
import { PlayerSummary } from '../PlayerSummary/PlayerSummary';

export const Battle = () => {

    const [] = useState(opponentStats.maxHealth);

    return (
    <div className={styles.main}>
        <div className={styles.opponent}>
            <div className={styles.summary}>
                <PlayerSummary 
                    health={opponentHealth}
                />
            </div>
        </div>
        <div className={styles.user}>
            <div className={styles.summary}>
                <PlayerSummary main />
            </div>
        </div>
    </div>
    );
};