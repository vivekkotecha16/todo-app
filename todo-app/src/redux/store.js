import { createStore, applyMiddleware } from "redux";
import { todoReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
const todoStore = createStore(todoReducer, composeWithDevTools());
export default todoStore;
