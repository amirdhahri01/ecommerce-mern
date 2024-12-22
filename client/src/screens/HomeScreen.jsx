import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { getALLProducts } from '../actions/productActions'
import { useDispatch } from 'react-redux'
const HomeScreen = () => {
    const [products, setProducts] = useState([])
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getALLProducts);
    }, [])
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                {products.length && products.map((product) => (
                    <Product product={product} key={product._id} />
                ))}
            </div>
        </div>
    )
}
export default HomeScreen