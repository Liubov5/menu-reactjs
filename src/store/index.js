import { combineReducers, legacy_createStore } from "redux";

import { CartReducer } from "./CartReducer";
import { MenuReducer } from "./MenuReducer";


let reducers = combineReducers({
    MenuReducer,
    CartReducer,
});
export const store = legacy_createStore(reducers);
