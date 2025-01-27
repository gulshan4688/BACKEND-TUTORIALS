import express from "express"
import cookieParser from "cookie-parser"

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credentials:true
}))

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true,limit:"16kb"}));  // converts the json into js objext coming fron client side  
app.use(express.static("public"));  // whenever we have files coming from data base then this "public" is a default storage path 
app.use(cookieParser())

export default app;