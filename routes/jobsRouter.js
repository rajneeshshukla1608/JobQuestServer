import express from "express"
import { getJobs, uploadJobs, getall, engineeringDetails, salesDetails, MarketingDetails, SalesDetails } from "../controllers/jobs.js";

const router = express.Router();

router.get("/", getall);
router.post("/uploadjobs", uploadJobs);
router.get("/engineering/:id", getJobs);
router.get("/engineering/details/:jobID", engineeringDetails);
router.get("/sales/:id", getJobs);
router.get("/sales/details/:jobID", salesDetails);
router.get("/marketing/:id", getJobs);
router.get("/marketing/details/:jobID", MarketingDetails);
router.get("/product/:id", getJobs);
router.get("/product/details/:jobID", SalesDetails);


export default router;