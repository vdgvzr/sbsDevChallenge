import React from "react"
import Nav from "../globals/Nav"
import Footer from "../globals/Footer"

const Layout = ({ children, site }) => {
    return(
        <>
            <div className="container-fluid p-0 g-0">
                <div className="">
                    <header className="">
                        <Nav site={site} />
                    </header>
                    <main className="">
                        {children}
                    </main>
                    <footer className="">
                        <Footer 
                            site={site}
                        />
                    </footer>
                </div>
            </div>
        </>
    )
}

export default Layout