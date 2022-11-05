import { IconButton } from "@mui/material";
import Image from "next/image"
import React, { useState } from "react"

const Hero = ({ heading, message, testRef }) => {
    const scrollToElement = () => testRef.current.scrollIntoView({ behavior: 'smooth', duration: 3000, block: "start" });
    const [scroll, setScroll] = useState(false)

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
            <div className="flex flex-col items-center mt-72">
                <h2 className="text-5xl font-bold tracking-wider"> {heading} </h2>
                <p className="py-5 text-xl text-center leading-loose tracking-wider">
                    {message.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))} 
                </p>
                <button className="uppercase font-bold tracking-widest py-2 px-8 border hover:bg-button hover:text-secondary hover:border-none"> book </button>
            </div>
            {scroll ? (
                ""
            ) : (
                <IconButton className="flex items-center justify-center" onClick={scrollToElement}>
                    <Image alt="arrowDown" src={"/assets/down-arrow.svg"} height={30} width={30} className="animate-bounce cursor-pointer"  />
                </IconButton>

            )}
        </div>
    )
}
export default Hero