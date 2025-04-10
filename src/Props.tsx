export interface ButtonProps{
    btnText: string
    toggles: 'info'|'inventory'|'summons' | 'haein' | null
    template : 'button' | 'button-2' | 'info-button' | 'arrow-right' | 'arrow-left'| null
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