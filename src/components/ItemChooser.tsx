import {  useState } from "react";
import Button from "./Button"
import InventoryItem from "./InventoryItem";
import { InvItemContext, useCustomContext } from "../Context";
import Item from "../Item";

const ItemChooser = () => {

    

    const {invItems} = useCustomContext(InvItemContext);
    const [index, setIndex] = useState(0);
    const [category, setCategory] = useState<string>('weapons');
    let itemList: Item[] = [];

    // useEffect(() => {
    //     itemList = [...invItems].filter(item=> item.category === category).reverse()
    // }, [invItems]);
    const handleNext = (number: number) =>{
        console.log(index, index+number, itemList, itemList.length);
        (index+number<0) 
        ? setIndex(0) 
        : (index+number<itemList.length) && setIndex(index+number);

        console.log(index)
    }

    const renderItem = (category: string) =>{
        itemList = [...invItems].filter(item=> item.category === category).reverse();
        console.log(category);

        return(itemList.length===0)?(
            <InventoryItem itemName={""} titlePos={'top'}/>
        ):(
            <InventoryItem itemName={itemList[index].name} titlePos={'top'}/>
        )  
    }
    
    return (
        <div className="item-chooser-frame">
            <div className="item-choice">
                <Button onClick={()=>{handleNext(-1)}} btnText={""} toggles={null} template={'arrow-left'} />
                {renderItem(category)}
                <Button onClick={()=>{handleNext(1)}} btnText={""} toggles={null} template={'arrow-right'} />
            </div>
            <Button onClick={()=>{}} btnText={"GIVE"} toggles={null} template={'button-2'} />
            <p className="details">Hmm.. See if she likes it or not</p>
        </div>
    )
}

export default ItemChooser