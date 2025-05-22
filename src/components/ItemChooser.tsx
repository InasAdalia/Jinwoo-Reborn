import {  useEffect, useState } from "react";
import Button from "./Button"
import InventoryItem from "./PlayerStuffs/InventoryItem";
import { EqItemContext, InvItemContext, useCustomContext } from "../Context";
import ItemType from "../GameData";
import { ItemChooserProps } from "../Props";
import { unequipItem } from "../GameData";

const ItemChooser = ({itemDetails, buttonText, buttonOnClick}: ItemChooserProps) => {

    const {invItems} = useCustomContext(InvItemContext);
    const {eqItems, setEqItems} = useCustomContext(EqItemContext);
    const [index, setIndex] = useState(0);
    const [category] = useState<'weapons'| 'others'>('weapons');
    const [curItem, setCurItem] = useState<ItemType|null>(null);
    const [isEquipped, setIsEquipped] = useState(false);
    let itemList: ItemType[] = [];

    const renderItem = (category: 'weapons'|'others') =>{
        itemList = [...invItems].filter(item=> item.category === category).reverse();
        return <InventoryItem itemName={(curItem && itemList.length>0) ?curItem.name:""} titlePos={'top'}/>
    }
    
    const handleNext = (number: number) =>{
        (index+number<0) 
        ? (setIndex(0))
        : (index+number<itemList.length) && setIndex(index+number);
    }

    useEffect(()=>{
        setCurItem(itemList.length>0 ? itemList[index]: null);   
        (curItem && buttonText === 'EQUIP') && [... eqItems].includes(curItem) ? setIsEquipped(true): setIsEquipped(false);
    },[itemList, index]);

    
    return (
        <div className="item-chooser-frame">
            <div className="item-choice">
                <Button  onClick={()=>{handleNext(-1)}} btnText={""} toggles={null} template={'arrow-left'}/>
                {renderItem(category)}
                <Button  onClick={()=>{handleNext(1)}} btnText={""} toggles={null} template={'arrow-right'}/>
            </div>
            <Button  
                onClick={() => (isEquipped)
                    ? unequipItem(curItem?curItem.name:null, {eqItems,setEqItems})
                    : buttonOnClick(curItem)}
                btnText={isEquipped ? 'UNEQUIP' : buttonText} toggles={null} template={'button'}/>
            <p className="details">{itemDetails}</p>
        </div>
    )
}

export default ItemChooser