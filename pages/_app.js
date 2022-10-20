import "@styles/globals.css"
import { Header, Footer } from "../components";
import { ThemeProvider } from "context/ThemeProvider";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <header className="bg-primary">
                <Header />
            </header>

                <Component {...pageProps} />
            
            <footer>
                <Footer />
            </footer>
        </ThemeProvider>
    );
}

export default MyApp;
