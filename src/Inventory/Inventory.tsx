import styles from './Inventory.module.css';
import clsx from "clsx";
import Popup from "../Components/Popup.tsx";
import { itemSet } from "../Data/GameData.ts";
import ItemBarScroller from "./ItemBarScroller.tsx";

const Inventory = () => {
    
    return (
        <>
            <Popup
            containerClass={styles.inventoryFrame}
            popup={"inventory"}
            closeBtn={true}
            title={
                <h2 className={clsx(styles.title)}>Inventory</h2>
            }
            contentClass={styles.content}
            content={
                <>
                    <div className={styles.weaponCategory}>
                        <h3>Weapon & Powers</h3>
                        <ItemBarScroller itemSet={itemSet} category={'weapons'} boxesLength={6} arrows={'rightOnly'}/>
                    </div>

                    <div className={styles.othersCategory}>
                        <h3>Others</h3>
                        <ItemBarScroller itemSet={itemSet} category={'others'} boxesLength={6} arrows={'rightOnly'}/>
                    </div>
                </>
            } />
        </>
    )
}

export default Inventory;