import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../../App.css';
import { MenuList } from "./MenuList";
import { CartList } from "../Cart/CartList";
import { ItemModal } from "../Modal/ItemModal";
import Context from "../../Context";


export const MenuWrapper = () => {
    const menuItems = useSelector(state=>state.MenuReducer.menuList);
    const [modal, setModal] = useState(false)
    
    return(
        <Context.Provider value={[modal,setModal]}>
          <div className="menu_wrapper">
            <MenuList title="Меню" items={menuItems}/>
            <CartList title="Корзина"/>
            <ItemModal visible={true} setVisible={setModal} id={1}>LOL</ItemModal>
          </div>
        </Context.Provider>
      
    )
}