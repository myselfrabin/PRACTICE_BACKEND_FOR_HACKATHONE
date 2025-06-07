import {Router} from "express";
import {healthcheck} from "../controller/healthCheckController.js"


const router = Router(); 

 // /api/v1/healthcheck/test


router.route("/").get(healthcheck); 



export default router; 