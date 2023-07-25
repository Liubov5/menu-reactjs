import {v4 as uuidv4} from 'uuid';

const defaultState = {
    cart:{
        id:uuidv4(),
        customer_id: 1,
        items: [],
        totalSumm: 0,
    }
}

const ADD_ITEM = "ADD_ITEM";
const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

export const CartReducer = (state=defaultState, action) => {
    switch (action.type){
        case ADD_ITEM:
            let item = {...action.payload, count: 1, total:action.payload.price};
            let summ = state.cart.totalSumm + item.total;

            return {...state, cart: {...state.cart, items:[...state.cart.items, item], totalSumm: summ}  }
        case ADD_NUMBER:
            return {...state, cart: {...state.cart, items:[
                ...state.cart.items.map(item=>{
                    if(item.id === action.payload){
                        item.count = item.count + 1;
                        item.total = item.total + item.price;
                        item.total = parseFloat(item.total.toFixed(2));
                      }
                      return item;
                  })
            ], totalSumm: state.cart.totalSumm + ???}};
        case REMOVE_NUMBER:
            return {...state, cart: {...state.cart, items:[
                ...state.cart.items.map(item=>{
                    if(item.id === action.payload){
                        item.count = item.count - 1;
                        item.total = item.total - item.price;
                        item.total = parseFloat(item.total.toFixed(2));
                      }
                      return item;
                  })
            ]}};
        default:
            return state;
    }
}


export const addItemAction = (payload)=>({
    type: ADD_ITEM, payload
})

export const addNumberAction = (payload)=> ({ type: ADD_NUMBER, payload});

export const removeNumberAction = (payload)=> ({ type: REMOVE_NUMBER, payload});