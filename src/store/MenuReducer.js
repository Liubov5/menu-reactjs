import {v4 as uuidv4} from 'uuid';

const CHANGE_IN_SHOPPING_CART = "CHANGE_IN_SHOPPING_CART";

const defaultState = {
    menuList:[{id: uuidv4(), name: 'French Fries with Ketchup', image: 'images/plate__french-fries.png', price: 2.23, inShoppingCart: false}, {id:uuidv4(), name: "Salmon and Vegetables", price: 5.12, image:"images/plate__salmon-vegetables.png", inShoppingCart: false}, {id:uuidv4(), name: "Spaghetti with Sauce", price: 7.82, image:"images/plate__spaghetti-meat-sauce.png", inShoppingCart: false}, {id:uuidv4(), name: "Plate ravioli", price: 3.12, image:"images/plate__ravioli.png", inShoppingCart: false}]
}

export const MenuReducer = (state=defaultState, action) => {
    switch(action.type){
        case CHANGE_IN_SHOPPING_CART:
            return {
                ...state,
                menuList: state.menuList.map((item)=>
                     item.id === action.payload ? {...item, inShoppingCart: !item.inShoppingCart} : item 
                )
            }
        default:
            return state;
    }
    
}

export const inShoppingCartAction = (payload) => ({
    type: CHANGE_IN_SHOPPING_CART, payload
})