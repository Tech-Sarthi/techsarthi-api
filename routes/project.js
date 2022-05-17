const express=require("express");

const router=express.Router();
// import controllers
const {searchProjects}=require("../controllers/project")

// import middlewares
const {authCheck}=require("../middlewares/auth");

// routes
router.post("/search",authCheck,searchProjects);

module.exports = router;