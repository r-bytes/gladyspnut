import { useState }  from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
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
            <List className="bg-primary text-primary h-full flex flex-col justify-between items-center w-screen">
                <IconButton className="ml-auto mr-5 text-primary hover:bg-secondary" onClick={toggleDrawer("right", false)}>
                    <CloseIcon />
                </IconButton>
                
                <div className="flex flex-col gap-4 tracking-widest">
                    {pages.map((page, index) => (
                        <ListItem key={index} onClick={() => router.push(page.url)} className="w-screen">
                            <ListItemButton className="hover:bg-secondary h-full py-4" onClick={toggleDrawer("right", false)}>
                                <ListItemText disableTypography className="text-primary text-4xl text-center font-semibold" primary={page.name} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </div>

                <Theme text />
            </List>
        </Box>
    );

    return (
        <>
            <div className="flex md:hidden hover:bg-secondary" onClick={toggleDrawer("right", true)} >
                <MenuIcon className="text-primary md:hidden" />    
            </div>
            <Drawer
                open={state["right"]}
                onClose={toggleDrawer("right", false)} anchor={"right"}
            >
                {list("right")}

            </Drawer>
        </>
    );
}
