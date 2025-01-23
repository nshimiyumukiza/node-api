const Product = require("../models/product.modal")
const express = require("express");
const router = express.Router();

// post products

router.post("/",async(req,res)=>{
    try{
const product = await Product.create(req.body)
res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

// get all products

router.get("/",async(req,res)=>{
    try{
    const products = await Product.find({});
    res.status(200).json(products);
    }
    catch(err){
    res.status(500).json({message:err.message})
    }
    });

// get one product

    router.get("/:id",async(req,res)=>{
        try{
            const {id} = req.params;
        const product =await Product.findById(id) 
        res.status(200).json(product)
        }
        catch(err){
            res.status(500).json({message:err.message})
        }
        });

        //apdate product

router.put("/:id",async(req,res)=>{
    try{
const {id} =req.params;
const product = await Product.findByIdAndUpdate(id,req.body);
if(!product){
 return   res.status(404).json({message:"product not found"})
}
const updatedproduct =await Product.findById(id)
res.status(200).json(updatedproduct)
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});


// delete product

router.delete("/:id",async(req,res)=>{
    try{
const {id}= req.params;
const product = await Product.findByIdAndDelete(id);
if(!product){
 return   res.status(404).json({message:"product not fount"})
}
res.status(200).json({message:"product deleted"})
    }
    catch(err){
res.status(500).json({message:err.message}) ;
    }
})

module.exports = router;