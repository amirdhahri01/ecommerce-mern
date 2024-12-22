/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
    return (
        <div className="col-md-3 m-5 card p-2" >
            <Link to={`/product/${product.id}`}>
                <img src={product.image} className="img-fluid" />
                <h1>{product.name}</h1>
                <h1>Rating : {product.rating}</h1>
                <h1>Price : {product.price}</h1>
            </Link>
        </div>
    )
}

export default Product
