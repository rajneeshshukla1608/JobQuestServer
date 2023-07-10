import { Jobs } from "../models/job.js"



export const uploadJobs = async (req, res) => {
    const { title, location, id, language, qualification, description } = req.body;

    let job = await Jobs.findOne({ id });
    if (job) return res.json({
        message: 'Job already exists'
    })

    await Jobs.create({
        title,
        location,
        id,
        language,
        qualification,
        description
    })
    
    res.json({
        message: "success"
    })

}

export const getJobs = async (req, res) => {
    const { id } = req.params
   const job = await Jobs.find({id:id});
   
    res.json({
        success: true,
        job
    })
}

export const getall = async(req, res) => {
    const jobs = await Jobs.find({});
    res.status(200).json({
        message: "success",
        jobs
    })
}

export const engineeringDetails = async(req, res) => {
    const { jobID } = req.params;
    const jobDetails = await Jobs.find({jobID:jobID});
    res.json({
        success: false,
        jobDetails,
        jobID
    })
}

export const salesDetails = async(req, res) => {
    const { jobID } = req.params;
    const jobDetails = await Jobs.find({jobID:jobID});
    res.json({
        success: false,
        jobDetails
    })
}

export const MarketingDetails = async(req, res) => {
    const { jobID } = req.params;
    const jobDetails = await Jobs.find({jobID:jobID});
    res.json({
        success: false,
        jobDetails
    })
}

export const SalesDetails = async(req, res) => {
    const { jobID } = req.params;
    const jobDetails = await Jobs.find({jobID:jobID});
    res.json({
        success: true,
        jobDetails
    })
}
