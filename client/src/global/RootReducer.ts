import { configureStore } from "@reduxjs/toolkit";
import { ActorReducer } from "./ActorSlice";

export const RootReducer = configureStore({
    reducer: {
        actors: ActorReducer
    }
});

export type RootState = ReturnType<typeof RootReducer.getState>;
export type AppDispatch = typeof RootReducer.dispatch;




