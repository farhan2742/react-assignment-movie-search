const loadReducer = (state, action) => {
    switch (action.type) {
        case "loadNew":
            return {
                movies: action.payload,
            };
        case "loadMore":
            return {
                movies: {
                    ...state.movies,
                    movies: action.payload,
                },
            };
        default:
            return state;
    }
};

export default loadReducer;
