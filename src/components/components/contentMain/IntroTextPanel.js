import React from "react"
import Heading from '../ui/Heading'

const IntroTextPanel = ({ contentMain }) => {
    const introTextPanel = contentMain[0].introtextpanel
    return(
        <>
            <div className="intro-text-panel">
                <div className="intro-text-panel__banner"></div>
                <div className="intro-text-panel__panel"></div>
                <div className="container h-100">
                    <div className="row align-items-center justify-content-end h-100">
                        <div className="col-6">
                            <Heading heading={introTextPanel.introText} />
                            <p>{introTextPanel.subHeader}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroTextPanel