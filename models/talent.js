import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    contact: {
        type: String,
        default: false,
        required: true,
    },
    linkedin: {
        type: String,
        default: false,
        required: true,
    },
    codingProfile: {
        type: String,
        default: false,
        required: true,
    },
    skills: {
        type: String,
        default: false,
        required: true,
    },
    tellaboutyourself: {
        type: String,
        default: false,
        required: true,
    },
})

export const Talent = mongoose.model("Talent", schema)