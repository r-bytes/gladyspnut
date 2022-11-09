import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const GridRegular = ({ title, subTitle, intro, rootClass, profilePicture, artist, socials }) => {
    return (
        <div className={rootClass}>
            <div className="">
                <h1 className="text-5xl font-bold mb-16 mt-12 text-center sm:text-left"> {title} </h1>
                <p className="mb-8 font-light text-xl tracking-wider text-center sm:text-left">
                    {subTitle?.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                <Divider className="bg-zinc-100 dark:bg-zinc-700 max-w-lg mx-auto" />
                <br />
                <p className="leading-loose tracking-wider text-xs text-center sm:text-left">
                    {intro?.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                {socials ? (socials) : ("")}
            </div>
            
            {profilePicture ? (
                <div className="hidden lg:inline-block w-full object-cover mt-12 mr-8">
                    <Image src={artist} height={600} width={600} alt={"#"} 
                        className="rounded-full"
                    />
                </div>
            ) : ("")}
        </div>
    )
}
export default GridRegular