import React, { Children } from "react";
import "../../App.css";

export const Button = ({children, addToCart, isDisabled}) => {
    return (
        <button disabled={isDisabled}  onClick={()=>addToCart()} className={isDisabled ? "btn-to-cart btn-disabled " : "btn-to-cart"}>{children}</button>
    )
}