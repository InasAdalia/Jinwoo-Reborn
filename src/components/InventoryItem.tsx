import Item from "./Item.tsx";
import { InvItemProps } from "../Props.tsx";
import soundManager from '../SoundManager'

// this is the inventory box component
const InventoryItem=({itemName, titlePos='bottom'}: InvItemProps)=>{
    return(
        <>
        <div className="inventory-item-frame">
            {itemName===''?
            <>
                <div className="inventory-empty">
                </div>
            </>
            :<>
                {titlePos==='top' && <p className="item-name top">{itemName}</p>}
                <div className="inventory-filled" onMouseEnter={() => soundManager.playSound('select1') }>
                    <Item itemName={itemName} />
                </div>
                {titlePos==='bottom' && <p className="item-name bottom">{itemName}</p>}
            </>}
            
        </div>
        </>
        
        
    )
}

export default InventoryItem;