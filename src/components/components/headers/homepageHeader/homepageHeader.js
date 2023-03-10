import React from "react"

const HomepageHeader = ({ homepageHeader }) => {
    const headerContent = homepageHeader[0].headerContent
    const projectsPanel = homepageHeader[1].projectsPanel

    return(
        <>
            <div className="homepageHeader">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {headerContent.headerText}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageHeader