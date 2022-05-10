const User=require("../models/user");
// const teamMember=require("../models/teamMember")

exports.createUpdateUser=(req,res)=>{
    console.log(req.user.email)
    const {email}=req.user;
    User.findOneAndUpdate({email},
        req.user,
        {new:true})
    .then(async(user)=>{
        if(user)
        {
            console.log("user Updated",user);
            res.json(user);
        }else{
            const newUser=await new User(req.user).save();
            console.log("user Created",newUser);
            res.json(newUser);
        }
        
    })
    .catch((err)=>{
        console.log("user creation/updation failed",err);
        res.json(err);
    })
}

exports.currentUser=(req,res)=>{
    const {email}=req.user;
    User.findOne({email})
    .then(async(user)=>{
        if(user)
        {
            res.json(user);
        }else{
            console.log("user not found in database");
            throw new Error("user not found in database");
        }
    })
    .catch((err)=>{
        throw new Error(err);
    })
}