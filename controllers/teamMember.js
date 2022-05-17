const express = require ('express');
const teamMember = require("../models/teamMember")

exports.getTeamMembers = async (req, res) => { 
    try {
        const teamMembers = await teamMember.find();
                
        res.status(200).json(teamMembers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}
