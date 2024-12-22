import express from "express"
import Product from "../Models/ProductModel.js";

const productsRoute = express.Router();


productsRoute.get("/getallproducts", async (req, res) => {
    const products = await Product.find();
    res.status(200).json({
        status: "Products Fetched Successfully",
        data: {
            products
        }
    })
})

export default productsRoute