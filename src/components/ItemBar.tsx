import { useEffect } from "react";
import InventoryItem from "./InventoryItem";
import { InvItemContext, useCustomContext } from "../Context";
import { ItemBarProps } from "../Props";

const ItemBar =( {category, context, invBoxes}: ItemBarProps )=>{

        
    function render(category: 'weapons'|'others'){
        let items = [... context].filter(item=> item.category===category).reverse() //items filtered by weapons/others
        let renderComponent=[];
        
        renderComponent.push(...(items.map(item=>(
            <InventoryItem itemName={items.length > items.indexOf(item) ? item.name : ''} titlePos={'bottom'} />
        ))))
        for (let i=0; i<invBoxes-items.length; i++){   //rendering remaining boxes as empty
            renderComponent.push(<InventoryItem itemName="" titlePos={'bottom'} />)
        }
        return renderComponent
    }

    useEffect(()=>{}, [context]);

    return (
        <div className={`items-bar-bottom`}>
            {render(category)}
        </div>
    )
    
}

export default ItemBar;