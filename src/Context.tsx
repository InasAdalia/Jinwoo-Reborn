import { createContext, useContext, useEffect, useState } from "react";
import ItemType from "./GameData";
import { EquippedItems, InvItems } from "./GameData";

type TogglePopupType = {
    whichPopup: string|null; //'info', 'inventory', 'summons', 'haein'
    setPopup: React.Dispatch<React.SetStateAction<string|null>>
};
type MainFrameType = {
    mainContent: string
    setMainContent: React.Dispatch<React.SetStateAction<string>>
}
type InvItemType = {
    invItems: ItemType[]
    setInvItems: React.Dispatch<React.SetStateAction<ItemType[]>>
}
export type EqItemType = {
    eqItems: ItemType[];
    setEqItems: React.Dispatch<React.SetStateAction<ItemType[]>>
}

const TogglePopupContext = createContext<TogglePopupType | null>(null) 
const MainFrameContext = createContext<MainFrameType | null>(null)
const InvItemContext= createContext<InvItemType|null>(null);
const EqItemContext = createContext<EqItemType|null>(null);

// useEffect that allows open/close transition
const toggleUseEffect=(whichPopup:string|null, curPopup:string, setHide:any)=>{
    useEffect(() => {
        whichPopup===curPopup ? (setHide(false)) : (setTimeout(() => setHide(true), 500));
    }, [whichPopup]);
}

//custom hook
function useCustomContext<T>(whatContext: React.Context<null|T>):T{
    const context = useContext(whatContext);
    if (!context) throw new Error("Context is not available");
    return context
}

// Compilation of all context providers
const GameProvider=({ children }: { children: React.ReactNode })=>{

    const [mainContent, setMainContent] = useState<string>('')
    const [whichPopup, setPopup] = useState<string|null>(null)
    const [invItems, setInvItems] = useState<ItemType[]>(InvItems);
    const [eqItems, setEqItems] = useState<ItemType[]>(EquippedItems);

    return(
        <MainFrameContext.Provider value={{mainContent, setMainContent}} >
            <InvItemContext.Provider value={{invItems, setInvItems}} >
                <TogglePopupContext.Provider value={{ whichPopup, setPopup }}>
                    <EqItemContext.Provider value={{eqItems, setEqItems}} >
                        {children}
                    </EqItemContext.Provider>
                </TogglePopupContext.Provider>
            </InvItemContext.Provider>
        </MainFrameContext.Provider>
    )
}

export {TogglePopupContext, InvItemContext, EqItemContext,MainFrameContext, useCustomContext, GameProvider, toggleUseEffect}

