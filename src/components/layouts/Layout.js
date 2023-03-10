import React from "react"

const Layout = ({ children, site }) => {
    return(
        <>
            <div className="container-fluid p-0 g-0">
                <div className="">
                    <header className=""></header>
                    <main className="">
                        {children}
                    </main>
                    {/* <footer className="">
                        {site?.footerText}
                    </footer> */}
                </div>
            </div>
        </>
    )
}

export default Layout