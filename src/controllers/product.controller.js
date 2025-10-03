import mongoose from "mongoose";
import Product from "../models/product.model.js";
import HttpException from "../utils/exceptions/http.exception.js";
import asyncHandler from "express-async-handler";
/**
 * Get all products from the database
 * @route GET /api/products
 * @returns {Array} products - Array of product objects or empty array if no products
 */
const getAllProducts = asyncHandler (async (req, res) => {
     // Fetch all products from the database
    const products = await Product.find({});
    // Return products array (will be empty array if no products found)
    res.status(200).json(products);
});

const getProductById = asyncHandler (async(req,res, next)=>{
    //fetches ID from request parameters
    const id = req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        //checks for validity of the id
        next(new HttpException(400, "Invalid ID format"));
    }
    // fetches the product details if id is valid & exists
    const product = await Product.findById(id);
    if(!product){
        //sends 404 error if product not found
        next(new HttpException(404, "Product not found"));
    }
    return res.json(product);
});

export {getAllProducts, getProductById}
