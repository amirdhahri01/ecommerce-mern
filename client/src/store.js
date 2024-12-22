import { getAllProductsReducer } from "./reducers/productReducer"
import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk"

const finalReducer = combineReducers({
    getAllProductsReducer: getAllProductsReducer
})

const store = createStore([finalReducer, applyMiddleware(thunk)])