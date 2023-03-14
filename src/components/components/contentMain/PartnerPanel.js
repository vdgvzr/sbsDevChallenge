import React, { useEffect, useRef } from "react"
import Heading from "../ui/Heading"
import Image from "../ui/Image"
import Flickity from 'react-flickity-component'

const PartnerPanel = ({ contentMain }) => {
    const partnerPanel = contentMain[5].partnerPanel
    let flkty

    let partners = partnerPanel.logos

    let duplicatePartners = [...partnerPanel.logos];
    duplicatePartners.forEach(partner => {
        partners.push(partner)
    })

    const flickityOptions = {
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        autoPlay: 1500
    }

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
                <div className="container-fluid p-0">
                    <Flickity
                        flickityRef={c => flkty = c}
                        options={flickityOptions}
                        disableImagesLoaded={false}
                        reloadOnUpdate
                        static
                    >
                        {[...Array(partners.length)].map((logo, i) => {
                            return(
                                <div key={i} className="partner-panel__carousel-item">
                                    <Image src={partners[i].logo} width="100" justify="center" padding="3" />
                                </div>
                            )
                        })}
                    </Flickity>
                </div>
            </div>
        </>
    )
}

export default PartnerPanel

/* const partnerPanel = contentMain[5].partnerPanel
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
            <div className="partner-panel__carousel-container" ref={carouselSlider}>
                <div className="container-fluid partner-panel__carousel px-0" ref={list}>
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
                ) */