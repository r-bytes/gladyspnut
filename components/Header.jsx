import Link from "next/link";
import { Theme } from "../components/"
import EmailIcon from '@mui/icons-material/Email';
import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {
    return (
        <div className="text-primary">
            {/* top header */}
            <div className="flex justify-between items-center px-48 bg-secondary text-xs h-8 tracking-wider">
                <span className="flex justify-between items-center">
                    <EmailIcon fontSize="small" className="mr-1 py-0.5" />
                    <Link href="mailto:info@gladyspnut.com">  info@gladyspnut.com </Link>
                </span>
                <Theme />
            </div>
            {/* sub header */}
            <div className="flex justify-between items-center mx-48 h-32 text-primary">
                <Image src="/assets/logo.jpg" alt="gladys.pnut" width="280%" height="110%" />
                <ul className="flex gap-8 uppercase font-bold tracking-wider border text-secondary">
                    <li className="flex justify-center items-center relative">
                        {/* <Link href="mailto:info@gladyspnut.com"> */}
                            My Work
                        {/* </Link> */}
                        <KeyboardArrowDownIcon />
                    </li>
                        <span className="absolute top-[10rem] border border-t-4 border-t-secondary p-8">
                            <li> Art & Illustrations </li>
                            <li> Logos & Mascots </li>
                            <li> Branding </li>
                            <li> Animated Gifs </li>
                            <li> Commissions </li>
                        </span>
                    <li>
                        <Link href="/about-me">
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link href="/commission-info">
                            Commission Info
                        </Link>
                    </li>
                    <li>
                        <Link href="/branding">
                            My Brand
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <hr />
        </div>
    );
};
export default Header;
