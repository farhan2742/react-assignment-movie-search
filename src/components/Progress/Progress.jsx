import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Progress.css";

const Progress = ({ ...rest }) => {
    return (
        <Box sx={{ display: "flex" }} className="progress" {...rest}>
            <CircularProgress className="progress" />
        </Box>
    );
};

export default Progress;
