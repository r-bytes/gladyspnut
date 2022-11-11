import React, { useState } from "react";
import { Button } from "@mui/material";
import drawData from "../constants/drawData.json"
import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const DrawChallenge = forwardRef((props, ref) => {
    const [Image, setImage] = useState("")
    const [play, setPlay] = useState(false)

    const randomNumber = () => {
        return Math.floor(Math.random() * 2000)
    }

    const shuffleImage = () => {
        setImage(drawData[randomNumber()])
    }

    return (
        <div className="h-screen flex items-center justify-center text-center" ref={ref}>
            {play ? (
                <div className="grid gap-6 place-content-center content-between bg-card px-44 py-16 rounded shadow-2xl backdrop-blur-xl max-w-4xl max-h-96 w-full h-full">
                        <span className="flex flex-col tracking-widest text-3xl font-bold mb-4"> Dare me to draw... </span>
                        <span className="text-lg tracking-wider mb-4 h-full w-full"> {Image} </span>
                    <div className="align-self-end">
                        <Button className="text-secondary bg-primaryAccent hover:bg-secondaryAccent px-16" onClick={() =>  shuffleImage()}> {!Image ? "Get Idea" : "Next Idea"} </Button>
                    </div>
                </div>
            ) : (
                <Button className="text-secondary text-2xl bg-primaryAccent hover:bg-secondaryAccent p-12 mx-auto"
                    onClick={() => setPlay(prev => !prev)}
                >
                    <span className="tracking-widest"> Dare me to draw! </span>
                </Button>
            )}
        </div>
    );
})

export default DrawChallenge
