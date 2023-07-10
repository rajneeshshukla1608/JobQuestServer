import express from "express";
import {TalentDetails, getTalent, uploadTalent} from "../controllers/talent.js"


const router = express.Router();

router.post("/new", uploadTalent);
router.get("/talent", getTalent);
router.get("/talent/details/:_id", TalentDetails);

export default router;
