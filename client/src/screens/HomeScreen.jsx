import React from 'react'
import Product from '../components/Product'
const HomeScreen = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {products.map((product) => (
                    <Product product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}
export default HomeScreen