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

export const FetchAllActors = 
async (req, res, next) => {
    try {
        await Actor.find()
        .then((actors) => res.json(actors));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const GetOneActor =
async (req, res, next) => {
    try {
        await Actor.findById(req.params.id)
        .then((actor) => res.status(200).json(actor));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const UpdateActor =
async (req, res, next) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, age, info } = req.body;
        await Actor.findByIdAndUpdate(id, {
            firstName, lastName, age, info
        })
        .then(() => res.status(201).json("Actor Updated!"));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const DeleteActor = 
async (req, res, next) => {
    try {
        await Actor.findByIdAndDelete(req.params.id)
        .then(() => res.status(201).json("Actor Deleted!"));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};




