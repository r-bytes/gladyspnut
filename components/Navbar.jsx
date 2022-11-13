import Image from "next/image"
import Link from "next/link"
import MenuDropDown from "./MenuDropDown"
import TemporaryDrawer from "./TemporaryDrawer";
import { useEffect, useState } from "react";
import Theme from "./Theme"
import { useRouter } from "next/router";
import { Divider } from "@mui/material";
import { IconButton } from '@mui/material';
import { useThemeContext } from "../context/ThemeProvider";


const Navbar = () => {
    const [activePage, setActivePage] = useState(false)
    const [scroll, setScroll] = useState(false)
    const { theme } = useThemeContext();

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
            "bg-secondary backdrop-blur-2xl text-primary fixed left-0 top-0 w-full min-h-44 z-50 flex py-6 mx-auto sm:px-10 justify-around items-center" :
            "bg-transparant backdrop-blur-2xl text-secondary fixed left-0 top-0 w-full min-h-44 z-50 flex py-6 mx-auto sm:px-10 justify-around items-center"
        }>
            <a href={"/"}>
                <Image
                    className="w-full object-cover cursor-pointer"
                    priority="true"
                    src={theme === "dark" ? "/assets/logo_dark.png" : "/assets/logo.png"}
                    alt="gladys.pnut"
                    width={330}
                    height={130}
                />
            </a>

            {/* navbar && hamburger */}
            <div className="hidden md:flex md:items-center md:justify-between px-4 space-x-1 lg:space-x-4" >
                <MenuDropDown activePage={activePage} />
                    {/* nav items */}
                    {pages.map((page, i) => (
                        <div key={i} className={"relative hover:text-accent rounded text-xs lg:text-sm text-primary font-semibold pr-2 px-2 mx-2 uppercase"}>
                            <div className="flex justify-center items-center">
                                <Link href={page.url}>
                                    {page.name}
                                </Link>
                                {activePage === page.name ? (
                                    <Divider className="absolute top-10 h-[2px] w-[80%] bg-button" />
                                ) : ""}
                            </div>
                        </div>
                    ))}
                <Theme />
            </div>
            <TemporaryDrawer />
        </div>
    )
}
export default Navbar