import React, { useRef, useEffect } from "react"
import Heading from '../ui/Heading'
import Button from "../ buttons/Button"
import Icon from '../ui/Icon'
import { parallaxY } from "../../../assets/js/lib/handleParallax"

const CtaPanel = ({ contentMain }) => {
    const ctaPanel = contentMain[3].ctaPanel
    const banner = useRef()
    const icons = useRef([])

    useEffect(() => {
        window.addEventListener("scroll", parallaxY(banner.current, icons.current));
    }, [])

    return(
        <>
            <div className="cta-panel" ref={banner}>
                <div className="d-none d-lg-block">
                    <Icon 
                        name="trapeze" 
                        stroke="#EC6608" 
                        fill="none" 
                        height="500px" 
                        width="500px" 
                        position="absolute"
                        top="40%"
                        left="15%"
                        zIndex="1"
                        value="5"
                        ref={ref=>icons.current.push(ref)}
                    />
                    <Icon 
                        name="trapeze" 
                        stroke="#EC6608" 
                        fill="none" 
                        height="500px" 
                        width="500px" 
                        position="absolute"
                        top="-8%"
                        right="-14%"
                        zIndex="1"
                        value="10"
                        ref={ref=>icons.current.push(ref)}
                    />
                </div>
                <div className="container-fluid p-0">
                    <div className="container cta-panel__inner" ref={banner}>
                        <Icon 
                            name="trapeze" 
                            stroke="#EC6608" 
                            fill="none" 
                            height="500px" 
                            width="500px" 
                            position="absolute"
                            top="-70%"
                            left="5%"
                            value="15"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="trapeze" 
                            stroke="#EC6608" 
                            fill="none" 
                            height="500px" 
                            width="500px" 
                            position="absolute"
                            top="8%"
                            right="-28%"
                            value="20"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="sbs" 
                            stroke="rgba(236,102,8,0.5)" 
                            fill="none" 
                            height="500px" 
                            width="500px" 
                            position="absolute"
                            top="-120%"
                            left="-10%"
                            value="25"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="sbs" 
                            stroke="rgba(236,102,8,0.5)" 
                            fill="none" 
                            height="500px" 
                            width="500px" 
                            position="absolute"
                            top="-52%"
                            right="-22%"
                            value="30"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="sbs" 
                            stroke="rgba(236,102,8,0.3)" 
                            fill="none" 
                            height="300px" 
                            width="300px" 
                            position="absolute"
                            top="-200%"
                            left="-78%"
                            rotate="180"
                            value="35"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="sbs" 
                            stroke="rgba(236,102,8,0.3)" 
                            fill="none" 
                            height="300px" 
                            width="300px" 
                            position="absolute"
                            top="-55%"
                            right="0%"
                            rotate="180"
                            value="40"
                            ref={ref=>icons.current.push(ref)}
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