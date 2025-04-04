import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import InventoryItem from "./InventoryItem";
import { TogglePopupContext, toggleUseEffect, useCustomContext } from "../Context.tsx";
import { InvItemProps } from "../Props.tsx";


const Inventory = () => {
    
    // const {isOpen, setOpen} = useCustomContext(ToggleInvContext)
    // const context = useContext(ToggleInvContext);
    // if (!context) throw new Error("Context is not available");
    // const {isOpen} = context
    const {whichPopup} = useCustomContext(TogglePopupContext)
    const popup = 'inventory';
    const isOpen = whichPopup === popup;
    const [isHidden, setHide] = useState(!isOpen);

    toggleUseEffect(whichPopup, popup, isHidden, setHide);

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
                            <InventoryItem itemName="drumsticks" titlePos={'bottom'} />
                            <InventoryItem itemName="isagi" titlePos={'bottom'} />
                            <InventoryItem itemName="kyrie's shot" titlePos={'bottom'} />
                            <InventoryItem itemName="ferarri keys" titlePos={'bottom'} />
                            <InventoryItem itemName="" titlePos={'bottom'} />
                            <InventoryItem itemName="" titlePos={'bottom'} />
                        </div>
                        
                    </div>
                    <div className="others-category mt-3">
                        Others
                        <div className="items-bar">
                            <InventoryItem itemName="snickers" titlePos={'bottom'} />
                            <InventoryItem itemName="disc" titlePos={'bottom'} />
                            <InventoryItem itemName="emil's fart" titlePos={'bottom'} />
                            <InventoryItem itemName="" titlePos={'bottom'} />
                            <InventoryItem itemName="" titlePos={'bottom'} />
                            <InventoryItem itemName="" titlePos={'bottom'} />
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Inventory;