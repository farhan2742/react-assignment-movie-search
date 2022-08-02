import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchButton from "../SearchButton/SearchButton";
import "./SearchBar.css";

export default function SearchBar(props) {
    const {
        placeholder = "Search Movies",
        width,
        clickHandler,
        searchValue,
        setSearchValue,
        mode = "light",
        ...rest
    } = props;

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
                variant="contained"
                icon={false}
                clickHandler={clickHandler}
                mode={mode}
            >
                <SearchIcon />
            </SearchButton>
        </Paper>
    );
}
