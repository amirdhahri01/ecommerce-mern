import axios from "axios";

export const getALLProducts = () => dispatch => {
    dispatch({ type: "GET_PRODUCTS_REQUEST" })
    axios.get("/api/products/getallproducts").then(
        (respone) => {
            dispatch({ type: "GET_PRODUCTS_SUCCESS", payload: respone.data.products })
        }
    ).catch((error) => {
        dispatch({ type: "GET_PRODUCTS_FAILED", payload: error })
    })
}

export const getALLProductById = (productid) => dispatch => {
    dispatch({ type: "GET_PRODUCTBYID_REQUEST" })
    axios.get("/api/products/getproductbyid", { productid }).then(
        (respone) => {
            dispatch({ type: "GET_PRODUCTBYID_SUCCESS", payload: respone.data.product })
        }
    ).catch((error) => {
        dispatch({ type: "GET_PRODUCTBYID_FAILED", payload: error })
    })
}