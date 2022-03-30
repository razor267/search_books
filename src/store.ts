import {createStore} from "redux";
import reducer from "./reducer/reducer";

const store = createStore(reducer);

export type InferActionsTypes<T> = T extends {[key:string]: (...args: any[]) => infer U} ? U : never;

export default store;