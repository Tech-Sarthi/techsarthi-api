const mongoose=require('mongoose');

const projectSchema=new mongoose.Schema({
    companyName:{
        type:String,
        required:true,
        index:true,
    },
    companyLogo:{
        // https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
        data:Buffer,
        contentType: String,
    },
    description:{
        type:String,
        maxlength:250,
    },
},{timestamps:true})

const Project=mongoose.model('Project',projectSchema);

module.exports=Project;