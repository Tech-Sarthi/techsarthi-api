const Project=require("../models/project");

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