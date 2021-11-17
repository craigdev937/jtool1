import { Actor } from "../models/Actor.js";

export const CreateActor = 
async (req, res, next) => {
    try {
        const actor = new Actor({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            info: req.body.info,
            actorEmail: req.user
        });
        await actor.save()
        .then((actor) => res.status(201).json(actor));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetAllActors = 
async (req, res, next) => {
    try {
        await Actor.find()
        .then((actors) => res.json(actors));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};



