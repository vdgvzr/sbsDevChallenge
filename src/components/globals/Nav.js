import React, { useEffect, useRef } from "react"
import Image from "../components/ui/Image"
import VerticalCta from "../components/ buttons/VerticalCta"
import Icon from "../components/ui/Icon"
import { addStyle, removeStyle } from "../../assets/js/lib/handleClasses"

const Nav = ({ site }) => {
    const navbar = useRef(null)
    const cta = useRef(null)
    const search = useRef(null)
    
    useEffect(() => {
        window.addEventListener('scroll', colorChange)
        const classes = {
            'navbar': 'navbar__scrolled',
            'cta': 'vertical-cta__scrolled',
            'search': 'navbar__search-scrolled',
        } 

        function colorChange() {
            if (this.scrollY > (navbar.current.clientHeight / 2)) {
                addStyle(navbar.current, classes.navbar)
                addStyle(cta.current, classes.cta)
                addStyle(search.current, classes.search)
            } else {
                removeStyle(navbar.current, classes.navbar)
                removeStyle(cta.current, classes.cta)
                removeStyle(search.current, classes.search)
            }
        }
    })

    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-dark z-index-master" ref={navbar}>
                <div className="navbar__inner">
                    <a className="navbar-brand" href="/">
                        <Image src={site?.logo} width="50" justify="center"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            {site?.pages.map((page, i) => {
                                const path = window.location.href
                                var classList = ''
                                
                                if (path === page.url) {
                                    classList = 'nav-link active'
                                } else {
                                    classList = 'nav-link'
                                }
                                
                                return (
                                    <li className="nav-item" key={i}>
                                        <a className={classList} href={page.url} aria-label={page.title}>
                                            {page.title}
                                        </a>    
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="navbar__search" ref={search}>
                        <Icon name="search" fill="#fff" height="30" width="30" />
                    </div>
                    <div className="d-none d-lg-block">
                        <VerticalCta
                            type="button"
                            buttonText="Contact Us"
                            url="/contact-us"
                            ref={cta}
                        />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav