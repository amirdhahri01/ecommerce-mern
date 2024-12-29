const addToCartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case "ADD_TO_CART": return {
            ...state,
            cartItems : [...cartItems, action.payload]
        }
        default: return state
    }
}

export default addToCartReducer