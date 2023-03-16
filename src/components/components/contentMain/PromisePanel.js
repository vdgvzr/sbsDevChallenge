import React from "react"
import Heading from "../ui/Heading"
import Button from "../ buttons/Button"
import LinkUrl from "../ui/Link"
import Image from "../ui/Image"

const PromisePanel = ({ contentMain }) => {
    const promisePanel = contentMain[6].promisePanel
    const contactPanel = contentMain[7].contactPanel

    return(
        <>
            <div className="promise-panel">
                <div className="container-fluid p-0">
                    <div className="contact-panel js-left" data-js-left="left-scrolled">
                        <div className="mb-3">
                            <Heading heading={contactPanel.heading} />
                        </div>
                        <h3 className="contact-panel__text">{contactPanel.text}</h3>
                        <LinkUrl
                            linkText={contactPanel.linkCta[0].linkText}
                            url={contactPanel.linkCta[0].linkUrl}
                            theme="dark"
                            icon="chevron-right"
                            justify="end"
                        />
                    </div>
                    <div className="container">
                        <div className="row justify-content-end mb-4">
                            <div className="col-lg-6 col-12">
                                <div className="mb-5 js-fade" data-js-fade="fade-scrolled">
                                    <Heading heading={promisePanel.heading} />
                                </div>
                                <p className="body-copy js-fade" data-js-fade="fade-scrolled">{promisePanel.text}</p>
                            </div>
                        </div>
                        <div className="row mb-5 mt-5">
                            {[...Array(promisePanel.promises.length)].map((elem, i) => {
                                return(
                                    <div key={i} className="col-lg-4 col-12 px-lg-5 text-center js-fade" data-js-fade="fade-scrolled">
                                        <Image src={promisePanel.promises[i].promiseLogo} size="75px" justify="center" alt={`promise logo ${i}`} />
                                        <h2 className="px-3">{promisePanel.promises[i].promiseHeading}</h2>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center js-fade" data-js-fade="fade-scrolled">
                                <Button
                                    type="button"
                                    buttonText={promisePanel.ctaButton[0].buttonText}
                                    url={promisePanel.ctaButton[0].buttonUrl.linkUrl}
                                    external={promisePanel.ctaButton[0].buttonUrl.external}
                                />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PromisePanel