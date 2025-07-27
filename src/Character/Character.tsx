import clsx from 'clsx';
import styles from './Character.module.css';

interface CharacterProps{
    emote: 'idle';
    character: string;
    containerClass?: string;
}

const Character = ({emote, character, containerClass}: CharacterProps)=>{

    return(
        <div className={clsx(styles.character, containerClass)}>
            <img className={styles[emote ?? 'idle']} src={`/assets/${character}/${character}-${emote }.png`} alt={`sprite-${character}`} id={`sprite-${character}`}/>
        </div>
    )
}

export default Character;