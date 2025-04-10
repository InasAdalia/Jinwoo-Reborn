import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import InventoryItem from "./InventoryItem";
import { AllItems, InvItemContext, TogglePopupContext, toggleUseEffect, useCustomContext } from "../Context.tsx";
import { InvItemProps } from "../Props.tsx";
import Item from "../Item.ts";


const Inventory = () => {
    
    //handles toggling of inventory
    const {whichPopup} = useCustomContext(TogglePopupContext)
    const popup = 'inventory';
    const isOpen = whichPopup === popup;
    const [isHidden, setHide] = useState(!isOpen);
    toggleUseEffect(whichPopup, popup, isHidden, setHide);

    const {invItems} = useCustomContext(InvItemContext);

    
    function render(category: 'weapons'|'others'){
        let items = [... invItems].filter(item=> item.category===category).reverse() //items filtered by weapons/others
        let renderComponent=[];
        
        const itemComponents = (items.map(item=>(
            <InventoryItem itemName={items.length > items.indexOf(item) ? item.name : ''} titlePos={'bottom'} />
        )))
        
        renderComponent.push(itemComponents)
        for (let i=0; i<12-items.length; i++){   //rendering remaining boxes as empty
            renderComponent.push(<InventoryItem itemName="" titlePos={'bottom'} />)
        }
        return renderComponent
    }

    

    useEffect(()=>{}, [invItems]);

    return (
        <div className="center">
            <div className={`inventory-frame ${!isOpen && 'closed'}`} style={{visibility: isHidden?'hidden':'visible'}} >
                <div className="top-center inventory-title">Inventory</div>

                <div className="top-right">
                    <Button btnText='X' template={null} toggles={popup}/>
                </div>

                <div className="inventory-content center">
                    
                    <div className="weapon-category">
                        Weapon & Powers
                        <div className="items-bar">
                            {render('weapons')}
                        </div>
                        
                    </div>
                    <div className="others-category mt-3">
                        Others
                        <div className="items-bar">
                            {render('others')}
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Inventory;