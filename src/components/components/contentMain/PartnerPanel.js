import React from "react"
import Heading from "../ui/Heading"
import Image from "../ui/Image"

const PartnerPanel = ({ contentMain }) => {
    const partnerPanel = contentMain[5].partnerPanel

    return(
        <>
            <div className="partner-panel">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mb-5">
                            <Heading heading={partnerPanel.heading} />
                        </div>
                    </div>
                    <div className="container partner-panel__mobile-divider d-block d-lg-none my-3"></div>
                </div>
                <div className="container-fluid h-scrollable partner-panel__logo-container px-0">
                    {[...Array(partnerPanel.logos.length)].map((logo, i) => {
                        return(
                            <div key={i} className="col-5 col-12">
                                <Image src={partnerPanel.logos[i].logo} width="100" justify="center" padding="5" />
                            </div>
                        )
                    })}
                </div>
                <div className="container d-block d-lg-none mt-5">
                    <div className="container partner-panel__mobile-divider my-3"></div>
                </div>
            </div>
        </>
    )
}

export default PartnerPanel