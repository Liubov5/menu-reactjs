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
                <button className="count_button" onClick={()=>addNumber(item.id)}>+</button>
                <span style={{fontWeight:"900"}}>{item.count}</span>
                <button className="count_button" onClick={()=>removeNumber(item.id)}>-</button>
                {item.price < item.total &&
                    <p style={{fontWeight:'100', fontSize:'13px'}}>{item.price}$ for per</p>
                }
            </div>
        </div>
    )
}