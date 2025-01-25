import mongoose from "mongoose";

const sub_todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User" 
    }
}, { timestamps: true });

export const Sub_todo = mongoose.model("Sub_todo", sub_todoSchema);