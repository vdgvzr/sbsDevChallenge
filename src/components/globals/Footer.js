import React from "react"
import Icon from "../components/ui/Icon"
import Image from "../components/ui/Image"
import Heading from "../components/ui/Heading"

const Footer = ({ site }) => {
    return(
        <>
            <div className="footer">
                <div className="container-fluid footer__border-bottom">
                    <div className="row p-0 footer__row">
                        <div className="col-lg-5 p-5 col-12 footer__border-right">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="row p-0">
                                            <div className="col-12 p-0">
                                                <Heading heading="Get more from SBS Cladding." />
                                                <p className="body-copy mb-5">Join our mailing list to get all the latest industry news.</p>
                                                <form className="footer__email-form">
                                                    <div className="d-flex mb-4">
                                                        <input className="default-input w-100" id="email" name="email" type="email" required placeholder="Enter your email address" autoComplete="off"/>
                                                        <button type="submit" className="footer__email-form-submit">
                                                            <Icon name="chevron-right" fill="#fff" height="20" width="20" />
                                                        </button>
                                                    </div> 
                                                    <div className="d-flex">
                                                        <input type="checkbox" id="consent" name="consent" value="consent" />
                                                        <label id="consent-label" htmlFor="consent">I have read and agree to the privacy policy and consent to being sent email updates.</label>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-12">
                            <div className="row footer__border-bottom footer__border-top">
                                <div className="col-12">
                                    <div className="row pt-5 footer__row">
                                        <div className="col-6">
                                            <ul>
                                                <li>
                                                    <a href="/products"><h3>Products</h3></a>
                                                </li>
                                                <li>
                                                    <a href="/services"><h3>Services</h3></a>
                                                </li>
                                                <li>
                                                    <a href="/projects"><h3>Projects</h3></a>
                                                </li>
                                                <li>
                                                    <a href="/about-us"><h3>About us</h3></a>
                                                </li>
                                                <li>
                                                    <a href="/brochures"><h3>Brochures</h3></a>
                                                </li>
                                                <li>
                                                    <a href="/contact-us"><h3>Contact us</h3></a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-6">
                                            <ul>
                                                <li>
                                                    <a href="/careers"><p className="body-copy">Careers</p></a>
                                                </li>
                                                <li>
                                                    <a href="/terms-and-conditions"><p className="body-copy">Terms & conditions</p></a>
                                                </li>
                                                <li>
                                                    <a href="/privacy-policy"><p className="body-copy">Privacy policy</p></a>
                                                </li>
                                                <li>
                                                    <a href="/cookie-policy"><p className="body-copy">Cookie policy</p></a>
                                                </li>
                                                <li>
                                                    <a href="/modern-slavery"><p className="body-copy">Modern slavery</p></a>
                                                </li>
                                                <li>
                                                    <a href="/tax-strategy"><p className="body-copy">Tax strategy</p></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row py-lg-0 py-4">
                                <div className="col-lg-6 col-12">
                                    <a href="/">
                                        <Image src={site?.logo} width="75" justify="center" padding="3"/>
                                    </a>
                                </div>
                                <div className="col-lg-6 col-12 d-flex justify-content-center align-items-center">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="www.facebook.com" className="mx-lg-4 mx-2">
                                            <Icon name="facebook" fill="#fff" height="30" width="30" />
                                        </a>
                                        <a href="www.twitter.com" className="mx-lg-4 mx-2">
                                            <Icon name="twitter" fill="#fff" height="30" width="30" />
                                        </a>
                                        <a href="www.linkedin.com" className="mx-lg-4 mx-2">
                                            <Icon name="linkedin" fill="#fff" height="30" width="30" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid px-5">
                    <div className="row p-0">
                        <div className="col-lg-6 col-12 p-0">
                            <div className="container">
                                <div className="row p-0">
                                    <div className="col-12 p-0">
                                        <p className="body-copy m-0 py-3">{site?.footerText}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer