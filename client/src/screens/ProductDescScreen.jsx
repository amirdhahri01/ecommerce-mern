import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductByIdReducer } from '../reducers/productReducer';

const ProductDescScreen = () => {
    const dispatch = useDispatch();
    const { id: productID } = useParams();
    useEffect(() => {
        dispatch(getProductByIdReducer(productID))
    },[])
    const { loading, product, error } = useSelector(state => state.getProductById)

    return (
        <div className="container">
            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something went wrong</h1>) : (<div className="row">
                <div className="col-md-6">
                    <div className="card P-5 m-2">
                        <img src={product.image} alt="" className="img-fluid m-3 big-img" />
                        <p>{product.description}</p>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="m-2">
                        <h1>Price : {product.price}</h1>
                        <hr />
                        <h1>Select Quantity</h1>
                        <select name="" id="">{[Array(product.countInStock).keys()].map((x, i) => {
                            return (
                                <option value={i + 1} key={i + 1}>{i + 1}</option>
                            )
                        })}</select>
                        <hr />
                        <button className="btn bg-dark text-white">ADD TO CART</button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}
export default ProductDescScreen