import { AppBar, Toolbar } from "@mui/material";
import { SocialIcons } from ".";

const Footer = () => {
    return (
        <div className="bg-primary text-primary left-0 right-0 bottom-0 w-full z-50 shadow-2xl backdrop-blur-2xl">
            {/* <Container fixed > */}
            <div className="flex py-6 flex-col">
                <SocialIcons footer />

                <div className="bg-black tracking-wider text-white text-xs py-2 text-center mt-4 mb-[-2rem]">
                    <span>
                        {" "}
                        Art by Gladys P. Nut | Kvk: 70012962 | info@gladyspnut.com{" "}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Footer;
