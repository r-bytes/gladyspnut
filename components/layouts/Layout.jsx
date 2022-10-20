const Layout = ({ children }) => {
    return (
        <div className="layout">
            {/* <Head>
                <title> R-Bytes Store </title>
            </Head> */}

            <header>{/* <Navbar /> */}</header>

            <main className="main-container">{children}</main>

            <footer>{/* <Footer /> */}</footer>
        </div>
    );
};
