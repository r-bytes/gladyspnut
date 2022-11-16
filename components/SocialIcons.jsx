import { IconButton } from "@mui/material"
import { SocialIcon } from "react-social-icons"

const SocialIcons = ({ footer }) => {
    return (
        footer ? (
            <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center items-center text-primary bg-transparant py-12 z-50">
                <IconButton className="px-0">
                    <SocialIcon
                        fgColor="white"
                        url="https://www.instagram.com/gladyspnut/"
                    />
                </IconButton>
                <IconButton className="px-0">
                    <SocialIcon
                        fgColor="white"
                        url="https://tiktok.com/@cutiesquad"
                    />
                </IconButton>
                <IconButton className="px-0">
                    <SocialIcon
                        fgColor="white"
                        url="https://twitter.com/gladyspnut"
                    />
                </IconButton>
                <IconButton className="px-0">
                    <SocialIcon
                        fgColor="white"
                        url="https://www.linkedin.com/in/gladysvanvelse/"
                    />
                </IconButton>
                <IconButton className="px-0">
                    <SocialIcon
                        fgColor="white"
                        url="https://dribbble.com/gladyspnut"
                    />
                </IconButton>
                <IconButton className="px-0">
                    <SocialIcon
                        fgColor="white"
                        url="https://www.behance.net/gladyspnut"
                    />
                </IconButton>
            </div>
        ) : (
            <div className="flex gap-1 justify-start items-start text-primary bg-transparant mb-3 w-fit">
                <IconButton>
                    <SocialIcon
                        style={{height: "25px", width: "25px"}}
                        fgColor="white"
                        url="https://www.instagram.com/gladyspnut/"
                    />
                </IconButton>
                <IconButton>
                    <SocialIcon
                        style={{height: "25px", width: "25px"}}
                        fgColor="white"
                        url="https://tiktok.com/@cutiesquad"
                    />
                </IconButton>
                <IconButton>
                    <SocialIcon
                        style={{height: "25px", width: "25px"}}
                        fgColor="white"
                        url="https://twitter.com/gladyspnut"
                    />
                </IconButton>
                <IconButton>
                    <SocialIcon
                        style={{height: "25px", width: "25px"}}
                        fgColor="white"
                        url="https://www.linkedin.com/in/gladysvanvelse/"
                    />
                </IconButton>
                <IconButton>
                    <SocialIcon
                        style={{height: "25px", width: "25px"}}
                        fgColor="white"
                        url="https://dribbble.com/gladyspnut"
                    />
                </IconButton>
                <IconButton>
                    <SocialIcon
                        style={{height: "25px", width: "25px"}}
                        fgColor="white"
                        url="https://www.behance.net/gladyspnut"
                    />
                </IconButton>
            </div>
        )
    )
}
export default SocialIcons