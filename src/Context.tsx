import { createContext, useContext, useEffect, useState } from "react";

// // export const ToggleInvContext = createContext<boolean>(false);
// type ToggleBoolType = {
//     isOpen: boolean;
//     setOpen: React.Dispatch<React.SetStateAction<boolean>>;
// };

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

const toggleUseEffect=(whichPopup:string|null, curPopup:string, isHidden:boolean, setHide:any)=>{
    useEffect(() => {
        whichPopup===curPopup ? (setHide(false)) : (setTimeout(() => setHide(true), 500));
        console.log(`useEffect is called, isHidden: ${isHidden}, isOpen ${whichPopup === curPopup}`);
    }, [whichPopup]);
}


// Compilation of all context providers
const GameProvider=({ children }: { children: React.ReactNode })=>{

    const [whichPopup, setPopup] = useState<string|null>(null)

    return(
        <TogglePopupContext.Provider value={{ whichPopup, setPopup }}>
            {children}
        </TogglePopupContext.Provider>
    )
}

export {TogglePopupContext, useCustomContext, GameProvider, toggleUseEffect}

