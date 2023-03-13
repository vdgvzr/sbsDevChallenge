import React from "react"

const Heading = ({ heading, margin }) => {
    return(
        <>
            <h1 className={margin ? "h1-default" : "h1-default m-0"}>{heading}</h1>
        </>
    )
}

export default Heading