import styles from './styles.module.css';
import { opponentStats } from './characters.js';
import { PlayerSummary } from '../PlayerSummary/PlayerSummary';
import { useState } from 'react';

export const Battle = () => {

    const [] = useState(opponentStats.maxHealth);

    return (
    <div className={styles.main}>
        <div className={styles.opponent}>
            <div className={styles.summary}>
                <PlayerSummary 
                    health={opponentStats}
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