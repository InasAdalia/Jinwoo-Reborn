import { useEffect } from "react";
import InventoryItem from "./InventoryItem";
import { itemSet, type ItemType } from "../Data/GameData";
import styles from './ItemBar.module.css';

export interface ItemBarProps{
    category?: 'weapons' | 'others'
    // titlePos: 'top' | 'bottom'
    itemSet: ItemType[]
    invBoxes: number
}

const ItemBar =( {category, itemSet, invBoxes}: ItemBarProps )=>{
        
    function render(category?: 'weapons'|'others'){
        let items: ItemType[];
        (category) 
            ? (items = itemSet.filter(item=> item.category===category).reverse())
            : (items = itemSet); //items filtered by weapons/others
        
        let renderComponent=[];
        let index = 0;
        renderComponent.push((items.map(item=>{
            index++;
            return <InventoryItem 
            keyIndex={index} 
            item={items.length > items.indexOf(item) ? item : null} 
            titlePos={'bottom'} />
        }
        )))

        for (let i=0; i<invBoxes-items.length; i++){   //rendering remaining boxes as empty
            index++;
            renderComponent.push(
                <InventoryItem 
                keyIndex={index} 
                item={null} 
                />)
        }
        return renderComponent
    }

    useEffect(()=>{}, [itemSet]);

    return (
        <div className={styles.itemBar}>
            {render(category)}
        </div>
    )
    
}

export default ItemBar;