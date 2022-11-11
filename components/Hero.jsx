import { Button, IconButton } from "@mui/material";
import Image from "next/image"
import { useRouter } from "next/router";
import React, { useState } from "react"


const Hero = ({ heading, message, drawRef }) => {
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

    const handleClick = () => {
        drawRef.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className="flex flex-col items-center justify-between h-screen">
            <div className="flex flex-col items-center mt-72 p-24 rounded bg-card backdrop-blur-xl shadow-2xl">
                <h2 className="text-5xl font-bold tracking-wider"> {heading} </h2>
                <p className="py-5 text-xl text-center leading-loose tracking-wider">
                    {message.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))} 
                </p>
                <Button className="text-secondary rounded uppercase font-bold tracking-widest py-2 px-8 border hover:bg-secondaryAccent bg-button border-none "> book </Button>
            </div>
            {scroll ? ("") : (
                <IconButton className="flex items-center justify-center mb-8 bg-card hover:bg-secondary shadow-2xl" onClick={()=> handleClick()}>
                    <Image className="animate-bounce cursor-pointer" src={"/assets/down-arrow.svg"} alt="arrowDown" height={30} width={30} />
                </IconButton>
            )}
        </div>
    )
}
export default Hero