import express  from "express";  
import cookieParser from "cookie-parser"
import jobsRouter from './routes/jobsRouter.js'
import userRouter from './routes/userRouter.js'
import talentRouter from './routes/talentRouter.js'
import {config} from "dotenv"


import cors from "cors"
const app = express()


config({
    path: "./data/config.env"
})


app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

//routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/jobs", jobsRouter)
app.use("/api/v1/profile", talentRouter)

app.get("/",(req, res) => {
    res.status(200).send("Welcome to the job portal API!")
})

export default app;
