const mongoose=require("mongoose");
const {ObjectId}=mongoose.Schema;

const userSchema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        index:true,
    },
    enrollment_no:{
        type:String,
        required:true,
        index:true,
        maxlength:10
    },
    branch:{
        type:String,
        required:true,
    },
    program:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:"user"
    },
},{timestamps:true})

const User=mongoose.model("User",userSchema);
module.exports=User;
