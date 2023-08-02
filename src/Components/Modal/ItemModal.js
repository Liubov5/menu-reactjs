import React from "react";
import cl from './ItemModal.module.css';

export const ItemModal = ({id, visible, setVisible}) => {
    const rootClasses = [cl.myModal];
   if(visible){
        rootClasses.push(cl.active);
   }

    return (
        <div onClick={()=> {setVisible(false)}} className={rootClasses.join(' ')}>
            <div onClick={(e)=>{e.stopPropagation()}} className={cl.myModalContent}>
                {/* тут надо вывести инфу об одном товаре */}
                {id}
            </div>
        </div>
    )
}