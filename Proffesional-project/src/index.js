import dotenv from "dotenv"
import connectDB from './db/index.js'
dotenv.config({
    path: "./env"
})
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(` server is running at PORT:${process.env.PORT}`);
    })
})
.catch(error=>{
    console.log("DB connection failed in index.js",error);
})







/*
import express from "express"
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listening o n port:${PORT}`);
        })
    } catch (error) {
        console.log("ERROR", error);
        throw error;
    }
})()
    */