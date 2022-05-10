const express=require("express");

const router=express.Router();
// import controllers
const {createUpdateUser,currentUser}=require("../controllers/auth")

// import middlewares
const {authCheck}=require("../middlewares/auth");

// routes
router.post("/create-or-update-user",authCheck,createUpdateUser);
router.post("/current-user",authCheck,currentUser);

// router.post("/current-admin",authCheck,adminCheck,currentUser);

module.exports = router;