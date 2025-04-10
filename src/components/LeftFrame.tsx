import { addInvItem } from "../Context";
import Button from "./Button";


const LeftFrame=()=>{

    const addItem = addInvItem();
    
    return(
        <div className="left-frame">
            {/* MP,HP, Level */}
            {/* Inventory, Summon, Haein Button */}
            <div className="status">
                <p>LVL: 1</p>
                <p>MP: 50</p>
                <p>HP: 50</p>
            </div>
            <div className="action-buttons">
                <Button btnText='' toggles={'info'} template={'info-button'} />
                <Button btnText='INVENTORY' toggles={'inventory'} template={'button'} />
                <Button btnText='SUMMONS' toggles={'summons'} template={'button'} />
                <Button btnText='HAEIN' toggles={'haein'} template={'button'} />
                <button className="" onClick={addItem}>ADD</button>
            </div>
        </div>
    )
}

export default LeftFrame;