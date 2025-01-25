import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    procuctImage:{
        type:string // many cloud services takes the photo, video and provide the links and we pass that link in the odm 
    },
    price:{
        default:0,
        type:Number
    },
    stock:{
        default:0,
        type:Number
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category"
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

export const Product=mongoose.model("Product",productSchema);