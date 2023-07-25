import React from "react";
import "../../App.css";
import { Button } from "../ui/Button";
import { useDispatch } from "react-redux";
import { addNumberAction, removeNumberAction } from "../../store/CartReducer";

export const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const addNumber = (id) => {
        dispatch(addNumberAction(id));
    }
    const removeNumber = (id) => {
        dispatch(removeNumberAction(id));
    }
    return (
        <div className="cart-item-wrapper">
            <div className="cart-item-block-left">
                <img className="cart-item-img" src={require("../../"+item.image)}/>
            </div>
            <div className="cart-item-block-right">
                <h2>{item.name}</h2>
                <p>{item.total}$</p>
                <button onClick={()=>addNumber(item.id)}>+</button>
                <span>{item.count}</span>
                <button onClick={()=>removeNumber(item.id)}>-</button>
            </div>
        </div>
    )
}