import React from "react";
import { useSelector } from "react-redux";
import '../../App.css';
import { MenuList } from "./MenuList";
import { CartList } from "../Cart/CartList";


export const MenuWrapper = () => {
    const menuItems = useSelector(state=>state.MenuReducer.menuList);
   
    
    return(
        <div className="menu_wrapper">
          <MenuList title="Меню" items={menuItems}/>
          <CartList title="Корзина"/>
        </div>
    )
}