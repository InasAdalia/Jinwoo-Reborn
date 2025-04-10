import Button from "./Button"
import InventoryItem from "./InventoryItem"

const ItemChooser = () => {
    return (
        <div className="item-chooser-frame">
            <div className="item-choice">
                {/* <button className="arrow-prev arrow-btn"></button> */}
                <Button btnText={""} toggles={null} template={'arrow-left'} />
                <InventoryItem itemName={"disc"} titlePos={'top'}/>
                <Button btnText={""} toggles={null} template={'arrow-right'} />
                {/* <button className="arrow-next arrow-btn"></button> */}
            </div>
            <Button btnText={"GIVE"} toggles={null} template={'button-2'} />
            <p className="details">Hmm.. See if she likes it or not</p>
        </div>
    )
}

export default ItemChooser