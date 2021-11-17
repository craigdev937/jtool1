import express from "express";
import { CreateActor, DeleteActor, FetchAllActors, 
    GetOneActor, UpdateActor } from "../controllers/actorCon.js";

export const actorRt = express.Router();
    actorRt.post("/actors", CreateActor);
    actorRt.get("/actors", FetchAllActors);
    actorRt.get("/actors/:id", GetOneActor);
    actorRt.put("/actors/:id", UpdateActor);
    actorRt.delete("/actors/:id", DeleteActor);


