import React from "react"
import Heading from '../ui/Heading'
import Button from "../ buttons/Button"

const CtaPanel = ({ contentMain }) => {
    const ctaPanel = contentMain[3].ctaPanel

    return(
        <>
            <div className="cta-panel">
                <div className="container-fluid p-0">
                    <div className="container cta-panel__inner">
                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <Heading heading={ctaPanel.heading} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <Button
                                    type="button"
                                    buttonText={ctaPanel.button[0].buttonText}
                                    url={ctaPanel.button[0].buttonUrl.linkUrl}
                                    external={ctaPanel.button[0].buttonUrl.external}
                                />  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CtaPanel