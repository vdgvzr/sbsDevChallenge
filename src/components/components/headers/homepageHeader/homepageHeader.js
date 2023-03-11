import React from "react"
import VerticalCta from "../../ buttons/ContactCta"

const HomepageHeader = ({ homepageHeader }) => {
    const headerContent = homepageHeader[0].headerContent
    const projectsPanel = homepageHeader[1].projectsPanel
    const contactCta = homepageHeader[2].contactCta

    return(
        <>
            <div className="homepage-header">
                <VerticalCta
                    type="button"
                    buttonText={contactCta.cta}
                    url={contactCta.url}
                />
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-12 p-0">
                            <div className="row">
                                <div className="col-lg-8 col-12">
                                    <h1 className="homepage-header__heading h1-large mb-5">{headerContent.headerText}</h1>
                                    <p className="homepage-header__sub-heading">{headerContent.subHeader}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="projects-panel">
                                        
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

export default HomepageHeader