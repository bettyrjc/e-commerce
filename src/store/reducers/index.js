import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from "redux-thunk";

import productsReducer from "./products.js";

const rootReducer = combineReducers({
  products: productsReducer,
});
export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);
