import React, { useState } from "react";
import "../../App.css";
import { Button } from "../ui/Button";
import { addItemAction } from "../../store/CartReducer";
import { useDispatch } from "react-redux";


export const MenuItem = ({item}) => {
    const dispatch = useDispatch();
    const addToCart = (item) => {
        dispatch(addItemAction(item));
        setButtonDisabled(true);
    }
    const [buttonDisabled, setButtonDisabled] = useState(false);
    //тут нужно добавлять в карт редусер

    return(
        <div className="item-wrapper">
            <div className="item-block">
                <img className="item-img" src={require("../../"+item.image)}/> 
                {/* что делает require */}
            </div>
            <div className="item-block">
                <p className="item-name">{item.name}</p>
                <p className="item-price">${item.price}</p>
                <Button isDisabled={buttonDisabled} addToCart={()=>addToCart(item)}>{buttonDisabled ? "В корзине" :  "Добавить в корзину" }</Button>
            </div>
            
        </div>
    )
}