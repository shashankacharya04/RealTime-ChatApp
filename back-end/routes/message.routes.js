import express from "express"

import protectRoute from "../middleware/protectRoute.js";
import { sendMessage,getMessage,clearMessage } from "../controllers/message.controllers.js";

const router = express.Router();

router.get("/:id",protectRoute,getMessage)    // getting all the messages from the user mentioned in the url 
router.post("/send/:id",protectRoute,sendMessage)    
router.delete("/clear/:id",protectRoute,clearMessage)   
    
export default router
