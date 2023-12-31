import React, { useRef } from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { addNumberAction, removeNumberAction, removeItemAction } from "../../store/CartReducer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { inShoppingCartAction } from "../../store/MenuReducer";

export const CartItem = ({item, innerRef}) => {
    const dispatch = useDispatch();
    const addNumber = (id) => {
        dispatch(addNumberAction(id));
    }
    const removeNumber = (id) => {
        dispatch(removeNumberAction(id));
    }

    const removeItem = (id, total) => {
        dispatch(removeItemAction( {id, total} ));
        dispatch(inShoppingCartAction(id));
    }
    return (
        <div ref={innerRef} className="cart-item-wrapper">
            <div className="cart-item-block-left">
                <img className="cart-item-img" src={require("../../"+item.image)}/>
                <FontAwesomeIcon onClick={()=>removeItem(item.id, item.total)} icon={faTrash} style={{cursor:'pointer'}}/>
            </div>
            <div className="cart-item-block-right">
                <h2>{item.name}  </h2> 
                <p>{item.total}$</p>
                <button className="count_button" onClick={()=>addNumber(item.id)}>+</button>
                <span style={{fontWeight:"900", padding:'7px'}}>{item.count}</span>
                <button className="count_button" onClick={()=>removeNumber(item.id)}>-</button>
                
                {item.price < item.total &&
                    <p style={{fontWeight:'100', fontSize:'13px'}}>{item.price}$ for per</p>
                }
            </div>
        </div>
    )
}