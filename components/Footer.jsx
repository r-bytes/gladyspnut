import InstagramIcon from "@mui/icons-material/Instagram";
import { AppBar, Container, Toolbar } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return (
        <AppBar position="static" className="bg-primary text-primary left-0 bottom-0 w-full z-50 shadow-2xl">
            {/* <Container fixed > */}
                <Toolbar className="flex py-6 flex-col" disableGutters>
                <div className="flex gap-4 justify-center items-center text-primary dark:bg-primary py-12 z-50 mb-3">
                    <SocialIcon
                        fgColor="white"
                        url="https://www.instagram.com/gladyspnut/"
                    />
                    <SocialIcon
                        fgColor="white"
                        url="https://tiktok.com/@cutiesquad"
                    />
                    <SocialIcon
                        fgColor="white"
                        url="https://twitter.com/gladyspnut"
                    />
                    <SocialIcon
                        fgColor="white"
                        url="https://www.linkedin.com/in/gladysvanvelse/"
                    />
                    <SocialIcon
                        fgColor="white"
                        url="https://dribbble.com/gladyspnut"
                    />
                    <SocialIcon
                        fgColor="white"
                        url="https://www.behance.net/gladyspnut"
                    />
                </div>
                <div className="bg-black text-xs py-2 text-center absolute bottom-0 left-0 right-0 mt-4">
                    <span>
                        {" "}
                        Art by Gladys P. Nut | Kvk: 70012962 | info@gladyspnut.com{" "}
                    </span>
                </div>
                </Toolbar>
            {/* </Container> */}
        </AppBar>
    );
};
export default Footer;
