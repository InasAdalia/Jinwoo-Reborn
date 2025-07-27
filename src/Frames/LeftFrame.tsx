import clsx from "clsx";
import Button from "../Components/Button";
import { useCustomContext, MainFrameContext } from "../Data/Context";
import { addInvItem, player } from "../Data/GameData";
import styles from './LeftFrame.module.css'

interface LeftFrameProps {
    containerClass?: string;
}

const LeftFrame=({containerClass} : LeftFrameProps )=>{

    return(
        <div className={clsx(styles.leftFrame, containerClass)}>
            {/* MP,HP, Level */}
            {/* Inventory, Summon, Haein Button */}
            <div className={styles.status}>
                <p>LVL: {player.level.curAmount}</p>
                <p>MP: {player.MP.curAmount}</p>
                <p>HP: {player.HP.curAmount}</p>
            </div>
            <div className={styles.actionButtons}>
                <Button  onClick={() => { } } btnText='' toggles={'info'} template={'info-button'} clickable={true} />
                <Button  onClick={() => { } } btnText='INVENTORY' toggles={'inventory'} template={'button-1'} clickable={true} />
                <Button  onClick={() => { } } btnText='SUMMONS' toggles={'summons'} template={'button-1'} clickable={true} />
                <Button  onClick={() => { } } btnText='HAEIN' toggles={'sideQuest'} template={'button-1'} clickable={true} />

            </div>
        </div>
    )
}

export default LeftFrame;