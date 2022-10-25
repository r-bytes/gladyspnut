import { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Divider } from "@mui/material";
import Link from "next/link";

export default function MenuListComposition() {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const style = {
        width: '100%',
        //   maxWidth: 360,
        bgcolor: '#fdfdfdd1',
    };


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
                <Button
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    className="text-black text-inherit hover:bg-secondary min-h-fit"
                >
                    Work
                    <KeyboardArrowDownIcon />
                </Button>
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    className="z-50"
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
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                        className="bg-primary text-primary flex flex-col justify-center items-start shadow-2xl p-0"
                                    >
                                        
                                        <MenuItem className="py-4 px-8 w-full" onClick={handleClose}> <Link href="/art-and-illustrations"> Art & Illustrations </Link></MenuItem>
                                        {/* <Divider sx={style} /> */}
                                        <MenuItem className="py-3 px-8 w-full" onClick={handleClose} > Logos & Mascots </MenuItem>
                                        {/* <Divider sx={style} /> */}
                                        <MenuItem className="py-3 px-8 w-full" onClick={handleClose} > Branding </MenuItem>
                                        {/* <Divider sx={style} /> */}
                                        <MenuItem className="py-3 px-8 w-full" onClick={handleClose} > Animated Gifs </MenuItem>
                                        {/* <Divider sx={style} /> */}
                                        <MenuItem className="py-4 pb-6 px-8 w-full" onClick={handleClose} > Commissions </MenuItem>
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
