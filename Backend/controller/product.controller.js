import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const createProduct= async (req, res)=> {
    const product = req.body; // data send by the user 
 
    if(!product.name || !product.price || !product.image){
     return res.status(400).json({success:false, message:"Please provide all fields"})
    }
 
    const newProduct = new Product(product);
 
    try {
     await newProduct.save();
     res.status(201).json({success:true, data: newProduct})
     
    } catch (error) {
     console.error("Erorr in Create product:", error.message);
     res.status(500).json({sucess:false, message: "server Error"})
    }
 }

export const getProducts =  async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({success:false, message:"Failed"})
    }
}

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        // Find the product by ID and delete it
        const product = await Product.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                success: false, 
                message: "Product not found"
            });
        }

        // Successful deletion
        res.status(200).json({
            success: true, 
            message: "Product deleted successfully"
        });
    } catch (error) {
        // Error handling
        console.error("Error deleting product:", error.message);
        res.status(500).json({
            success: false, 
            message: "Server error"
        });
    }
}

export const updateProduct =  async (req, res)=>{
 
    const {id} = req.params;
    const newUpdateProduct= req.body; 

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({success:false, message:"Invalid product id"})
    }
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, newUpdateProduct, {
            new:true, // return the Updated product 
            overwrite:true
        });
        res.status(200).json({success:true, data: updatedProduct});
    } catch (error) {
        res.status(500).json({sucess:false, message:"server Error"})
    }
}