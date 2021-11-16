import mongoose from "mongoose";

const ActorSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: String, required: true },
    info: { type: String, required: true },
    actorEmail: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});

export const Actor = mongoose.model("Actor", ActorSchema);




