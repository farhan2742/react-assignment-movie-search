// Material UI App Bar with Search Bar and logo

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo/logo192.png";
import "./Navbar.css";
import propTypes from "prop-types";
import defaultProps from "default-props";

const NavBar = ({
    logoSrc,
    mode,
    searchValue,
    placeholder,
    setSearchValue,
    ...rest
}) => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar className={`NavBar ${mode}`}>
                    <img src={logoSrc} alt="logo" className={`logo-img`} />
                    <SearchBar
                        placeholder={placeholder}
                        width={800}
                        mode={mode}
                        {...rest}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
};

NavBar.propTypes = {
    logoSrc: propTypes.string,
    mode: propTypes.string,
    searchValue: propTypes.string,
    placeholder: propTypes.string,
    setSearchValue: propTypes.func,
};

NavBar.defaultProps = defaultProps;

NavBar.defaultProps = {
    logoSrc: logo,
    mode: "light",
    searchValue: "",
    placeholder: "Search Movies",
    setSearchValue: () => "Search Value changed",
};

export default NavBar;
