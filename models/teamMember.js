const mongoose=require('mongoose')


const teamMemberSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true,
        index:true
    },
    email:{
        type:String,
        required:true,
        index:true,
    },
    mobileNo:{
        type:String,
        index:true,
        maxlength:13
    },
    designation:{
        type: String,
        index: true,
        maxlength:15,
        default: "member"
    },
    img:{
        // https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
        data: Buffer,
        contentType:String,
    }
},{timestamps:true})

const teamMember=mongoose.model('teamMember',teamMemberSchema);
module.exports=teamMember;