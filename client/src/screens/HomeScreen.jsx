import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
const HomeScreen = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        
    }, [])
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {products.length && products.map((product) => (
                    <Product product={product}  key={product._id}/>
                ))}
            </div>
        </div>
    )
}
export default HomeScreen