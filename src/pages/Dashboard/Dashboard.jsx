import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import CardsGallary from "../../components/CardsGallary/CardsGallary";
import Footer from "../../components/Footer/Footer";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import propTypes from "prop-types";
import defaultProps from "default-props";
import "./Dashboard.css";

const Dashboard = ({ mode }) => {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" className="dashboard">
                <NavBar placeholder="Search for a movie" />
                <CardsGallary />
                <Footer />
            </Container>
        </React.Fragment>
    );
};

Dashboard.propTypes = {
    mode: propTypes.string,
};

Dashboard.defaultProps = defaultProps;

Dashboard.defaultProps = {
    mode: "light",
};

export default Dashboard;
