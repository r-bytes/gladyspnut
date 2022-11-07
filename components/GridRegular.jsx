import Image from "next/image";
import React from "react";

const GridRegular = ({ title, subTitle, intro, image, socials, insta, rootClass}) => {
    return (
        <div className={rootClass}>
            <div className="">
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
                <div className="hidden lg:inline-block w-full h-60 object-cover mt-12 mr-12">
                    <Image src={image} height={500} width={500} alt={"#"} 
                        className="rounded-full"
                    />
                </div>
            ) : ("")}
        </div>
    )
}
export default GridRegular