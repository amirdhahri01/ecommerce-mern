import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { getALLProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
const HomeScreen = () => {
    const getALLProductsState = useSelector(state => state.getALLProducts)
    console.log(getALLProducts);
    
    const {loading, products, error } = getALLProductsState;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getALLProducts());
    }, [dispatch])
    return (
        <div className="container-fluid">

            {loading ? (<h1>Loading...</h1>) : error ? (<h1>Something Went Wrong</h1>) :
                (<div className="row justify-content-center">
                    {products.length && products.map((product) => (
                        <Product product={product} key={product._id} />
                    ))}
                </div>)}
        </div>
    )
}
export default HomeScreen