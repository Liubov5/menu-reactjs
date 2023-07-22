import {v4 as uuidv4} from 'uuid';


const defaultState = {
    cart:{
        id:uuidv4(),
        customer_id: 1,
        items: [],
        totalSumm: 0,
    }
}
export const CartReducer = (state=defaultState, action) => {
    return state;
}
