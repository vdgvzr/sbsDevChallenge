import React from "react"

const Image = ({ src, width, justify, padding, size, alt }) => {
    return(
        <>
            <div className={`image-container justify-content-${justify}`}>
                <img className={`w-${width} image-container-image px-${padding}`} src={src} alt={alt} style={{ width: `${size}`, height: `${size}` }} />
            </div>
        </>
    )
}

export default Image