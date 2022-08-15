import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchButton.css";
import propTypes from "prop-types";
import defaultProps from "default-props";

export const VARIANTS = {
    outline: "outline",
    contained: "contained",
};

const SearchButton = ({
    variant,
    children,
    icon,
    clickHandler,
    mode,
    type,
    ...rest
}) => {
    return (
        <Button
            variant={variant}
            className={` ${mode} search-button`}
            endIcon={icon ? <SearchIcon /> : null}
            onClick={clickHandler}
            type={type}
            {...rest}
        >
            {children}
        </Button>
    );
};

SearchButton.propTypes = {
    variant: propTypes.oneOf(Object.values(VARIANTS)),
    children: propTypes.node,
    icon: propTypes.bool,
    clickHandler: propTypes.func,
    mode: propTypes.string,
    type: propTypes.string,
};

SearchButton.defaultProps = defaultProps;

SearchButton.defaultProps = {
    variant: VARIANTS.contained,
    children: "Search",
    icon: false,
    clickHandler: () => "Search Button clicked",
    mode: "light",
    type: "submit",
};

export default SearchButton;
