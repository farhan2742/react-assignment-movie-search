import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchButton.css";

export const VARIANTS = {
    outline: "outline",
    contained: "contained",
};

const SearchButton = ({
    variant = VARIANTS.contained,
    children,
    icon = false,
    clickHandler,
    mode = "light",
    ...rest
}) => {
    return (
        <Button
            variant={variant}
            className={` ${mode} search-button`}
            endIcon={icon ? <SearchIcon /> : null}
            onClick={clickHandler}
            {...rest}
        >
            {children}
        </Button>
    );
};

export default SearchButton;
