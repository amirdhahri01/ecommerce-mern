import React from 'react'
import products from '../products'
import { useParams } from 'react-router-dom';

const ProductDescScreen = () => {

    const { id: productID } = useParams();
    const product = products.find((product) => product.id == productID);

    return (
        <div className="container">
            <div className="row">
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
                                <option value={i + 1}>{i + 1}</option>
                            )
                        })}</select>
                        <hr />
                        <button className="btn">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductDescScreen