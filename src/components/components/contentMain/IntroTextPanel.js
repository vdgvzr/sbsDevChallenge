import React, { useEffect, useRef } from "react"
import Heading from '../ui/Heading'
import Icon from '../ui/Icon'
import { parallaxY } from "../../../assets/js/lib/handleParallax"

const IntroTextPanel = ({ contentMain }) => {
    const introTextPanel = contentMain[0].introtextpanel
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
            <div className="intro-text-panel" ref={banner}>
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
                            value="50"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="sbs" 
                            stroke="none" 
                            fill="#041221" 
                            height="300px" 
                            width="300px" 
                            position="absolute"
                            top="32%"
                            right="43%"
                            value="60"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="sbs" 
                            stroke="none" 
                            fill="#003A59" 
                            height="400px" 
                            width="400px" 
                            position="absolute"
                            top="-60%"
                            right="46%"
                            value="70"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="sbs" 
                            stroke="#C2E9FF" 
                            fill="none" 
                            height="200px" 
                            width="200px" 
                            position="absolute"
                            top="15%"
                            right="80%"
                            value="80"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="sbs" 
                            stroke="#E3F5FF" 
                            fill="none" 
                            height="400px" 
                            width="400px" 
                            position="absolute"
                            top="5%"
                            right="38%"
                            value="90"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="trapeze" 
                            stroke="#fff" 
                            fill="none" 
                            height="400px" 
                            width="400px" 
                            position="absolute"
                            top="-25%"
                            right="51%"
                            value="100"
                            ref={ref=>icons.current.push(ref)}
                        />
                        <Icon 
                            name="trapeze" 
                            stroke="#fff" 
                            fill="none" 
                            height="600px" 
                            width="600px" 
                            position="absolute"
                            top="12%"
                            right="32%"
                            value="110"
                            ref={ref=>icons.current.push(ref)}
                        />
                    </div>
                </div>
                <div className="intro-text-panel__panel js-right" data-js-right="right-scrolled"></div>
                <div className="container h-100">
                    <div className="row align-items-center justify-content-end h-100">
                        <div className="col-lg-6 col-10 p-5 intro-text-panel__panel-text js-fade" data-js-fade="fade-scrolled">
                            <Heading heading={introTextPanel.introText} />
                            <p className="body-copy">{introTextPanel.subHeader}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IntroTextPanel