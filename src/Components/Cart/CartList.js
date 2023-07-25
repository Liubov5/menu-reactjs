import React, { useEffect } from "react";
import '../../App.css';
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";

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
                    return <CartItem key={item.id} item={item} />
                })
            }
            <h2 style={{textAlign: 'center'}}>Total summ: {cart.totalSumm}$</h2>
            {/* надо ли выносить в отдельный компонент? 
            Где еще она может использоваться? */}
        </div>
    )
}