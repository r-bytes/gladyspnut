import { Divider } from "@mui/material";
import Image from "next/image";
import React from "react";

const Wrapper = ({ title, subTitle, intro, rootClass, profilePicture, artist, socials }) => {
    return (
        <>
            <h1 className="pt-64 text-5xl font-bold mb-8 text-center"> {title} </h1>
            <div className={rootClass}>
                <div>
                    <p className="mb-8 font-light text-2xl tracking-wider text-center sm:text-left">
                        {subTitle?.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <Divider className="bg-zinc-100 dark:bg-zinc-700 max-w-4xl mx-auto" />
                    <br />
                    <p className="mb-8 leading-loose tracking-wider text-xs text-center sm:text-left">
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
        </>
    )
}
export default Wrapper