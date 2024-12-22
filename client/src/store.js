import {getAllProductsReducer, getProductByIdReducer } from "./reducers/productReducer"
import { createStore, applyMiddleware, combineReducers } from "redux"
import { thunk } from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

const finalReducer = combineReducers({
    getAllProducts : getAllProductsReducer,
    getProductById : getProductByIdReducer
})
const composeEnhancers = composeWithDevTools({

})
const store = createStore(finalReducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store