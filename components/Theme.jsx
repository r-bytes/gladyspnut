import React from "react";
import { useThemeContext } from "../context/ThemeProvider";
import Brightness5Icon from "@mui/icons-material/Brightness5";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Button, IconButton } from "@mui/material";

const Theme = ({text}) => {
    const { theme, toggleTheme } = useThemeContext();

    return (
        <div className="text-xs tracking-wider text-primary flex">
            {theme === "Dark" ? (
                <IconButton className="p-2 text-primary px-4 text-sm bg-primary round-none hover:bg-secondary" onClick={toggleTheme}>
                    <Brightness5Icon className="icon py-1" fontSize="small" />
                    {text ? <span> Darkmode </span> : "" }
                </IconButton>
            ) : (
                <IconButton className="p-2 text-primary px-4 text-sm font-bold tracking-widest uppercase rounded-none hover:bg-secondary" onClick={toggleTheme} >
                    <Brightness4Icon className="py-0.5 mr-1" fontSize="small" />
                    {text ? <span> Darkmode </span> : "" }
                </IconButton>
            )}
        </div>
    );
};

export default Theme;
