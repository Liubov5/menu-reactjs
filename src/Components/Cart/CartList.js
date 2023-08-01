import React, { useEffect, useRef } from "react";
import '../../App.css';
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const CartList = ({title}) => {
    const cart = useSelector(state=>state.CartReducer.cart)
    const nodeRef = React.useRef(null);
    useEffect(()=>{
        
    }, [cart])

    return (
        <div className="block-list">
           <h2 className="title">{title}</h2>
            {cart.items.length === 0 
                ? <h3 style={{textAlign:'center', fontWeight:'100'}}>Корзина пуста</h3>
                :   <div>
                        <TransitionGroup>
                            {cart.items.map((item,index)=>
                            <CSSTransition
                                in={true}
                                key={index}
                                classNames="item"
                                timeout={500}
                                nodeRef={nodeRef}
                            >
                                <CartItem innerRef={nodeRef} key={item.id} item={item} /> 
                            </CSSTransition>
                            )}
                       </TransitionGroup>
                       
                        <h2 style={{textAlign: 'center'}}>Total summ: {cart.totalSumm}$</h2>
                    </div>
                
            }
        </div>
    )
}