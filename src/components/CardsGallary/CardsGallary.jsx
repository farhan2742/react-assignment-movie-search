import * as React from "react";
import Grid from "@mui/material/Grid";
import MovieCard from "../MovieCard/MovieCard";

const CardsGallary = ({
    movies = [],
    mode = "light",
    spacing = 2,
    ...rest
}) => {
    const cards = movies.movies.map((movie) => (
        <Grid key={movie.id} item>
            <MovieCard movie={movie} mode={mode}></MovieCard>
        </Grid>
    ));
    return (
        <Grid sx={{ flexGrow: 1, p: 2 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                    {cards}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CardsGallary;
