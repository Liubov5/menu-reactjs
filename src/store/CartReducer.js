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
const REMOVE_ITEM = "REMOVE_ITEM";

const ADD_NUMBER = "ADD_NUMBER";
const REMOVE_NUMBER = "REMOVE_NUMBER";

export const CartReducer = (state=defaultState, action) => {
    switch (action.type){
        case ADD_ITEM:
            let item = {...action.payload, count: 1, total:action.payload.price};
            let summ = state.cart.totalSumm + item.total;
            
            return {...state, cart: {...state.cart, items:[...state.cart.items, item], totalSumm: summ}  }
        case ADD_NUMBER:
            let summ_add_number = 0;
            return {...state, cart: {...state.cart, items:[
                ...state.cart.items.map(item=>{
                    if(item.id === action.payload){
                        item.count = item.count + 1;
                        item.total = item.total + item.price;
                        item.total = parseFloat(item.total.toFixed(2));
                        summ_add_number = item.price + state.cart.totalSumm;
                        summ_add_number = parseFloat(summ_add_number.toFixed(2));
                      }
                      return item;
                  })
            ],
            totalSumm: summ_add_number
        }}; //разобраться с этим
        case REMOVE_NUMBER:
            let summ_remove_number = 0;
            return {...state, cart: {...state.cart, items:[
                ...state.cart.items.map(item=>{
                    if(item.id === action.payload){
                        item.count = item.count - 1;
                        item.total = item.total - item.price;
                        item.total = parseFloat(item.total.toFixed(2));
                        summ_remove_number = state.cart.totalSumm - item.price;
                        summ_remove_number = parseFloat(summ_remove_number.toFixed(2));
                      }
                      return item;
                  })
            ], totalSumm: summ_remove_number }};
        case REMOVE_ITEM:

            return {
                ...state,
                cart: {...state.cart, items: state.cart.items.filter(item=>item.id !== action.payload )}
            }
        default:
            return state;
    }
}


export const addItemAction = (payload)=>({
    type: ADD_ITEM, payload
})

export const addNumberAction = (payload)=> ({ type: ADD_NUMBER, payload});

export const removeNumberAction = (payload)=> ({ type: REMOVE_NUMBER, payload});

export const removeItemAction = (payload) => ({
    type:REMOVE_ITEM, payload
})