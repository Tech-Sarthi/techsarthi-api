const express=require("express");

const router=express.Router();

const { getTeamMembers} = require('../controllers/teamMember');

router.get('/teamMembers', getTeamMembers);

module.exports= router;