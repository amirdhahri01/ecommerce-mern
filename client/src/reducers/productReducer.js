const initialStateAllProducts = {
    loading: true,
    products: [],
    error: null
}
export const getAllProductsReducer = (state = initialStateAllProducts, action) => {
    switch (action.type) {
        case "GET_PRODUCTS_REQUEST": return {
            loading: true
        }
        case "GET_PRODUCTS_SUCCESS": return {
            products: action.payload,
            loading: false
        }
        case "GET_PRODUCTS_FAILED": return {
            error: action.payload,
            loading: false
        }
        default: return state;
    }
}

const initialStateProductByID = {
    loading: true,
    product: {},
    error: null
}
export const getProductByIdReducer = (state = initialStateProductByID, action) => {
    switch (action.type) {
        case "GET_PRODUCTBYID_REQUEST": return {
            loading: true
        }
        case "GET_PRODUCTBYID_SUCCESS": return {
            product: action.payload,
            loading: false
        }
        case "GET_PRODUCTBYID_FAILED": return {
            error: action.payload,
            loading: false
        }
        default: return state;
    }
}