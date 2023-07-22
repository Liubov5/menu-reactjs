import React from "react";
import { useSelector } from "react-redux";
import { MenuList } from "./MenuList";
import '../../App.css';
import { CartList } from "../Cart/CartList";

export const MenuWrapper = () => {
    const menuItems = useSelector(state=>state.MenuReducer.menuList);

    return(
        <div className="menu_wrapper">
            <MenuList menuItems={menuItems}/>
            <CartList/>
        </div>
    )
}