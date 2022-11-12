import { useEffect, useRef, useState } from "react";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Divider, IconButton } from "@mui/material";
import Link from "next/link";

export default function MenuDropDown({ activePage }) {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const [hover, setHover] = useState(false)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "Escape") {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
        useEffect(() => {
            if (prevOpen.current === true && open === false) {
                anchorRef.current.focus();
            }

            prevOpen.current = open;
        }, [open]);

    return (
        <Stack direction="row" spacing={2}>
            <div className="flex items-center justify-center">
                <IconButton
                    className={"rounded text-primary py-2 px-1 mx-0 text-sm font-semibold uppercase tracking-widest"}
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    onMouseEnter={() => setHover(true)}
                >
                    {activePage ===  "Work" ? (
                        <Divider className="absolute top-10 h-[2px] left-1 w-[85%] bg-button" />
                    ) : ""}
                    <span className="hover:text-accent text-xs lg:text-sm flex items-center">
                        Work
                        <KeyboardArrowDownIcon style={{padding: "0"}} fontSize="small" className="mx-0 pr-0" />
                    </span>
                </IconButton>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    className="z-50 rounded"
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === "bottom-start"
                                        ? "top"
                                        : "bottom",
                            }}
                            className="rounded bg-primary"
                        >
                            <Paper className="rounded">
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                        className="bg-primary text-primary flex flex-col justify-center items-start shadow-2xl p-0 rounded"
                                    >
                                        
                                        <MenuItem
                                            className={hover ? "py-4 px-8 w-full hover:text-accent" : "py-4 px-8 w-full"}
                                            onClick={handleClose}
                                            onMouseEnter={() => setHover(true)}
                                        >
                                            <Link href="/art-and-illustrations"> Art & Illustrations </Link>
                                        </MenuItem>
                                        <MenuItem
                                            className={hover ? "py-4 px-8 w-full  hover:text-accent" : "py-4 px-8 w-full"}
                                            onClick={handleClose}
                                            onMouseEnter={() => setHover(true)}
                                        >
                                            
                                            <Link href="/animated-gifs"> Animated Gifs </Link>
                                        </MenuItem>
                                        <MenuItem 
                                            className={hover ? "py-4 px-8 w-full  hover:text-accent" : "py-4 px-8 w-full"}
                                            onClick={handleClose}
                                            onMouseEnter={() => setHover(true)}
                                        >
                                            <Link href="/branding"> Branding </Link>
                                        </MenuItem>
                                            <MenuItem 
                                                className={hover ? "py-4 px-8 w-full  hover:text-accent" : "py-4 px-8 w-full"}
                                                onClick={handleClose}
                                                onMouseEnter={() => setHover(true)}>
                                        <Link href="/commissions"> Commissions </Link>
                                        </MenuItem>
                                        <MenuItem 
                                            className={hover ? "py-4 px-8 w-full  hover:text-accent" : "py-4 px-8 w-full"}
                                            onClick={handleClose}
                                            onMouseEnter={() => setHover(true)}
                                        >
                                            <Link href="/logos-and-mascots"> Logos & Mascots </Link>
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}
