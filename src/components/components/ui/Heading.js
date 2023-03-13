import React from "react"

const Heading = ({ heading, margin }) => {
    return(
        <>
            <h2 className={margin ? "h2-default" : "h2-default m-0"}>{heading}</h2>
        </>
    )
}

export default Heading