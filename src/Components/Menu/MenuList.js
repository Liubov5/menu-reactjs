import React from "react";
import "../../App.css"
import { MenuItem } from "./MenuItem";


export const MenuList = ({title, items}) => {
    
    return (
        <div className="block-list">
            <h2 className="title">{title}</h2>
            {items.map(item=>{
                return <MenuItem key={item.id} item={item} />
            })}
            
        </div>
    )
}