import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./Progress.css";

const Progress = () => {
    return (
        <Box sx={{ display: "flex" }} className="progress">
            <CircularProgress className="progress" />
        </Box>
    );
};

export default Progress;
