// reducer for the mode of the application

import { MODE } from "../actions/types";

const initialState = {
    mode: "dark",
};

export const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODE:
            return action.payload;
        default:
            return state;
    }
};
