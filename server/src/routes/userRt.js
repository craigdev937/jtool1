import express from "express";
import { HomeIndex, Login, 
    Register } from "../controllers/userCon.js";

export const userRt = express.Router();
    userRt.post("/register", Register);
    userRt.post("/login", Login);
    userRt.get("/", HomeIndex);




