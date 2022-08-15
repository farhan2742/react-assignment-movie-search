// Material UI Card that displays movie data

import React, { useEffect, useState } from "react";
import propTypes from "prop-types";
import defaultProps from "default-props";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MovieModal from "../MovieModel/MovieModal";
import "./MovieCard.css";

const MovieCard = ({ movie, mode, ...rest }) => {
    const [image, setImage] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        setImage(movie.poster_path);
    }, [movie]);

    const clickHandler = () => {
        setModalOpen(true);
    };

    return (
        <>
            <MovieModal
                open={modalOpen}
                setOpen={setModalOpen}
                movie={movie}
                mode={mode}
            />
            <Card
                className={`movie-card ${mode}`}
                onClick={clickHandler}
                {...rest}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        className={`movie-card-media`}
                        image={`https://image.tmdb.org/t/p/w440_and_h660_face${image}`}
                        title={movie.title}
                        alt={movie.title}
                    />
                    <CardContent className={`movie-card-content`}>
                        <Typography
                            className={`movie-card-title single-line`}
                            gutterBottom
                        >
                            {movie.title}
                        </Typography>
                        <Typography
                            className={`movie-card-subtitle`}
                            gutterBottom
                        >
                            {movie.release_date}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </>
    );
};

MovieCard.defaultProps = defaultProps;

MovieCard.propTypes = {
    movie: propTypes.object.isRequired,
    mode: propTypes.string.isRequired,
};

MovieCard.defaultProps = {
    movie: {},
    mode: "light",
};

export default MovieCard;
