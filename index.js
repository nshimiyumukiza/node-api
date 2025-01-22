const express= require("express")
const mongoose =require("mongoose")
const Product = require("./models/product.modal")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))

// post products

app.post("/products",async(req,res)=>{
    try{
const product = await Product.create(req.body)
res.status(200).json(product)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
})

// get all products

app.get("/products",async(req,res)=>{
try{
const products = await Product.find({});
res.status(200).json(products);
}
catch(err){
res.status(500).json({message:err.message})
}
})

// get one product

app.get("/products/:id",async(req,res)=>{
try{
    const {id} = req.params;
const product =await Product.findById(id) 
res.status(200).json(product)
}
catch(err){
    res.status(500).json({message:err.message})
}
})

//apdate product

app.put("/products/:id",async(req,res)=>{
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
})

// delete product

app.delete("/products/:id",async(req,res)=>{
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

mongoose.connect("mongodb+srv://nshimiyumukizaerneste99:nDwpiZ2osxx2YFOh@cluster0.qddkd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to data base")
    app.listen(3000,()=>{
        console.log("surver running on port 3000")
    
    })
})
.catch((err)=>{
    console.log("connection fail")
})