import React from "react"
import Heading from "../ui/Heading"
import LinkUrl from "../ui/Link"

const TextWithImagePanel = ({ contentMain }) => {
    const textWithImagePanel = contentMain[4].textWithImagePanel

    return(
        <>
            <div className="text-with-image-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-6 text-with-image-panel__image">
                            <div className="h-100" style={{
                                backgroundImage: `url(${textWithImagePanel.image})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                maxWidth: '75%'
                            }}></div>
                        </div>
                        <div className="col-6 text-with-image-panel__text pt-5">
                            <div className="mb-5">
                                <Heading heading={textWithImagePanel.heading} />
                            </div>
                            <div className="mb-5">
                                {[...Array(textWithImagePanel.text.length)].map((elem, i) => {
                                    return(
                                        <p key={i} className="body-copy">
                                            {textWithImagePanel.text[i].redactor}
                                        </p>
                                    )
                                })}
                            </div>
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
        </>
    )
}

export default TextWithImagePanel