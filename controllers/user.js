import { model } from "mongoose"
import { User } from "../models/user.js"
import bcrypt from "bcrypt"
import { sendCookie } from "../utils/features.js"
import jwt from "jsonwebtoken"

export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email }).select("+password");
        if (!user) return res.json({ message: "Invalid email or password" });

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(404).json({
                success: false,
                message: "Match not found"
            });
        }
        sendCookie(user, res, `welcome back ${user.name}`, 200);

    } catch (error) {
        console.log(error);
        res.json({
            message: "failed"
        })
    }
}

export const register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) {
            res.json({
                message: "user already exist"
            })
        }

        user = await User.create({
            name,
            email,
            password: await bcrypt.hash(password, 10), //encrypting the passowrd
        })
        sendCookie(user, res, "Registered successfully", 201);

    } catch (error) {
        console.log(error);
    }
}

export const logout = async (req, res) => {

    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()),
        httpOnly: true
    }).json({
        success: true,
        message: "User Gone"
    });
}


export const profile = async (req, res) => {
    
    res.status(200).json({
        success: true,
        user : req.user
    });

};
