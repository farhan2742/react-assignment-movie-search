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
    const [page, setPage] = React.useState(1);
    const [totalPages, setTotalPages] = React.useState(10);
    const [URL, setURL] = React.useState(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US&page=${page}`
    );

    useEffect(() => {
        axios
            .get(URL)
            .then(function (response) {
                setMovies(() => {
                    return {
                        movies: response.data.results,
                    };
                });
                setTotalPages(response.data.total_pages);
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
        if (searchValue !== "") {
            setURL(
                `https://api.themoviedb.org/3/search/movie?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US&query=${searchValue}&page=${page}`
            );
        } else {
            setURL(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US&page=${page}`
            );
        }
    }, [searchValue, page]);

    useEffect(() => {
        axios
            .get(URL)
            .then(function (response) {
                setMovies(() => {
                    return {
                        movies: response.data.results,
                    };
                });
                setTotalPages(response.data.total_pages);
            })
            .then(() => {
                setLoading(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }, [URL]);

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
                <CardsGallary
                    movies={movies}
                    mode={mode}
                    page={page}
                    setPage={setPage}
                    totalPages={totalPages}
                />
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
