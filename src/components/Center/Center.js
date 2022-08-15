import React from "react";
import "./Center.css";
import propTypes from "prop-types";
import defaultProps from "default-props";

const Center = ({ children }) => <div className="center">{children}</div>;

Center.propTypes = {
    children: propTypes.node,
};

Center.defaultProps = defaultProps;

Center.defaultProps = {
    children: null,
};

export default Center;
