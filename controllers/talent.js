import { Talent } from "../models/talent.js"

export const uploadTalent = async(req, res) => {
    const { 
        name,
        email,
        mobile,
        linkedin,
        codingprofile,
        skills,
        tellaboutyourself
    } = req.body;


    let talent = await Talent.findOne({email});
    if(talent){
        return res.status(409).json({"message": "You already exists!"});
    }

    await Talent.create({
        name,
        email,
        mobile,
        linkedin,
        codingprofile,
        skills,
        tellaboutyourself
    })

    res.json({
        message: "success",
    })  
}


export const getTalent = async(req, res)=>{
    
    const talents = await Talent.find();
    res.json({
        message: "success",
        talents
    }) 

}


export const TalentDetails = async(req, res) => {
    const { _id } = req.params;
    const talentDetails = await Talent.find({_id:_id});
    res.json({
        success: true,
        talentDetails
    })
}
