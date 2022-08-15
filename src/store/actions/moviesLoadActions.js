// actions to load new movies and load more movies from url

import axios from "axios";
import {
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIES_REQUEST,
    FETCH_MOVIES_SUCCESS,
    SET_TOTAL_PAGES,
} from "../actions/types";

// action to load new movies from url

export const moviesLoadNew = (url) => (dispatch) => {
    dispatch(moviesLoading());
    axios
        .get(url)
        .then((response) => {
            dispatch(setTotalPages(response.data.total_pages));
            dispatch(moviesLoadSuccess(response.data.results));
        })
        .catch((error) => {
            dispatch(moviesLoadFailure(error.message));
        });
};

// action to set loading state

export const moviesLoading = () => ({
    type: FETCH_MOVIES_REQUEST,
});

// action to set error message

export const moviesLoadFailure = (error) => ({
    type: FETCH_MOVIES_FAILURE,
    payload: error,
});

// action to set new movies

export const moviesLoadSuccess = (movies) => ({
    type: FETCH_MOVIES_SUCCESS,
    payload: movies,
});

// action to set total pages

export const setTotalPages = (totalPages) => ({
    type: SET_TOTAL_PAGES,
    payload: totalPages,
});
