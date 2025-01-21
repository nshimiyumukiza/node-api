const mongoose =require("mongoose")
const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"product name is requed"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true,
            default:0
        },
        image:{
            type:String,
            require:false
        }
    },{timestamp:true}
)

const Product =mongoose.model("Product",productSchema)
module.exports = Product;

