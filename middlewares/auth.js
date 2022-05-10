const admin =require("../firebase");
const User =require("../models/user");

exports.authCheck=(req,res,next)=>{
    console.log(User.find())
    // console.log(req.headers);
    admin.auth().verifyIdToken(req.headers.authtoken)
    .then((fbUser)=>{
        // console.log("fireabse User",fbUser);
        req.user=req.body;
        next();
    })
    .catch((err)=>{
        console.log("Invalid or expired token");
        res.status(401).json({
            err:"Invalid or expired token",
        })
    })
}