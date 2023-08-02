import React from "react";
import cl from './ItemModal.module.css';
import { useSelector } from "react-redux";

export const ItemModal = ({id, visible, setVisible}) => {
    const rootClasses = [cl.myModal];
    const a = useSelector(state => state.MenuReducer.menuList.filter(item => item.id === id));
    console.log(a)
   if(visible){
        rootClasses.push(cl.active);
   }

    return (
        <div onClick={()=> {setVisible(false)}} className={rootClasses.join(' ')}>
            <div onClick={(e)=>{e.stopPropagation()}} className={cl.myModalContent}>
                {/* тут надо вывести инфу об одном товаре */}
                {a.length !=0  && 
                <div>
                    <h2>{a[0].name}</h2>
                    <h4>{a[0].price}$</h4>
                    <img src={require("../../"+a[0].image)} />
                </div>
                 }
            </div>
        </div>
    )
}