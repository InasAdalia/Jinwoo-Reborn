import Item from "./Item";

export interface ButtonProps{
    btnText: string
    toggles: 'info'|'inventory'|'summons' | 'haein' | null
    template : 'button' | 'info-button' | 'arrow-right' | 'arrow-left'| null
    onClick: ()=> void;
}

export interface InfoButtonProps{
    isOpen : boolean|null
    onClick: ()=> void
}

export interface LeftFrameProps{
    // title: string
}

export interface RightFrameProps{
    dialog: string
}

export interface TopFrameProps{
    title: string
}

export interface MainFrameProps{
    bgImage: string
}

export interface CharacterProps{
    emote: string;
    character: string;
}

export interface InvItemProps{
    itemName: string;
    titlePos: 'top' | 'bottom' | null;
}
export interface ItemProps{
    itemName: string;
}

export interface ItemBarProps{
    category: 'weapons' | 'others'
    // titlePos: 'top' | 'bottom'
    context: Set<Item>
    invBoxes: number
}

export interface ItemChooserProps{
    itemDetails: string | null
    buttonText: string
    buttonOnClick: (item: Item | null) => void 
}