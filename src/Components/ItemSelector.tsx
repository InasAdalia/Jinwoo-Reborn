import ItemBarScroller from '../Inventory/ItemBarScroller';
import styles from './ItemSelector.module.css';

interface ItemSelectorProps {
    itemSet?: any[];
}

const ItemSelector = ({itemSet}: ItemSelectorProps) => {

    return (
        <div className="item-selector">
            <h2>Select an Item</h2>
            <ItemBarScroller itemSet={itemSet ?? []} boxesLength={1} arrows={'both'} />
        </div>
    );
}

export default ItemSelector;