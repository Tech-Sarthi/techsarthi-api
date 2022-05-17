const express = require ('express');
const Project =require ('../models/project');

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
