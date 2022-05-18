const express = require ('express');
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
    const { companyName, companyLogo ,description } = req.body;

    const newProject = new Project({ companyName, companyLogo ,description })

    try {
        await newProject.save();

        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
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