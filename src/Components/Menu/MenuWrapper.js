import React, { useState } from "react";
import { useSelector } from "react-redux";
import '../../App.css';
import { MenuList } from "./MenuList";
import { CartList } from "../Cart/CartList";
import { ItemModal } from "../Modal/ItemModal";
import ModalContext from "../../Context";


export const MenuWrapper = () => {
    const menuItems = useSelector(state=>state.MenuReducer.menuList);
    const [modal, setModal] = useState({
      status:false,
      id:0,
    });
    
    return(
        <ModalContext.Provider value={[modal, setModal]}>
          <div className="menu_wrapper">
            <MenuList title="Menu" items={menuItems}/>
            <CartList title="Cart"/>
            <ItemModal visible={modal.status} setVisible={setModal} id={modal.id}>
            </ItemModal>
          </div>
        </ModalContext.Provider>
      
    )
}