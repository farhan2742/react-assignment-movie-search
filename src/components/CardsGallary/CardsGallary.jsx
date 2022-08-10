import * as React from "react";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import MovieCard from "../MovieCard/MovieCard";

const CardsGallary = ({
    movies = [],
    mode = "light",
    spacing = 2,
    page = 1,
    setPage = () => {},
    totalPages = 10,
    ...rest
}) => {
    const cards = movies.movies.map((movie) => (
        <Grid key={movie.id} item>
            <MovieCard movie={movie} mode={mode}></MovieCard>
        </Grid>
    ));

    const handleChange = (event, value) => {
        setPage(value);
        console.log(value);
    };

    return (
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

export default CardsGallary;
