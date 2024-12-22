import React from 'react'
import products from '../products'
import Produrct from '../components/Product'
const HomeScreen = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {products.map((product) => (
                    <Produrct product={product} key={product.id} />
                ))}
            </div>
        </div>
    )
}
export default HomeScreen