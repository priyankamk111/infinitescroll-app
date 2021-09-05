import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import userState from "./reducer";

const RootReducer = combineReducers({ userState });

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;