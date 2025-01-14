const express= require("express")
const mongoose =require("mongoose")
const app = express()



app.get("/",(req,res)=>{
    res.send("hello word")
})

mongoose.connect("mongodb+srv://nshimiyumukizaerneste99:40INAsmJNR4NLILn@cluster0.ngioz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to data base")
    app.listen(3000,()=>{
        console.log("surver running on port 3000")
    
    })
})
.catch((err)=>{
    console.log("connection fail")
})