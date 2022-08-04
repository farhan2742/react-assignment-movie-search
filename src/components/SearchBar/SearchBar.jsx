import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchButton, { VARIANTS } from "../SearchButton/SearchButton";
import "./SearchBar.css";

const SearchBar = ({
    placeholder = "Search Movies",
    width,
    clickHandler,
    searchValue,
    setSearchValue,
    mode = "light",
    ...rest
}) => {
    const [SearchBarClass, setSearchBarClass] = React.useState("");

    React.useEffect(() => {
        mode === "light"
            ? setSearchBarClass("search-bar-light")
            : setSearchBarClass("search-bar-dark");
    }, [mode]);

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

export default SearchBar;
