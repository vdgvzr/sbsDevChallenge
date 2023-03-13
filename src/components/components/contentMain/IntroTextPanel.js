import React from "react"
import Heading from '../ui/Heading'
import Icon from '../ui/Icon'

const IntroTextPanel = ({ contentMain }) => {
    const introTextPanel = contentMain[0].introtextpanel
    return(
        <>
            <div className="intro-text-panel">
                <div className="intro-text-panel__banner">
                    <div className="intro-text-panel__banner-inner">
                        <Icon 
                            name="sbs" 
                            stroke="none" 
                            fill="#041221" 
                            height="800px" 
                            width="800px" 
                            position="absolute"
                            top="-120%"
                            right="62%"
                        />
                        <Icon 
                            name="sbs" 
                            stroke="none" 
                            fill="#041221" 
                            height="300px" 
                            width="300px" 
                            position="absolute"
                            top="56%"
                            right="38%"
                        />
                        <Icon 
                            name="sbs" 
                            stroke="none" 
                            fill="#003A59" 
                            height="400px" 
                            width="400px" 
                            position="absolute"
                            top="-48%"
                            right="57%"
                            rotate="180"
                        />
                        <Icon 
                            name="sbs" 
                            stroke="#C2E9FF" 
                            fill="none" 
                            height="200px" 
                            width="200px" 
                            position="absolute"
                            top="40%"
                            right="82%"
                            rotate="180"
                        />
                        <Icon 
                            name="sbs" 
                            stroke="#E3F5FF" 
                            fill="none" 
                            height="400px" 
                            width="400px" 
                            position="absolute"
                            top="35%"
                            right="35%"
                        />
                        <Icon 
                            name="trapeze" 
                            stroke="#fff" 
                            fill="none" 
                            height="400px" 
                            width="400px" 
                            position="absolute"
                            top="-8%"
                            right="51%"
                        />
                        <Icon 
                            name="trapeze" 
                            stroke="#fff" 
                            fill="none" 
                            height="600px" 
                            width="600px" 
                            position="absolute"
                            top="35%"
                            right="30%"
                        />
                    </div>
                </div>
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