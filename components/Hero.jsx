import { Button, IconButton } from "@mui/material";
import Image from "next/image"
import React, { useRef, useState } from "react"
import { Parallax, Background } from 'react-parallax';

const Hero = ({ heading, message }) => {
    const scrollToElement = () => buttonRef.current.scrollIntoView({ behavior: 'smooth', duration: 3000, block: "start" });
    const [scroll, setScroll] = useState(false)
    const buttonRef = useRef()

    const hideArrow = () => {
        if (window.scrollY > 90) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", hideArrow)
    }
    
    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <div className="flex flex-col items-center mt-72 p-24 rounded-lg bg-card backdrop-blur-xl shadow-2xl">
                <h2 className="text-5xl font-bold tracking-wider"> {heading} </h2>
                <p className="py-5 text-xl text-center leading-loose tracking-wider">
                    {message.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))} 
                </p>
                <Button className="text-primary rounded uppercase font-bold tracking-widest py-2 px-8 border hover:bg-secondaryAccent hover:text-primary bg-button border-none "> book </Button>
            </div>
            {scroll ? ("") : (
                <IconButton className="flex items-center justify-center mb-8 bg-card hover:bg-secondary shadow-2xl" onClick={scrollToElement}>
                    <Image  alt="arrowDown" src={"/assets/down-arrow.svg"} height={30} width={30} className="animate-bounce cursor-pointer"  />
                </IconButton>
            )}
        </div>
    )
}
export default Hero