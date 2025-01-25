import mongoose from 'mongoose'
import { Hospital } from './hospital.models';
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYrs:{
        type:Number,
        required:true,
        defaul:0
    },
    worksInHospitals:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Hospital"
        }
    ]
},{timestamps:true});

export const Doctor=mongoose.model("Doctor",doctorSchema);