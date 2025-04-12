import { useEffect } from "react";
import InventoryItem from "./InventoryItem";
import { InvItemContext, useCustomContext } from "../Context";
import { ItemBarProps } from "../Props";

const ItemBar =( {category, titlePos}: ItemBarProps )=>{

    const {invItems} = useCustomContext(InvItemContext);
    
    function render(category: 'weapons'|'others'){
        let items = [... invItems].filter(item=> item.category===category).reverse() //items filtered by weapons/others
        let renderComponent=[];
        
        renderComponent.push(...(items.map(item=>(
            <InventoryItem itemName={items.length > items.indexOf(item) ? item.name : ''} titlePos={titlePos} />
        ))))
        for (let i=0; i<12-items.length; i++){   //rendering remaining boxes as empty
            renderComponent.push(<InventoryItem itemName="" titlePos={'bottom'} />)
        }
        return renderComponent
    }

    useEffect(()=>{}, [invItems]);

    return (
        <div className={`items-bar-${titlePos}`}>
            {render(category)}
        </div>
    )
    
}

export default ItemBar;