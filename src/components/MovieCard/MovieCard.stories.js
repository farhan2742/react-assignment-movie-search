// Functional React Component that diplays a button using matural-ui.

import React from "react";
import MovieCard from "./MovieCard";

const movie = {
    adult: false,
    backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    genre_ids: [18, 80],
    id: 278,
    original_language: "en",
    original_title: "The Shawshank Redemption",
    overview:
        "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    popularity: 80.449,
    poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    release_date: "1994-09-23",
    title: "The Shawshank Redemption",
    video: false,
    vote_average: 8.7,
    vote_count: 21906,
};

export default {
    title: "Movie Card",
    component: MovieCard,
    argTypes: {
        movie: { control: "object" },
        mode: { control: "select", options: ["light", "dark"] },
        open: { control: "select", options: [true, false] },
        clickHandler: { action: "clicked" },
    },
};

const Template = (args) => <MovieCard {...args}></MovieCard>;

export const Primary = Template.bind({});
Primary.args = {
    movie: { ...movie },
    open: false,
    mode: "light",
};

// Our storybook will render our component with some text.
