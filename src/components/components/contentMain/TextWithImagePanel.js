import React from "react"
import Heading from "../ui/Heading"
import LinkUrl from "../ui/Link"

const TextWithImagePanel = ({ contentMain }) => {
    const textWithImagePanel = contentMain[4].textWithImagePanel

    return(
        <>
            <div className="text-with-image-panel">
                <div className="container">
                    <div className="row  text-with-image-panel__row">
                        <div className="col-lg-6 col-12 text-with-image-panel__image d-flex align-items-center">
                            <img src={textWithImagePanel.image} className="img-fluid" data-js-fade="fade-scrolled" alt="Services image"/>
                        </div>
                        <div className="col-lg-6 col-12 text-with-image-panel__text pt-5 mb-lg-0 mb-5">
                            <div className="mb-5 js-fade" data-js-fade="fade-scrolled">
                                <Heading heading={textWithImagePanel.heading} />
                            </div>
                            <div className="mb-5">
                                {[...Array(textWithImagePanel.text.length)].map((elem, i) => {
                                    return(
                                        <p key={i} className="body-copy js-fade" data-js-fade="fade-scrolled">
                                            {textWithImagePanel.text[i].redactor}
                                        </p>
                                    )
                                })}
                            </div>
                            <div className="js-fade" data-js-fade="fade-scrolled">
                                <LinkUrl
                                    linkText={textWithImagePanel.linkCta[0].linkText}
                                    url={textWithImagePanel.linkCta[0].linkUrl}
                                    theme="dark"
                                    icon="chevron-right"
                                    justify="start"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TextWithImagePanel