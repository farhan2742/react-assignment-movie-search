// combined reducers

import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { urlReducer } from "./urlReducer";
import { modeReducer } from "./modeReducer";

export default combineReducers({
    movies: moviesReducer,
    url: urlReducer,
    mode: modeReducer,
});
