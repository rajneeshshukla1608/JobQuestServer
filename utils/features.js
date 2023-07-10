import jwt from "jsonwebtoken"
import { User } from "../models/user.js"

export const sendCookie = (user, res, message, statusCode = 200) => {

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(statusCode).cookie("token", token, {
        httpOnly: true,
        maxAge: 15 * 60 * 1000,
    }).json({
        success: true,
        message,
    })
};