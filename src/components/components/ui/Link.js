import React from "react"
import Icon from "./Icon"

const Link = ({ linkText, url, theme, icon, justify }) => {
    return(
        <>
            <a className={`default-link default-link__${theme} justify-content-${justify}`} href={url}><p>{linkText}</p><Icon name={icon} color={theme === 'light' ? "#fff" : '#000'} height="50" width="20" /></a>
        </>
    )
}

export default Link