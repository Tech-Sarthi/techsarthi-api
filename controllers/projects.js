const express = require ('express');
const mongoose = require ('mongoose');
const Project = require('../models/project');

exports.getProjects = async (req, res) => { 
    try {
        const projects =  Project.find();

        res.status(200).json(await projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.addProject = async (req, res) => {
    const name_of_industry = req.body.name_of_industry;
    const website =req.body.website;
    const type_of_industry =req.body.type_of_industry;
    const name_of_contact_person = req.body.name_of_contact_person;
    const designation_of_contact_person = req.body.designation_of_contact_person;
    const email_of_contact_person = req.body.email_of_contact_person;
    const problem_faced = req.body.problem_faced;
    const other_details  = req.body.other_details;
    // let industry_logo = req.files['industry_logo'][0].filename;
    // let problem_details = req.files['problem_details'][0].filename;

    const newProject = new Project({ name_of_industry,
        website,
        type_of_industry,
        // industry_logo,
        name_of_contact_person,
        designation_of_contact_person,
        email_of_contact_person,
        problem_faced,
        // problem_details,
        other_details})
    try {
        await newProject.save();

        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
        console.log(error.message)
    }
}

exports.likeProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const likedProject = await Project.findById(id);

    const updatedProject = await Project.findByIdAndUpdate(id, { likeCount: likedProject.likeCount + 1 }, { new: true });
    
    res.json(updatedProject);
}

exports.searchProjects= async (req,res)=>{
    const {query}=req.body;
    if(query)
    {
        console.log("query",query);
        const projects=await Project.find({$or :[{$text : { $search : query }},
            {$companyName:{$regex:query}},
            {$description:{$regex:query}},
            {$tags:{$regex:query}}
        ]});
        res.json(projects);
    }
}