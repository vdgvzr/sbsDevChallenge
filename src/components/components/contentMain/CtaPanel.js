import React from "react"
import Heading from '../ui/Heading'
import Button from "../ buttons/Button"
import Icon from '../ui/Icon'

const CtaPanel = ({ contentMain }) => {
    const ctaPanel = contentMain[3].ctaPanel

    return(
        <>
            <div className="cta-panel">
                <Icon 
                    name="trapeze" 
                    stroke="#EC6608" 
                    fill="none" 
                    height="500px" 
                    width="500px" 
                    position="absolute"
                    top="46%"
                    left="15%"
                    zIndex="1"
                />
                <Icon 
                    name="trapeze" 
                    stroke="#EC6608" 
                    fill="none" 
                    height="500px" 
                    width="500px" 
                    position="absolute"
                    top="11%"
                    right="-14%"
                    zIndex="1"
                />
                <div className="container-fluid p-0">
                    <div className="container cta-panel__inner">
                        <Icon 
                            name="trapeze" 
                            stroke="#EC6608" 
                            fill="none" 
                            height="500px" 
                            width="500px" 
                            position="absolute"
                            top="-12%"
                            left="5%"
                        />
                        <Icon 
                            name="trapeze" 
                            stroke="#EC6608" 
                            fill="none" 
                            height="500px" 
                            width="500px" 
                            position="absolute"
                            top="55%"
                            right="-28%"
                        />
                        <Icon 
                            name="sbs" 
                            stroke="rgba(236,102,8,0.5)" 
                            fill="none" 
                            height="500px" 
                            width="500px" 
                            position="absolute"
                            top="-70%"
                            left="-10%"
                        />
                        <Icon 
                            name="sbs" 
                            stroke="rgba(236,102,8,0.5)" 
                            fill="none" 
                            height="500px" 
                            width="500px" 
                            position="absolute"
                            top="12%"
                            right="-22%"
                        />
                        <Icon 
                            name="sbs" 
                            stroke="rgba(236,102,8,0.3)" 
                            fill="none" 
                            height="300px" 
                            width="300px" 
                            position="absolute"
                            top="21%"
                            left="-15%"
                            rotate="180"
                        />
                        <Icon 
                            name="sbs" 
                            stroke="rgba(236,102,8,0.3)" 
                            fill="none" 
                            height="300px" 
                            width="300px" 
                            position="absolute"
                            top="58%"
                            right="8%"
                            rotate="180"
                        />
                        <div className="row mb-5 z-index-2">
                            <div className="col-12 text-center">
                                <Heading heading={ctaPanel.heading} />
                            </div>
                        </div>
                        <div className="row z-index-2">
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