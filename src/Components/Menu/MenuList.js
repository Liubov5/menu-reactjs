import React from "react";
import '../../App.css';
import { MenuItem } from "./MenuItem";

export const MenuList = ({menuItems}) => {
    return(
        <div className="menu_list">
            
            {menuItems.map( item => {
                return <MenuItem key={item.id} item={item}/> 
            } )}
        </div>
    )
}