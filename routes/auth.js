const express=require("express");

const router=express.Router();
// import controllers
const {createUpdateUser}=require("../controllers/auth")

// import middlewares
// const {authCheck,adminCheck}=require("../middlewares/auth");

// routes
router.post("/create-or-update-user",createUpdateUser);
// router.post("/current-user",authCheck,currentUser);
// router.post("/current-admin",authCheck,adminCheck,currentUser);

module.exports = router;