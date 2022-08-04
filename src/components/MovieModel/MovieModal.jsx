// A Material UI Modal that displays movie data

import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Stack from "@mui/material/Stack";

const MovieModal = ({ movie, open, setOpen, mode = "light", ...rest }) => {
    useEffect(() => {
        setOpen(open);
    }, [open]);

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
            <Stack direction="row" spacing={2}>
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

export default MovieModal;
