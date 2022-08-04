// Material UI App Bar with Search Bar and logo

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/logo/logo192.png";
import "./Navbar.css";

const NavBar = ({
    logoSrc = logo,
    mode = "light",
    searchValue = "",
    placeholder = "Search Movies",
    setSearchValue = () => "Search Value changed",
    ...rest
}) => {
    const clickHandler = (e) => {
        e.preventDefault();
        console.log(searchValue);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar className={`NavBar ${mode}`}>
                    <img src={logoSrc} alt="logo" className={`logo-img`} />
                    <SearchBar
                        placeholder={placeholder}
                        width={800}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        clickHandler={clickHandler}
                        mode={mode}
                        {...rest}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;
