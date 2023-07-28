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
                ? <h3 style={{textAlign:'center', fontWeight:'100'}}>Корзина пуста</h3>
                :   <div>
                        {cart.items.map(item=><CartItem key={item.id} item={item} /> ) }
                        
                        <h2 style={{textAlign: 'center'}}>Total summ: {cart.totalSumm}$</h2>
                    </div>
                
            }
        </div>
    )
}