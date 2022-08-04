import React, { useState, useEffect } from "react";
import axios from "axios";

import NavBar from "../../components/NavBar/NavBar";
import CardsGallary from "../../components/CardsGallary/CardsGallary";
import Progress from "../../components/Progress/Progress";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Dashboard = ({ mode = "light" }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchValue, setSearchValue] = React.useState("");

    useEffect(() => {
        axios
            .get(
                "https://api.themoviedb.org/3/movie/top_rated?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US&page=1"
            )
            .then(function (response) {
                setMovies(() => {
                    return {
                        movies: response.data.results,
                    };
                });
            })
            .then(() => {
                setLoading(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, []);

    useEffect(() => {
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US&query=${searchValue}&page=1&include_adult=false`
            )
            .then(function (response) {
                setMovies(() => {
                    return {
                        movies: response.data.results,
                    };
                });
            })
            .then(() => {
                setLoading(false);
                console.log(movies);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [searchValue, movies]);

    return loading ? (
        <Progress />
    ) : (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <NavBar
                    mode={mode}
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    placeholder="Search for a movie"
                />
                <CardsGallary movies={movies} mode={mode} />
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
