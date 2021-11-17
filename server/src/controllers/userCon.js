import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { config } from "../config/keys.js";
import { User } from "../models/User.js";
import { Actor } from "../models/Actor.js";

export const Register = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(422)
            .json({error: "Please add email and password"});
        }
        const user = await User.findOne({ email });
        if (user) return res.status(422)
        .json({error: "That User already exists."});
        const hashPassword = await bcrypt.hash(password, 12);
        await new User({email, password: hashPassword}).save();
        return res.status(200).json({msg: "Success, please log in."});
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const Login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(422)
            .json({error: "Please enter your credentials!"});
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404)
            .json({error: "Email not found!"});
        }
        const doMatch = await bcrypt.compare(password, user.password);
        if (doMatch) {
            const token = jwt.sign({
                userId: user._id}, 
                config.JWT_SECRET);
            res.status(201).json({ token });
        } else {
            return res.status(401).json({error: "bad credentials"});
        }
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};

export const HomeIndex = (req, res) => {
    res.json({ API: "Redux-Toolkit" });
};

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
        .then((actor) => res.status(201).json({msg: actor}));
    } catch (error) {
        res.status(500).json({msg: error.message});
        next(error);
    }
};



