import React, { useEffect, useState } from 'react'
import axios from "axios"
import Product from '../components/Product'
const HomeScreen = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("/api/products/getallproducts").then(
            (respone) => {
                setProducts(respone.data.products)
            }
        ).catch((err) => {
            console.log(err.message);
        })
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