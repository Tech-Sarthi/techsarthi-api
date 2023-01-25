const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name_of_industry: {
      type: String,
      required: true,
      index: true,
      text: true,
    },
    type_of_industry: {
      type: String,
      required: true,
      index: true,
      text: true,
    },
    website: {
      type: String,
      index: true,
      text: true,
    },
    name_of_contact_person: {
      type: String,
      required: true,
      index: true,
      text: true,
    },
    designation_of_contact_person: {
      type: String,
      required: true,
      index: true,
      text: true,
    },
    email_of_contact_person: {
      type: String,
      required: true,
      index: true,
      text: true,
    },
    problem_faced: {
      type: String,
      required: true,
      index: true,
      text: true,
    },
    other_details: {
      type: String,
      index: true,
      text: true,
    },
    expected_outcome: {
      type: String,
      index: true,
      text: true,
    },
    industry_logo: {
      type: String,
    },
    problem_details: {
      type: String,
    },
    image_src :{
      type: String,
      default: '/project.png'
    },

    likeCount: {
      type: Number,
      default: 0,
    },
    // tags:[{
    //     type:String,
    //     text:true,
    //     maxlength:20,
    // }],
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
