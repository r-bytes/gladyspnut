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

const Navbar = () => {
    const [color, setColor] = useState("transparant")
    const [textColor, setTextColor] = useState("blue")

    useEffect(() => {
        const changeColor = () => {
            if (window.screenY >= 90) {
                setColor("#ffffff")
            } else {
                setColor("transparant")
                setTextColor("red")
            }
        }
        window.addEventListener("scroll", changeColor)
    
    }, [])
    

    const pages = [
        {name: "About", url: "/about-me"}, 
        {name: "Commission", url: "/commission-info"}, 
        {name: "My Brand", url: "/branding"}, 
        {name: "Contact", url: "/contact"}
    ];
  
    return (
        <AppBar position="static" className="bg-primary text-primary fixed left-0 top-0 w-full">
            <Container maxWidth="xl" >
                <Toolbar className="flex py-6" disableGutters>
                    <a href={"/"} className="cursor-pointer">
                        <Image
                            className=""
                            priority="true"
                            src="/assets/logo.png"
                            alt="gladys.pnut"
                            width={300}
                            height={110}
                        />
                    </a>
                    
                    <Container maxWidth="sm" className="mr-0 flex items-center justify-end max-w-fit">
                        <Box className="hidden md:flex md:justify-between" >
                            <MenuListComposition className="text-primary" />
                                {pages.map((page, i) => (
                                    <Button key={i} className="text-primary my-1 mr-2 block hover:bg-secondary" >
                                        <Link href={page.url} >
                                            {page.name}
                                        </Link>      
                                    </Button>
                                ))}
                        </Box>
                        <TemporaryDrawer />
                        
                            <Theme />
                        
                    </Container>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Navbar