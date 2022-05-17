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

exports.likeProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const likedProject = await Project.findById(id);

    const updatedProject = await Project.findByIdAndUpdate(id, { likeCount: likedProject.likeCount + 1 }, { new: true });
    
    res.json(updatedProject);
}
