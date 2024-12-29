import React, { useEffect, useState } from 'react'
import Product from '../components/Product'
import { getALLProducts } from '../actions/productActions'
import { useDispatch, useSelector } from 'react-redux'

const HomeScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getALLProducts());
    }, [dispatch])
    const getALLProductsState = useSelector(state => state.getAllProducts)
    const { loading, products, error } = getALLProductsState;
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