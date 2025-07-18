import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js";
import express from "express";
// const app = express();

dotenv.config({
    path: './.env'
})


connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGOdb connection failed !!! ", err);
})







// import mongoose from "mongoose"
// import {DB_NAME} from "./constants.js"
// import express from "express"

// const app = express();

// ;( async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.error("Error",error)
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is Listening on PORT: ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Error",error)
//         throw error
//     }
// }) ()