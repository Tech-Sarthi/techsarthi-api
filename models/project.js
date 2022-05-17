const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
        index:true,
        text:true,
    },
    companyLogo:{
        // https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
        data:Buffer,
        contentType: String,
    },
    description:{
        type:String,
        maxlength:250,
        text:true,
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    tags:[{
        type:String,
        text:true,
        maxlength:20,
    }]
},{timestamps:true})

const Project=mongoose.model('Project',projectSchema);

module.exports=Project;