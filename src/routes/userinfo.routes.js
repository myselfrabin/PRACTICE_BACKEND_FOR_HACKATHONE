import {Router} from "express";
import {userinfo} from "../controller/userinfoController.js"


const router = Router(); 

 // /api/v1/healthcheck/test


 
router.route("/").get(userinfo); 


export default router; 