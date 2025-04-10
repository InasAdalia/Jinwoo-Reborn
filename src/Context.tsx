import { createContext, useContext, useEffect, useState } from "react";
import Item from "./Item";

type TogglePopupType = {
    whichPopup: string|null; //'info', 'inventory', 'summons', 'haein'
    setPopup: React.Dispatch<React.SetStateAction<string|null>>
};

const TogglePopupContext = createContext<TogglePopupType | null>(null) 


function useCustomContext<T>(whatContext: React.Context<null|T>):T{
    const context = useContext(whatContext);
    if (!context) throw new Error("Context is not available");
    return context
}

// useEffect that allows open/close transition
const toggleUseEffect=(whichPopup:string|null, curPopup:string, isHidden:boolean, setHide:any)=>{
    useEffect(() => {
        whichPopup===curPopup ? (setHide(false)) : (setTimeout(() => setHide(true), 500));
    }, [whichPopup]);
}

// const items = [
//     {   item_name : 'emil\'s drumsticks',
//         category: 'weapon',
//         effects: 'damage +20',
//         MP_usage: 25,
//         acquired :true
//     },
//     {   item_name : 'isagi\'s spatial awareness',
//         category: 'weapon',
//         effects: 'MP +50',
//         MP_usage: 0,
//         acquired : false
//     },
//     {   item_name : 'ferrari\'s keys',
//         category: 'weapon',
//         effects: 'damage +50',
//         MP_usage: 25,
//         acquired : false
//     }
// ]

type InvItemType = {
    invItems: Set<Item>
    setInvItems: React.Dispatch<React.SetStateAction<Set<Item>>>
}

const AllItems: Set<Item> = new Set([
    new Item('drumsticks', 'weapons', 'damage', 20, 'enemy', 25, true),
    new Item('ferarri keys', 'weapons', 'MP', 50, 'enemy', 0, false),
    new Item('tiga\'s beam', 'weapons', 'MP', 50, 'enemy', 0, false),
    new Item('snickers', 'others', 'level', +5, 'ally', 25, true),
    new Item('disc', 'others', 'level', +5, 'ally', 0, false),
    new Item('emil\'s fart', 'others', 'level', +1, 'ally', 0, false),
])
const InvItems: Set<Item> = new Set([]);

const InvItemContext= createContext<InvItemType|null>(null);

const addInvItem = () =>{
    const {invItems, setInvItems} = useCustomContext(InvItemContext);

    return () => {
        console.log(invItems);
        const randomItem = [... AllItems][Math.floor(Math.random() * [... AllItems].length)]
        setInvItems(new Set([... [... invItems], randomItem]));
    }
    
}

// Compilation of all context providers
const GameProvider=({ children }: { children: React.ReactNode })=>{

    const [whichPopup, setPopup] = useState<string|null>(null)
    const [invItems, setInvItems] = useState<Set<Item>>(InvItems);

    return(
        <InvItemContext.Provider value={{invItems, setInvItems}} >
            <TogglePopupContext.Provider value={{ whichPopup, setPopup }}>
                {children}
            </TogglePopupContext.Provider>
        </InvItemContext.Provider>
    )
}

export {TogglePopupContext, InvItemContext, useCustomContext, GameProvider, toggleUseEffect, addInvItem, AllItems}

