// Import Statements

import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import "./Footer.css";
import propTypes from "prop-types";
import defaultProps from "default-props";
import { connect } from "react-redux";

// Definition Statements

const Footer = ({ mode }) => (
    <div className={`footer ${mode}`}>
        <Typography variant="body2">
            {"Copyright © "}
            <Link
                color="inherit"
                href="https://www.linkedin.com/in/farhan-kiyani/"
            >
                Farhan Kiyani
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    </div>
);

Footer.propTypes = {
    mode: propTypes.string,
};

Footer.defaultProps = defaultProps;

Footer.defaultProps = {
    mode: "light",
};

const mapStateToProps = (state) => {
    return {
        mode: state.mode,
    };
};

export default connect(mapStateToProps)(Footer);
