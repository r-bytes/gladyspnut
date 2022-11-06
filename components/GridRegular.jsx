import Image from "next/image";
import React from "react";

const GridRegular = ({ title, subTitle, intro, image, socials, insta}) => {
        
    return (
        <div className="pt-44 sm:pt-32 max-w-[1280px] mx-auto">
            <div className="container pb-0 mx-auto lg:flex justify-center items-between gap-16 bg-card backdrop-blur-2xl rounded-xl shadow-2xl mt-24">
                <div className="flex md:flex-col px-12 py-8 md:pl-16 flex-wrap md:max-w-4xl justify-center sm:justify-start sm:items-start rounded-xl">
                    <h1 className="text-5xl font-bold mb-16 mt-12 text-center sm:text-left"> {title} </h1>
                    <h3 className="mb-4 font-semibold text-center sm:text-left"> {subTitle} </h3>
                    <p className="leading-loose tracking-wider text-sm text-center sm:text-left">
                        {intro.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    {socials ? (socials) : ("")}
                </div>
                {insta ? (
                    <div className="hidden 2xl:block mr-16 rounded-xl mt-12">
                        <Image src={image} height={500} width={500} alt={"#"} 
                            className="rounded-full"
                        />
                    </div>
                ) : ("")}
            </div>
        </div>
    )
}
export default GridRegular