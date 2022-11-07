import React, { useState } from "react";
import { Button } from "@mui/material";
import drawData from "../constants/drawData.json"

const DrawChallenge = () => {
    const [Image, setImage] = useState("")
    const [play, setPlay] = useState(false)

    const randomNumber = () => {
        return Math.floor(Math.random() * 2000)
    }

    const shuffleImage = () => {
        setImage(drawData[randomNumber()])
    }

    return (
        <div className="h-screen flex items-center justify-center text-center">
            {play ? (
                <div className="flex flex-col flex-wrap bg-card px-44 py-32 rounded shadow-2xl backdrop-blur-xl max-w-2xl">
                    <span className="tracking-widest text-3xl font-bold mb-8"> Dare me to draw... </span>
                    <span className="text-lg tracking-wider mb-4"> {Image} </span>
                    <span className="mx-auto flex justify-center max-w-sm space-x-20 my-8 mb-10">
                        <Button className="text-secondary bg-primaryAccent hover:bg-secondaryAccent px-4" onClick={() =>  shuffleImage()}> {!Image ? "Get Idea" : "Next Idea"} </Button>
                    </span>
                </div>
            ) : (
                <Button
                    className="text-secondary text-2xl bg-primaryAccent hover:bg-secondaryAccent p-12 mx-auto"
                    onClick={() => setPlay(prev => !prev)}
                >
                    <span className="tracking-widest"> Dare me to draw! </span>
                </Button>
            )}
        </div>
    );
}

export default DrawChallenge
