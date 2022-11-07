import Image from "next/image"
import Link from "next/link"
import MenuListComposition from "./MenuListComposition"
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TemporaryDrawer from "./TemporaryDrawer";
import { useEffect, useState } from "react";
import Theme from "./Theme"
import { useRouter } from "next/router";
import { Divider, IconButton } from "@mui/material";


const Navbar = () => {
    const [activePage, setActivePage] = useState(false)
    const [hover, setHover] = useState(false)
    const [scroll, setScroll] = useState(false)

    const changeColor = () => {
        if (window.scrollY > 90) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", changeColor)
    }

    const router = useRouter();

    useEffect(() => {
        if (router.pathname === "/about-me") {
            setActivePage("About")
        } else if (router.pathname === "/commission-info"){
            setActivePage("Commission")
        } else if (router.pathname === "https://cutiesquad.com") {
            setActivePage(false)
        } else if (router.pathname === "/contact") {
            setActivePage("Contact")
        } else {
            setActivePage("Work")
        }
    }, [router])

    const pages = [
        {name: "About", url: "/about-me"}, 
        {name: "Commission", url: "/commission-info"}, 
        {name: "My Brand", url: "https://cutiesquad.com"},
        {name: "Contact", url: "/contact"}
    ];
  
    return (
        <div className={ !scroll ?
            "bg-secondary backdrop-blur-2xl text-primary fixed left-0 top-0 w-full min-h-44 z-50 flex flex-col sm:flex-row py-6 mx-auto sm:px-10 justify-around items-center" :
            "bg-secondary backdrop-blur-2xl text-secondary fixed left-0 top-0 w-full min-h-44 z-50 flex flex-col sm:flex-row py-6 mx-auto sm:px-10 justify-around items-center"
        }>
            <Link href={"/"}>
                <Image
                    className="w-full h-60 object-cover cursor-pointer"
                    priority="true"
                    src="/assets/logo.png"
                    alt="gladys.pnut"
                    width={300}
                    height={110}
                />
            </Link>

            {/* navbar && hamburger */}
            <div className="">

                <div className="hidden md:flex md:items-center md:justify-between px-4 space-x-1 lg:space-x-4" >
                    {/* dropdown */}
                    <MenuListComposition activePage={activePage} />
                    {/* nav items */}
                    {pages.map((page, i) => (
                        <IconButton key={i} className={"relative hover:text-accent rounded text-xs lg:text-sm text-primary font-semibold pr-2 px-2 mx-2 uppercase"}>
                            <div className="">
                                <Link href={page.url}>
                                    {page.name}
                                </Link>
                                {activePage === page.name ? (
                                    <Divider className="absolute top-10 h-[2px] w-[90%] bg-button" />
                                ) : ""}
                            </div>
                        </IconButton>
                    ))}
                <Theme />
                </div>
                <TemporaryDrawer />
            </div>
        </div>
    )
}
export default Navbar