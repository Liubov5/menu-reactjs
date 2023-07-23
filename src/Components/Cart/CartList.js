import React, { useEffect } from "react";
import '../../App.css';
import { useSelector } from "react-redux";

export const CartList = ({title}) => {
    const cart = useSelector(state=>state.CartReducer.cart)
    useEffect(()=>{
       
    }, [cart])

    return (
        <div className="block-list">
           <h2 className="title">{title}</h2>
            {cart.items.length === 0 
                ? <h3>Корзина пустая</h3>
                : cart.items.map(item=>{
                    return <div key={item.id}>
                        {item.name}
                    </div>
                })
            }
        </div>
    )
}