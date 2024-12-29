const initialStateAddToCart = {
    cartItems: []
}

const addToCartReducer = (state = initialStateAddToCart, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const itemExists = state.cartItems.find(item => item._id === action.payload._id)
            if (itemExists) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(item => item._id === action.payload._id)
                }
            }
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        default: return state
    }
}

export default addToCartReducer