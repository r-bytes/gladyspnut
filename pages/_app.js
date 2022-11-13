import "@styles/globals.css";
import { Footer } from "../components";
import { ThemeProvider } from "context/ThemeProvider";
import Navbar from "@components/Navbar";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider>
                <Navbar />
                <Component {...pageProps} />
                <Footer  />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
