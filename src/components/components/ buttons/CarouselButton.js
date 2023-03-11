import React from "react"
import Icon from "../ui/Icon"

const CarouselButton = ({ icon }) => {
    return(
        <>
            <button className="carousel-button">
                <Icon name={icon} color="#003A59" height="20" width="20" />
            </button>
        </>
    )
}

export default CarouselButton