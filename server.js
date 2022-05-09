const express=require("express");
const mongoose=require("mongoose");
const morgan=require("morgan");
const cors=require("cors");
const bodyParser=require("body-parser");
const fs=require("fs");
require("dotenv").config();


// app
const app=express()

// db
mongoose.connect(process.env.DATABASE)
.then(()=>console.log("DB Connected"))
.catch((err)=>`DB Connection failed due to ${err.message}`)

// middlewares
app.use(morgan("dev"))
app.use(bodyParser.json({limit:"2mb"}))
app.use(cors())

//routes middleware
fs.readdirSync("./routes").map((r)=>{
    app.use("/api",require("./routes/"+r));
})



// port
port=process.env.PORT || 8000;
app.listen(port,()=>console.log(`server is running on port ${port}`))
