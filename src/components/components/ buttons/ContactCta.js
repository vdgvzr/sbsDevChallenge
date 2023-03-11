import React from "react"

const VerticalCta = ({ type, buttonText, url }) => {
    return(
        <>
            <a
                type={type}
                className="vertical-cta"
                role={type}
                href={url}
                aria-label={buttonText}
            >
                <span>{buttonText}</span>
            </a>
        </>
    )
}

export default VerticalCta