import React, { useEffect, useRef } from "react"
import Heading from "../ui/Heading"
import Image from "../ui/Image"

const PartnerPanel = ({ contentMain }) => {
    const partnerPanel = contentMain[5].partnerPanel
    const carouselSlider = useRef(null)
    const list = useRef(null)
    const items = useRef([])

    useEffect(() => {
        let width = 0
        items.current.forEach(item => {
            let clone = item.cloneNode(true)
            list.current.append(clone)
            width += item.clientWidth
            list.current.style.width = `${width}`
        })
    
    }, [])

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
                <div className="partner-panel__carousel-container" ref={carouselSlider}> {/* slider */}
                    <div className="container-fluid partner-panel__carousel px-0" ref={list}> {/* slide track */}
                        {[...Array(partnerPanel.logos.length)].map((logo, i) => {
                            return(
                                <div key={i} className="partner-panel__carousel-item" ref={ref=>items.current.push(ref)}>
                                    <Image src={partnerPanel.logos[i].logo} width="100" justify="center" padding="3" />
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="container d-block d-lg-none mt-5">
                </div>
            </div>
        </>
    )
}

export default PartnerPanel