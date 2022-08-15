// combined reducers

import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { urlReducer } from "./urlReducer";

export default combineReducers({
    movies: moviesReducer,
    url: urlReducer,
});
