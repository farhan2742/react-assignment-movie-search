// reducer for urlActions

import { SET_URL } from "../actions/types";

const initialState = {
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US&page=1",
    page: 1,
};

export const urlReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_URL:
            return {
                ...state,
                url: action.payload,
            };
        default:
            return state;
    }
};
