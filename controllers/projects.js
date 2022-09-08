const express = require ('express');
const multer = require('multer')
const mongoose = require ('mongoose');
const Project = require('../models/project');

exports.getProjects = async (req, res) => { 
    try {
        const projects = await Project.find();
                
        res.status(200).json(projects);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.addProject = async (req, res) => {
    console.log(req.body)
    const { name_of_industry,
        website,
        industry_logo,
        type_of_industry,
        name_of_contact_person,
        designation_of_contact_person,
        email_of_contact_person,
        problem_faced,
        problem_details,
        other_details } = req.body;

    const newProject = new Project({ name_of_industry,
        website,
        industry_logo,
        type_of_industry,
        name_of_contact_person,
        designation_of_contact_person,
        email_of_contact_person,
        problem_faced,
        problem_details,
        other_details})
     console.log('received')
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