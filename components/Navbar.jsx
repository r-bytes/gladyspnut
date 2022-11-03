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
import { IconButton } from "@mui/material";

const Navbar = () => {
    const [activePage, setActivePage] = useState(false)
    const [hover, setHover] = useState(false)


    const router = useRouter();

    console.log(router.pathname);


    useEffect(() => {
        if (router.pathname === "/about-me") {
            setActivePage("About")
        } else if (router.pathname === "/commission-info"){
            setActivePage("Commission")
        } else if (router.pathname === "https://cutiesquad.com") {
            setActivePage(false)
            
        } else if (router.pathname === "/contact") {
            setActivePage("Contact")
        }
    }, [router])
    



    

    const pages = [
        {name: "About", url: "/about-me"}, 
        {name: "Commission", url: "/commission-info"}, 
        {name: "My Brand", url: "https://cutiesquad.com"},
        {name: "Contact", url: "/contact"}
    ];
  
    return (
        <AppBar position="static" className="bg-primary text-primary fixed left-0 top-0 w-full min-h-44 z-50">
            <Container maxWidth="xl" >
                <Toolbar className="flex flex-col sm:flex-row py-6" disableGutters>
                    <a href={"/"} className="cursor-pointer order-2 sm:order-1">
                        <Image
                            className=""
                            priority="true"
                            src="/assets/logo.png"
                            alt="gladys.pnut"
                            width={300}
                            height={110}
                        />
                    </a>
                    
                    <Container maxWidth="sm" className="mr-0 flex items-center justify-end max-w-fit order-1 sm:order-1 pr-0">
                        <Box className="hidden md:flex md:justify-between" >
                            <MenuListComposition />
                                
                                {pages.map((page, i) => (
                                    <IconButton
                                        key={i}
                                        className={"rounded text-sm text-primary font-semibold py-2 px-2 mx-2 uppercase tracking-widest"}
                                    >
                                        <Link href={page.url}>
                                            <a className="hover:text-accent"> {page.name}</a>
                                        </Link>      
                                    </IconButton>
                                ))}
                        </Box>
                        <Theme />

                        <TemporaryDrawer />
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar