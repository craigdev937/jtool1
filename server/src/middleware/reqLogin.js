import jwt from "jsonwebtoken";
import { config } from "../config/keys.js";

export const reqLogin = (req, res, next) => {
    let { auth } = req.headers;
    if (!auth) {
        return res.status(401)
            .json({ error: "Please log-in!" });
    }
    try {
        const { userId } = jwt.verify(auth, config.JWT_SECRET);
        req.user = userId;
        next();
    } catch (error) {
        res.status(401).json({error: "Please log-in!"});
        next(error);
    }
};




