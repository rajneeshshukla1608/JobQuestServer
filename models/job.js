import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    qualification: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

export const Jobs = mongoose.model("Jobs", schema)
