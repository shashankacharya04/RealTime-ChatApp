import express from "express"
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSideBar } from "../controllers/users.controllers.js";

const router = express.Router();

router.get("/",protectRoute,getUsersForSideBar)
//router.put("/update/:id",protectRoute,updatedUser);

export default router