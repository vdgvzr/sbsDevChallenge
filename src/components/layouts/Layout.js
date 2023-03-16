import React from "react"
import Nav from "../globals/Nav"
import Footer from "../globals/Footer"
import Error from "../globals/Error"

const Layout = ({ children, site, error }) => {
    return(
        <>
            <div className="container-fluid p-0 g-0">
                <div className="">
                    <header className="">
                        <Nav site={site} />
                    </header>
                        {error !== null
                        ?
                        <main className="">
                            <Error error={error}/>
                        </main>
                        :
                        <main className="">
                            {children}
                        </main>
                        }
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