const express = require("express");
const TeamMember = require("../models/teamMember");

var fs = require("fs");
var path = require("path");

const router = express.Router();

var multer = require("multer");
const { resolveSoa } = require("dns");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

router.get("/teamMember",async (req,res,next)=>{
  console.log('Request received')
  const teamMembers=await TeamMember.find({});
  const imgData=teamMembers.map(t=>t.img.data.toString('base64'));
  return res.json({teamMembers:teamMembers,imgData:imgData});
})

router.post("/teamMember", upload.single("img"), (req, res, next) => {
  console.log("Received");
  console.log(__dirname);
  var obj = {
    name: req.body.name,
    email: req.body.email,
    designation: req.body.designation,
    mobileNo: req.body.mobileNo,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };

  const newTeamMember = new TeamMember({
    name: obj.name,
    email: obj.email,
    designation: obj.designation,
    mobileNo: obj.mobileNo,
    img: obj.img,
  });
  newTeamMember.save((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Team member successfully created!!");
    }
  });

  res.send("Successfully posted");
});

module.exports = router;
