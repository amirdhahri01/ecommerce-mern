import axios from "axios";

export const getALLProducts = () => dispatch => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" })
    axios.get("/api/products/getallproducts").then(
        (respone) => {
            dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: respone.data })
        }
    ).catch((err) => {
        dispatch({ type: "GET_PRODUCTS_FAILED", payload: err })
    })
}