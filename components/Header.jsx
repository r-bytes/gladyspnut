import Link from "next/link";
import { useState } from "react";
import { Menu, Theme } from "../components/";
import EmailIcon from "@mui/icons-material/Email";
import Image from "next/image";

import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import MenuListComposition from "./MenuListComposition";

const Header = () => {
    const [showBurger, setShowBurger] = useState(false);
    const [onHover, setOnHover] = useState(false);

    return (
        <div className="text-primary">
            {/* top header */}
            <div className="flex justify-between items-center px-48 bg-secondary text-xs h-8 tracking-wider">
                <span className="flex justify-between items-center  border border-green-500 w-screen">
                    <EmailIcon fontSize="small" className="mr-1 py-0.5" />
                    <Link href="mailto:info@gladyspnut.com">
                        info@gladyspnut.com
                    </Link>
                </span>
                <Theme />
            </div>
            {/* sub header */}
            <div className="w-screen justify-center flex md:justify-between items-center h-32 text-primary">
                {/* logo and navbar */}
                <div className="flex items-center justify-around md:justify-between gap-1 lg:gap-2 w-full h-full">
                    {/* logo */}
                    <div className="sm:ml-12 md:ml-44 lg:ml-12 xl:ml-44">
                        <Image
                            className=""
                            src="/assets/logo.jpg"
                            alt="gladys.pnut"
                            width={280}
                            height={110}
                        />
                    </div>

                    {/* navbar */}
                    <ul
                        className="hidden lg:flex gap-1 lg:gap-8 justify-start items-center min-w-fit uppercase font-bold tracking-wider text-secondary px-3
                    lg:mr-12 xl:mr-24 text-sm"
                    >
                        <li className="min-w-fit flex justify-center items-center relative">
                        <MenuListComposition className="text-black" />
                        </li>
                        <li className="min-w-fit">
                            <Link href="/about-me">About Me</Link>
                        </li>
                        <li className="min-w-fit">
                            <Link href="/commission-info">Commission Info</Link>
                        </li>
                        <li className="min-w-fit">
                            <Link href="/branding">My Brand</Link>
                        </li>
                        <li className="min-w-fit">
                            <Link href="/contact">Contact</Link>
                        </li>
                    </ul>

                    {/* hamburger icon */}
                    <div className="lg:hidden sm:mr-8 md:mr-12">
                        <IconButton onClick={() => setShowBurger(true)}>
                            <MenuIcon />
                        </IconButton>
                    </div>
                </div>

                {/* hamburger menu */}
                <div
                    className={`${
                        showBurger
                            ? "translate-x-0 ease-in-out duration-500"
                            : "translate-x-full ease-in-out duration-500"
                    }
                        hidden md:flex md:flex-col gap-4 items-center text-start bg-black z-50 fixed top-0 bottom-0 right-0 w-72 list-none p-5`}
                >
                    <IconButton onClick={() => setShowBurger(false)}>
                        <CloseIcon className="text-primary ml-0" />
                    </IconButton>

                    {/* {cars && cars.map((car, index) =>  */}
                    <li>
                        <a href="#">{"name"}</a>
                    </li>

                    <li>
                        {" "}
                        <a href="#"> Solar Roof </a>{" "}
                    </li>
                    <li>
                        {" "}
                        <a href="#"> Solar Panels </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#"> Existing Inventory </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#"> Used Inventory </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#"> Trade-In </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#"> Test Drive </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#"> Insurance </a>
                    </li>
                    <li>
                        {" "}
                        <a href="#"> Powerwall </a>
                    </li>
                </div>
            </div>
            <hr />
        </div>
    );
};
export default Header;
