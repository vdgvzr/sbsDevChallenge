import React, { forwardRef } from "react"

const VerticalCta = forwardRef((props, ref) => (
    <a
        type={props.type}
        className="vertical-cta"
        role={props.type}
        href={props.url}
        aria-label={props.buttonText}
        ref={ref}
    >
        <span>{props.buttonText}</span>
    </a>
))

export default VerticalCta