import { Button } from "@mui/material";
import Image from "next/image"
import React, { useState } from "react"
import { useThemeContext } from "../context/ThemeProvider";


const Hero = ({ heading, message, drawRef }) => {
    const [scroll, setScroll] = useState(false)
    const { theme } = useThemeContext();

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

    // const handleClick = () => {
    //     drawRef.current.scrollIntoView({ behavior: "smooth" });
    // }

    return (
        <div className="flex flex-col items-center justify-between pt-24">
            <div className="flex flex-col gap-8 items-center mt-72 p-24 rounded bg-secondary backdrop-blur-xl shadow-2xl">
                <h2 className="text-5xl font-bold tracking-wider"> {heading} </h2>
                <p className="py-5 text-xl text-center leading-loose tracking-wider">
                    {message.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))} 
                </p>
                <button className="cursor-pointer text-secondary rounded uppercase font-bold tracking-widest py-2 px-8 border hover:bg-secondaryAccent bg-button border-none"> book </button>
            </div>
            {scroll ? ("") : (
                <span className="flex items-center justify-center shadow-2xl mt-24">
                    <Image className="animate-bounce" src={theme === "dark" ? "/assets/down-arrow.svg" : "/assets/down-arrow-dark.svg" } alt="arrowDown" height={30} width={30} />
                </span>
            )}
        </div>
    )
}
export default Hero