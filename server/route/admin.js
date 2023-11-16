import express from "express";

import { getadmin,login,register,updateadmin } from "../controllers/admin";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.put("/updateadmin/:id", updateadmin)
router.get("/getadmin", getadmin)



export default router;