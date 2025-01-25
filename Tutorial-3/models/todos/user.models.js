import mongoose, { Schema } from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        // since we have to store data 
        // one way is to  store like this 
        // username:String,
        // email:String,
        // isActive:Boolean

        // !but this is basic pratice now 
        // * lets move to mongoose super power
        // the super power is that we can define every important detial of every field that user inputs 
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type:String,
            min:[5,'must be of 5 letter atleast']
        }
    }, { timestamps: true });

export const User = mongoose.model("User", userSchema);
//! whenver data is being saved in the database the word User becomes "users" with s append and all letters capital to small 



