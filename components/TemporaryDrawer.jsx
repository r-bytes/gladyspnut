import { useState }  from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import BrushIcon from '@mui/icons-material/Brush';
import InfoIcon from '@mui/icons-material/Info';
import BadgeIcon from '@mui/icons-material/Badge';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { Theme } from ".";

export default function TemporaryDrawer() {


    const router = useRouter()
    const pages = [

        {name: "My Work", url: "/", icon: <BrushIcon />}, 
        {name: "About Me", url: "/about-me", icon: <PermIdentityIcon />}, 
        {name: "Commission", url: "/commission-info", icon: <InfoIcon />}, 
        {name: "My Brand", url: "/branding", icon: <BadgeIcon />}, 
        {name: "Contact", url: "/contact", icon: <AlternateEmailIcon />}
    ];

    const [state, setState] = useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box role="presentation" onKeyDown={toggleDrawer(anchor)} className="h-full">
            <List className="bg-primary text-primary h-full flex flex-col justify-between items-center w-screen sm:w-72">
                <IconButton className="ml-auto mr-5 text-primary hover:bg-secondary" onClick={toggleDrawer("right", false)}>
                    <CloseIcon />
                </IconButton>
                <div className="">

                    {pages.map((page, index) => (
                        <ListItem key={index} onClick={() => router.push(page.url)} className="w-full">
                            <ListItemButton className="hover:bg-secondary px-[200px]">
                                <ListItemIcon className="hidden sm:flex text-primary">
                                    {page.icon}
                                </ListItemIcon>
                                <ListItemText disableTypography className="text-primary text-3xl sm:text-lg text-center sm:text-left font-bold sm:font-medium" primary={page.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </div>
                <div className="flex justify-center items-center">
                        <Theme disableTypography text />
                </div>
            </List>
        </Box>
    );

    return (
        <div className="mr-1 sm:mr-4">
            <IconButton className="block md:hidden hover:bg-secondary" onClick={toggleDrawer("right", true)} >
                <MenuIcon className="text-primary md:hidden" />    
            </IconButton>
            <Drawer
                open={state["right"]}
                onClose={toggleDrawer("right", false)} anchor={"right"}
            >
                {list("right")}

            </Drawer>
        </div>
    );
}
