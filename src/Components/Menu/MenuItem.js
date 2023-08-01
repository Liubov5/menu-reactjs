import React, { useState } from "react";
import "../../App.css";
import { Button } from "../ui/Button";
import { addItemAction } from "../../store/CartReducer";
import { useDispatch } from "react-redux";
import { inShoppingCartAction } from "../../store/MenuReducer";


export const MenuItem = ({item}) => {
    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(addItemAction(item));
        dispatch(inShoppingCartAction(item.id));
    }
    const openModal = (id) =>{
        
    }
    return(
        <div className="item-wrapper">
            <div className="item-block">
                <img onClick={()=>openModal(item.id)} className="item-img" src={require("../../"+item.image)}/> 
                {/* что делает require */}
            </div>
            <div className="item-block">
                <p className="item-name">{item.name}</p>
                <p className="item-price">${item.price}</p>

                <Button isDisabled={item.inShoppingCart} addToCart={()=>addToCart(item)}>{item.inShoppingCart ? "В корзине" :  "Добавить в корзину" }</Button>
            </div>
        </div>
    )
}