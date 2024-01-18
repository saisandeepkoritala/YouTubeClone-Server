const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app =require("./app");
dotenv.config({path:`${__dirname}/config.env`});

const DB = process.env.DATABASE.replace("<PASSWORD>",process.env.PASSWORD);

mongoose.connect(DB)
.then((res)=>console.log("Connection is Successful to DB"))
.catch((err)=>console.log("Error in connecting to DB",err))

app.listen(process.env.PORT,()=>{
    console.log(`Server Running on port `,process.env.PORT)
})