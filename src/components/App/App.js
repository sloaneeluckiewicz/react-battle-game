import styles from './styles.module.css';
import {useState} from 'react';
import { Battle, StartMenu} from '../../components';

export const App = () => {
    const [mode, setMode] = useState('start')
    // sets mode to start, when user clicks start button it goes into battle mode.

    return <div className={styles.main}>
        {mode === 'start' && 
        <StartMenu onStartClick={() => setMode('battle')} />}

        {mode === 'battle' && <Battle />}

        {mode === 'gameOver' && <> Game Over </>}
    </div>;
}

