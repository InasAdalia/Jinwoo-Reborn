import {ItemProps} from "../Props";

const Item=({itemName}: ItemProps)=>{
    return(
        <img className={`item ${itemName}`} src={`../src/assets/items/${itemName}.png`} alt="Item"/>
    )
}

export default Item;