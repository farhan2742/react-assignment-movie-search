// A Material UI Modal that displays movie data

import React, { useEffect } from "react";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";
import "./MovieModal.css";
import propTypes from "prop-types";
import defaultProps from "default-props";

const MovieModal = ({ movie, open, setOpen, mode, ...rest }) => {
    useEffect(() => {
        setOpen(open);
    }, [open, setOpen]);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            className={`movie-modal ${mode}`}
        >
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w440_and_h660_face${movie.poster_path}`}
                        alt={movie.title}
                        loading="lazy"
                    />
                </div>
                <div>
                    <h1 className={`movie-modal-title`}>{movie.title}</h1>
                    <h2 className={`movie-modal-subtitle`}>
                        {movie.release_date}
                    </h2>
                    <h2 className={`movie-modal-subtitle`}>
                        Popularity Rating: {movie.vote_average}
                    </h2>
                    <h2 className={`movie-modal-subtitle`}>
                        Rated by {movie.vote_count} Peoples
                    </h2>

                    <p>{movie.overview}</p>
                </div>
            </Stack>
        </Modal>
    );
};

MovieModal.defaultProps = defaultProps;

MovieModal.propTypes = {
    movie: propTypes.object.isRequired,
    open: propTypes.bool.isRequired,
    setOpen: propTypes.func.isRequired,
    mode: propTypes.string.isRequired,
};

MovieModal.defaultProps = {
    movie: {},
    open: false,
    setOpen: () => {},
    mode: "light",
};

export default MovieModal;
