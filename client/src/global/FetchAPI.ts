import { createAsyncThunk } from "@reduxjs/toolkit";
import { IActor } from "../models/IActor";
const URL = "http://localhost:9000/api/actors";

export const fetchActors =
createAsyncThunk("actors/fetchActors", 
async () => {
    const res: Response = await fetch(URL);
    if (!res.ok) throw new Error("Couldn't fetch data");
    const actors: IActor[] = await res.json();
    return { actors: actors };
});

export const getOneActor =
createAsyncThunk("actor/getOneActor", 
async (payload: IActor) => {
    const res: Response = 
    await fetch(`${URL}/${payload._id}`, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({_id: payload._id}),
    });
    if (!res.ok) throw new Error("Couldn't fetch data");
    const actor: IActor = await res.json();
    return { actor: actor };
});

export const createActor = 
createAsyncThunk("actor/createActor", 
async (payload: IActor) => {
    const res: Response = 
    await fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            firstName: payload.firstName,
            lastName: payload.lastName,
            age: payload.age,
            info: payload.info
        }),
    });
    if (!res.ok) throw new Error("Couldn't fetch data");
    const actor: IActor = await res.json();
    return { actor: actor };
});

export const updateActor = createAsyncThunk("actor/updateActor", 
async (payload: IActor) => {
    const res: Response = 
    await fetch(`${URL}/${payload._id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            firstName: payload.firstName,
            lastName: payload.lastName,
            age: payload.age,
            info: payload.info
        }),
    });
    if (!res.ok) throw new Error("Couldn't fetch data");
    const actor: IActor = await res.json();
    return {
        firstName: actor.firstName, lastName: actor.lastName,
        age: actor.age, info: actor.info
    };
});

export const deleteActor = 
createAsyncThunk("actor/deleteActor", 
async (payload: IActor) => {
    const res: Response = 
    await fetch(`${URL}/${payload._id}`, {
        method: "DELETE",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({_id: payload._id}),
    });
    if (!res.ok) throw new Error("Couldn't fetch data");
    const actor: IActor = await res.json();
    return { actor: actor };
});





