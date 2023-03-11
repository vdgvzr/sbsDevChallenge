import React from "react"

const Heading = ({ heading, margin }) => {
    return(
        <>
            <h1 className={margin ? "h1-small" : "h1-small m-0"}>{heading}</h1>
        </>
    )
}

export default Heading