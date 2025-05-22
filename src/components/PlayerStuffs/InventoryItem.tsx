import Item from "./Item.tsx";
import { InvItemProps } from "../../Props.tsx";
import soundManager from '../../SoundManager.ts'
import { unequipItem } from "../../GameData.ts";
import { useCustomContext, EqItemContext } from "../../Context.tsx";

// this is the inventory box component
const InventoryItem=({itemName, titlePos='bottom'}: InvItemProps)=>{

    const {eqItems, setEqItems} = useCustomContext(EqItemContext);
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
                <div className="inventory-filled" onMouseEnter={() => {soundManager.playSound('select1'); } }>
                    <Item itemName={itemName} />
                    <img className='center cancel-icon' src="../src/assets/cancel-icon.png" alt="cancel" onClick={()=>unequipItem(itemName, {eqItems, setEqItems})}/>
                </div>
                {titlePos==='bottom' && <p className="item-name bottom">{itemName}</p>}
            </>}
            
        </div>
        </>
        
        
    )
}

export default InventoryItem;