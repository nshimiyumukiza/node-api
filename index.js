const express= require("express")
const mongoose =require("mongoose")
const Product = require("./models/product.modal")
const app = express()

app.use(express.json())

app.post("/products",async(req,res)=>{
    try{
const product = await Product.create(req.body)
res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

mongoose.connect("mongodb+srv://nshimiyumukizaerneste99:fySExLs0OKZcvi1p@cluster0.r2jl3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to data base")
    app.listen(3000,()=>{
        console.log("surver running on port 3000")
    
    })
})
.catch((err)=>{
    console.log("connection fail")
})