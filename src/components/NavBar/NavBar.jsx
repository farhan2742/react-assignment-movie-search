// Material UI App Bar with Search Bar and logo

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../../public/logo192.png";
import "./Navbar.css";

export default function NavBar(props) {
    const { logoSrc = logo, mode = "light", ...rest } = props;

    const [searchValue, setSearchValue] = React.useState("");

    const clickHandler = () => {
        console.log(searchValue);
    };

    return (
        <div className={`NavBar`}>
            <AppBar position="static">
                <Toolbar className={mode}>
                    <img src={logoSrc} alt="logo" className={`logo-img`} />
                    <SearchBar
                        placeholder="Search Movies"
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
}
