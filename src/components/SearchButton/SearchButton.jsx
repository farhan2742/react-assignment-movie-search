import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchButton.css";

export default function SearchButton(props) {
    const {
        variant = "contained",
        children,
        icon = true,
        clickHandler,
        mode = "light",
        ...rest
    } = props;
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
}
