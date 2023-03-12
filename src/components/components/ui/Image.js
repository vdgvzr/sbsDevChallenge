import React from "react"

const Image = ({ src, width, justify, padding }) => {
    return(
        <>
            <div className={`image-container justify-content-${justify}`}>
                <img className={`w-${width} image-container-image px-${padding}`} src={src} alt={src} />
            </div>
        </>
    )
}

export default Image