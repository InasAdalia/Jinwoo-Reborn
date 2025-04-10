class Item{
    name: string;
    category: string;
    effects: Effects = {effectType: '', effectQtty: 0, effectOn:''}
    MPUsage: number;
    acquired: boolean;
    


    constructor(name: string, category: 'weapons'|'others', effectType: string, effectQtty: number, effectOn: string, MPUsage: number, acquired: boolean){
        this.name=name;
        this.category = category;
        this.effects = {effectType: effectType, effectQtty: effectQtty, effectOn: effectOn}
        this.MPUsage = MPUsage;
        this.acquired = acquired;
    }

    setAcquired=(bool: boolean)=>{
        this.acquired = bool;
    }
}

interface Effects {effectType: string, effectQtty: number, effectOn: string};

export default Item
