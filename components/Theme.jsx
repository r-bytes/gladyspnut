import React from 'react'
import { useThemeContext } from "../context/ThemeProvider"
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness4Icon from '@mui/icons-material/Brightness4';

const Theme = () => {
    const { theme, toggleTheme } = useThemeContext()
    
    return (
        <div className="p-2 text-xs tracking-wider">
            {theme === "dark" ? (
                <div className="button flex" onClick={toggleTheme}>
                    <Brightness5Icon className="icon py-1" fontSize="small" />
                    <span> Light On </span>
                </div>
            ) : (
                <div className="button" onClick={toggleTheme}>
                    <Brightness4Icon className="py-0.5 mr-1" fontSize="small" />
                    <span> Light Off </span>
                </div>
            )}
        </div>
    )
}

export default Theme