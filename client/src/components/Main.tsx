import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../global/RootReducer";
import { fetchActors } from "../global/FetchAPI";

export const Main = (): JSX.Element => {
    const dispatch = useDispatch<AppDispatch>();
    const actors = useSelector(
        (state: RootState) => state.actors);

    React.useEffect(() => {
        dispatch(fetchActors());
    }, []);  
    console.log(actors);
    
    return (
        <React.Fragment>
            <h1>Main</h1>
            {actors.map((actor) => (
                <main key={actor._id}>
                    {actor.firstName}
                </main>
            ))}
        </React.Fragment>
    );
};



