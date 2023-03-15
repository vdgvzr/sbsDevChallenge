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
        async function onLoad() {
            window.addEventListener("scroll", parallaxY(banner.current, icons.current));
        }

        setTimeout(() => {
            onLoad()
        }, [1000])
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
                        top="5%"
                        left="80%"
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
                        top="35%"
                        left="14%"
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
                            bottom="20%"
                            left="3%"
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
                            top="0%"
                            left="90%"
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
                            bottom="110%"
                            right="67%"
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
                            bottom="52%"
                            left="22%"
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
                            bottom="110%"
                            right="78%"
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
                            bottom="150%"
                            right="0%"
                            rotate="180"
                            value="40"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <div className="row mb-5 z-index-2">
                            <div className="col-12 text-center js-fade" data-js-fade>
                                <Heading heading={ctaPanel.heading} />
                            </div>
                        </div>
                        <div className="row z-index-2">
                            <div className="col-12 text-center js-fade" data-js-fade>
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