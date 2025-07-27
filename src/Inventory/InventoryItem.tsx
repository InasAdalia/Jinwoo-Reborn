import { useCustomContext, EqItemContext } from "../Data/Context.tsx";
import { unequipItem, type ItemType } from "../Data/GameData.ts";
import soundManager from "../SoundManager.ts";
import clsx from "clsx";
import styles from './InventoryItem.module.css';
import Item from "./Item.tsx";

import { useEffect, useState } from "react";

interface InvItemProps{
    item: ItemType | null;
    titlePos?: 'top' | 'bottom';
    keyIndex ?: number;
    canUnequip?: boolean; 
    canShowDetails?: boolean;
    titleClass?: string;
    itemFrameClass?: string;
}

// this is the inventory box component
const InventoryItem=({keyIndex, item, titlePos, canUnequip, canShowDetails, titleClass, itemFrameClass}: InvItemProps)=>{

    const {eqItems, setEqItems} = useCustomContext(EqItemContext);
    const [showDetails, setShowDetail] = useState(false);
    const [cursorPos, setCursorPos] = useState({x: 0, y: 0});
    const isEmpty = item == null

    const handleCursorPos = (event: MouseEvent) => {
        setCursorPos({
        x: event.clientX,
        y: event.clientY,
        });
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleCursorPos);
        return () => {
            document.removeEventListener('mousemove', handleCursorPos);
        };
    }, [showDetails]);

    return(
        
        <div className={clsx(styles.invItemContainer, 'invItemContainer')}>
            {
                <>
                    {/* the title pos controlled using grid */}
                    {<p className={clsx(styles.itemName, styles[titlePos?? 'none'], titleClass ??'')}>{item?.name}</p>}

                    {<div 
                    key={keyIndex} 
                    className={clsx(styles.itemFrame, isEmpty && styles.emptyFrame, itemFrameClass ?? '')} 
                    onMouseEnter={() => {soundManager.playSound('select1'); setShowDetail(true)}} 
                    onMouseLeave={()=>{setShowDetail(false)}}>
                        { !isEmpty && <Item itemName={item.name} />}
                        { !isEmpty && canUnequip && 
                            <img className={clsx(styles.center, styles.cancelIcon)} 
                            src="/assets/cancel-icon.png" 
                            alt="cancel" 
                            onClick={()=>unequipItem(item.name , {eqItems, setEqItems})}/>}
                        {/* {canShowDetails && showDetails && <HoverDetails x={cursorPos.x} y={cursorPos.y}/>} */}
                    </div>}
                </>
            }
        </div>        
        
    )
}

export default InventoryItem;