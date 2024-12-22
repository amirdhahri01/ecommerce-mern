import mongoose from "mongoose";

const Schema = mongoose.Schema

const ReviewSchema = new Schema({
    userid: {
        type: Schema.ObjectId,
    },
    name: {
        type: String,
        require: true
    },
    comment: {
        type: String,
    },
    rating: {
        type: Number,
        require: true
    }
}, {
    timestamps: true
})

const ProductSchema = new Schema({
    rating: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    countInStock: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    reviews: [ReviewSchema]
}, {
    timestamps: true
})

const Product = mongoose.model("Product" , ProductSchema)
export default Product