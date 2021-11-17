import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IActor } from "../models/IActor";
import { fetchActors, getOneActor, createActor, 
    updateActor, deleteActor } from "./FetchAPI";

const initialState: IActor[] = [
    {
        _id: "",
        firstName: "",
        lastName: "",
        age: 0,
        info: ""
    }
];

const ActorSlice = createSlice({
    name: "actors",
    initialState,
    reducers: {},
    extraReducers: {
        [fetchActors.fulfilled.toString()]: 
        (state, action: PayloadAction<IActor>) => {
            return action.payload;
        },
        [getOneActor.fulfilled.toString()]: 
        (state, action: PayloadAction<IActor>) => {
            return action.payload._id;
        },
        [createActor.fulfilled.toString()]: 
        (state, action: PayloadAction<IActor>) => {
            const newActor = {
                _id: action.payload._id,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age,
                info: action.payload.info
            };
            state.push(newActor);
        },
        [updateActor.fulfilled.toString()]:
        (state, action: PayloadAction<IActor>) => {
            const index = state.findIndex((actor) =>
                actor._id === action.payload._id);
            state[index].firstName = action.payload.firstName,
            state[index].lastName = action.payload.lastName,
            state[index].age = action.payload.age,
            state[index].info = action.payload.info
        },
        [deleteActor.fulfilled.toString()]:
        (state, action: PayloadAction<IActor>) => {
            return state.filter((actor) => 
                actor._id !== action.payload._id);
        },
    }
});

export const ActorReducer = ActorSlice.reducer;



