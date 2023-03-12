import React from "react"

const Button = ({ type, buttonText, url, external }) => {
    return(
        <>
            <a
                type={type}
                className="button-default"
                role={type}
                href={url}
                aria-label={buttonText}
                target={external ?? "_blank"}
            >
                <span>{buttonText}</span>
            </a>
        </>
    )
}

export default Button