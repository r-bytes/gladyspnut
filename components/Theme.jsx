import React from "react";
import { useThemeContext } from "../context/ThemeProvider";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { IconButton } from "@mui/material";

const Theme = ({ text }) => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <div className="text-xs tracking-wider text-primary flex ml-4">
            {theme === "dark" ? (
                <IconButton className="rounded p-2 text-primary px-4 text-sm hover:text-accent" onClick={toggleTheme}>
                    <Brightness5Icon className="text-primary py-1 hover:text-accent" fontSize="small" />
                    {text ? <span> Darkmode </span> : "" }
                </IconButton>
            ) : (
                <IconButton className="p-2 text-primary px-4 text-sm font-bold tracking-widest uppercase hover:text-accent rounded" onClick={toggleTheme} >
                    <Brightness4Icon className="text-primary py-0.5 mr-1" fontSize="small" />
                    {text ? <span> Darkmode </span> : "" }
                </IconButton>
            )}
        </div>
    );
};

export default Theme;
