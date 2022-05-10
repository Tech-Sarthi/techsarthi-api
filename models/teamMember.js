const mongoose=require('require')


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
    mobileNumber:{
        type:String,
        index:true,
        maxlength:13
    },
    designation:{
        type: String,
        index: true,
        maxlength:15,
        default: "member"
    }
},{timestamps:true})

const teamMember=mongoose.model('teamMember',teamMemberSchema);
module.exports=teamMember;