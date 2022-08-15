import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchButton, { VARIANTS } from "../SearchButton/SearchButton";
import "./SearchBar.css";
import { connect } from "react-redux";
import propTypes from "prop-types";
import defaultProps from "default-props";
import {
    moviesLoadNew,
    moviesLoadFailure,
    urlSet,
    moviesLoading,
} from "../../store/actions";

const SearchBar = ({
    placeholder,
    width,
    url,
    setURL,
    loadNew,
    setLoading,
    error,
    mode,
    ...rest
}) => {
    const [SearchBarClass, setSearchBarClass] = useState("");
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        mode === "light"
            ? setSearchBarClass("search-bar-light")
            : setSearchBarClass("search-bar-dark");
    }, [mode]);

    useEffect(() => {
        if (searchValue !== "") {
            setURL(
                `https://api.themoviedb.org/3/search/movie?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US&query=${searchValue}`
            );
        } else {
            setURL(
                `https://api.themoviedb.org/3/movie/top_rated?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US`
            );
        }
    }, [searchValue, setURL]);

    const clickHandler = (e) => {
        e.preventDefault();
        setLoading();
        loadNew(`${url}&page=1`);
    };

    return (
        <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: { width },
            }}
            className={SearchBarClass}
        >
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder={placeholder}
                inputProps={{ "aria-label": "search movies" }}
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className={SearchBarClass}
                {...rest}
            />
            <SearchButton
                variant={VARIANTS.contained}
                clickHandler={clickHandler}
                mode={mode}
            >
                <SearchIcon />
            </SearchButton>
        </Paper>
    );
};

SearchBar.propTypes = {
    placeholder: propTypes.string,
    width: propTypes.string,
    url: propTypes.string,
    setURL: propTypes.func.isRequired,
    loadNew: propTypes.func.isRequired,
    setLoading: propTypes.func.isRequired,
    error: propTypes.string,
    mode: propTypes.string,
};

SearchBar.defaultProps = defaultProps;

SearchBar.defaultProps = {
    placeholder: "Search Movies",
    width: "100%",
    url: "https://api.themoviedb.org/3/movie/top_rated?api_key=802f00acb087ce523bcf2b9baa7a693a&language=en-US",
    error: "",
    mode: "light",
};

const mapStateToProps = (state) => {
    return {
        url: state.url.url,
        error: state.url.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadNew: (url) => dispatch(moviesLoadNew(url)),
        loadFailure: (error) => dispatch(moviesLoadFailure(error)),
        setURL: (url, page) => dispatch(urlSet(url, page)),
        setLoading: () => dispatch(moviesLoading()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
