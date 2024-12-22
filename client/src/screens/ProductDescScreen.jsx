import React from 'react'
import products from '../products'

const ProductDescScreen = ({ match }) => {
    const productID = match.params.id;
    const product = products.find((product) => product.id === productID);
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <h1>{product.name}</h1>
                        <img src={product.image} alt="" className="img-fluid" />
                        <p>{product.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescScreen