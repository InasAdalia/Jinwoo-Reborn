import { EqItemContext, EqItemType, InvItemContext, useCustomContext } from "./Context";
import Item from "./Item";

//inventory items data management
const AllItems: Set<Item> = new Set([ //all items in the game
    new Item('drumsticks', 'weapons', 'damage', 20, 'enemy', 25, true),
    new Item('ferarri keys', 'weapons', 'MP', 50, 'enemy', 0, false),
    new Item('tiga\'s beam', 'weapons', 'MP', 50, 'enemy', 0, false),
    new Item('snickers', 'others', 'level', +5, 'ally', 25, true),
    new Item('disc', 'others', 'level', +5, 'ally', 0, false),
    new Item('emil\'s fart', 'others', 'level', +1, 'ally', 0, false),
])
const InvItems: Set<Item> = new Set([]); //inventory items
const EquippedItems: Set<Item> = new Set([]); 

const addInvItem = () =>{ //temp testing adding item to inventory
    const {invItems, setInvItems} = useCustomContext(InvItemContext);

    return () => {
        console.log(invItems);
        const randomItem = [... AllItems][Math.floor(Math.random() * [... AllItems].length)]
        setInvItems(new Set([... [... invItems], randomItem]));
    }
}

const equipItem = (item: Item[]) =>{

}



const unequipItem = (itemName: string|null, {eqItems, setEqItems}: EqItemType) =>{
    setEqItems(new Set([...eqItems].filter(item => item.name !== itemName)))
}




export {AllItems, InvItems, EquippedItems, addInvItem, unequipItem}