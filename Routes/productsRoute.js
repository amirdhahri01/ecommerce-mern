import express from "express"
import Product from "../Models/ProductModel.js";

const productsRoute = express.Router();


productsRoute.get("/getallproducts", async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        status: "Products Fetched Successfully",
        products
    })
})
productsRoute.post("/getproductbyid" , async (req , res) => {
    const {productid} = req.body;
    const product = await Product.findById(productid);
    res.status(200).json({
        status: "Product Fetched Successfully",
        product
    })
})
export default productsRoute