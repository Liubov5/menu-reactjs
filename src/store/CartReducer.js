import {v4 as uuidv4} from 'uuid';

const defaultState = {
    cart:{
        id:uuidv4(),
        customer_id: 1,
        items: [],
        totalSumm: 0,
    }
}
//как это реализовать? самая сложная часть? 
const ADD_ITEM = "ADD_ITEM";
export const CartReducer = (state=defaultState, action) => {
    switch (action.type){
        case ADD_ITEM:
            return {...state, cart: {...state.cart, items:[...state.cart.items, action.payload]}  }
        default:
            return state;
    }
}


export const addItemAction = (payload)=>({
    type: ADD_ITEM, payload
})