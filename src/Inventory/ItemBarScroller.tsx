import { use, useEffect, useState } from "react";
import Button from "../Components/Button";
import ItemBar from "./ItemBar";
import styles from './ItemBarScroller.module.css';
import clsx from "clsx";

interface ItemBarScrollerProps {
    itemSet: any[];
    category?: 'weapons' | 'others';
    arrows: 'leftOnly' | 'rightOnly' | 'both';
    boxesLength: number;
}

const ItemBarScroller = ({itemSet, category, boxesLength, arrows}: ItemBarScrollerProps) => {

    const [isNextDir, setDir] = useState(true); // state to track 'next' or 'prev'
    const [itemBarWidth, setItemBarWidth] = useState<number>(0);


    useEffect(() => {
        const boxWidth = document.querySelector('.invItemContainer')?.clientWidth ?? 0;
        console.log('boxWidth', boxWidth);
        const scrollerElem = document.querySelector('.itemBarScrollerContainer');
        let gapWidth = 0;

        if (scrollerElem) {
            const gap = getComputedStyle(scrollerElem).gap;
            gapWidth = parseFloat(gap); // gap is a string like "16px"
            console.log('gapWidth', gapWidth, 'boxWidth', boxWidth, 'total width', boxesLength * (boxWidth + gapWidth));

        setItemBarWidth(boxesLength * (boxWidth + gapWidth))
    }   
    }, [boxesLength])

    const handleScroll=( e: React.MouseEvent<HTMLButtonElement, MouseEvent>,[isNextDir, setDir]: [boolean, React.Dispatch<React.SetStateAction<boolean>>])=>{

        e.preventDefault();
        const whichBar = e.currentTarget.parentElement?.querySelector('.scrollerWrapper'); //the item-bar element of that category        
        // const whichBar= document.querySelector('.itemBarWrapper'); //the item-bar element of that category
        console.log(whichBar);
        if (whichBar) {
            //scrolls the item-bar
            const scrollWidth = whichBar.clientWidth;
            const newScrollLeft = isNextDir ? whichBar.scrollLeft + scrollWidth / 2 : whichBar.scrollLeft - scrollWidth ;
            whichBar.scrollLeft = newScrollLeft; 

            //flips the arrow if necessary
            const isRightmost = Math.ceil(newScrollLeft + whichBar.clientWidth) >= whichBar.scrollWidth;
            setDir(!isRightmost); 
        }
    }

    const renderArrowBtn = (dir: 'right'|'left') => {
        function handleBtnClick (e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
            handleScroll(e, [isNextDir, setDir])
        }
        return <Button 
            onClick={(e) => handleScroll(e, [isNextDir, setDir])}
            wrapperClass={clsx(styles[`arrow-${dir}`], `arrow-${dir}`)}
            template={`arrow`} 
            clickable={true} />
    }

    return (
        <div className={clsx(styles.itemBarScrollerContainer, 'itemBarScrollerContainer')}>
            {arrows !== 'rightOnly' && renderArrowBtn('left')}
            <div className={clsx(styles.scrollerWrapper, 'scrollerWrapper')}
            style={{width: itemBarWidth+'px'}}>
                <ItemBar category={category} itemSet={itemSet} invBoxes={12}/>
            </div>
            {renderArrowBtn(`${isNextDir? 'right' : 'left' }`)}
        </div>

    );
}

export default ItemBarScroller;