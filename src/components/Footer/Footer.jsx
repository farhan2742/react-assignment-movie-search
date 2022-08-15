// Import Statements

import React from "react"; // React Library Components
import Typography from "@mui/material/Typography"; // Typography Component from Meterial UI
import Link from "@mui/material/Link"; // Link Component from Meterial UI
import "./Footer.css";

// Definition Statements

function Footer({ mode }) {
    // Application Footer Component
    return (
        // Return Code
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
}

export default Footer;
