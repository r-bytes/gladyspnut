import InstagramIcon from '@mui/icons-material/Instagram';
import { SocialIcon } from 'react-social-icons';


const Footer = () => {
    return (
        <div className="">
            <div className="flex gap-4 justify-center items-center bg-[#222222] dark:bg-white py-12">
                <SocialIcon fgColor="white" url="https://www.instagram.com/gladyspnut/" />
                <SocialIcon fgColor="white" url="https://tiktok.com/@cutiesquad" />
                <SocialIcon fgColor="white" url="https://twitter.com/gladyspnut" />
                <SocialIcon fgColor="white" url="https://www.linkedin.com/in/gladysvanvelse/" />
                <SocialIcon fgColor="white" url="https://dribbble.com/gladyspnut" />
                <SocialIcon fgColor="white" url="https://www.behance.net/gladyspnut" />
            </div>
            <div className="bg-black text-xs py-2 text-center">
                <span> Art by Gladys P. Nut | Kvk: 70012962 | info@gladyspnut.com </span>
            </div>
        </div>
    )
}
export default Footer