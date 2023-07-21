import { legacy_createStore } from "redux";
import { menuReducer } from "./MenuReducer";


export const store = legacy_createStore(menuReducer);