import { EqItemContext, EqItemType, InvItemContext, useCustomContext } from "./Context";

type StatusBar={
    curAmount: number
    maxAmount: number
    minAmount: number
}

type PowerBar={
    curAmount: number
    maxAmount: number
    extendedAmount: 5
}

type Effect={
    effectType: 'HP' | 'MP' | 'level' |'strength' | 'speed' | 'intelligence' 
    effectQtty: number //set + or -
    effectOn: 'player' | 'enemy' | 'ally' | 'both'
}

type ItemType={
    name: string
    category: 'weapons' | 'others'
    effects: Effect[]
}

type Enemy={
    name: string
    nametag: string
    summonable: boolean
    strength: PowerBar
    speed: PowerBar
    intelligence: PowerBar
}   

type Ally={
    name: 'haein'
    level: StatusBar
    levelStatus: string
    HP: StatusBar
    abilities: string[] 
}

type Player={
    name:string
    HP: StatusBar
    MP: StatusBar
    level: StatusBar
    strength: PowerBar
    speed: PowerBar
    intelligence: PowerBar
}


const createStatusBar=(curAmount: number = 100, maxAmount: number = 100, minAmount: number=10):StatusBar =>({
    curAmount: curAmount,
    maxAmount: maxAmount,
    minAmount: minAmount
})

const createPowerBar=():PowerBar =>({
    curAmount: 1,
    maxAmount: 5,
    extendedAmount: 5
})




//i feel like im making unnecessary copies of objects..
//powerBar is exactly used. just used to make copies.
const player : Player={
    name: 'Jinwoo',
    HP: createStatusBar(),
    MP: createStatusBar(50,50),
    level: createStatusBar(1,100,0),
    strength: createPowerBar(),
    speed: createPowerBar(),
    intelligence: createPowerBar()
} //only 1 player throughout the game.


const updateAllyStatus=()=>{
    let status=""
    if (ally.level.curAmount >= 50) status = 'Lovey Dovey';
    else if (ally.level.curAmount >= 25) status = 'Bestie';
    else if (ally.level.curAmount >= 10) status = 'Comfortable';
    else if (ally.level.curAmount >= 5) status = 'Neutral';
    else status = 'Awkward';

    ally.levelStatus=status;
}

const ally : Ally={
    name: 'haein',
    level: createStatusBar(1,50,0),
    levelStatus: 'awkward',
    HP: createStatusBar(),
    abilities: ['cannot speak']
} //only 1 ally throughout the game

const beru : Enemy ={
    name: 'ant king',
    nametag: 'beru',
    summonable: true,
    strength: createPowerBar(),
    speed: createPowerBar(),
    intelligence: createPowerBar()
}
//i'll add 7 more enemies later

//ITEMS DATA and related FUNCTIONS
const itemSet : ItemType[] = [
    {
        name: 'drumsticks', 
        category: 'weapons', 
        effects: [
            {effectType: 'strength' ,effectQtty: +1, effectOn: 'player'}
        ]
    },
    {
        name: 'ferarri keys', 
        category: 'weapons', 
        effects: [
            {effectType: 'strength',effectQtty: +2, effectOn: 'enemy'},
            {effectType: 'intelligence', effectQtty: +1, effectOn: 'enemy'},
            {effectType: 'speed', effectQtty: +3, effectOn: 'enemy'}
        ]
    },
    {
        name: 'tiga\'s beam', 
        category: 'weapons', 
        effects: [
            {effectType: 'strength',effectQtty: +2, effectOn: 'ally'},
            {effectType: 'intelligence', effectQtty: +1, effectOn: 'ally'},
            {effectType: 'speed', effectQtty: +3, effectOn: 'ally'}
        ]
    },
    {
        name: 'snickers', 
        category: 'others', 
        effects: [
            {effectType: 'HP',effectQtty: +15, effectOn: 'both'}
        ]
    },
    {
        name: 'disc', 
        category: 'others', 
        effects: [
            {effectType: 'MP', effectQtty: +1, effectOn: 'ally'}
        ]
    },
    {
        name: 'emil\'s fart', 
        category: 'others', 
        effects: [
            {effectType: 'strength',effectQtty: +1, effectOn: 'ally'}
        ]
    },
]

const curEnemy:Enemy = beru;

const takeEffect=(effect: Effect)=>{

    let entities=[]
        switch (effect.effectOn) {
            case 'player':  entities=[player]; break;
            case 'ally': entities=[ally]; break;
            case 'enemy': entities=[curEnemy]; break;
            case 'both': entities=[player, ally]; break;
        }

     
    entities.forEach( entity =>{
        const effectType = effect.effectType as keyof typeof entity; //to prevent error: 'effectType implicitly has any type'.
        if (
            entity[effectType] &&   //checks if enemy['HP'] or player['strength'] exists 
            typeof entity[effectType] === 'object' &&  //checks if it is an object property
            'curAmount' in entity[effectType]   //checks if it has curAmount 
        ){ 
            (entity[effectType] as StatusBar | PowerBar).curAmount += effect.effectQtty;
        } else {
        console.warn(`Effect "${effectType}" skipped: not present on`, entity.name);
        }
        
        entity===ally && updateAllyStatus();
    })

    
    
}

const InvItems:ItemType[] = []; //inventory items
const EquippedItems:ItemType[] = []; 

const addInvItem = () =>{ //temp testing adding random item to inventory
    const {invItems, setInvItems} = useCustomContext(InvItemContext);

    const generateRandom=()=>{
        return itemSet[Math.floor(Math.random() * itemSet.length)] 
    }
    return () => {
        console.log(invItems);
        let randomItem;
        do {randomItem = generateRandom()} 
        while (invItems.includes(randomItem))
        setInvItems([...invItems, randomItem]); //juts one re-render and that's exactly what u want
    }
}

const unequipItem = (itemName: string|null, {eqItems, setEqItems}: EqItemType) =>{
    setEqItems(eqItems.filter(item => item.name !== itemName))
}

export default ItemType
export { player, ally, curEnemy, itemSet, InvItems, EquippedItems, addInvItem, unequipItem}