import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CardsGallary from "../../components/CardsGallary/CardsGallary";

import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

const Dashboard = ({ mode = "light" }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl">
                <NavBar mode={mode} placeholder="Search for a movie" />
                <CardsGallary mode={mode} />
            </Container>
        </React.Fragment>
    );
};

export default Dashboard;
