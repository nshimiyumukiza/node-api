const express= require("express")
const mongoose =require("mongoose")
const Product = require("./models/product.modal")
const productRouter = require("./routes/product.route")
const app = express()

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/products",productRouter)

// connected to database

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