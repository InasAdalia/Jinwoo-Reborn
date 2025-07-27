import clsx from 'clsx';
import styles from './Item.module.css';
import pos from '../stylesheets/Positions.module.css';

interface ItemProps{
    itemName: string;
}

const Item=({itemName}: ItemProps)=>{
    return(
        <img className={clsx(styles.item, pos.center)} src={`/assets/items/${itemName}.png`} alt="ItemType"/>
    )
}

export default Item;