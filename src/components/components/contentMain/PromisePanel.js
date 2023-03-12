import React from "react"
import Heading from "../ui/Heading"
import Button from "../ buttons/Button"
import Link from "../ui/Link"
import Image from "../ui/Image"

const PromisePanel = ({ contentMain }) => {
    const promisePanel = contentMain[6].promisePanel
    const contactPanel = contentMain[7].contactPanel

    return(
        <>
            <div className="promise-panel">
                <div className="container-fluid p-0">
                    <div className="contact-panel">
                        <div className="mb-3">
                            <Heading heading={contactPanel.heading} />
                        </div>
                        <h3 className="contact-panel__text">{contactPanel.text}</h3>
                        <Link
                            linkText={contactPanel.linkCta[0].linkText}
                            url={contactPanel.linkCta[0].linkUrl}
                            theme="dark"
                            icon="chevron-right"
                            justify="end"
                        />
                    </div>
                    <div className="container">
                        <div className="row justify-content-end mb-4">
                            <div className="col-6">
                                <div className="mb-5">
                                    <Heading heading={promisePanel.heading} />
                                </div>
                                <p className="body-copy">{promisePanel.text}</p>
                            </div>
                        </div>
                        <div className="row mb-5 mt-5">
                            {[...Array(promisePanel.promises.length)].map((elem, i) => {
                                return(
                                    <div key={i} className="col-4 px-5 text-center">
                                        <Image src={promisePanel.promises[i].promiseLogo} width="50" justify="center" pading="3" />
                                        <h2 className="px-3">{promisePanel.promises[i].promiseHeading}</h2>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
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