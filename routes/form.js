const express=require("express");

const router=express.Router();

const { addProject} =require('../controllers/form')

router.post('/form', addProject);

module.exports= router;