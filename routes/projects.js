const express=require("express");

const router=express.Router();

const { getProjects,likeProject} =require('../controllers/projects');

router.get('/projects', getProjects);
router.patch('/projects/:id/likeProject', likeProject);

module.exports= router;