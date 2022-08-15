// Material UI App Bar with Search Bar and logo

import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo/logo192.png";
import "./Navbar.css";
import propTypes from "prop-types";
import defaultProps from "default-props";
import { connect } from "react-redux";

import { changeMode } from "../../store/actions";

const NavBar = ({
    logoSrc,
    mode,
    searchValue,
    placeholder,
    setSearchValue,
    setMode,
    ...rest
}) => {
    const [lightMode, setLightMode] = useState(false);

    const handleClick = () => {
        setLightMode(!lightMode);
    };

    useEffect(() => {
        lightMode ? setMode("light") : setMode("dark");
    }, [lightMode, setMode]);

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={`NavBar ${mode}`}>
                    <img
                        src={logoSrc}
                        alt="logo"
                        className={`logo-img`}
                        onClick={handleClick}
                    />
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
    setMode: propTypes.func,
};

NavBar.defaultProps = defaultProps;

NavBar.defaultProps = {
    logoSrc: logo,
    mode: "light",
    searchValue: "",
    placeholder: "Search Movies",
    setSearchValue: () => "Search Value changed",
    setMode: () => "Mode changed",
};

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setMode: (mode) => dispatch(changeMode(mode)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
