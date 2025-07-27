import Character from '../Character/Character';
import ItemSelector from '../Components/ItemSelector';
import Popup from '../Components/Popup';
import Item from '../Inventory/Item';
import styles from './SideQuest.module.css';

const SideQuest = () => {
    return (
        <Popup 
        frameTemplate='frame-2'
        popup={'sideQuest'}
        contentClass={styles.sideQuestContent} 
        content={(
            <>
                <div className={styles.itemSelector}>
                    <ItemSelector />
                </div>
                
                <Character 
                character={'haein'} 
                emote={'idle'} 
                containerClass={styles.character}/>

                <div className={styles.desc}>
                    GRID 2
                </div>
            </>
            
        )} 
        closeBtn={true} />
    );
}

export default SideQuest;