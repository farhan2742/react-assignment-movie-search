import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import MovieCard from "../MovieCard/MovieCard";
import { connect } from "react-redux";
import Progress from "../Progress/Progress";
import propTypes from "prop-types";
import defaultProps from "default-props";

import {
    moviesLoadNew,
    moviesLoadFailure,
    moviesLoading,
} from "../../store/actions";

const CardsGallary = ({
    movies = [],
    mode = "light",
    spacing = 2,
    totalPages = 10,
    url,
    loadNew,
    loading,
    setLoading,
    ...rest
}) => {
    const [page, setPage] = useState(1);

    const cards = movies.map((movie) => (
        <Grid key={movie.id} item>
            <MovieCard movie={movie} mode={mode}></MovieCard>
        </Grid>
    ));

    const handleChange = (event, value) => {
        event.preventDefault();
        setPage(value);
        setLoading();
        loadNew(`${url}&page=${value}`);
    };

    if (movies.length < 1) {
        loadNew(`${url}&page=1`);
    }

    return loading ? (
        <Progress />
    ) : (
        <Grid sx={{ flexGrow: 1, p: 2 }} container spacing={2}>
            <Grid item xs={12} sx={{ marginBottom: 2 }}>
                <Grid container justifyContent="center" spacing={spacing}>
                    {cards}
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handleChange}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

CardsGallary.propTypes = {
    movies: propTypes.array.isRequired,
    mode: propTypes.string.isRequired,
    spacing: propTypes.number.isRequired,
    totalPages: propTypes.number.isRequired,
    url: propTypes.string.isRequired,
    loadNew: propTypes.func.isRequired,
    loading: propTypes.bool.isRequired,
    setLoading: propTypes.func.isRequired,
};

CardsGallary.defaultProps = defaultProps;

CardsGallary.defaultProps = {
    movies: [],
    mode: "light",
    spacing: 2,
    totalPages: 10,
    url: "",
    loadNew: () => {},
    loading: false,
    setLoading: () => {},
};

const mapStateToProps = (state) => {
    return {
        loading: state.movies.loading,
        movies: state.movies.movies,
        error: state.movies.error,
        totalPages: state.movies.totalPages,
        url: state.url.url,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadFailure: (error) => dispatch(moviesLoadFailure(error)),
        loadNew: (url) => dispatch(moviesLoadNew(url)),
        setLoading: () => dispatch(moviesLoading()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsGallary);
