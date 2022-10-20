import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <header> header </header>
                <Component {...pageProps} />
            <footer> footer </footer>
        </>
    )
}

export default MyApp
