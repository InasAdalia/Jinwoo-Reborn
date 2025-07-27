import clsx from 'clsx';
import styles from './Summons.module.css';
import Popup from '../Components/Popup';
import Button from '../Components/Button';

const Summons = () => {
    return (
        <Popup 
            popup={'summons'}
            closeBtn={true} 
            title={<h2 className={clsx(styles.title)}>Summons</h2>} 
            content={(
                <div className={styles.summonsContent}>
                    <div className={styles.summonItem}>
                        <img src="/assets/summons/summon1.png" alt="Summon 1" />
                        <p>Summon 1</p>
                    </div>
                    <div className={styles.summonItem}>
                        <img src="/assets/summons/summon2.png" alt="Summon 2" />
                        <p>Summon 2</p>
                    </div>
                    {/* Add more summons as needed */}
                </div>
            )}
            footer={
                (
                    <Button
                        btnText={'Summon'}
                        wrapperClass={styles.summonButton}
                        onClick={() => { } }
                        template={'button-1'} clickable={false}                    />
                )
            } 
            />
    );
}

export default Summons;