import React from "react"
import Heading from "../ui/Heading"

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
                </div>
                <div className="container-fluid partner-panel__logo-container px-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex">
                                    {[...Array(partnerPanel.logos.length)].map((logo, i) => {
                                        return(
                                            <div key={i} className="partner-panel__image-container">
                                                <img className="w-100 partner-panel__image-container-image px-3" src={partnerPanel.logos[i].logo} alt={partnerPanel.logos[i].logo} />
                                            </div>
                                        )
                                    })} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PartnerPanel