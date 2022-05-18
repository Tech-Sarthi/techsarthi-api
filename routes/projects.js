const express=require("express");

const router=express.Router();

// import controllers
const { getProjects,likeProject, addProject, searchProjects} =require('../controllers/projects');

// routes
router.get('/projects', getProjects);
router.post('/form', addProject);
router.patch('/projects/:id/likeProject', likeProject);
router.post("/search",searchProjects);


module.exports= router;