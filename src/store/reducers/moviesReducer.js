// redicer for moviesLoadActions

import {
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    SET_TOTAL_PAGES,
} from "../actions/types";

const initialState = {
    movies: [],
    totalPages: 10,
    loading: false,
    error: "",
};

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload,
                loading: false,
            };
        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.payload,
            };
        default:
            return state;
    }
};

// import { LOAD_MORE, LOAD_NEW, MOVIES_LOADING } from "../actions/types";

// const initialState = {
//     movies: [],
//     url: "",
//     loading: true,
//     error: "",
// };

// export const moviesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case LOAD_MORE:
//             return {
//                 ...state,
//                 movies: [...state.movies, ...action.payload],
//                 loading: false,
//             };
//         case LOAD_NEW:
//             return {
//                 ...state,
//                 movies: [...action.payload],
//                 loading: false,
//             };
//         case MOVIES_LOADING:
//             return {
//                 ...state,
//                 loading: true,
//             };
//         default:
//             return state;
//     }
// };
