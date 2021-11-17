import express from "express";
import { CreateActor, 
    GetAllActors } from "../controllers/actorCon.js";

export const actorRt = express.Router();
    actorRt.post("/create", CreateActor);
    actorRt.get("/getall", GetAllActors);




    