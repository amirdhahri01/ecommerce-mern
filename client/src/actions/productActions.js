import axios from "axios";

export const getALLProducts = () => dispatch => {
    dispatch({type : "GET_PRODUCTS_REQUEST"})
    axios.get("/api/products/getallproducts").then(
        (respone) => {
            setProducts(respone.data.products)
        }
    ).catch((err) => {
        console.log(err.message);
    })
}