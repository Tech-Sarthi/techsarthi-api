const express=require("express");
const router=express.Router();
const {v4 : uuidv4} = require("uuid");
const path = require("path")
const multer = require("multer")

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, 'uploads');
    },
    filename: function(req,file,cb){
        cb(null, uuidv4()+'-'+ Date.now() + path.extname(file.originalname));
    }
})
let upload =multer({storage})
const fileUpload = upload.fields([{ name: 'problem_details' }, { name: 'industry_logo'}])
// import controllers
const { getProjects,likeProject, addProject, searchProjects} =require('../controllers/projects');

// routes
router.get('/projects', getProjects);
router.post('/form', fileUpload,addProject);
router.patch('/projects/:id/likeProject', likeProject);
router.post("/search",searchProjects);


module.exports= router;